import PageBanner from '../components/PageBanner.jsx';
import { siteData } from '../data/siteData.js';

export default function Registration() {
  return (
    <>
      <PageBanner
        title="Registration"
        intro="Choose your participation category and complete the registration process."
      />
      <section className="section page-content">
        <div className="container">
          <div className="page-content__intro">
            <p className="eyebrow">Participation</p>
            <h2>
              Make room for <span>your work</span>
            </h2>
            <p>Registration details are provisional until the official fee schedule and payment account are confirmed.</p>
          </div>
          <div className="registration-grid">
            <div>
              <div className="dates-table-wrap">
                <table className="data-table">
                  <caption className="sr-only">ICETET-2027 registration fees</caption>
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Indian Author</th>
                      <th scope="col">Foreign Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {siteData.registration.fees.map((fee) => (
                      <tr key={fee.category}>
                        <td>{fee.category}</td>
                        <td>{fee.indian}</td>
                        <td>{fee.foreign}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="registration-note">
                <strong>{siteData.registration.feeNote}</strong>
              </p>
              <button className="button is-disabled" type="button" disabled aria-disabled="true">
                Open registration form
              </button>
            </div>
            <aside className="card registration-card">
              <h2>What registration includes</h2>
              <ul className="plain-list">
                {siteData.registration.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section className="section section--cloud">
        <div className="container registration-grid">
          <div className="card registration-card">
            <h2>How to register</h2>
            <ol className="steps">
              {siteData.registration.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="card registration-card">
            <h2>Payment details</h2>
            <p>{siteData.registration.paymentDetails}</p>
            <p>Registration and payment portal: Coming Soon</p>
          </div>
        </div>
      </section>
    </>
  );
}
