# ICETET 2027 Conference Website (React)

Static conference website for **ICETET 2027 - International Conference on Emerging Trends in Engineering and Technology**.

This folder was migrated from plain HTML/CSS/JS to **React + Vite** — in this same folder. Same design (`assets/css/style.css`), same images, same content. No new folder was created.

## Run Locally (React)

Requires Node 18+.

```sh
npm install
npm run dev
```

Open the printed Local URL (usually http://localhost:5173/). Client-side routes:

- `/` — Home
- `/about`, `/call-for-papers`, `/important-dates`, `/committee`, `/registration`, `/contact`
- Legacy `.html` URLs (`/about.html`, …) still work — they render the same React pages.

## Build

```sh
npm run build
```

Output goes to `dist/`. The build also copies `index.html` to `404.html` (GitHub Pages SPA fallback) and to `about.html`, `call-for-papers.html`, `committee.html`, `contact.html`, `important-dates.html`, `registration.html` (cPanel static-host support, so refresh/direct visits work without server rewrites).

Preview the production build:

```sh
npm run preview
```

## Project Structure

```text
index.html                  Vite entry (React root)
src/
  main.jsx                  React bootstrap + CSS import
  App.jsx                   Router (clean + .html aliases)
  utils.js                  asset() path helper for base-relative URLs
  data/siteData.js          Single source of editable conference content (ES module)
  components/
    Layout.jsx              Header, footer, topbar, draft mode, back-to-top, reveal
    Hero.jsx                Home hero slider + network canvas
    Countdown.jsx           Conference countdown band
    PageBanner.jsx          Inner-page banner
  pages/
    Home.jsx                Home page
    About.jsx               Conference, partner, host info
    CallForPapers.jsx       Tracks + author guidelines
    ImportantDates.jsx      Timeline + dates table
    Committee.jsx           Committee groups + search
    Registration.jsx        Fees, payment, steps
    Contact.jsx             Contact details, map, form
public/assets/images/       Images served as-is (copied to dist/)
assets/css/style.css        Shared design system (imported by src/main.jsx)
assets/images/              Original image source (mirrored into public/)
legacy-static/              Backup of the original static HTML/JS before migration
data/site-data.js           Legacy content file (use src/data/siteData.js now)
docs/                       Reference audit and plans
```

## Edit Conference Content

All editable conference content lives in [src/data/siteData.js](src/data/siteData.js).

### Change a Date

Update the relevant entry in `importantDates`:

```js
{ label: "Paper submission deadline", date: "15 August 2027" }
```

Update `conference.startDateTime` with an ISO date and time to enable the countdown:

```js
startDateTime: "2027-10-15T09:00:00+05:30"
```

### Add a Speaker

Add an object to the `speakers` array and place the approved photo in `public/assets/images/` (and `assets/images/` to keep the mirror):

```js
{
  name: "Dr. Example Name",
  designation: "Professor",
  organization: "Example Institute",
  photo: "assets/images/speaker-04.jpg"
}
```

### Add a Committee Member

Add a member object to the appropriate group in `committee`:

```js
{
  name: "Dr. Example Name",
  designation: "General Chair, Example Institute",
  photo: "assets/images/committee-08.jpg"
}
```

### Draft Mode

Keep this setting enabled while content is being prepared:

```js
isDraft: true
```

Draft mode adds the `DRAFT - Preview only` badge and `noindex, nofollow` metadata. Set it to `false` only after the launch checklist is complete.

## Replace Images

Place approved images in `public/assets/images/` (deployment source) and mirror them into `assets/images/`. Keep filenames lowercase, e.g. `logo-host-official.png`, then update the matching path in `src/data/siteData.js`.

## Go-Live Checklist

- [ ] Replace ALL reference-site images, logos, and people photos with our own
- [ ] Add the official NIELIT logo with permission
- [ ] Fill in all `[PLACEHOLDER]` values
- [ ] Set `isDraft: false`
- [ ] Test the submission and registration links
- [ ] Confirm the official host institute name, website, address, phones, and emails
- [ ] Add the real Google Map embed URL
- [ ] Confirm dates, timezone, fee amounts, payment account, and publication details
- [ ] Test the production build (`npm run build && npm run preview`) at mobile, tablet, and desktop widths

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. Build locally (`npm run build`) — or use a GitHub Action that runs `npm ci && npm run build`.
3. Publish the `dist/` folder (Pages → Deploy from branch → `gh-pages` branch `/ (root)`, or any static action that uploads `dist/`).
4. `404.html` in `dist/` handles clean-URL fallback automatically.

## Deploy to cPanel Shared Hosting

1. Run `npm run build` locally.
2. Open **File Manager** → target document root (`public_html/` or domain folder).
3. Upload the **contents of `dist/`** (not the project root) — preserving paths.
4. Visit the domain over HTTPS and check every page, asset, form action, and external link.

The contact form currently uses a `mailto:` placeholder flow. Configure a real hosted form endpoint or server-side mail handler before relying on it for production enquiries.

## Legacy Reference

The pre-React static site (original `index.html`, `about.html`, …, `assets/js/`, `data/site-data.js`) is backed up in [legacy-static/](legacy-static/) for reference. Do not deploy it — deploy `dist/` instead.
