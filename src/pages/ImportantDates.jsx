import { useMemo } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import { siteData } from '../data/siteData.js';

export default function ImportantDates() {
  const dateItems = useMemo(() => {
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

  return (
    <>
      <PageBanner
        title="Important dates"
        intro="A clear view of the milestones leading to the ICETET 2027 programme."
      />
      <section className="section page-content">
        <div className="container">
          <div className="page-content__intro">
            <p className="eyebrow">Plan ahead</p>
            <h2>
              The road to <span>ICETET 2027</span>
            </h2>
            <p>Please check the official announcement and submission system for any updates to the schedule.</p>
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
          <div className="dates-table-wrap">
            <table className="data-table">
              <caption className="sr-only">ICETET-2027 important dates</caption>
              <thead>
                <tr>
                  <th scope="col">Milestone</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {dateItems.map((item) => (
                  <tr key={item.label}>
                    <td>{item.label}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
