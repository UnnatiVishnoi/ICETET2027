import PageBanner from '../components/PageBanner.jsx';
import { siteData } from '../data/siteData.js';

export default function CallForPapers() {
  return (
    <>
      <PageBanner
        title="Call for papers"
        intro="Research tracks and submission guidance for original engineering and technology work."
      />
      <section className="section page-content">
        <div className="container">
          <div className="page-content__intro">
            <p className="eyebrow">Research themes</p>
            <h2>
              Choose your <span>conversation</span>
            </h2>
            <p>
              ICETET 2027 welcomes original work, applied research, case studies, prototypes, and thoughtful
              perspectives aligned with the tracks below.
            </p>
          </div>
          <div className="card-grid card-grid--2">
            {siteData.tracks.map((track) => (
              <article className="card track-card track-card--light" key={track.title}>
                <span className="track-icon" dangerouslySetInnerHTML={{ __html: track.icon }} />
                <h3>{track.title}</h3>
                <ul className="topic-list">
                  {track.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cloud">
        <div className="container page-columns">
          <div>
            <p className="eyebrow">For authors</p>
            <h2>Author guidelines</h2>
            <ul className="check-list">
              {siteData.authorGuidelines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button className="button is-disabled" type="button" disabled aria-disabled="true">
              Submit your paper
            </button>
          </div>
          <aside className="card card--accent">
            <p className="eyebrow">After review</p>
            <h3>Publication opportunities</h3>
            <ul className="plain-list">
              {siteData.publication.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
