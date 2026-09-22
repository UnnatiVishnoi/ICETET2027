(() => {
	const data = window.siteData;
	if (!data) {
		return;
	}

	const escapeHtml = (value) => String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");

	const pageName = window.location.pathname.split("/").pop() || "index.html";
	document.body.classList.toggle("site-home", pageName === "index.html");
	const pageLinks = [
		["index.html", "Home"],
		["about.html", "About"],
		["call-for-papers.html", "Call for Papers"],
		["important-dates.html", "Important Dates"],
		["committee.html", "Committee"],
		["registration.html", "Registration"],
		["contact.html", "Contact"]
	];

	const socialLinks = Object.entries(data.social)
		.filter(([, url]) => url && !url.includes("[PLACEHOLDER]"))
		.map(([network, url]) => `<a href="${escapeHtml(url)}" aria-label="${escapeHtml(network)}" target="_blank" rel="noreferrer">${escapeHtml(network.slice(0, 1).toUpperCase())}</a>`)
		.join("");

	const addHeadMetadata = () => {
		if (!document.querySelector('link[rel="icon"]')) {
			const favicon = document.createElement("link");
			favicon.rel = "icon";
			favicon.type = "image/jpeg";
			favicon.href = "assets/images/hero-bg-1.jpg";
			document.head.appendChild(favicon);
		}
		if (!document.querySelector('meta[property="og:image"]')) {
			const imageMeta = document.createElement("meta");
			imageMeta.setAttribute("property", "og:image");
			imageMeta.content = "assets/images/hero-bg-1.jpg";
			document.head.appendChild(imageMeta);
		}
	};

	const addBackToTop = () => {
		const button = document.createElement("button");
		button.className = "back-to-top";
		button.type = "button";
		button.setAttribute("aria-label", "Back to top");
		button.textContent = "↑";
		document.body.appendChild(button);
		const updateVisibility = () => button.classList.toggle("is-visible", window.scrollY > 500);
		window.addEventListener("scroll", updateVisibility, { passive: true });
		updateVisibility();
		button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
	};

	const addRevealAnimations = () => {
		const elements = document.querySelectorAll(".section, .page-banner, .card, .cta-strip");
		if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}
		elements.forEach((element) => element.classList.add("reveal"));
		const observer = new IntersectionObserver((entries, revealObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					revealObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		elements.forEach((element) => observer.observe(element));
	};

	const addGalleryLightbox = () => {
		const galleryButtons = [...document.querySelectorAll("[data-gallery-image]")];
		if (!galleryButtons.length) {
			return;
		}
		const lightbox = document.createElement("div");
		lightbox.className = "lightbox";
		lightbox.setAttribute("role", "dialog");
		lightbox.setAttribute("aria-modal", "true");
		lightbox.setAttribute("aria-label", "Gallery image viewer");
		lightbox.hidden = true;
		lightbox.innerHTML = '<button class="lightbox__close" type="button" aria-label="Close image viewer">&times;</button><button class="lightbox__previous" type="button" aria-label="Previous image">&#8592;</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox__next" type="button" aria-label="Next image">&#8594;</button>';
		document.body.appendChild(lightbox);
		const image = lightbox.querySelector("img");
		const caption = lightbox.querySelector("figcaption");
		let activeIndex = 0;
		const showImage = (index) => {
			activeIndex = (index + galleryButtons.length) % galleryButtons.length;
			const button = galleryButtons[activeIndex];
			const source = button.dataset.galleryImage;
			image.src = source;
			image.alt = `ICETET event gallery image ${activeIndex + 1}`;
			caption.textContent = `${activeIndex + 1} of ${galleryButtons.length}`;
		};
		const close = () => {
			lightbox.hidden = true;
			document.body.classList.remove("lightbox-open");
		};
		galleryButtons.forEach((button, index) => button.addEventListener("click", () => {
			showImage(index);
			lightbox.hidden = false;
			document.body.classList.add("lightbox-open");
			lightbox.querySelector(".lightbox__close").focus();
		}));
		lightbox.querySelector(".lightbox__close").addEventListener("click", close);
		lightbox.querySelector(".lightbox__previous").addEventListener("click", () => showImage(activeIndex - 1));
		lightbox.querySelector(".lightbox__next").addEventListener("click", () => showImage(activeIndex + 1));
		lightbox.addEventListener("click", (event) => {
			if (event.target === lightbox) {
				close();
			}
		});
		document.addEventListener("keydown", (event) => {
			if (lightbox.hidden) {
				return;
			}
			if (event.key === "Escape") close();
			if (event.key === "ArrowLeft") showImage(activeIndex - 1);
			if (event.key === "ArrowRight") showImage(activeIndex + 1);
		});
	};

	const headerTarget = document.querySelector("[data-site-header]");
	if (headerTarget) {
		headerTarget.innerHTML = `
			<div class="site-topbar">
				<div class="container site-topbar__inner">
					<div class="site-topbar__links">
						<a href="mailto:${escapeHtml(data.contact.emails[0])}">${escapeHtml(data.contact.emails[0])}</a>
						<a href="tel:${escapeHtml(data.contact.phones[0])}">${escapeHtml(data.contact.phones[0])}</a>
					</div>
					<div class="site-social" aria-label="Social links">${socialLinks || "<span>Official channels coming soon</span>"}</div>
				</div>
			</div>
			<header class="site-header">
				<div class="container site-header__inner">
					<a class="brand-lockup" href="index.html" aria-label="${escapeHtml(data.hostInstitute.name)} home">
						<img class="brand-logo" src="${escapeHtml(data.hostInstitute.logo)}" alt="${escapeHtml(data.hostInstitute.name)} logo" onerror="this.style.display='none'">
						<span class="brand-lockup__text brand-lockup__text--host">${escapeHtml(data.hostInstitute.name)}</span>
					</a>
					<div class="site-header__partners" aria-label="Conference partners">
						<img src="${escapeHtml(data.partner.logo)}" alt="${escapeHtml(data.partner.name)} logo">
					</div>
					<button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-navigation">&#9776;</button>
					<nav class="site-nav" id="site-navigation" aria-label="Primary navigation">
						<ul class="site-nav__list">
							${pageLinks.map(([href, label]) => `<li><a href="${href}"${href === pageName ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
						</ul>
					</nav>
					<button class="nav-submit is-disabled" type="button" disabled aria-disabled="true">Submit paper <span aria-hidden="true">↗</span></button>
				</div>
			</header>`;
	}

	const footerTarget = document.querySelector("[data-site-footer]");
	if (footerTarget) {
		footerTarget.innerHTML = `
			<footer class="site-footer">
				<div class="container">
					<div class="site-footer__grid">
						<div class="site-footer__brand">
							<a class="brand-lockup" href="index.html">
								<img src="${escapeHtml(data.hostInstitute.logo)}" alt="${escapeHtml(data.hostInstitute.name)} logo">
								<span class="brand-lockup__text"><span>${escapeHtml(data.conference.shortName)}</span>${escapeHtml(data.conference.fullTitle)}</span>
							</a>
							<p>${escapeHtml(data.conference.tagline)}.</p>
							<div class="site-social" aria-label="Social links">${socialLinks || "<span>Official channels coming soon</span>"}</div>
						</div>
						<div>
							<h2 class="site-footer__heading">Explore</h2>
							<ul class="site-footer__links">${pageLinks.slice(1, 5).map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
						</div>
						<div>
							<h2 class="site-footer__heading">Organized by</h2>
							<p>${escapeHtml(data.hostInstitute.name)}<br>${escapeHtml(data.conference.organizingDepartment)}</p>
							<p>In association with ${escapeHtml(data.partner.fullName)}.</p>
						</div>
						<div>
							<h2 class="site-footer__heading">Contact</h2>
							<p>${escapeHtml(data.contact.address)}</p>
							<p><a href="mailto:${escapeHtml(data.contact.emails[0])}">${escapeHtml(data.contact.emails[0])}</a></p>
						</div>
					</div>
					<div class="site-footer__bottom">
						<span>&copy; ${new Date().getFullYear()} ${escapeHtml(data.conference.shortName)}.</span>
						<span>Conference information is subject to official confirmation.</span>
					</div>
				</div>
			</footer>`;
	}

	if (data.isDraft) {
		const robots = document.querySelector('meta[name="robots"]') || document.createElement("meta");
		robots.name = "robots";
		robots.content = "noindex, nofollow";
		if (!robots.parentElement) {
			document.head.appendChild(robots);
		}

		addHeadMetadata();
		addBackToTop();
		window.setTimeout(addRevealAnimations, 0);
		window.setTimeout(addGalleryLightbox, 0);
		const badge = document.createElement("div");
		badge.className = "draft-badge";
		badge.textContent = "DRAFT - Preview only";
		document.body.appendChild(badge);
	}

	const menuToggle = document.querySelector(".menu-toggle");
	const navigation = document.querySelector(".site-nav");
	if (menuToggle && navigation) {
		menuToggle.addEventListener("click", () => {
			const isOpen = navigation.classList.toggle("is-open");
			menuToggle.setAttribute("aria-expanded", String(isOpen));
			menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
		});

		navigation.addEventListener("click", (event) => {
			if (event.target.matches("a")) {
				navigation.classList.remove("is-open");
				menuToggle.setAttribute("aria-expanded", "false");
				menuToggle.setAttribute("aria-label", "Open navigation");
			}
		});

		document.addEventListener("click", (event) => {
			if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
				navigation.classList.remove("is-open");
				menuToggle.setAttribute("aria-expanded", "false");
			}
		});
	}
})();
