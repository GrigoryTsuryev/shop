import { Link } from 'react-router-dom';
import { usePageMeta } from '../components/Utils';

export default function NotFound() {
  usePageMeta('Page not found — Layerform Studio');
  return (
    <section className="section container" style={{ textAlign: 'center' }}>
      <span className="eyebrow">404</span>
      <h1 className="h-section">This piece hasn&apos;t been printed yet.</h1>
      <p className="lead" style={{ margin: '1rem auto 2rem' }}>
        The page you&apos;re looking for doesn&apos;t exist — but plenty of beautiful things do.
      </p>
      <Link to="/shop" className="btn btn-primary btn-lg">Browse the shop</Link>
    </section>
  );
}
