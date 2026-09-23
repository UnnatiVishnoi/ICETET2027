import { useEffect, useRef, useState } from 'react';
import { siteData } from '../data/siteData.js';
import { asset } from '../utils.js';

const SLIDES = [
  {
    image: 'assets/images/hero-bg-1.jpg',
    kicker: 'International conference • In association with NIELIT',
    title: 'Build what comes next.',
    text: null, // falls back to conference tagline
  },
  {
    image: 'assets/images/about-conference.jpg',
    kicker: 'Research • Collaboration • Impact',
    title: 'Ideas beyond the lab.',
    text: 'A meeting ground for rigorous research and applied innovation.',
  },
  {
    image: 'assets/images/partner-visual-2.jpg',
    kicker: 'Connected by NIELIT',
    title: 'Think across boundaries.',
    text: 'Bring your questions, prototypes, and perspective to the conversation.',
  },
];

function HeroNetwork() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = canvas.getContext('2d');
    const points = Array.from({ length: 34 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00016,
      vy: (Math.random() - 0.5) * 0.00016,
    }));
    let visible = true;
    let raf = 0;
    const resize = () => {
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    const draw = () => {
      if (!visible) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > 1) point.vx *= -1;
        if (point.y < 0 || point.y > 1) point.vy *= -1;
      });
      points.forEach((point, index) => {
        points.slice(index + 1).forEach((other) => {
          const dx = (point.x - other.x) * width;
          const dy = (point.y - other.y) * height;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 170) {
            context.strokeStyle = `rgba(34, 211, 238, ${0.12 * (1 - distance / 170)})`;
            context.beginPath();
            context.moveTo(point.x * width, point.y * height);
            context.lineTo(other.x * width, other.y * height);
            context.stroke();
          }
        });
      });
      points.forEach((point) => {
        context.fillStyle = 'rgba(34, 211, 238, .5)';
        context.beginPath();
        context.arc(point.x * width, point.y * height, 1.4, 0, Math.PI * 2);
        context.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        cancelAnimationFrame(raf);
        requestAnimationFrame(draw);
      }
    });
    io.observe(canvas);
    resize();
    draw();
    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, []);
  return <canvas className="hero-network" ref={ref} aria-hidden="true" />;
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActiveIndex((i) => (i + 1) % SLIDES.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" aria-label="Conference highlights">
      <HeroNetwork />
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      {SLIDES.map((slide, index) => (
        <article
          key={slide.title}
          className={`hero__slide${index === activeIndex ? ' is-active' : ''}`}
          style={{ backgroundImage: `url('${asset(slide.image)}')` }}
          aria-hidden={index === activeIndex ? 'false' : 'true'}
        >
          <div className="container hero__content">
            <p className="hero__kicker">
              <span className="signal-dot" aria-hidden="true" />
              {slide.kicker}
            </p>
            <h1>
              <span>{siteData.conference.shortName}</span>
              {slide.title}
            </h1>
            <p className="hero__full-title">{siteData.conference.fullTitle}</p>
            <p className="hero__description">{slide.text ?? siteData.conference.tagline}</p>
            <div className="hero__chips">
              <span className="glass-chip">
                <span aria-hidden="true">◷</span>
                {siteData.conference.dates}
              </span>
              <span className="glass-chip">
                <span aria-hidden="true">⌖</span>
                {siteData.conference.venue}
              </span>
            </div>
            <div className="hero__actions">
              <button className="button button--amber is-disabled" type="button" disabled aria-disabled="true">
                Submit paper <span aria-hidden="true">↗</span>
              </button>
              <button className="button button--glass is-disabled" type="button" disabled aria-disabled="true">
                Register now <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </article>
      ))}
      <div className="hero__bottom container">
        <div className="hero__partner-label">
          <span>Organized by</span>
          <strong>{siteData.hostInstitute.name}</strong>
        </div>
        <div className="hero__partner-label">
          <span>In association with</span>
          <strong>{siteData.partner.name}</strong>
        </div>
        <div className="hero__dots" aria-label="Hero slides">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.title}
              className={`hero__dot${index === activeIndex ? ' is-active' : ''}`}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
