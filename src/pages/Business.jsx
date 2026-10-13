import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../components/Utils';
import { ArrowIcon, CheckIcon, ClockIcon, MailIcon, PhoneIcon, UploadIcon } from '../components/Icons';
import { CLIENTS, STORE } from '../data/store';

const USE_CASES = [
  { emoji: '🏆', title: 'Corporate awards', text: 'Unique trophies for recognition events, sales clubs and milestones — no more generic glass plaques.' },
  { emoji: '🦊', title: 'Brand mascots', text: 'Bring your mascot or character into the real world as figurines, desk toys or large display pieces.' },
  { emoji: '🎁', title: 'Event & client gifts', text: 'Memorable branded keepsakes for conferences, onboarding kits and VIP clients.' },
  { emoji: '🏛️', title: 'Logo sculptures', text: 'Your logo as a 3D statement piece for reception desks, lobbies and trade-show booths.' },
  { emoji: '🏙️', title: 'Architectural models', text: 'Precise scale models for real estate, urban planning and architecture presentations.' },
  { emoji: '🧩', title: 'Schools & STEM education', text: 'Custom tactile educational toys, geometric puzzles, and learning tools for classrooms, museums and daycares.' },
];

const STEPS = [
  { title: 'Brief', text: 'Share your idea, logo or references. We reply within 24 hours.' },
  { title: '3D concept', text: 'Our designers model your piece and send renders for feedback.' },
  { title: 'Prototype', text: 'We print a physical sample so you can see and hold it.' },
  { title: 'Production', text: 'Approved pieces are printed, finished and quality-checked.' },
  { title: 'Delivery', text: 'Packed, labelled and delivered to one address or many.' },
];

const TIERS = [
  {
    name: 'Starter',
    range: '1 – 9 pieces',
    price: 'From $149',
    unit: '/ piece',
    perks: ['Fully custom 3D design', 'Digital render approval', 'Choice of 20+ colours', '2–3 week turnaround'],
  },
  {
    name: 'Team',
    range: '10 – 99 pieces',
    price: 'From $59',
    unit: '/ piece',
    featured: true,
    perks: ['Everything in Starter', 'Free physical prototype', 'Engraved name plates', 'Dedicated project manager', 'Invoice / PO payment'],
  },
  {
    name: 'Enterprise',
    range: '100+ pieces',
    price: 'Custom',
    unit: 'volume pricing',
    perks: ['Everything in Team', 'Priority production slots', 'Multi-address fulfilment', 'Branded packaging', 'Framework agreements'],
  },
];

const FAQ = [
  { q: 'What do you need from us to start?', a: 'Just a short description and any references — a logo, sketch, photo or existing 3D file. We handle the rest, including all 3D modelling.' },
  { q: 'How long does a custom order take?', a: 'Typically 2–3 weeks from brief to delivery, including design and prototype. Rush production in under 7 days is available for many projects.' },
  { q: 'Can you match our brand colours?', a: 'Yes. We stock 40+ filament colours and can paint-finish pieces to match Pantone references precisely.' },
  { q: 'Is there a minimum order?', a: 'No minimum — we make single bespoke pieces too. Volume pricing kicks in from 10 units.' },
  { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide with tracked couriers and can split deliveries across multiple offices.' },
];

export default function Business() {
  usePageMeta(
    'Custom 3D Printed Sculptures for Organizations — Layerform Studio',
    'Custom corporate awards, brand mascots, logo sculptures and event gifts. Free design concept, physical prototype and volume pricing from 10 units.',
  );

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">For companies, teams &amp; institutions</span>
            <h1 className="h-display" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)' }}>
              Custom sculptures that <span className="gradient-text">carry your story.</span>
            </h1>
            <p className="lead">
              Awards, mascots, logo sculptures and gifts — designed with you, prototyped in days, produced at any
              scale. One studio, from idea to doorstep.
            </p>
            <div className="hero-ctas">
              <a href="#quote" className="btn btn-primary btn-lg" id="biz-hero-quote">
                Get a free quote <ArrowIcon className="arrow" size={18} />
              </a>
              <a href="#process" className="btn btn-lg" id="biz-hero-process">
                How it works
              </a>
            </div>
            <ul className="perks" style={{ marginTop: '2rem' }}>
              <li><CheckIcon size={16} /> Free 3D concept with every quote</li>
              <li><CheckIcon size={16} /> Reply within 24 hours</li>
            </ul>
          </div>
          <div className="hero-visual" style={{ aspectRatio: '4 / 3.2' }}>
            <div className="hero-frame">
              <img src="/images/custom_awards.jpg" alt="Custom black and gold 3D printed corporate award trophies" width="1200" height="896" />
            </div>
            <div className="floating-chip chip-a">
              <span className="chip-icon">
                <ClockIcon size={20} />
              </span>
              <span>
                <strong>Prototype in 5 days</strong>
                <small>See it before you commit</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Clients ---------- */}
      <section className="container" aria-label="Clients">
        <p className="trusted-label">Chosen by 80+ organizations</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} aria-hidden={i >= CLIENTS.length}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Use cases ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">What we make</span>
              <h2 className="h-section">Built for every occasion</h2>
            </div>
            <p className="lead">If it can be imagined, it can be printed. Here&apos;s what organizations order most.</p>
          </div>
          <div className="usecases">
            {USE_CASES.map((u) => (
              <article className="usecase reveal" key={u.title}>
                <span className="emoji" aria-hidden="true">{u.emoji}</span>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section" id="process" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Our process</span>
              <h2 className="h-section">From idea to object in 5 steps</h2>
            </div>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li className="step reveal" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Workshop showcase ---------- */}
      <section className="container reveal">
        <div className="showcase">
          <div className="showcase-media">
            <img src="/images/custom_mascot.jpg" alt="Layerform workshop printing a custom mascot figure" loading="lazy" />
          </div>
          <div className="showcase-copy">
            <span className="eyebrow">In-house production</span>
            <h2 className="h-section">No outsourcing. Full control.</h2>
            <p className="lead">
              Design, printing, finishing and packing all happen under one roof — so quality and deadlines stay in our
              hands, and yours.
            </p>
            <ul className="check-list">
              <li><CheckIcon size={18} /> Industrial printer farm for runs of 1,000+</li>
              <li><CheckIcon size={18} /> FDM and high-detail resin technologies</li>
              <li><CheckIcon size={18} /> Every piece inspected before shipping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-head reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <span className="eyebrow">Volume pricing</span>
              <h2 className="h-section">The more you make, the less you pay</h2>
              <p className="lead" style={{ marginInline: 'auto', marginTop: '1rem' }}>
                Indicative prices for a desk-size piece. Every project receives a precise, no-obligation quote.
              </p>
            </div>
          </div>
          <div className="tiers">
            {TIERS.map((t) => (
              <div className={`tier reveal${t.featured ? ' featured' : ''}`} key={t.name}>
                {t.featured && <span className="tier-flag">Most popular</span>}
                <div>
                  <h3>{t.name}</h3>
                  <p className="qty-range">{t.range}</p>
                </div>
                <p className="tier-price">
                  {t.price} <small>{t.unit}</small>
                </p>
                <ul className="check-list">
                  {t.perks.map((p) => (
                    <li key={p}><CheckIcon size={18} /> {p}</li>
                  ))}
                </ul>
                <a href="#quote" className={`btn btn-block${t.featured ? ' btn-primary' : ''}`} id={`tier-${t.name.toLowerCase()}-btn`}>
                  Get a quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote form ---------- */}
      <section className="section" id="quote" style={{ paddingTop: 0 }}>
        <div className="container quote">
          <aside className="quote-aside">
            <div>
              <span className="eyebrow">Request a quote</span>
              <h2 className="h-section">Let&apos;s design something remarkable</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Tell us about your project. You&apos;ll receive a free 3D concept and detailed quote within 48 hours.
              </p>
            </div>
            <a href={`mailto:${STORE.email}`} className="contact-card">
              <span className="chip-icon"><MailIcon /></span>
              <span>
                <small>Email us</small>
                {STORE.email}
              </span>
            </a>
            <a href={`tel:${STORE.phone.replace(/[^+\d]/g, '')}`} className="contact-card">
              <span className="chip-icon"><PhoneIcon /></span>
              <span>
                <small>Call the studio</small>
                {STORE.phone}
              </span>
            </a>
          </aside>
          <QuoteForm />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="h-section">Questions, answered</h2>
            </div>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q} name="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="muted" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            Shopping for yourself? <Link to="/shop" style={{ color: 'var(--violet)' }}>Browse ready-made sculptures →</Link>
          </p>
        </div>
      </section>
    </>
  );
}

function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to your backend, CRM, or a form service (Formspree, Netlify Forms, EmailJS…)
    console.info('Quote request', data);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-card">
        <div className="success-panel" role="status">
          <div className="success-icon"><CheckIcon size={34} /></div>
          <h3 style={{ fontSize: '1.6rem' }}>Request received!</h3>
          <p className="muted" style={{ maxWidth: '42ch' }}>
            Thanks for reaching out. A member of our design team will contact you within 24 hours with next steps.
          </p>
          <button type="button" className="btn" onClick={() => setSent(false)} id="quote-new-btn">
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} id="quote-form">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="q-name">Full name <span className="req">*</span></label>
          <input id="q-name" name="name" className="input" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="q-company">Organization <span className="req">*</span></label>
          <input id="q-company" name="company" className="input" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="q-email">Work email <span className="req">*</span></label>
          <input id="q-email" name="email" type="email" className="input" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="q-phone">Phone</label>
          <input id="q-phone" name="phone" type="tel" className="input" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="q-type">Project type <span className="req">*</span></label>
          <select id="q-type" name="type" className="select" required defaultValue="">
            <option value="" disabled>Choose one…</option>
            {USE_CASES.map((u) => (
              <option key={u.title}>{u.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="q-qty">Quantity <span className="req">*</span></label>
          <select id="q-qty" name="quantity" className="select" required defaultValue="">
            <option value="" disabled>How many?</option>
            <option>1 – 9</option>
            <option>10 – 49</option>
            <option>50 – 99</option>
            <option>100 – 499</option>
            <option>500+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="q-budget">Budget (optional)</label>
          <select id="q-budget" name="budget" className="select" defaultValue="">
            <option value="">Not sure yet</option>
            <option>Under $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="q-date">Needed by</label>
          <input id="q-date" name="deadline" type="date" className="input" />
        </div>
        <div className="field full">
          <label htmlFor="q-details">Tell us about your project <span className="req">*</span></label>
          <textarea
            id="q-details"
            name="details"
            className="textarea"
            placeholder="E.g. 40 awards for our annual sales summit, shaped like our logo, with engraved names…"
            required
            minLength={20}
          />
        </div>
        <div className="field full">
          <span style={{ fontSize: '0.86rem', fontWeight: 500 }}>Reference files</span>
          <div className="dropzone">
            <UploadIcon size={24} />
            <span>
              <strong>{fileName || 'Upload logo, sketch or 3D file'}</strong>
            </span>
            <small>PNG, JPG, PDF, SVG, STL · up to 20 MB</small>
            <input
              type="file"
              name="file"
              aria-label="Upload reference file"
              accept=".png,.jpg,.jpeg,.pdf,.svg,.stl,.obj,.3mf"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
              id="q-file"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: '1.5rem' }} id="quote-submit">
        Send request <ArrowIcon className="arrow" size={18} />
      </button>
      <p className="secure-note" style={{ marginTop: '0.9rem' }}>
        No commitment. We never share your details.
      </p>
    </form>
  );
}
