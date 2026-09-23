import { chromium } from '@playwright/test';

const BASE = process.env.CHECK_BASE || 'http://localhost:4174';
const WIDTHS = [320, 375, 390, 414, 430, 768, 820, 1024, 1280, 1366, 1440, 1536, 1920, 2560];
const ROUTES = ['/', '/about.html', '/call-for-papers.html', '/important-dates.html', '/committee.html', '/registration.html', '/contact.html'];

const browser = await chromium.launch();
let failures = 0;

for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await context.newPage();
  for (const route of ROUTES) {
    const url = BASE + route;
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      console.log(`LOAD-FAIL w=${width} ${route} :: ${e.message.split('\n')[0]}`);
      failures++;
      continue;
    }
    await page.waitForTimeout(900);
    const result = await page.evaluate(() => {
      const vw = window.innerWidth;
      const docSW = document.documentElement.scrollWidth;
      const bodySW = document.body.scrollWidth;
      const bad = [];
      const els = document.querySelectorAll('body *');
      for (const el of els) {
        const style = getComputedStyle(el);
        if (style.position === 'fixed' || style.display === 'none' || style.visibility === 'hidden') continue;
        if (el.closest('.dates-table-wrap')) continue; // intentional inner scroll
        // Skip elements visually contained by a clipping ancestor
        // (e.g. decorative hero orbs inside .hero{overflow:hidden}).
        let contained = false;
        let anc = el.parentElement;
        while (anc && anc !== document.body) {
          const ox = getComputedStyle(anc).overflowX;
          if (ox === 'hidden' || ox === 'clip' || ox === 'auto' || ox === 'scroll') { contained = true; break; }
          anc = anc.parentElement;
        }
        if (contained) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        if (r.right > vw + 1 || r.left < -1) {
          let sel = el.tagName.toLowerCase();
          const cls = (el.className && typeof el.className === 'string' ? el.className : '').trim().split(/\s+/).filter(Boolean).slice(0, 3).join('.');
          if (cls) sel += '.' + cls;
          const parent = el.parentElement;
          if (parent && parent.className && typeof parent.className === 'string') {
            const pcls = parent.className.trim().split(/\s+/).filter(Boolean).slice(0, 2).join('.');
            if (pcls) sel = `${parent.tagName.toLowerCase()}.${pcls} > ${sel}`;
          }
          const text = ((el.innerText || '').trim().slice(0, 50) || '').replace(/\s+/g, ' ');
          bad.push({ sel, left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width), text });
          if (bad.length >= 20) break;
        }
      }
      return { vw, docSW, bodySW, bad };
    });
    const pageOverflow = result.docSW > result.vw + 1;
    const status = pageOverflow || result.bad.length ? 'OVERFLOW' : 'ok';
    if (status === 'OVERFLOW') failures++;
    console.log(`${status} w=${width} ${route} docSW=${result.docSW} vw=${result.vw}`);
    for (const b of result.bad.slice(0, 8)) {
      console.log(`    >> ${b.sel} left=${b.left} right=${b.right} w=${b.w} :: "${b.text}"`);
    }
  }
  await context.close();
}
await browser.close();
console.log(failures === 0 ? 'ALL-CLEAR' : `FAILURES=${failures}`);
process.exit(failures === 0 ? 0 : 1);
