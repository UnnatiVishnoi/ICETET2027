import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData.js';
import { asset } from '../utils.js';
import Hero from '../components/Hero.jsx';
import Countdown from '../components/Countdown.jsx';

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function useDateFlags() {
  return useMemo(() => {
    const now = Date.now();
    let nextFound = false;
    return siteData.importantDates.map((item) => {
      const timestamp = item.iso ? Date.parse(item.iso) : NaN;
      const past = !Number.isNaN(timestamp) && timestamp < now;
      const next = !past && !nextFound;
      if (next) nextFound = true;
      return { ...item, past, next };
    });
  }, []);
}

function Gallery() {
  const [active, setActive] = useState(null);
  const images = siteData.gallery;

  useEffect(() => {
    if (active === null) return;
    document.body.classList.add('lightbox-open');
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % images.length);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lightbox-open');
      document.removeEventListener('keydown', onKey);
    };
  }, [active, images.length]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button key={image} type="button" aria-label={`Open gallery image ${index + 1}`} onClick={() => setActive(index)}>
            <img src={asset(image)} alt={`ICETET event gallery image ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <button className="lightbox__close" type="button" aria-label="Close image viewer" onClick={() => setActive(null)}>
            ×
          </button>
          <button
            className="lightbox__previous"
            type="button"
            aria-label="Previous image"
            onClick={() => setActive((active - 1 + images.length) % images.length)}
          >
            ←
          </button>
          <figure>
            <img src={asset(images[active])} alt={`ICETET event gallery image ${active + 1}`} />
            <figcaption>{`${active + 1} of ${images.length}`}</figcaption>
          </figure>
          <button
            className="lightbox__next"
            type="button"
            aria-label="Next image"
            onClick={() => setActive((active + 1) % images.length)}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const dateItems = useDateFlags();
  const committeePreview = useMemo(
    () =>
      siteData.committee
        .filter((group) => ['Chief Patron', 'Patron', 'Director Conference', 'Organizing Chair', 'Convener'].includes(group.group))
        .flatMap((group) => group.members.slice(0, 1).map((member) => ({ ...member, group: group.group }))),
    []
  );

  return (
    <>
      <Hero />
      <Countdown />

      <section className="section section--cloud" aria-labelledby="facts-title">
        <div className="container">
          <h2 className="sr-only" id="facts-title">Conference facts</h2>
          <div className="facts-grid">
            {[
              ['assets/images/icon-date.png', 'Event date', siteData.conference.dates],
              ['assets/images/icon-location.png', 'Location', `${siteData.conference.venue}, ${siteData.conference.city}`],
              ['assets/images/icon-track.png', 'Organizing department', siteData.conference.organizingDepartment],
            ].map(([image, label, value]) => (
              <article className="fact-card" key={label}>
                <img src={asset(image)} alt="" />
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Conference at a glance">
        <div className="container stats-grid">
          {[
            [siteData.tracks.length, 'research tracks'],
            [siteData.speakers.length, 'keynote speakers'],
            ['01', 'shared platform'],
            ['∞', 'ideas in motion'],
          ].map(([value, label]) => (
            <div className="stat-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">01 / The premise</p>
            <h2 className="section-title" id="about-title">
              Where research finds its <em>next signal.</em>
            </h2>
            {siteData.about.description.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>{siteData.about.hostNote}</p>
            <Link className="text-link" to="/about">
              Explore the conference <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div
            className="split-layout__image"
            role="img"
            aria-label="Engineering and technology conference visual"
            style={{ backgroundImage: `url('${asset('assets/images/about-conference.jpg')}')` }}
          >
            <span className="image-stamp">
              ICETET
              <br />
              2027
            </span>
          </div>
        </div>
      </section>

      <section className="section section--navy" id="nielit" aria-labelledby="nielit-title">
        <div className="container split-layout split-layout--reverse">
          <div className="split-layout__copy">
            <p className="eyebrow">02 / National technology partner</p>
            <h2 className="section-title" id="nielit-title">
              Built for the <em>connected</em> future.
            </h2>
            <p>{siteData.partner.about}</p>
            <Link className="text-link text-link--light" to="/about">
              Discover the partnership <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div
            className="split-layout__image split-layout__image--partner"
            role="img"
            aria-label="Partner organization visual"
            style={{ backgroundImage: `url('${asset(siteData.partner.logo)}')` }}
          >
            <span className="image-stamp">
              NIELIT
              <br />
              PARTNER
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="speakers" aria-labelledby="speakers-title">
        <div className="container">
          <div className="section__intro">
            <p className="eyebrow">Ideas in motion</p>
            <h2 className="section-title" id="speakers-title">
              Keynote <span>Speakers</span>
            </h2>
            <p>Meet the distinguished voices who will connect research, industry practice, and the next generation of engineering talent.</p>
          </div>
          <div className="card-grid card-grid--3">
            {siteData.speakers.map((speaker, index) => (
              <article className="card speaker-card" key={speaker.name}>
                <div className="speaker-index">0{index + 1}</div>
                {speaker.photo ? (
                  <img src={asset(speaker.photo)} alt={speaker.name} loading="lazy" />
                ) : (
                  <div className="speaker-photo-placeholder" role="img" aria-label={`${speaker.name}, coming soon`}>
                    <span>Coming Soon</span>
                  </div>
                )}
                <div className="speaker-card__body">
                  <h3>{speaker.name}</h3>
                  <p>
                    {speaker.designation}
                    {speaker.organization ? (
                      <>
                        <br />
                        {speaker.organization}
                      </>
                    ) : null}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--image" id="tracks" aria-labelledby="tracks-title">
        <div className="container">
          <div className="section__intro section__intro--light">
            <p className="eyebrow">Research tracks</p>
            <h2 className="section-title" id="tracks-title">
              Call for <span>papers</span>
            </h2>
            <p>Share original research and applied work across the technologies defining resilient, intelligent, and sustainable systems.</p>
          </div>
          <div className="card-grid track-grid">
            {siteData.tracks.map((track, index) => (
              <article className="card track-card" key={track.title}>
                <div className="track-card__top">
                  <span className="track-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="track-icon" dangerouslySetInnerHTML={{ __html: track.icon }} />
                </div>
                <h3>{track.title}</h3>
                <ul>
                  {track.topics.slice(0, 3).map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <Link className="card-arrow" to="/call-for-papers" aria-label={`Explore ${track.title}`}>
                  ↗
                </Link>
              </article>
            ))}
          </div>
          <div className="section__action">
            <Link className="button button--light" to="/call-for-papers">
              Explore all tracks
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cloud" id="dates" aria-labelledby="dates-title">
        <div className="container">
          <div className="section__intro">
            <p className="eyebrow">Keep in view</p>
            <h2 className="section-title" id="dates-title">
              Important <span>dates</span>
            </h2>
          </div>
          <div className="timeline">
            {dateItems.map((item) => (
              <article
                key={item.label}
                className={`timeline__item${item.past ? ' is-past' : ''}${item.next ? ' is-next' : ''}`}
              >
                <span className="timeline__date">{item.date}</span>
                <h3>{item.label}</h3>
              </article>
            ))}
          </div>
          <div className="section__action">
            <Link className="button button--outline" to="/important-dates">
              View full schedule
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--navy" id="committee" aria-labelledby="committee-title">
        <div className="container">
          <div className="section__intro section__intro--light">
            <p className="eyebrow">The people behind the programme</p>
            <h2 className="section-title" id="committee-title">
              Organizing <span>committee</span>
            </h2>
          </div>
          <div className="card-grid card-grid--4">
            {committeePreview.map((member) => (
              <article className="card committee-card" key={`${member.group}-${member.name}`}>
                {member.photo ? (
                  <img src={asset(member.photo)} alt={member.name} loading="lazy" />
                ) : (
                  <span className="initials-avatar" aria-hidden="true">
                    {initials(member.name)}
                  </span>
                )}
                <div className="committee-card__body">
                  <span>{member.group}</span>
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section__action">
            <Link className="button button--light" to="/committee">
              Meet the full committee
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="guidelines" aria-labelledby="guidelines-title">
        <div className="container guidance-grid">
          <div>
            <p className="eyebrow">Prepare your submission</p>
            <h2 className="section-title" id="guidelines-title">
              Author <span>guidelines</span>
            </h2>
            <ul className="check-list">
              {siteData.authorGuidelines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button" to="/call-for-papers">
              Read submission guidance
            </Link>
          </div>
          <div className="card card--accent">
            <p className="eyebrow">After peer review</p>
            <h3>Publication opportunities</h3>
            <p>Selected work may progress toward journals or proceedings, subject to quality and publisher requirements.</p>
            <ul>
              {siteData.publication.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--cloud" id="gallery" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section__intro">
            <p className="eyebrow">A community of practice</p>
            <h2 className="section-title" id="gallery-title">
              Glimpses of <span>past events</span>
            </h2>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="cta-strip" aria-labelledby="cta-title">
        <div className="container cta-strip__inner">
          <div>
            <p className="eyebrow">Bring your work to the conversation</p>
            <h2 id="cta-title">
              Submit your paper before <span>{siteData.importantDates[0].date}</span>
            </h2>
          </div>
          <Link className="button button--light" to="/call-for-papers">
            Submit your paper
          </Link>
        </div>
      </section>
    </>
  );
}
