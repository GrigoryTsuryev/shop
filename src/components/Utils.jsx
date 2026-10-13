import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckIcon } from './Icons';

/** Scroll to top on route change, or to #hash target if present. */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait a frame so the new route has rendered
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}

/** Sets document title + meta description per page (SEO). */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}

export function Toast() {
  const { toast, openCart } = useCart();
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div className="toast" key={toast.id}>
          <img src={toast.image} alt="" width="40" height="40" />
          <span>
            <CheckIcon size={15} style={{ color: 'var(--success)', verticalAlign: '-2px' }} />{' '}
            <strong>{toast.name}</strong> added
          </span>
          <button type="button" className="btn btn-sm btn-primary" onClick={openCart} id="toast-view-cart">
            View cart
          </button>
        </div>
      )}
    </div>
  );
}
