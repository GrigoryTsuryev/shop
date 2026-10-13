import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { STORE, formatPrice } from '../data/store';
import { closeTopLayer } from '../lib/dialog';
import { BagIcon, CheckIcon, CloseIcon, ShieldIcon } from './Icons';

export default function CartDrawer() {
  const cart = useCart();
  const { isOpen, closeCart, items, subtotal, shipping, total, updateQty, removeItem, clear } = cart;
  const ref = useRef(null);
  const [step, setStep] = useState('cart'); // 'cart' | 'checkout' | 'done'
  const [orderId, setOrderId] = useState('');

  // Sync React state -> native <dialog>
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      closeTopLayer(dialog).then(() => setStep((s) => (s === 'done' ? 'cart' : s)));
    }
  }, [isOpen]);

  // Route Esc through our animated close
  useEffect(() => {
    const dialog = ref.current;
    const onCancel = (e) => {
      e.preventDefault();
      closeCart();
    };
    dialog.addEventListener('cancel', onCancel);
    return () => dialog.removeEventListener('cancel', onCancel);
  }, [closeCart]);

  const remaining = Math.max(0, STORE.freeShippingThreshold - subtotal);
  const progress = Math.min(100, (subtotal / STORE.freeShippingThreshold) * 100);

  const placeOrder = (e) => {
    e.preventDefault();
    // TODO: connect to a payment provider (Stripe, PayPal, Shopify Buy SDK, etc.)
    setOrderId(`LF-${Math.floor(100000 + Math.random() * 900000)}`);
    clear();
    setStep('done');
  };

  return (
    <dialog
      ref={ref}
      className="drawer"
      aria-labelledby="cart-title"
      onClick={(e) => e.target === e.currentTarget && closeCart()}
    >
      <div className="drawer-inner">
        <div className="drawer-head">
          <h2 id="cart-title">
            {step === 'checkout' ? 'Checkout' : step === 'done' ? 'Order placed' : 'Your cart'}
          </h2>
          <button type="button" className="icon-btn" onClick={closeCart} aria-label="Close cart" id="cart-close-btn">
            <CloseIcon />
          </button>
        </div>

        {step === 'done' && (
          <div className="drawer-body">
            <div className="success-panel">
              <div className="success-icon">
                <CheckIcon size={34} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Thank you!</h3>
              <p className="muted">
                Order <strong>{orderId}</strong> is confirmed. Your sculpture goes into the print queue today and
                ships within 3–5 business days.
              </p>
              <button type="button" className="btn" onClick={closeCart} id="cart-done-btn">
                Continue browsing
              </button>
            </div>
          </div>
        )}

        {step !== 'done' && items.length === 0 && (
          <div className="drawer-body">
            <div className="cart-empty">
              <div className="big-icon">
                <BagIcon size={30} />
              </div>
              <h3>Your cart is empty</h3>
              <p>Discover sculptures that turn a shelf into a gallery.</p>
              <Link to="/shop" className="btn btn-primary" onClick={closeCart} id="cart-shop-btn">
                Browse the shop
              </Link>
            </div>
          </div>
        )}

        {step === 'cart' && items.length > 0 && (
          <>
            <div className="drawer-body">
              <div className="ship-progress" aria-live="polite">
                {remaining > 0 ? (
                  <>
                    You&apos;re <strong>{formatPrice(remaining)}</strong> away from free shipping
                  </>
                ) : (
                  <strong>🎉 You&apos;ve unlocked free shipping!</strong>
                )}
                <div className="bar">
                  <span style={{ width: `${progress}%` }} />
                </div>
              </div>
              <ul className="cart-items">
                {items.map((item) => (
                  <li key={item.key} className="cart-item">
                    <img src={item.image} alt="" width="76" height="76" />
                    <div>
                      <h3>
                        <Link to={`/product/${item.slug}`} onClick={closeCart}>
                          {item.name}
                        </Link>
                      </h3>
                      <p className="variant">
                        {item.size} · {item.finish}
                      </p>
                      <div className="qty small" role="group" aria-label={`Quantity for ${item.name}`}>
                        <button type="button" onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Decrease">
                          −
                        </button>
                        <output>{item.qty}</output>
                        <button type="button" onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Increase">
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="line-price">{formatPrice(item.price * item.qty)}</p>
                      <button type="button" className="link-btn" onClick={() => removeItem(item.key)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="drawer-foot">
              <Totals subtotal={subtotal} shipping={shipping} total={total} />
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => setStep('checkout')} id="checkout-btn">
                Checkout · {formatPrice(total)}
              </button>
              <p className="secure-note">Ordering 10+ for your team? <Link to="/business#quote" onClick={closeCart} style={{ textDecoration: 'underline' }}>Get volume pricing</Link></p>
            </div>
          </>
        )}

        {step === 'checkout' && items.length > 0 && (
          <form className="drawer-body checkout-form" onSubmit={placeOrder} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="checkout-form">
              <div className="field">
                <label htmlFor="co-name">Full name</label>
                <input id="co-name" className="input" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="co-email">Email</label>
                <input id="co-email" type="email" className="input" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="co-address">Shipping address</label>
                <input id="co-address" className="input" autoComplete="street-address" required />
              </div>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="co-city">City</label>
                  <input id="co-city" className="input" autoComplete="address-level2" required />
                </div>
                <div className="field">
                  <label htmlFor="co-zip">Postal code</label>
                  <input id="co-zip" className="input" autoComplete="postal-code" required />
                </div>
              </div>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'grid', gap: '1rem' }}>
              <Totals subtotal={subtotal} shipping={shipping} total={total} />
              <button type="submit" className="btn btn-primary btn-lg btn-block" id="place-order-btn">
                Place order · {formatPrice(total)}
              </button>
              <button type="button" className="btn btn-block" onClick={() => setStep('cart')}>
                Back to cart
              </button>
              <p className="secure-note">
                <ShieldIcon size={14} style={{ verticalAlign: '-2px' }} /> Demo checkout — connect your payment provider
                to go live.
              </p>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}

function Totals({ subtotal, shipping, total }) {
  return (
    <div className="totals">
      <div>
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <div>
        <span>Shipping</span>
        <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
      </div>
      <div className="grand">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  );
}
