import PageBanner from '../components/PageBanner.jsx';
import { siteData } from '../data/siteData.js';

export default function Contact() {
  const mapIsReady = siteData.contact.mapEmbedUrl && !siteData.contact.mapEmbedUrl.startsWith('[');

  return (
    <>
      <PageBanner
        title="Contact us"
        intro="Reach the organizing team with questions about submissions, registration, and the venue."
      />
      <section className="section page-content">
        <div className="container">
          <div className="page-content__intro">
            <p className="eyebrow">Stay connected</p>
            <h2>
              Let us help you <span>join in</span>
            </h2>
            <p>
              For paper submissions, registration questions, partnership enquiries, and accessibility support,
              contact the conference team.
            </p>
          </div>
          <div className="contact-grid">
            <div className="card contact-card">
              <h2>Conference office</h2>
              <ul className="contact-list">
                <li>
                  <strong>Address</strong>
                  {siteData.contact.address}
                </li>
                <li>
                  <strong>Phone</strong>
                  {siteData.contact.phones.map((phone, i) => (
                    <span key={phone}>
                      {i > 0 && <br />}
                      <a href={`tel:${phone}`}>{phone}</a>
                    </span>
                  ))}
                </li>
                <li>
                  <strong>Email</strong>
                  {siteData.contact.emails.map((email, i) => (
                    <span key={email}>
                      {i > 0 && <br />}
                      <a href={`mailto:${email}`}>{email}</a>
                    </span>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow venue-label">Venue</p>
              <p>
                <strong>{siteData.hostInstitute.name}</strong>
              </p>
              {mapIsReady ? (
                <>
                  <iframe
                    className="map-frame"
                    src={siteData.contact.mapEmbedUrl}
                    title="Conference venue map — SRMS CET, Bareilly"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    className="button button--outline"
                    href={siteData.contact.mapLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps <span aria-hidden="true">↗</span>
                  </a>
                </>
              ) : (
                <div className="card map-frame">
                  <h2>Venue map</h2>
                  <p>Venue map will be available soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section section--cloud">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Send a message</p>
            <h2>Contact the organizers</h2>
            <form
              className="form-grid"
              action={`mailto:${siteData.contact.emails[0]}`}
              method="post"
              encType="text/plain"
            >
              <div className="form-field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" required />
              </div>
              <button className="button" type="submit">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
