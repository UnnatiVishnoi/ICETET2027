# ICETET 2027 Test Report

## Test Date

2026-09-21

## Environment

- Local static server: `python3 -m http.server 4173`
- URL: `http://localhost:4173/`
- Browser validation: Playwright through the VS Code integrated browser
- Pages checked: `index.html`, `about.html`, `call-for-papers.html`, `important-dates.html`, `committee.html`, `registration.html`, `contact.html`
- Viewports checked: 360px, 768px, 1024px, and 1440px wide at 900px height

## Checks Performed

| Check | Result |
| --- | --- |
| All seven pages load | Pass |
| Shared header, main, and footer render | Pass |
| Draft badge renders while `isDraft` is true | Pass |
| No horizontal scrolling at tested viewports | Pass after fixes |
| Browser console errors | None after fixes |
| Failed resource responses | None after fixes |
| Internal HTML navigation targets | Pass |
| Mobile navigation opens and closes | Pass |
| Mobile navigation routes to About page | Pass |
| Gallery lightbox opens | Pass |
| Gallery next-image keyboard control | Pass |
| Gallery Escape-to-close | Pass |
| Responsive registration table remains contained in its scroll wrapper | Pass |
| Contact map placeholder does not request a missing URL | Pass |

## Fixes Applied During Testing

1. Long conference branding in the shared header could create narrow-screen overflow. Added flexible sizing and safe word breaking to the brand lockup.
2. The registration table's intrinsic minimum width escaped its mobile scroll wrapper. Added minimum-width constraints to grid children and a maximum width to the table wrapper.
3. The contact page treated `[GOOGLE MAP EMBED URL]` as a live iframe source and generated a 404. It now renders a clear placeholder card until a real map embed URL is supplied.

## Remaining Draft Items

- Placeholder dates, fees, contact details, URLs, and committee names intentionally remain until official conference information is available.
- The downloaded reference images are temporary and must be replaced with approved ICETET 2027 assets before launch.
- The submission, registration, host website, social, and map links must be tested again after real URLs are entered.
