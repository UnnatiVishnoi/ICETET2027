import PageBanner from '../components/PageBanner.jsx';
import { siteData } from '../data/siteData.js';
import { asset } from '../utils.js';

export default function About() {
  return (
    <>
      <PageBanner
        title="About the conference"
        intro="Context, purpose, and the communities ICETET 2027 is built to serve."
      />
      <div className="section page-content">
        <div className="container">
          <div className="page-content__intro">
            <p className="eyebrow">A shared platform</p>
            <h2>
              Engineering ideas with <span>purpose</span>
            </h2>
            <p>
              ICETET 2027 is designed for exchange: between disciplines, between research and application, and
              between the people learning today and the systems they will shape tomorrow.
            </p>
          </div>
          <div className="page-columns">
            <div className="page-columns__main">
              {siteData.about.description.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <aside className="card page-columns__aside">
              <h3>Conference focus</h3>
              <ul className="plain-list">
                {siteData.about.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>

      <section className="section section--navy">
        <div className="container split-layout split-layout--reverse">
          <div className="split-layout__copy">
            <p className="eyebrow">In association with {siteData.partner.name}</p>
            <h2 className="section-title">
              A national <span>technology</span> connection
            </h2>
            <p>{siteData.partner.about}</p>
          </div>
          <div
            className="split-layout__image"
            role="img"
            aria-label="Partner organization visual"
            style={{ backgroundImage: `url('${asset(siteData.partner.logo)}')` }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">Hosted by</p>
            <h2 className="section-title">
              Meet the <span>host institute</span>
            </h2>
            <p>{siteData.hostInstitute.about}</p>
            <p>
              <a href={siteData.hostInstitute.website} target="_blank" rel="noopener noreferrer">
                Visit the host institute website
              </a>
            </p>
          </div>
          <div
            className="split-layout__image"
            role="img"
            aria-label="Host institute visual"
            style={{ backgroundImage: `url('${asset(siteData.hostInstitute.logo)}')` }}
          />
        </div>
      </section>

      <section className="section section--cloud" aria-labelledby="srms-title">
        <div className="container">
          <div className="section__intro">
            <p className="eyebrow">Host institution</p>
            <h2 className="section-title" id="srms-title">
              About <span>SRMS CET</span>
            </h2>
          </div>
          <div className="page-columns">
            <div className="page-columns__main">
              {siteData.hostInstitute.profile.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
              <p>
                <a
                  className="button"
                  href={siteData.hostInstitute.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit SRMS CET official website (opens in a new tab)"
                >
                  Visit SRMS CET <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
            <aside className="card page-columns__aside">
              <h3>At a glance</h3>
              <ul className="plain-list">
                <li>{siteData.hostInstitute.name}</li>
                <li>Approved by AICTE, New Delhi</li>
                <li>Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow</li>
                <li>Run by Shri Ram Murti Smarak Trust</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--image" aria-labelledby="departments-title">
        <div className="container">
          <div className="section__intro section__intro--light">
            <p className="eyebrow">Joint organizers</p>
            <h2 className="section-title" id="departments-title">
              Organizing <span>Departments</span>
            </h2>
            <p>{siteData.departmentsIntro}</p>
          </div>
          <div className="card-grid track-grid">
            {siteData.departments.map((dept) => (
              <article className="card track-card dept-card" key={dept.code}>
                <div className="track-card__top">
                  <span className="dept-code">{dept.code}</span>
                  <span className="track-icon" dangerouslySetInnerHTML={{ __html: dept.icon }} />
                </div>
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
                <a
                  className="button button--glass"
                  href={dept.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore ${dept.name} official page (opens in a new tab)`}
                >
                  Explore Department <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cloud">
        <div className="container">
          <div className="card-grid card-grid--2">
            <div>
              <p className="eyebrow">What we aim to do</p>
              <h2>Objectives</h2>
              <ul className="plain-list">
                {siteData.about.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Who belongs here</p>
              <h2>Who should attend</h2>
              <ul className="plain-list">
                {siteData.about.whoShouldAttend.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
