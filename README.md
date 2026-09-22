# ICETET 2027 Conference Website

Static conference website for **ICETET 2027 - International Conference on Emerging Trends in Engineering and Technology**.

The site uses plain HTML, CSS, and vanilla JavaScript. It has no framework, package manager, or build step, so it can run on GitHub Pages or cPanel shared hosting.

## Run Locally

From the project folder, start any static web server:

```sh
python3 -m http.server 4173
```

Open [http://localhost:4173/](http://localhost:4173/) in a browser. Opening the HTML files directly may work, but a local server is recommended because it matches hosted behavior.

## Project Structure

```text
index.html                  Home page
about.html                  Conference, partner, and host information
call-for-papers.html        Tracks and author guidelines
important-dates.html        Timeline and dates table
committee.html              Committee groups and members
registration.html           Fees, payment, and registration steps
contact.html                Contact details, map, and form
assets/css/style.css        Shared design system and responsive styles
assets/js/layout.js         Shared header, footer, draft mode, and interactions
assets/js/main.js           Home page renderer and countdown
assets/js/pages.js          Inner page renderer
data/site-data.js           Single source of editable conference content
assets/images/              Temporary reference and mapped image assets
docs/PLAN.md                Reference audit and implementation plan
docs/TEST_REPORT.md         Browser and responsive test results
```

## Edit Conference Content

All editable conference content lives in [data/site-data.js](data/site-data.js). Do not duplicate official content in the HTML pages.

### Change a Date

Update the relevant entry in `importantDates`:

```js
{ label: "Paper submission deadline", date: "15 August 2027" }
```

Update `conference.startDateTime` with an ISO date and time to enable the countdown:

```js
startDateTime: "2027-10-15T09:00:00+05:30"
```

If the conference duration is not two days, add an `endDateTime` value so the live and concluded states use the correct end time:

```js
endDateTime: "2027-10-16T17:30:00+05:30"
```

### Add a Speaker

Add an object to the `speakers` array and place the approved photo in `assets/images/`:

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

The page renderers will display the updated data automatically.

### Draft Mode

Keep this setting enabled while content is being prepared:

```js
isDraft: true
```

Draft mode adds the `DRAFT - Preview only` badge and `noindex, nofollow` metadata. Set it to `false` only after the launch checklist is complete.

## Replace Images

The current downloaded images are temporary reference assets. Use [assets/images/IMAGE_MAP.md](assets/images/IMAGE_MAP.md) to see each file's original URL, planned use, and replacement guidance.

To replace an image:

1. Add the approved image to `assets/images/`.
2. Keep the filename simple and lowercase, for example `logo-host-official.png`.
3. Update the matching path in `data/site-data.js` if it is used by a rendered field.
4. Update `IMAGE_MAP.md` with the new filename and replacement note.
5. Check the image's dimensions, alt text context, and file size in the browser.

## Go-Live Checklist

- [ ] Replace ALL reference-site images, logos, and people photos with our own
- [ ] Add the official NIELIT logo with permission
- [ ] Fill in all `[PLACEHOLDER]` values
- [ ] Set `isDraft: false`
- [ ] Test the submission and registration links
- [ ] Confirm the official host institute name, website, address, phones, and emails
- [ ] Add the real Google Map embed URL
- [ ] Confirm dates, timezone, fee amounts, payment account, and publication details
- [ ] Replace `[SITE URL]` in page metadata with the production URL
- [ ] Test the production site at mobile, tablet, and desktop widths
- [ ] Confirm robots and social preview metadata after draft mode is disabled

## Deploy to GitHub Pages

1. Create a GitHub repository and push the project files to the default branch.
2. Open the repository's **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the site and the `/ (root)` folder.
5. Save the setting and wait for the Pages deployment to finish.
6. Open the generated Pages URL and repeat the go-live checks.

Because this is a static site, no build command or server configuration is needed.

## Deploy to cPanel Shared Hosting

1. Open **File Manager** in cPanel.
2. Navigate to the target document root, usually `public_html/` or a domain-specific folder.
3. Upload the project files and folders, preserving the paths exactly.
4. Extract the archive if uploaded as a zip file.
5. Confirm that `index.html` is directly inside the document root.
6. Visit the domain over HTTPS and check every page, asset, form action, and external link.
7. Remove or replace any temporary reference assets before public launch.

The contact form currently uses a `mailto:` placeholder flow. Configure a real hosted form endpoint or server-side mail handler before relying on it for production enquiries.
