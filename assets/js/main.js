(() => {
  const data = window.siteData;
  if (!data) return;

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const setHtml = (selector, html) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
    return element;
  };

  const renderHero = () => {
    const hero = document.querySelector("[data-home-hero]");
    if (!hero) return;
    const slides = [
      { image: "assets/images/hero-bg-1.jpg", kicker: "International conference • In association with NIELIT", title: "Build what comes next.", text: data.conference.tagline },
      { image: "assets/images/about-conference.jpg", kicker: "Research • Collaboration • Impact", title: "Ideas beyond the lab.", text: "A meeting ground for rigorous research and applied innovation." },
      { image: "assets/images/partner-visual-2.jpg", kicker: `Connected by ${data.partner.name}`, title: "Think across boundaries.", text: "Bring your questions, prototypes, and perspective to the conversation." }
    ];
    hero.insertAdjacentHTML("afterbegin", slides.map((slide, index) => `
      <article class="hero__slide${index === 0 ? " is-active" : ""}" style="background-image:url('${slide.image}')" aria-hidden="${index === 0 ? "false" : "true"}">
        <div class="container hero__content">
          <p class="hero__kicker"><span class="signal-dot" aria-hidden="true"></span>${escapeHtml(slide.kicker)}</p>
          <h1><span>${escapeHtml(data.conference.shortName)}</span>${escapeHtml(slide.title)}</h1>
          <p class="hero__full-title">${escapeHtml(data.conference.fullTitle)}</p>
          <p class="hero__description">${escapeHtml(slide.text)}</p>
          <div class="hero__chips"><span class="glass-chip"><span aria-hidden="true">◷</span>${escapeHtml(data.conference.dates)}</span><span class="glass-chip"><span aria-hidden="true">⌖</span>${escapeHtml(data.conference.venue)}</span></div>
          <div class="hero__actions"><button class="button button--amber is-disabled" type="button" disabled aria-disabled="true">Submit paper <span aria-hidden="true">↗</span></button><button class="button button--glass is-disabled" type="button" disabled aria-disabled="true">Register now <span aria-hidden="true">↗</span></button></div>
        </div>
      </article>`).join(""));
    hero.insertAdjacentHTML("beforeend", `<div class="hero__bottom container"><div class="hero__partner-label"><span>Organized by</span><strong>${escapeHtml(data.hostInstitute.name)}</strong></div><div class="hero__partner-label"><span>In association with</span><strong>${escapeHtml(data.partner.name)}</strong></div><div class="hero__dots" aria-label="Hero slides">${slides.map((slide, index) => `<button class="hero__dot${index === 0 ? " is-active" : ""}" type="button" aria-label="Show slide ${index + 1}" aria-pressed="${index === 0}"></button>`).join("")}</div></div>`);

    const slideElements = [...hero.querySelectorAll(".hero__slide")];
    const dotElements = [...hero.querySelectorAll(".hero__dot")];
    let activeIndex = 0;
    const showSlide = (index) => {
      activeIndex = (index + slideElements.length) % slideElements.length;
      slideElements.forEach((slide, slideIndex) => { const active = slideIndex === activeIndex; slide.classList.toggle("is-active", active); slide.setAttribute("aria-hidden", String(!active)); });
      dotElements.forEach((dot, dotIndex) => { const active = dotIndex === activeIndex; dot.classList.toggle("is-active", active); dot.setAttribute("aria-pressed", String(active)); });
    };
    dotElements.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) window.setInterval(() => showSlide(activeIndex + 1), 7000);
  };

  const renderNetwork = () => {
    const canvas = document.querySelector("[data-hero-network]");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    const points = Array.from({ length: 34 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.00016, vy: (Math.random() - 0.5) * 0.00016 }));
    let visible = true;
    const resize = () => { canvas.width = canvas.clientWidth * devicePixelRatio; canvas.height = canvas.clientHeight * devicePixelRatio; context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); };
    const draw = () => {
      if (!visible) return;
      const width = canvas.clientWidth; const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      points.forEach((point) => { point.x += point.vx; point.y += point.vy; if (point.x < 0 || point.x > 1) point.vx *= -1; if (point.y < 0 || point.y > 1) point.vy *= -1; });
      points.forEach((point, index) => points.slice(index + 1).forEach((other) => { const dx = (point.x - other.x) * width; const dy = (point.y - other.y) * height; const distance = Math.sqrt(dx * dx + dy * dy); if (distance < 170) { context.strokeStyle = `rgba(34, 211, 238, ${0.12 * (1 - distance / 170)})`; context.beginPath(); context.moveTo(point.x * width, point.y * height); context.lineTo(other.x * width, other.y * height); context.stroke(); } }));
      points.forEach((point) => { context.fillStyle = "rgba(34, 211, 238, .5)"; context.beginPath(); context.arc(point.x * width, point.y * height, 1.4, 0, Math.PI * 2); context.fill(); });
      requestAnimationFrame(draw);
    };
    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) requestAnimationFrame(draw); }).observe(canvas);
    resize(); draw();
  };

  const renderStats = () => setHtml("[data-stats]", [[data.tracks.length, "research tracks"], [data.speakers.length, "keynote speakers"], ["01", "shared platform"], ["∞", "ideas in motion"]].map(([value, label]) => `<div class="stat-item"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join(""));
  const renderFacts = () => setHtml("[data-facts]", [["assets/images/icon-date.png", "Event date", data.conference.dates], ["assets/images/icon-location.png", "Location", `${data.conference.venue}, ${data.conference.city}`], ["assets/images/icon-track.png", "Organizing department", data.conference.organizingDepartment]].map(([image, label, value]) => `<article class="fact-card"><img src="${image}" alt=""><div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div></article>`).join(""));
  const renderAbout = () => setHtml("[data-about]", `<div class="split-layout__copy"><p class="eyebrow">01 / The premise</p><h2 class="section-title" id="about-title">Where research finds its <em>next signal.</em></h2>${data.about.description.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}<a class="text-link" href="about.html">Explore the conference <span aria-hidden="true">↗</span></a></div><div class="split-layout__image" role="img" aria-label="Engineering and technology conference visual" style="background-image:url('assets/images/about-conference.jpg')"><span class="image-stamp">ICETET<br>2027</span></div>`);
  const renderPartner = () => setHtml("[data-partner]", `<div class="split-layout__copy"><p class="eyebrow">02 / National technology partner</p><h2 class="section-title" id="nielit-title">Built for the <em>connected</em> future.</h2><p>${escapeHtml(data.partner.about)}</p><a class="text-link text-link--light" href="about.html">Discover the partnership <span aria-hidden="true">↗</span></a></div><div class="split-layout__image split-layout__image--partner" role="img" aria-label="Partner organization visual" style="background-image:url('${escapeHtml(data.partner.logo)}')"><span class="image-stamp">NIELIT<br>PARTNER</span></div>`);
  const renderSpeakers = () => setHtml("[data-speakers]", data.speakers.map((speaker, index) => `<article class="card speaker-card"><div class="speaker-index">0${index + 1}</div><img src="${escapeHtml(speaker.photo)}" alt="${escapeHtml(speaker.name)}" loading="lazy"><div class="speaker-card__body"><h3>${escapeHtml(speaker.name)}</h3><p>${escapeHtml(speaker.designation)}<br>${escapeHtml(speaker.organization)}</p></div></article>`).join(""));
  const renderTracks = () => setHtml("[data-tracks]", data.tracks.map((track, index) => `<article class="card track-card"><div class="track-card__top"><span class="track-number">${String(index + 1).padStart(2, "0")}</span><span class="track-icon">${track.icon}</span></div><h3>${escapeHtml(track.title)}</h3><ul>${track.topics.slice(0, 3).map((topic) => `<li>${escapeHtml(topic)}</li>`).join("")}</ul><a class="card-arrow" href="call-for-papers.html" aria-label="Explore ${escapeHtml(track.title)}">↗</a></article>`).join(""));
  const renderDates = () => { const now = Date.now(); let nextFound = false; setHtml("[data-dates]", data.importantDates.map((item) => { const timestamp = item.iso ? Date.parse(item.iso) : NaN; const past = !Number.isNaN(timestamp) && timestamp < now; const next = !past && !nextFound; if (next) nextFound = true; return `<article class="timeline__item${past ? " is-past" : ""}${next ? " is-next" : ""}"><span class="timeline__date">${escapeHtml(item.date)}</span><h3>${escapeHtml(item.label)}</h3></article>`; }).join("")); const date = document.querySelector("[data-submission-date]"); if (date) date.textContent = data.importantDates[0].date; };
  const renderCommittee = () => { const people = data.committee.filter((group) => ["Chief Patron", "Patron", "Director Conference", "Organizing Chair", "Convener"].includes(group.group)).flatMap((group) => group.members.slice(0, 1).map((member) => ({ ...member, group: group.group }))); setHtml("[data-committee]", people.map((member) => `<article class="card committee-card">${member.photo ? `<img src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.name)}" loading="lazy">` : `<span class="initials-avatar" aria-hidden="true">${escapeHtml(member.name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase())}</span>`}<div class="committee-card__body"><span>${escapeHtml(member.group)}</span><h3>${escapeHtml(member.name)}</h3><p>${escapeHtml(member.designation)}</p></div></article>`).join("")); };
  const renderGuidance = () => { setHtml("[data-guidelines]", data.authorGuidelines.map((item) => `<li>${escapeHtml(item)}</li>`).join("")); setHtml("[data-publication]", `<p class="eyebrow">After peer review</p><h3>Publication opportunities</h3><p>Selected work may progress toward journals or proceedings, subject to quality and publisher requirements.</p><ul>${data.publication.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`); };
  const renderGallery = () => setHtml("[data-gallery]", data.gallery.map((image, index) => `<button type="button" data-gallery-image="${escapeHtml(image)}" aria-label="Open gallery image ${index + 1}"><img src="${escapeHtml(image)}" alt="ICETET event gallery image ${index + 1}" loading="lazy"></button>`).join(""));
  const renderCountdown = () => { const countdown = document.querySelector("[data-countdown]"); if (!countdown) return; const conferenceTarget = Date.parse(data.conference.startDateTime); const fallbackTarget = Date.parse(data.importantDates[0].iso); const target = Number.isNaN(conferenceTarget) ? fallbackTarget : conferenceTarget; const targetLabel = Number.isNaN(conferenceTarget) ? "Paper submission closes in" : "Conference begins in"; if (Number.isNaN(target)) { countdown.innerHTML = '<p class="countdown__message">Schedule coming soon</p>'; return; } const labels = ["Days", "Hours", "Minutes", "Seconds"]; const endTarget = Number.isNaN(conferenceTarget) ? target + 86400000 : target + 172800000; const heading = countdown.closest(".countdown-band")?.querySelector("h2"); if (heading) heading.textContent = targetLabel; const update = () => { const now = Date.now(); if (now >= endTarget) { countdown.innerHTML = '<p class="countdown__message">Conference concluded</p>'; return false; } if (now >= target) { countdown.innerHTML = '<p class="countdown__message">Conference is live</p>'; return false; } const difference = target - now; countdown.innerHTML = [Math.floor(difference / 86400000), Math.floor(difference / 3600000) % 24, Math.floor(difference / 60000) % 60, Math.floor(difference / 1000) % 60].map((value, index) => `<div class="countdown__unit"><span class="countdown__value">${String(value).padStart(2, "0")}</span><span class="countdown__label">${labels[index]}</span></div>`).join(""); return true; }; if (update()) window.setInterval(update, 1000); };

  renderHero(); renderNetwork(); renderStats(); renderFacts(); renderAbout(); renderPartner(); renderSpeakers(); renderTracks(); renderDates(); renderCommittee(); renderGuidance(); renderGallery(); renderCountdown();
})();
