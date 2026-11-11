
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  Sparkles,
  Check,
  MapPin,
  ShieldCheck,
  PanelsTopLeft,
  Droplets,
  Waves,
  CarFront
} from 'lucide-react';
import './styles.css';

// GitHub Pages base path
const BASE_URL = import.meta.env.BASE_URL;

// Use this for local images in the public folder
const asset = (path: string) =>
  `${BASE_URL}${path.replace(/^\/+/, '')}`;

// Use this for internal website navigation
const pageUrl = (path: string) =>
  path === '/'
    ? BASE_URL
    : `${BASE_URL}${path.replace(/^\/+/, '')}`;

const PHONE = '8007947113'; // Existing contact number — retained
const PHONE_SECOND = '7378751692'; // Additional WhatsApp contact
const PHONE_THIRD = '9503105992'; // Additional WhatsApp contact — Vilas Chavan

const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  'Hello Vaishnavi Glass Cleaning Service, I would like to enquire about your cleaning services.'
)}`;

const WHATSAPP_SECOND = `https://wa.me/91${PHONE_SECOND}?text=${encodeURIComponent(
  'Hello Vaishnavi Glass Cleaning Service, I would like to enquire about your cleaning services.'
)}`;

const WHATSAPP_THIRD = `https://wa.me/91${PHONE_THIRD}?text=${encodeURIComponent(
  'Hello Vaishnavi Glass Cleaning Service, I would like to enquire about your cleaning services.'
)}`;

const pages = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Our Services', '/services'],
  ['Gallery', '/gallery'],
  ['Contact Us', '/contact']
];

const services = [
  {
    icon: PanelsTopLeft,
    name: 'Windows Cleaning',
    desc: 'Clear, streak-conscious cleaning for windows, glass doors and partitions.',
    img: asset('/about-premium.jpg')
  },
  {
    icon: Droplets,
    name: 'Bathroom Cleaning',
    desc: 'A detailed refresh for bathroom tiles, fixtures, sinks and shower areas.',
    img: asset('/washing-machine-before-after.jpg')
  },
  {
    icon: Waves,
    name: 'Washing Machine Cleaning',
    desc: 'Cleaning support for the drum, detergent drawer and accessible machine surfaces.',
    img: asset('/washing-machine-before.jpg')
  },
  {
    icon: CarFront,
    name: 'Car Cleaning',
    desc: 'Interior and exterior cleaning to help your car look fresh and cared for.',
    img: asset('/car-cleaning-generated.jpg')
  }
];

const gallery = [
  ['Windows cleaning', asset('/about-premium.jpg')],
  ['Bathroom cleaning', asset('/washing-machine-before-after.jpg')],
  ['Washing machine cleaning', asset('/washing-machine-before.jpg')],
  ['Car cleaning', asset('/car-cleaning-generated.jpg')]
];

const beforeAfter = [
  {
    name: 'Windows',
    before: asset('/about-premium.jpg'),
    after:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Bathroom',
    before:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=85',
    after: asset('/about-premium.jpg')
  },
  {
    name: 'Washing machine',
    before: asset('/washing-machine-before.jpg'),
    after: asset('/washing-machine-after.jpg')
  },
  {
    name: 'Car',
    before: asset('/car-before.jpg'),
    after: asset('/car-after.jpg')
  }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [service, setService] = useState('Windows Cleaning');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [contactNumber, setContactNumber] = useState(PHONE_SECOND);

  // Handle both normal paths and GitHub Pages 404.html redirects.
  const normalizedBase = BASE_URL.replace(/\/+$/, '');

  let routePath = window.location.pathname;

  if (normalizedBase && routePath.startsWith(normalizedBase)) {
    routePath = routePath.slice(normalizedBase.length) || '/';
  }

  // The custom GitHub Pages 404.html redirects routes as /?/<route>.
  if (window.location.search.startsWith('?/')) {
    const redirectedRoute = window.location.search
      .slice(2)
      .split('&')[0];

    routePath = `/${redirectedRoute}`;
  }

  const path = decodeURI(routePath).replace(/\/+$/, '') || '/';

  const page =
    path === '/about'
      ? 'about'
      : path === '/services'
        ? 'services'
        : path === '/gallery'
          ? 'gallery'
          : path === '/contact'
            ? 'contact'
            : 'home';

  const title = {
    home: 'A cleaner space. A calmer mind.',
    about: 'Care that makes every space shine.',
    services: 'The right clean for every space.',
    gallery: 'A closer look at cleaner spaces.',
    contact: 'Let’s make your space shine.'
  }[page];

  const subtitle = {
    home: 'Professional window, bathroom, washing machine and car cleaning services.',
    about:
      'Vaishnavi Glass Cleaning Service brings care and attention to windows, bathrooms, washing machines and cars.',
    services:
      'Explore our four cleaning services and tell us what your space needs.',
    gallery: 'A visual glimpse of our four cleaning services.',
    contact:
      'Tell us what you need. We’ll connect with you on WhatsApp.'
  }[page];

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg = `Hello Vaishnavi Glass Cleaning Service!%0AName: ${encodeURIComponent(
      name
    )}%0AArea: ${encodeURIComponent(
      area
    )}%0AService: ${encodeURIComponent(
      service
    )}%0APreferred date: ${encodeURIComponent(
      date || 'Flexible'
    )}%0ADetails: ${encodeURIComponent(
      details || 'Please contact me with details.'
    )}`;

    window.open(
      `https://wa.me/91${contactNumber}?text=${msg}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const heroImg = {
    home: asset('/uniform-mockup.jpeg'),
    about: asset('/car-cleaning-generated.jpg'),
    services:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=90',
    gallery: asset('/about-premium.jpg'),
    contact: asset('/about-premium.jpg')
  }[page];

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Sparkles size={14} /> Clean spaces. Healthy life.
          </span>

          <div className="topbar-contacts">
            <a className="topbar-phone" href={`tel:+91${PHONE}`}>
              <Phone size={16} /> +91 {PHONE}
            </a>

            <a
              className="topbar-whatsapp"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href={pageUrl('/')}>
            <img src={asset('/brand-logo.jpeg')} alt="Vaishnavi logo" />
            <span>
              <b>Vaishnavi</b>
              <small>Glass Cleaning Service</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
          >
            {menu ? <X /> : <Menu />}
          </button>

          <nav className={menu ? 'nav-links open' : 'nav-links'}>
            {pages.map(([label, url]) => (
              <a
                className={
                  (page === 'home' && url === '/') ||
                  url === `/${page}`
                    ? 'active'
                    : ''
                }
                href={pageUrl(url)}
                onClick={() => setMenu(false)}
                key={url}
              >
                {label}
              </a>
            ))}

            <a
              className="nav-cta"
              href={pageUrl('/contact')}
              onClick={() => setMenu(false)}
            >
              Book Now <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-image">
              <img src={heroImg} alt={title} />

              <div className="hero-image-caption">
                <span>
                  <Sparkles size={18} />
                </span>
                <b>Vaishnavi Glass Cleaning Service</b>
                <small>Clean spaces. Healthy life.</small>
              </div>
            </div>

            <div className="page-intro">
              <div className="eyebrow">
                <i /> VAISHNAVI CLEANING SERVICES
              </div>

              <h1>{title}</h1>
              <p>{subtitle}</p>

              <div className="hero-actions">
                <a className="btn btn-lime" href={pageUrl('/contact')}>
                  Book a service <ArrowRight size={17} />
                </a>

                <a
                  className="btn btn-outline"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        {page === 'home' && (
          <>
            <section className="section-pad">
              <div className="container">
                <div className="section-heading">
                  <div>
                    <div className="eyebrow eyebrow-dark">OUR SERVICES</div>
                    <h2>
                      One team. <em>Many ways to refresh.</em>
                    </h2>
                  </div>

                  <a className="text-link" href={pageUrl('/services')}>
                    View all services <ArrowRight size={16} />
                  </a>
                </div>

                <ServiceGrid compact />
              </div>
            </section>

            <section className="section-pad before-after-section">
              <div className="container">
                <div className="section-heading">
                  <div>
                    <div className="eyebrow eyebrow-dark">
                      VISUAL SERVICE EXAMPLES
                    </div>
                    <h2>
                      Before & <em>after.</em>
                    </h2>
                  </div>

                  <p>
                    Illustrative stock-photo examples to show the type of
                    cleaning transformation customers can request. These are
                    not claimed customer-job results.
                  </p>
                </div>

                <BeforeAfterGrid />
              </div>
            </section>

            <section className="why-section section-pad">
              <div className="container split">
                <img
                  className="split-img"
                  src={asset('/about-premium.jpg')}
                  alt="Clean bright interior"
                />

                <div>
                  <div className="eyebrow eyebrow-dark">WHY VAISHNAVI</div>
                  <h2>
                    Professional care.
                    <br />
                    <em>Beautiful results.</em>
                  </h2>

                  <p className="muted">
                    We believe clean windows, bathrooms, washing machines and
                    cars make everyday life more comfortable. Our focus is on
                    clear communication, careful work and attention to detail.
                  </p>

                  <a className="btn btn-lime" href={pageUrl('/about')}>
                    About our service <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {page === 'about' && (
          <section className="section-pad">
            <div className="container split">
              <img
                className="split-img"
                src={asset('/car-cleaning-generated.jpg')}
                alt="Vaishnavi car cleaning professional washing a vehicle"
              />

              <div>
                <div className="eyebrow eyebrow-dark">WHO WE ARE</div>
                <h2>
                  Clean spaces.
                  <br />
                  <em>Healthy life.</em>
                </h2>

                <p className="muted">
                  Vaishnavi Glass Cleaning Service helps customers keep
                  windows, bathrooms, washing machines and cars fresh with
                  thoughtful cleaning.
                </p>

                <p className="muted">
                  Our team takes a detail-focused approach to each of our four
                  services. We aim to make the enquiry and booking process
                  simple and dependable.
                </p>

                <div className="mini-points">
                  <span>
                    <Check /> Careful attention to detail
                  </span>
                  <span>
                    <Check /> Friendly booking support
                  </span>
                  <span>
                    <Check /> Windows, bathroom, machine and car care
                  </span>
                </div>

                <a className="btn btn-lime" href={pageUrl('/contact')}>
                  Talk to our team <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </section>
        )}

        {page === 'services' && (
          <section className="section-pad">
            <div className="container">
              <div className="section-heading">
                <div>
                  <div className="eyebrow eyebrow-dark">WHAT WE CLEAN</div>
                  <h2>
                    Choose your <em>service.</em>
                  </h2>
                </div>

                <p>
                  Tap enquire to send your service choice directly to WhatsApp.
                </p>
              </div>

              <ServiceGrid />
            </div>
          </section>
        )}

        {page === 'gallery' && (
          <section className="section-pad gallery-section">
            <div className="container">
              <div className="section-heading">
                <div>
                  <div className="eyebrow eyebrow-dark">
                    OUR WORK & IDENTITY
                  </div>
                  <h2>
                    Fresh spaces, <em>carefully done.</em>
                  </h2>
                </div>

                <p>
                  Images of cleaning, interiors and our Vaishnavi team identity.
                </p>
              </div>

              <div className="before-after-heading">
                <div className="eyebrow eyebrow-dark">BEFORE & AFTER</div>
                <h2>
                  See the <em>difference.</em>
                </h2>
                <p className="muted">
                  Illustrative examples only — not photographs of a specific
                  completed customer job.
                </p>
              </div>

              <BeforeAfterGrid />

              <div className="section-heading gallery-heading">
                <div>
                  <div className="eyebrow eyebrow-dark">SERVICE GALLERY</div>
                  <h2>
                    Our <em>services.</em>
                  </h2>
                </div>
              </div>

              <div className="gallery-grid">
                {gallery.map(([label, img], i) => (
                  <article className="gallery-card" key={label}>
                    <img src={img} alt={label} />
                    <b>
                      <small>0{i + 1}</small>
                      {label}
                    </b>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {page === 'contact' && (
          <section className="section-pad contact-section">
            <div className="container contact-layout">
              <div>
                <div className="eyebrow eyebrow-dark">GET IN TOUCH</div>
                <h2>
                  Quick enquiry.
                  <br />
                  <em>Easy booking.</em>
                </h2>

                <p className="muted">
                  Share a few details and continue the conversation on
                  WhatsApp.
                </p>

                <div className="contact-line">
                  <Phone />
                  <span>
                    <small>CALL US</small>
                    <a href={`tel:+91${PHONE}`}>+91 {PHONE}</a>
                    <a href={`tel:+91${PHONE_SECOND}`}>
                      +91 {PHONE_SECOND}
                    </a>
                    <a href={`tel:+91${PHONE_THIRD}`}>
                      +91 {PHONE_THIRD} (Vilas Chavan)
                    </a>
                  </span>
                </div>

                <div className="contact-line">
                  <MessageCircle />
                  <span>
                    <small>WHATSAPP — EXISTING NUMBER</small>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on +91 {PHONE}
                    </a>

                    <small className="contact-sub-label">
                      WHATSAPP — NEW NUMBER
                    </small>
                    <a
                      href={WHATSAPP_SECOND}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on +91 {PHONE_SECOND}
                    </a>

                    <small className="contact-sub-label">
                      WHATSAPP — VILAS CHAVAN
                    </small>
                    <a
                      href={WHATSAPP_THIRD}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on +91 {PHONE_THIRD}
                    </a>
                  </span>
                </div>

                <div className="contact-line">
                  <MapPin />
                  <span>
                    <small>LOCATION</small>
                    <b>
                      Paithan Road, Kanchawad,
                      <br />
                      Chh. Sambhajinagar
                    </b>
                  </span>
                </div>
              </div>

              <form className="booking-form" onSubmit={submit}>
                <div className="form-title">
                  <span className="form-spark">
                    <MessageCircle />
                  </span>

                  <div>
                    <h3>Book a cleaning service</h3>
                    <p>Your details will open in WhatsApp.</p>
                  </div>
                </div>

                <label>
                  Your name
                  <input
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </label>

                <label>
                  Cleaning service
                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                  >
                    {services.map(s => (
                      <option key={s.name}>{s.name}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Send WhatsApp enquiry to
                  <select
                    value={contactNumber}
                    onChange={e => setContactNumber(e.target.value)}
                  >
                    <option value={PHONE_SECOND}>
                      +91 {PHONE_SECOND} (New number)
                    </option>
                    <option value={PHONE}>
                      +91 {PHONE} (Existing number)
                    </option>
                    <option value={PHONE_THIRD}>
                      +91 {PHONE_THIRD} (Vilas Chavan)
                    </option>
                  </select>
                </label>

                <div className="form-row">
                  <label>
                    Your area
                    <input
                      required
                      value={area}
                      onChange={e => setArea(e.target.value)}
                      placeholder="Area / locality"
                    />
                  </label>

                  <label>
                    Preferred date
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                    />
                  </label>
                </div>

                <label>
                  Message <span className="optional">(optional)</span>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                    placeholder="Tell us a little about the space..."
                  />
                </label>

                <button
                  className="btn btn-lime form-submit"
                  type="submit"
                >
                  Send enquiry on WhatsApp <ArrowRight size={17} />
                </button>

                <small className="privacy-note">
                  <ShieldCheck size={14} /> Review your message before sending.
                </small>
              </form>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href={pageUrl('/')}>
            <img src={asset('/brand-logo.jpeg')} alt="" />
            <span>
              <b>Vaishnavi</b>
              <small>Glass Cleaning Service</small>
            </span>
          </a>

          <p>
            Clean spaces. Healthy life.
            <br />
            Window, bathroom, washing machine and car cleaning.
          </p>

          <a className="footer-call" href={`tel:+91${PHONE}`}>
            <Phone size={17} /> +91 {PHONE}
          </a>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Vaishnavi Cleaning Services
          </span>

          <span className="footer-made-for">
            Made for fresher spaces <Sparkles size={14} />
          </span>
        </div>

        <div className="footer-credit-wrap">
          <a
            className="footer-credit"
            href="https://www.gdaisolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-credit-dot" />
            Designed by <strong>GD AI Solutions</strong>
          </a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp existing number"
      >
        <svg
          className="whatsapp-brand-icon"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16 3.1A12.7 12.7 0 0 0 5.1 22.3L3.5 28.8l6.7-1.7A12.8 12.8 0 1 0 16 3.1Zm0 23.2c-2 0-3.9-.5-5.6-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.3 10.3 0 1 1 16 26.3Zm5.7-7.7c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.5 8.5 0 0 1-2.5-1.5 9.3 9.3 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"
          />
        </svg>

        <span>WhatsApp +91 {PHONE}</span>
      </a>
    </>
  );
}

function BeforeAfterGrid() {
  return (
    <div className="before-after-grid">
      {beforeAfter.map((item, i) => (
        <article className="before-after-card" key={item.name}>
          <h3>{item.name}</h3>

          <div className="before-after-pair">
            <figure>
              <img
                src={item.before}
                alt={`${item.name} before cleaning`}
              />
              <figcaption>Before</figcaption>
            </figure>

            <figure>
              <img
                src={item.after}
                alt={`${item.name} after cleaning`}
              />
              <figcaption>After</figcaption>
            </figure>
          </div>
        </article>
      ))}
    </div>
  );
}

function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="service-grid">
      {services.slice(0, compact ? 4 : 4).map((s, i) => {
        const Icon = s.icon;

        return (
          <article className="service-card image-service" key={s.name}>
            <img src={s.img} alt={s.name} />

            <div className="service-card-body">
              <div className="service-icon">
                <Icon size={22} />
              </div>

              <span className="service-number">0{i + 1}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>

              <a
                className="text-link"
                href={`https://wa.me/918007947113?text=${encodeURIComponent(
                  'Hello Vaishnavi, I am interested in ' + s.name + '.'
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Enquire on WhatsApp <ArrowRight size={15} />
              </a>

              <a
                className="text-link service-second-whatsapp"
                href={`https://wa.me/917378751692?text=${encodeURIComponent(
                  'Hello Vaishnavi, I am interested in ' + s.name + '.'
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Enquire on WhatsApp (+91 7378751692){' '}
                <ArrowRight size={15} />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element '#root' was not found in index.html");
}

createRoot(rootElement).render(<App />);
