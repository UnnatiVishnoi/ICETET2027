import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData.js';
import { asset } from '../utils.js';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/call-for-papers', label: 'Call for Papers' },
  { to: '/important-dates', label: 'Important Dates' },
  { to: '/committee', label: 'Committee' },
  { to: '/registration', label: 'Registration' },
  { to: '/contact', label: 'Contact' },
];

function socialEntries() {
  return Object.entries(siteData.social).filter(([, url]) => url && !url.includes('[PLACEHOLDER]'));
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = [...document.querySelectorAll('.section, .page-banner, .card, .cta-strip')];
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    els.forEach((el) => el.classList.add('reveal'));
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      // Pre-trigger slightly before elements enter the viewport so the
      // entrance animation plays smoothly on small phone screens.
      { threshold: 0.12, rootMargin: '0px 0px 20% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    // Safety net: committee/cards start at opacity 0 and must NEVER stay
    // invisible if the observer stalls (older engines, throttled tabs).
    // The observer remains the primary path; this only reveals elements
    // near the viewport that it missed. Cleared on route change/unmount.
    const fallback = window.setInterval(() => {
      const vh = window.innerHeight || 800;
      els.forEach((el) => {
        if (el.isConnected && !el.classList.contains('is-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh * 1.2 && rect.bottom > -vh * 0.2) {
            el.classList.add('is-visible');
          }
        }
      });
    }, 1500);
    return () => {
      observer.disconnect();
      window.clearInterval(fallback);
    };
  }, [pathname]);
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const socials = socialEntries();

  useEffect(() => {
    document.body.classList.toggle('site-home', isHome);
    return () => document.body.classList.remove('site-home');
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!siteData.isDraft) return;
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex, nofollow';
  }, []);

  useReveal();

  return (
    <>
      <ScrollToTop />
      <div className="site-topbar">
        <div className="container site-topbar__inner">
          <div className="site-topbar__links">
            <a href={`mailto:${siteData.contact.emails[0]}`}>{siteData.contact.emails[0]}</a>
            <a href={`tel:${siteData.contact.phones[0]}`}>{siteData.contact.phones[0]}</a>
          </div>
          <div className="site-social" aria-label="Social links">
            {socials.length ? (
              socials.map(([network, url]) => (
                <a key={network} href={url} aria-label={network} target="_blank" rel="noreferrer">
                  {network.slice(0, 1).toUpperCase()}
                </a>
              ))
            ) : null}
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand-lockup" to="/" aria-label={`${siteData.hostInstitute.name} home`}>
            <img
              className="brand-logo"
              src={asset(siteData.hostInstitute.logo)}
              alt={`${siteData.hostInstitute.name} logo`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="brand-lockup__text brand-lockup__text--host">{siteData.hostInstitute.name}</span>
          </Link>
          <div className="site-header__partners" aria-label="Conference partners">
            <img src={asset(siteData.partner.logo)} alt={`${siteData.partner.name} logo`} />
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={String(menuOpen)}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
          <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} id="site-navigation" aria-label="Primary navigation">
            <ul className="site-nav__list">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="site-nav__submit-item">
                <button className="nav-submit is-disabled" type="button" disabled aria-disabled="true">
                  Submit paper <span aria-hidden="true">↗</span>
                </button>
              </li>
            </ul>
          </nav>
          <button className="nav-submit is-disabled" type="button" disabled aria-disabled="true">
            Submit paper <span aria-hidden="true">↗</span>
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <Link className="brand-lockup" to="/">
                <img src={asset(siteData.hostInstitute.logo)} alt={`${siteData.hostInstitute.name} logo`} />
                <span className="brand-lockup__text">
                  <span>{siteData.conference.shortName}</span>
                  {siteData.conference.fullTitle}
                </span>
              </Link>
              <p>{siteData.conference.tagline}.</p>
              <div className="site-social" aria-label="Social links">
                {socials.length
                  ? socials.map(([network, url]) => (
                      <a key={network} href={url} aria-label={network} target="_blank" rel="noreferrer">
                        {network.slice(0, 1).toUpperCase()}
                      </a>
                    ))
                  : null}
              </div>
            </div>
            <div>
              <h2 className="site-footer__heading">Explore</h2>
              <ul className="site-footer__links">
                {NAV_LINKS.slice(1, 5).map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="site-footer__heading">Organized by</h2>
              <p>
                {siteData.hostInstitute.name}
                <br />
                {siteData.conference.organizingDepartment}
              </p>
              <p>In association with {siteData.partner.fullName}.</p>
            </div>
            <div>
              <h2 className="site-footer__heading">Contact</h2>
              <p>{siteData.contact.address}</p>
              <p>
                <a href={`mailto:${siteData.contact.emails[0]}`}>{siteData.contact.emails[0]}</a>
              </p>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>&copy; {new Date().getFullYear()} {siteData.conference.shortName}.</span>
            <span>Conference information is subject to official confirmation.</span>
          </div>
        </div>
      </footer>

      {siteData.isDraft && <div className="draft-badge">DRAFT - Preview only</div>}
      <BackToTop />
    </>
  );
}
