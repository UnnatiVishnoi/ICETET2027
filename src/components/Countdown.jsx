import { useEffect, useState } from 'react';
import { siteData } from '../data/siteData.js';

function getTarget() {
  const conferenceTarget = Date.parse(siteData.conference.startDateTime);
  const fallbackTarget = Date.parse(siteData.importantDates[0]?.iso);
  const target = Number.isNaN(conferenceTarget) ? fallbackTarget : conferenceTarget;
  const label = Number.isNaN(conferenceTarget) ? 'Paper submission closes in' : 'Conference begins in';
  return { target, label };
}

export default function Countdown() {
  const [{ target, label }] = useState(getTarget);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (Number.isNaN(target)) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (Number.isNaN(target)) {
    return (
      <section className="countdown-band" aria-labelledby="countdown-title">
        <div className="container countdown-band__inner">
          <div>
            <p className="eyebrow">Mark the moment</p>
            <h2 id="countdown-title">Conference begins in</h2>
          </div>
          <div className="countdown" aria-live="polite">
            <p className="countdown__message">Schedule coming soon</p>
          </div>
        </div>
      </section>
    );
  }

  const endTarget = target + 172800000; // two-day conference window
  let body;
  if (now >= endTarget) {
    body = <p className="countdown__message">Conference concluded</p>;
  } else if (now >= target) {
    body = <p className="countdown__message">Conference is live</p>;
  } else {
    const diff = target - now;
    const values = [
      Math.floor(diff / 86400000),
      Math.floor(diff / 3600000) % 24,
      Math.floor(diff / 60000) % 60,
      Math.floor(diff / 1000) % 60,
    ];
    const labels = ['Days', 'Hours', 'Minutes', 'Seconds'];
    body = values.map((value, i) => (
      <div className="countdown__unit" key={labels[i]}>
        <span className="countdown__value">{String(value).padStart(2, '0')}</span>
        <span className="countdown__label">{labels[i]}</span>
      </div>
    ));
  }

  return (
    <section className="countdown-band" aria-labelledby="countdown-title">
      <div className="container countdown-band__inner">
        <div>
          <p className="eyebrow">Mark the moment</p>
          <h2 id="countdown-title">{label}</h2>
        </div>
        <div className="countdown" aria-live="polite">
          {body}
        </div>
      </div>
    </section>
  );
}
