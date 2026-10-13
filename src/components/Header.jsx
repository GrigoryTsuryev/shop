import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BagIcon, CloseIcon, MenuIcon } from './Icons';
import { STORE, formatPrice } from '../data/store';

export default function Header() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on navigation
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="site-header">
      <p className="announce">
        <strong>Free shipping</strong> on orders over {formatPrice(STORE.freeShippingThreshold)} · Bulk pricing for
        organizations from 10 units
      </p>
      <nav className="container nav" aria-label="Main">
        <Link to="/" className="logo" aria-label={`${STORE.name} ${STORE.suffix} home`}>
          <img src="/favicon.svg" alt="" width="34" height="34" />
          <span>
            {STORE.name} <em>{STORE.suffix}</em>
          </span>
        </Link>

        <ul id="nav-links" className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <NavLink to="/shop" id="nav-shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/business" id="nav-business">For Organizations</NavLink>
          </li>
          <li>
            <Link to="/#how-it-works" id="nav-how">How it works</Link>
          </li>
          <li>
            <Link to="/business#quote" id="nav-contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/business#quote" className="btn btn-sm nav-cta" id="nav-quote-btn">
            Get a quote
          </Link>
          <button
            type="button"
            className="icon-btn cart-btn"
            onClick={openCart}
            id="cart-open-btn"
            aria-label={`Open cart, ${count} item${count === 1 ? '' : 's'}`}
          >
            <BagIcon />
            {count > 0 && (
              <span className="cart-count" key={count}>
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
