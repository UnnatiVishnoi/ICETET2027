(() => {
  const data = window.siteData;
  const page = document.body.dataset.page;
  if (!data || !page) {
    return;
  }

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const pageDetails = {
    about: ["About the conference", "Context, purpose, and the communities ICETET 2027 is built to serve."],
    papers: ["Call for papers", "Research tracks and submission guidance for original engineering and technology work."],
    dates: ["Important dates", "A clear view of the milestones leading to the ICETET 2027 programme."],
    committee: ["Committee", "The academic, technical, and organizing community shaping the conference."],
    registration: ["Registration", "Choose your participation category and complete the registration process."],
    contact: ["Contact us", "Reach the organizing team with questions about submissions, registration, and the venue."]
  };

  const [title, intro] = pageDetails[page] || pageDetails.about;
  const banner = document.querySelector("[data-page-banner]");
  if (banner) {
    banner.innerHTML = `<p class="breadcrumb"><a href="index.html">Home</a><span>/</span><span>${escapeHtml(title)}</span></p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(intro)}</p>`;
  }

  const content = document.querySelector("[data-page-content]");
  if (!content) {
    return;
  }

  const sectionIntro = (eyebrow, heading, copy) => `<div class="page-content__intro"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h2>${heading}</h2><p>${escapeHtml(copy)}</p></div>`;
  const cardList = (items) => `<ul class="plain-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

  const renderAbout = () => {
    content.innerHTML = `<div class="section page-content"><div class="container">
      ${sectionIntro("A shared platform", "Engineering ideas with <span>purpose</span>", "ICETET 2027 is designed for exchange: between disciplines, between research and application, and between the people learning today and the systems they will shape tomorrow.")}
      <div class="page-columns"><div class="page-columns__main">${data.about.description.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div><aside class="card page-columns__aside"><h3>Conference focus</h3>${cardList(data.about.objectives)}</aside></div>
    </div></div>
    <section class="section section--navy"><div class="container split-layout split-layout--reverse"><div class="split-layout__copy"><p class="eyebrow">In association with ${escapeHtml(data.partner.name)}</p><h2 class="section-title">A national <span>technology</span> connection</h2><p>${escapeHtml(data.partner.about)}</p></div><div class="split-layout__image" role="img" aria-label="Partner organization visual" style="background-image:url('${escapeHtml(data.partner.logo)}')"></div></div></section>
    <section class="section"><div class="container split-layout"><div class="split-layout__copy"><p class="eyebrow">Hosted by</p><h2 class="section-title">Meet the <span>host institute</span></h2><p>${escapeHtml(data.hostInstitute.about)}</p><p><a href="${escapeHtml(data.hostInstitute.website)}">Visit the host institute website</a></p></div><div class="split-layout__image" role="img" aria-label="Host institute visual" style="background-image:url('${escapeHtml(data.hostInstitute.logo)}')"></div></div></section>
    <section class="section section--cloud"><div class="container"><div class="card-grid card-grid--2"><div><p class="eyebrow">What we aim to do</p><h2>Objectives</h2>${cardList(data.about.objectives)}</div><div><p class="eyebrow">Who belongs here</p><h2>Who should attend</h2>${cardList(data.about.whoShouldAttend)}</div></div></div></section>`;
  };

  const renderPapers = () => {
    content.innerHTML = `<section class="section page-content"><div class="container">${sectionIntro("Research themes", "Choose your <span>conversation</span>", "ICETET 2027 welcomes original work, applied research, case studies, prototypes, and thoughtful perspectives aligned with the tracks below.")}
      <div class="card-grid card-grid--2">${data.tracks.map((track) => `<article class="card track-card track-card--light"><span class="track-icon">${track.icon}</span><h3>${escapeHtml(track.title)}</h3><ul class="topic-list">${track.topics.map((topic) => `<li>${escapeHtml(topic)}</li>`).join("")}</ul></article>`).join("")}</div>
    </div></section><section class="section section--cloud"><div class="container page-columns"><div><p class="eyebrow">For authors</p><h2>Author guidelines</h2><ul class="check-list">${data.authorGuidelines.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><button class="button is-disabled" type="button" disabled aria-disabled="true">Submit your paper</button></div><aside class="card card--accent"><p class="eyebrow">After review</p><h3>Publication opportunities</h3>${cardList(data.publication)}</aside></div></section>`;
  };

  const renderDates = () => {
    const now = Date.now();
    let nextFound = false;
    const dateItems = data.importantDates.map((item) => {
      const timestamp = item.iso ? Date.parse(item.iso) : NaN;
      const past = !Number.isNaN(timestamp) && timestamp < now;
      const next = !past && !nextFound;
      if (next) nextFound = true;
      return { ...item, past, next };
    });
    content.innerHTML = `<section class="section page-content"><div class="container">${sectionIntro("Plan ahead", "The road to <span>ICETET 2027</span>", "Please check the official announcement and submission system for any updates to the schedule.")}
      <div class="timeline">${dateItems.map((item) => `<article class="timeline__item${item.past ? " is-past" : ""}${item.next ? " is-next" : ""}"><span class="timeline__date">${escapeHtml(item.date)}</span><h3>${escapeHtml(item.label)}</h3></article>`).join("")}</div>
      <div class="dates-table-wrap"><table class="data-table"><caption class="sr-only">ICETET-2027 important dates</caption><thead><tr><th scope="col">Milestone</th><th scope="col">Date</th></tr></thead><tbody>${dateItems.map((item) => `<tr><td>${escapeHtml(item.label)}</td><td>${escapeHtml(item.date)}</td></tr>`).join("")}</tbody></table></div>
    </div></section>`;
  };

  const renderCommittee = () => {
    content.innerHTML = `<section class="section page-content"><div class="container">${sectionIntro("People and stewardship", "The team behind the <span>programme</span>", "Meet the leadership, organizing, national, and international committees supporting ICETET-2027.")}<div class="committee-search"><label for="committee-filter">Search committee members</label><input id="committee-filter" type="search" placeholder="Search by name or institution" autocomplete="off"></div>
      ${data.committee.map((group) => `<section class="committee-group"><h2>${escapeHtml(group.group)}</h2><div class="committee-grid">${group.members.map((member) => `<article class="card committee-card searchable-member" data-search-text="${escapeHtml(`${member.name} ${member.designation}`.toLowerCase())}">${member.photo ? `<img src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.name)}" loading="lazy">` : `<span class="initials-avatar" aria-hidden="true">${escapeHtml(member.name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase())}</span>`}<div class="committee-card__body"><span>${escapeHtml(member.flag || "")}</span><h3>${escapeHtml(member.name)}</h3><p>${escapeHtml(member.designation)}</p></div></article>`).join("")}</div></section>`).join("")}
    </div></section>`;
  };

  const renderRegistration = () => {
    content.innerHTML = `<section class="section page-content"><div class="container">${sectionIntro("Participation", "Make room for <span>your work</span>", "Registration details are provisional until the official fee schedule and payment account are confirmed.")}
      <div class="registration-grid"><div><div class="dates-table-wrap"><table class="data-table"><caption class="sr-only">ICETET-2027 registration fees</caption><thead><tr><th scope="col">Category</th><th scope="col">Indian Author</th><th scope="col">Foreign Author</th></tr></thead><tbody>${data.registration.fees.map((fee) => `<tr><td>${escapeHtml(fee.category)}</td><td>${escapeHtml(fee.indian)}</td><td>${escapeHtml(fee.foreign)}</td></tr>`).join("")}</tbody></table></div><p class="registration-note"><strong>${escapeHtml(data.registration.feeNote)}</strong></p><button class="button is-disabled" type="button" disabled aria-disabled="true">Open registration form</button></div><aside class="card registration-card"><h2>What registration includes</h2>${cardList(data.registration.includes)}</aside></div>
    </div></section><section class="section section--cloud"><div class="container registration-grid"><div class="card registration-card"><h2>How to register</h2><ol class="steps">${data.registration.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol></div><div class="card registration-card"><h2>Payment details</h2><p>${escapeHtml(data.registration.paymentDetails)}</p></div></div></section>`;
  };

  const renderContact = () => {
    const mapIsReady = data.contact.mapEmbedUrl && !data.contact.mapEmbedUrl.startsWith("[");
    content.innerHTML = `<section class="section page-content"><div class="container">${sectionIntro("Stay connected", "Let us help you <span>join in</span>", "For paper submissions, registration questions, partnership enquiries, and accessibility support, contact the conference team.")}
      <div class="contact-grid"><div class="card contact-card"><h2>Conference office</h2><ul class="contact-list"><li><strong>Address</strong>${escapeHtml(data.contact.address)}</li><li><strong>Phone</strong>${data.contact.phones.map((phone) => `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>`).join("<br>")}</li><li><strong>Email</strong>${data.contact.emails.map((email) => `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`).join("<br>")}</li></ul></div><div>${mapIsReady ? `<iframe class="map-frame" src="${escapeHtml(data.contact.mapEmbedUrl)}" title="Conference venue map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` : `<div class="card map-frame"><h2>Venue map</h2><p>[GOOGLE MAP EMBED URL] will be added when the venue is confirmed.</p></div>`}</div></div>
    </div></section><section class="section section--cloud"><div class="container"><div class="card"><p class="eyebrow">Send a message</p><h2>Contact the organizers</h2><form class="form-grid" action="mailto:${escapeHtml(data.contact.emails[0])}" method="post" enctype="text/plain"><div class="form-field"><label for="contact-name">Name</label><input id="contact-name" name="name" required></div><div class="form-field"><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" required></div><div class="form-field"><label for="contact-message">Message</label><textarea id="contact-message" name="message" required></textarea></div><button class="button" type="submit">Send enquiry</button></form></div></div></section>`;
  };

  ({ about: renderAbout, papers: renderPapers, dates: renderDates, committee: renderCommittee, registration: renderRegistration, contact: renderContact }[page] || renderAbout)();
  if (page === "committee") {
    const filter = document.querySelector("#committee-filter");
    filter?.addEventListener("input", () => { const query = filter.value.trim().toLowerCase(); document.querySelectorAll(".committee-group").forEach((group) => { let visible = 0; group.querySelectorAll(".searchable-member").forEach((member) => { const match = !query || member.dataset.searchText.includes(query); member.hidden = !match; if (match) visible += 1; }); group.hidden = visible === 0; }); });
  }
})();
