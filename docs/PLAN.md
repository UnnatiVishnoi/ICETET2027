# ICETET 2027 Website Plan

## Reference Audit

Reference: https://www.srms.ac.in/eicbi-26/

The reference is a WordPress conference microsite. Its requested `/important-dates/` route currently returns HTTP 404; the live home page still exposes an event-date block and the site navigation links to that unavailable route. The plan below records the observable structure without copying its conference copy.

## Home Page Breakdown

1. **Global header and navigation**
   - Institutional logo at the left.
   - Conference navigation with Home, About Us, Important Dates, Committee, Registration, and Contact Us routes.
   - Mobile navigation and utility/social links.
2. **Hero / conference banner**
   - Full-width slider-style banner using a conference graphic and a partner/organization visual.
   - Conference edition/title, dates, venue, and a primary registration/action link.
3. **Event facts**
   - Repeated visual fact blocks for event date, location, and organizing department.
4. **About the Conference**
   - Introductory conference description in a text-and-image layout.
   - Brochure download link.
5. **About the partner organization**
   - A separate partner-information section with long-form description and supporting image.
6. **Eminent Speakers**
   - Speaker profile cards with portrait, name, designation, and organization.
7. **Call for Papers**
   - Topic/track groups presented as repeated cards or columns.
   - Decorative background and topic icon imagery.
8. **Organizing Committee**
   - Highlighted leadership cards for patrons, chair, conveners, and organizing secretary.
   - Repeated decorative section background.
9. **Author Guidelines and Publication Opportunities**
   - Bulleted manuscript requirements followed by publication information.
   - Decorative background image.
10. **Glimpses of Past Events**
    - Multi-image gallery of event photographs, with WordPress responsive thumbnail variants.
11. **Footer**
    - Copyright, trust/host link, social links, and repeated conference identity.

## Inner Page Structures

### About Us

- Page title/banner: About Us.
- About the Conference section.
- About the partner organization section.
- About the host institution section.
- About the host department section.
- Shared footer and social links.

### Important Dates

- Requested route: `/eicbi-26/important-dates/` returned HTTP 404 during audit.
- The home page contains the observable date information as event facts, but no independently retrievable inner-page structure was available.
- New site plan: provide a dedicated page with a visual timeline plus an accessible table, sourced from central conference data.

### Committee

- Page title/banner: Committee.
- Organizing Committee heading.
- Leadership profile cards grouped by role: Chief Patron, Patron, Chair Person, Conveners, and Organizing Secretary.
- Conference Coordinators list with name and designation.
- Shared footer and social links.

### Registration

- Page title/banner: Registration.
- Payment Mode section with payment instructions and account/bank details.
- Registration Fee Details table with Indian and foreign delegate categories.
- Register Now form link.
- Shared footer and social links.

### Contact Us

- Page title/banner: Contact Us.
- Contact/institution information presented as expandable institution groups and address blocks.
- Phone, fax, email, and office information.
- Institution and additional-link navigation areas.
- Shared footer and social links.

## Image Inventory From Reference

The URLs below are the unique source assets found in the home page HTML and the requested inner pages. WordPress also exposes responsive derivatives for gallery photographs at `-50x33`, `-112x75`, `-219x146`, `-300x200`, and `-768x512`; those variants are grouped with their original photograph below because they represent the same image.

| Reference image URL | Observed use |
| --- | --- |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2022/01/srms-cet-logo-1.png` | Header, sticky header, and mobile logo |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/EICBI-26-CONFERENCE.jpg` | Hero slider/banner background |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/un-global-india.jpg` | Hero/partner organization visual |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/date.png` | Event date fact icon |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/location.png` | Location fact icon |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/1.png` | About/partner supporting visual |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/2-4.jpg` | About/partner supporting visual |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/aboutconference.jpg` | About the Conference image |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/call.jpg` | Call for Papers parallax background |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/call.png` | Call for Papers repeated track icon |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/event-1.jpg` | Committee/registration parallax background |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2022/01/event.jpg` | Author Guidelines parallax background |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/07/Dr-sachin-varneakr-300x232.jpeg` | Eminent speaker portrait |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/07/md-shahnawaz-abdin-200x300.jpeg` | Eminent speaker portrait |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/07/DR-Debasis-200x300.jpg` | Eminent speaker portrait |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2025/06/Shri-Dev-Murti-Ji.jpg` | Committee portrait, Chief Patron |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2025/06/Prof.-Jay-Prakash-Pandey.jpg` | Committee portrait, Chief Patron |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2025/06/Shri-Aditya-Murti-Ji.jpg` | Committee portrait, Patron |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2025/06/PRABHAKAR-GUPTA.jpg` | Committee portrait, Chair Person |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2025/06/ANUJ-KUMAR.jpg` | Committee portrait, Convener and About page supporting portrait |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2025/06/SAURABH-GUPTA.jpg` | Committee portrait, Convener |
| `https://www.srms.ac.in/eicbi-25/wp-content/uploads/2025/06/MOHD-DANISH-CHISHTI.jpg` | Committee portrait, Organizing Secretary |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2746.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2692.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2689.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2857.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2869.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2862.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2705.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2703.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_0705.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_0591.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2772.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_0545.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2731.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2890.jpg` | Past-events gallery photograph |
| `https://www.srms.ac.in/eicbi-26/wp-content/uploads/2026/06/DSC_2902.jpg` | Past-events gallery photograph |

## Planned Folder Structure

```text
/
├── index.html
├── about.html
├── call-for-papers.html
├── important-dates.html
├── committee.html
├── registration.html
├── contact.html
├── README.md                         # Phase 10
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── layout.js
│   │   └── main.js
│   └── images/
│       ├── IMAGE_MAP.md              # Phase 2
│       └── ...
├── data/
│   └── site-data.js
└── docs/
    ├── PLAN.md
    └── TEST_REPORT.md                # Phase 9
```

## Planned Page List and Sitemap

- `/index.html` - conference home page.
- `/about.html` - conference, NIELIT, host institute, objectives, and audience.
- `/call-for-papers.html` - tracks, topics, author guidelines, and submission link.
- `/important-dates.html` - timeline and table of submission and conference milestones.
- `/committee.html` - complete organizing and technical committees.
- `/registration.html` - fees, inclusions, payment details, and registration flow.
- `/contact.html` - address, contact channels, map, and contact form.

Shared assets will be loaded from `/assets/`; all editable conference content will be centralized in `/data/site-data.js` from Phase 3 onward.
