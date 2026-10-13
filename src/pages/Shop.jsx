import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { usePageMeta } from '../components/Utils';
import { SearchIcon } from '../components/Icons';
import { CATEGORIES, PRODUCTS } from '../data/store';

const SORTS = {
  featured: { label: 'Featured', fn: () => 0 },
  'price-asc': { label: 'Price: low to high', fn: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price: high to low', fn: (a, b) => b.price - a.price },
  rating: { label: 'Top rated', fn: (a, b) => b.rating - a.rating },
};

export default function Shop() {
  usePageMeta(
    'Shop 3D Printed Sculptures — Layerform Studio',
    'Browse ready-made 3D printed sculptures: abstract art, animals, classical busts, vases and collectibles. Printed to order and hand-finished.',
  );

  // Keep filters in the URL so they are shareable / linkable from marketing campaigns
  const [params, setParams] = useSearchParams();
  const category = params.get('category') ?? 'All';
  const sort = params.get('sort') ?? 'featured';
  const priceFilter = params.get('price') ?? 'all';
  const query = params.get('q') ?? '';

  const update = (key, value, fallback) => {
    const next = new URLSearchParams(params);
    if (!value || value === fallback) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => category === 'All' || p.category === category)
      .filter((p) => {
        if (priceFilter === 'under-25') return p.price <= 25;
        if (priceFilter === 'under-50') return p.price <= 50;
        if (priceFilter === 'over-50') return p.price > 50;
        return true;
      })
      .filter((p) => !q || `${p.name} ${p.tagline} ${p.category}`.toLowerCase().includes(q))
      .sort(SORTS[sort]?.fn ?? SORTS.featured.fn);
  }, [category, sort, priceFilter, query]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">Shop</span>
          </nav>
          <h1 className="h-section">
            The <span className="gradient-text">ready-made</span> collection
          </h1>
          <p className="lead">
            Every sculpture is printed to order in your choice of size and finish, then hand-finished in our studio.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '4rem' }}>
        <div className="toolbar">
          <div className="chips" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={category === c}
                onClick={() => update('category', c, 'All')}
                id={`filter-${c.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="toolbar-right">
            <div className="search-wrap">
              <SearchIcon size={18} />
              <label htmlFor="shop-search" className="sr-only">Search sculptures</label>
              <input
                id="shop-search"
                className="input"
                type="search"
                placeholder="Search sculptures…"
                value={query}
                onChange={(e) => update('q', e.target.value, '')}
              />
            </div>
            <label htmlFor="shop-price" className="sr-only">Price range</label>
            <select id="shop-price" className="select" value={priceFilter} onChange={(e) => update('price', e.target.value, 'all')}>
              <option value="all">All prices</option>
              <option value="under-25">Under $25 (Pocket &amp; Budget)</option>
              <option value="under-50">Under $50</option>
              <option value="over-50">$50 and above</option>
            </select>
            <label htmlFor="shop-sort" className="sr-only">Sort by</label>
            <select id="shop-sort" className="select" value={sort} onChange={(e) => update('sort', e.target.value, 'featured')}>
              {Object.entries(SORTS).map(([k, { label }]) => (
                <option key={k} value={k}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="muted" style={{ marginBottom: '1.25rem', fontSize: '0.9rem' }} aria-live="polite">
          {results.length} sculpture{results.length === 1 ? '' : 's'}
        </p>

        {results.length > 0 ? (
          <div className="product-grid">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>No sculptures match that search</h2>
            <p>Can&apos;t find what you&apos;re looking for? We can design it for you.</p>
            <Link to="/business#quote" className="btn btn-primary" style={{ marginTop: '1.25rem' }}>
              Request a custom piece
            </Link>
          </div>
        )}

        <div className="custom-hint reveal" style={{ marginTop: '3rem' }}>
          <span>
            <strong>Need 10 or more?</strong> <span className="muted">Get volume pricing, engraving and custom colours.</span>
          </span>
          <Link to="/business#pricing" className="btn btn-sm" id="shop-bulk-btn">
            See bulk pricing
          </Link>
        </div>
      </section>
    </>
  );
}
