import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { usePageMeta } from '../components/Utils';
import { BagIcon, BuildingIcon, CheckIcon } from '../components/Icons';
import { useCart } from '../context/CartContext';
import { PRODUCTS, STORE, formatPrice, getProduct } from '../data/store';
import NotFound from './NotFound';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  // Re-mount the detail view per product so option state resets on navigation
  return product ? <ProductDetail key={product.id} product={product} /> : <NotFound />;
}

function ProductDetail({ product }) {
  usePageMeta(`${product.name} — 3D Printed Sculpture | Layerform Studio`, `${product.tagline} ${product.description}`);
  const { addItem, openCart } = useCart();
  const [sizeIdx, setSizeIdx] = useState(0);
  const [finish, setFinish] = useState(product.finishes[0]);
  const [qty, setQty] = useState(1);

  const size = product.sizes[sizeIdx];
  const unitPrice = Math.round(product.price * size.multiplier);
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAdd = () => addItem(product, { size, finish, qty });

  return (
    <>
      <section className="container page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link> <span aria-hidden="true">/</span> <Link to="/shop">Shop</Link>{' '}
          <span aria-hidden="true">/</span> <span aria-current="page">{product.name}</span>
        </nav>

        <div className="pdp">
          <div className="pdp-media">
            {product.badge && <span className={`badge ${product.badge.type}`}>{product.badge.text}</span>}
            <img src={product.image} alt={`${product.name} 3D printed sculpture`} width="1024" height="1024" />
          </div>

          <div className="pdp-info">
            <div>
              <span className="product-cat">{product.category}</span>
              <h1 style={{ marginBlock: '0.5rem 0.75rem' }}>{product.name}</h1>
              <p className="rating">
                <span className="stars" aria-hidden="true">★★★★★</span> {product.rating.toFixed(1)} · {product.reviews} reviews
              </p>
            </div>

            <p className="pdp-price" aria-live="polite">{formatPrice(unitPrice)}</p>
            <p className="lead" style={{ fontSize: '1.05rem' }}>
              <strong style={{ color: 'var(--text)' }}>{product.tagline}</strong> {product.description}
            </p>

            <fieldset className="option-group">
              <legend>
                Size <span>— {size.label}</span>
              </legend>
              <div className="options">
                {product.sizes.map((s, i) => (
                  <label className="option" key={s.label}>
                    <input type="radio" name="size" checked={i === sizeIdx} onChange={() => setSizeIdx(i)} />
                    <span>{s.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="option-group">
              <legend>
                Finish <span>— {finish}</span>
              </legend>
              <div className="options">
                {product.finishes.map((f) => (
                  <label className="option" key={f}>
                    <input type="radio" name="finish" checked={f === finish} onChange={() => setFinish(f)} />
                    <span>{f}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="buy-row">
              <div className="qty" role="group" aria-label="Quantity">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
                <output aria-live="polite">{qty}</output>
                <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button type="button" className="btn btn-primary btn-lg" onClick={handleAdd} id="pdp-add-to-cart">
                <BagIcon size={18} /> Add to cart · {formatPrice(unitPrice * qty)}
              </button>
            </div>
            <button
              type="button"
              className="btn btn-block"
              onClick={() => {
                handleAdd();
                openCart();
              }}
              id="pdp-buy-now"
            >
              Buy now
            </button>

            <ul className="perks">
              <li><CheckIcon size={16} /> Printed to order · ships in 3–5 business days</li>
              <li><CheckIcon size={16} /> Free shipping over {formatPrice(STORE.freeShippingThreshold)}</li>
              <li><CheckIcon size={16} /> 30-day happiness guarantee</li>
            </ul>

            <dl className="spec-list">
              <div>
                <dt>Material</dt>
                <dd>{product.material}</dd>
              </div>
              <div>
                <dt>Print time</dt>
                <dd>{product.printTime}</dd>
              </div>
              <div>
                <dt>Finish</dt>
                <dd>Hand-sanded &amp; sealed</dd>
              </div>
              <div>
                <dt>Made in</dt>
                <dd>Our studio, Israel</dd>
              </div>
            </dl>

            <div className="custom-hint">
              <span>
                <BuildingIcon size={16} style={{ verticalAlign: '-3px' }} /> Want this with your logo or in bulk for
                your team?
              </span>
              <Link to="/business#quote" className="btn btn-sm" id="pdp-custom-btn">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">You may also like</span>
              <h2 className="h-section">More from the studio</h2>
            </div>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
