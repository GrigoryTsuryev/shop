import { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORE } from '../data/store';
import { CheckIcon } from './Icons';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo">
            <img src="/favicon.svg" alt="" width="34" height="34" />
            <span>
              {STORE.name} <em>{STORE.suffix}</em>
            </span>
          </Link>
          <p className="muted" style={{ marginTop: '1rem', maxWidth: '38ch' }}>
            Sculptures designed in-house and printed layer by layer. Join our list for new drops and
            collector-only editions.
          </p>
          {subscribed ? (
            <p className="newsletter" role="status" style={{ alignItems: 'center', color: 'var(--success)' }}>
              <CheckIcon /> You&apos;re on the list — welcome!
            </p>
          ) : (
            <form
              className="newsletter"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                className="input"
                type="email"
                placeholder="you@email.com"
                autoComplete="email"
                required
              />
              <button className="btn btn-primary" type="submit" id="newsletter-submit">
                Join
              </button>
            </form>
          )}
        </div>

        <div>
          <h3>Shop</h3>
          <ul>
            <li><Link to="/shop">All sculptures</Link></li>
            <li><Link to="/shop?category=Educational+Toys">Educational toys</Link></li>
            <li><Link to="/shop?category=Abstract">Abstract</Link></li>
            <li><Link to="/shop?category=Animals">Animals</Link></li>
          </ul>
        </div>

        <div>
          <h3>Organizations</h3>
          <ul>
            <li><Link to="/business">Custom sculptures</Link></li>
            <li><Link to="/business#pricing">Volume pricing</Link></li>
            <li><Link to="/business#process">Our process</Link></li>
            <li><Link to="/business#quote">Request a quote</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={`mailto:${STORE.email}`}>{STORE.email}</a></li>
            <li><a href={`tel:${STORE.phone.replace(/[^+\d]/g, '')}`}>{STORE.phone}</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {STORE.name} {STORE.suffix}. All rights reserved.</span>
        <span>Designed &amp; printed with care · Biodegradable PLA</span>
      </div>
    </footer>
  );
}
