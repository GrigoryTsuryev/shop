import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { usePageMeta } from '../components/Utils';
import { ArrowIcon, BuildingIcon, CheckIcon, HandIcon, LayersIcon, LeafIcon, SparkIcon, TruckIcon } from '../components/Icons';
import { CLIENTS, PRODUCTS, TESTIMONIALS } from '../data/store';

const FEATURES = [
  { icon: LayersIcon, title: 'Ultra-fine layers', text: 'Printed at up to 0.08 mm for surfaces so smooth they read like cast stone or silk.' },
  { icon: HandIcon, title: 'Hand-finished', text: 'Every piece is cleaned, inspected and finished by hand before it leaves the studio.' },
  { icon: LeafIcon, title: 'Plant-based materials', text: 'We print primarily in biodegradable PLA made from corn starch and sugarcane.' },
  { icon: TruckIcon, title: 'Ships in 3–5 days', text: 'Made to order, carefully packed in recycled foam-free packaging, tracked to your door.' },
];

export default function Home() {
  usePageMeta(
    'Layerform Studio — 3D Printed Sculptures for Homes & Organizations',
    'Hand-finished 3D printed sculptures. Shop ready-made art pieces, or commission custom awards, mascots and branded sculptures for your organization.',
  );
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">3D printed sculpture studio</span>
            <h1 className="h-display">
              Art, printed <span className="gradient-text">layer by layer.</span>
            </h1>
            <p className="lead">
              Ready-made sculptures for your home — and fully custom pieces for your company, team or event. Designed
              in-house, printed to order, finished by hand.
            </p>
            <div className="hero-ctas">
              <Link to="/shop" className="btn btn-primary btn-lg" id="hero-shop-btn">
                Shop sculptures <ArrowIcon className="arrow" size={18} />
              </Link>
              <Link to="/business" className="btn btn-lg" id="hero-business-btn">
                <BuildingIcon size={18} /> Custom for organizations
              </Link>
            </div>
            <div className="hero-trust">
              <div className="avatars" aria-hidden="true">
                <span style={{ background: 'var(--violet)' }}>NL</span>
                <span style={{ background: 'var(--amber)' }}>DC</span>
                <span style={{ background: 'var(--teal)' }}>MF</span>
                <span style={{ background: '#f0abfc' }}>+</span>
              </div>
              <div>
                <span className="stars" aria-hidden="true">★★★★★</span>
                <br />
                Loved by 2,400+ collectors &amp; 80+ organizations
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <img
                src="/images/hero_sculpture.jpg"
                alt="Helix Bloom — a twisting violet and ivory 3D printed sculpture on a slate base"
                width="1200"
                height="896"
                fetchPriority="high"
              />
            </div>
            <div className="floating-chip chip-a">
              <span className="chip-icon">
                <SparkIcon size={20} />
              </span>
              <span>
                <strong>Helix Bloom</strong>
                <small>Bestseller · 38h print</small>
              </span>
            </div>
            <div className="floating-chip chip-b">
              <span className="chip-icon">
                <CheckIcon size={20} />
              </span>
              <span>
                <strong>0.08 mm</strong>
                <small>layer precision</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="container reveal" aria-label="Studio in numbers">
        <div className="stats">
          <div className="stat">
            <strong className="gradient-text">12k+</strong>
            <span>Sculptures printed</span>
          </div>
          <div className="stat">
            <strong className="gradient-text">80+</strong>
            <span>Organizations served</span>
          </div>
          <div className="stat">
            <strong className="gradient-text">4.9★</strong>
            <span>Average rating</span>
          </div>
          <div className="stat">
            <strong className="gradient-text">3–5</strong>
            <span>Days to ship</span>
          </div>
        </div>
      </section>

      {/* ---------- Two paths ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Two ways to work with us</span>
              <h2 className="h-section">For your shelf, or for your whole team.</h2>
            </div>
          </div>
          <div className="paths">
            <Link to="/shop" className="path-card reveal" id="path-retail">
              <img src="/images/product_voronoi.jpg" alt="" loading="lazy" />
              <span className="path-tag">For individuals</span>
              <h3>Ready-made collection</h3>
              <p>Curated sculptures ready to ship — pick a size and finish and we print it for you within days.</p>
              <ul className="path-list">
                <li>Educational toys</li>
                <li>Abstract</li>
                <li>Animals</li>
                <li>Home décor</li>
              </ul>
              <span className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Shop the collection <ArrowIcon className="arrow" size={18} />
              </span>
            </Link>
            <Link to="/business" className="path-card reveal" id="path-business">
              <img src="/images/custom_awards.jpg" alt="" loading="lazy" />
              <span className="path-tag">For organizations</span>
              <h3>Custom sculptures</h3>
              <p>Awards, mascots, school STEM kits and event gifts — designed with you from sketch to finished piece.</p>
              <ul className="path-list">
                <li>Corporate awards</li>
                <li>School &amp; STEM models</li>
                <li>Brand mascots</li>
                <li>Event gifts</li>
                <li>Scale models</li>
              </ul>
              <span className="btn" style={{ alignSelf: 'flex-start' }}>
                Explore custom work <ArrowIcon className="arrow" size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Featured products ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Featured pieces</span>
              <h2 className="h-section">Collector favourites</h2>
            </div>
            <Link to="/shop" className="btn" id="featured-view-all">
              View all <ArrowIcon className="arrow" size={18} />
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Trusted by ---------- */}
      <section className="container" aria-label="Clients">
        <p className="trusted-label">Trusted by teams at</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} aria-hidden={i >= CLIENTS.length}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works / features ---------- */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The Layerform difference</span>
              <h2 className="h-section">Crafted by machines. Finished by people.</h2>
            </div>
            <p className="lead">
              We combine generative design, precision printing and old-school craftsmanship to make pieces that feel
              impossible.
            </p>
          </div>
          <div className="features">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div className="feature reveal" key={title}>
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Business showcase ---------- */}
      <section className="container reveal">
        <div className="showcase">
          <div className="showcase-copy">
            <span className="eyebrow">For organizations</span>
            <h2 className="h-section">Your brand, sculpted.</h2>
            <p className="lead">
              From 5 bespoke awards to 5,000 branded collectibles — we handle design, prototyping and production in
              one studio.
            </p>
            <ul className="check-list">
              <li><CheckIcon size={18} /> Free 3D design concept with every quote</li>
              <li><CheckIcon size={18} /> Physical prototype before full production</li>
              <li><CheckIcon size={18} /> Volume pricing from 10 units, invoicing available</li>
            </ul>
            <div className="hero-ctas">
              <Link to="/business#quote" className="btn btn-primary" id="showcase-quote-btn">
                Request a free quote <ArrowIcon className="arrow" size={18} />
              </Link>
              <Link to="/business" className="btn">
                See use cases
              </Link>
            </div>
          </div>
          <div className="showcase-media">
            <img src="/images/custom_mascot.jpg" alt="3D printer producing a custom fox mascot in the Layerform workshop" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Kind words</span>
              <h2 className="h-section">From living rooms to boardrooms</h2>
            </div>
          </div>
          <div className="testimonials">
            {TESTIMONIALS.map((t) => (
              <figure className="testimonial reveal" key={t.name} style={{ margin: 0 }}>
                <span className="tag-pill">{t.tag}</span>
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <blockquote>“{t.quote}”</blockquote>
                <footer>
                  <span className="avatar" aria-hidden="true">
                    {t.name.split(' ').map((w) => w[0]).join('')}
                  </span>
                  <span>
                    <cite>{t.name}</cite>
                    <small>{t.role}</small>
                  </span>
                </footer>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="container reveal">
        <div className="cta-band">
          <span className="eyebrow">Let&apos;s make something</span>
          <h2 className="h-section">
            Have an idea? <span className="gradient-text">We&apos;ll print it.</span>
          </h2>
          <p className="lead">Tell us about your project and get a free design concept and quote within 48 hours.</p>
          <div className="hero-ctas">
            <Link to="/business#quote" className="btn btn-primary btn-lg" id="cta-quote-btn">
              Start a custom project <ArrowIcon className="arrow" size={18} />
            </Link>
            <Link to="/shop" className="btn btn-lg">
              Browse ready-made
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
