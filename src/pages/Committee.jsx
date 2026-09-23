import { useMemo, useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import { siteData } from '../data/siteData.js';
import { asset, srcSetFor } from '../utils.js';

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Committee() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const groups = useMemo(
    () =>
      siteData.committee
        .map((group) => ({
          ...group,
          visibleMembers: group.members.filter(
            (m) => !q || `${m.name} ${m.designation}`.toLowerCase().includes(q)
          ),
        }))
        .filter((group) => group.visibleMembers.length > 0),
    [q]
  );

  return (
    <>
      <PageBanner
        title="Committee"
        intro="The academic, technical, and organizing community shaping the conference."
      />
      <section className="section page-content">
        <div className="container">
          <div className="page-content__intro">
            <p className="eyebrow">People and stewardship</p>
            <h2>
              The team behind the <span>programme</span>
            </h2>
            <p>Meet the leadership, organizing, national, and international committees supporting ICETET-2027.</p>
          </div>
          <div className="committee-search">
            <label htmlFor="committee-filter">Search committee members</label>
            <input
              id="committee-filter"
              type="search"
              placeholder="Search by name or institution"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {groups.map((group) => (
            <section className="committee-group" key={group.group}>
              <h2>{group.group}</h2>
              <div className="committee-grid">
                {group.visibleMembers.map((member) => (
                  <article className="card committee-card searchable-member" key={member.name}>
                    {member.photo ? (
                      <img
                        src={asset(member.photo)}
                        srcSet={srcSetFor(member.photo)}
                        sizes="128px"
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="initials-avatar" aria-hidden="true">
                        {initials(member.name)}
                      </span>
                    )}
                    <div className="committee-card__body">
                      <span>{member.flag || ''}</span>
                      <h3>{member.name}</h3>
                      <p>{member.designation}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
