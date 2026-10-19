# Hai Kya? Submission pack

Fill in the three `[ ]` links before you submit.

## Tagline

Find it nearby. Without going everywhere.

## Short description (elevator pitch)

Hai Kya? lets you search once to see which nearby shops have the item you need, what they quoted, and who has not replied yet, so you stop walking from shop to shop.

## About the project (paste into Devpost)

### The problem

In smaller Indian towns, local shops are where people still find textbooks, chargers, stationery and household items. Finding one specific item usually means visiting several shops or phoning them one by one. That costs time, and the person has no way to compare.

### The idea

Search once. Hai Kya? shows the nearby shops that were asked, with a clear answer from each: available, not available, or awaiting reply. When a shop shares a price, it is shown. When it has not replied, the screen says so instead of guessing. You compare and choose where to go.

### What you can try

- Search an item by name or tap an example search.
- Choose an area, or search all areas.
- Filter by availability and sort by availability, price or name.
- Open any shop to see its address, reply time and note.
- Press **Simulate replies** to see an awaiting shop turn into a result.
- See the no-results, empty-area, loading and error states.

### Design decisions

- **Honest by design.** Every screen carries a demo notice. Prices and reply times show only when they exist in the data. Simulated replies are labelled. There is no fake distance, map, statistic or testimonial.
- **Status is never colour alone.** Each status has its own icon shape and its own word.
- **Useful in 30 seconds.** The search is at the top, example searches run in one tap, and a sample of replies is shown before the first search.
- **Mobile first.** Buttons and inputs are at least 44 pixels tall, text is 16 pixels so phones do not zoom, and the layout was checked from 320 pixels wide upward with no sideways scrolling.
- **Privacy by default.** The person chooses an area. The site never asks for their device location.
- **A restrained identity.** Warm off-white, dark ink and one deep green. A serif for headlines, a clean sans for everything else. Two corner sizes, one light shadow.

### Accessibility

Visible labels on every field, a skip link, visible focus rings, keyboard use throughout, errors announced to screen readers, focus moved to the results after a search, a modal dialog that traps focus and closes with Esc, and reduced-motion support. Colour pairs were checked against WCAG contrast ratios, and an automated accessibility scan (axe) reported no violations on the main screens.

### How it is built

Next.js (App Router), React, strict TypeScript and Tailwind CSS, with Lucide icons. A typed demo data layer is kept separate from the display components, so a real backend can replace it without changing the interface. The search is stored in the web address, so refresh, Back and shared links restore the same results.

### What is real and what is a prototype

Real and working: the search, matching, area selection, filtering, sorting, details dialog, all states, keyboard and screen-reader support, and the shareable links.

Prototype: the shops, prices and replies are invented demo data, and nothing is real-time. Shops would need to be onboarded and able to reply for the product to work in a town.

### What is next

- Let a shop answer a request from its phone in one tap.
- Add areas and shops for a first real town.
- Optional, permission-based distance once real shop locations exist.

## Built with

Next.js, React, TypeScript, Tailwind CSS, Lucide

## Links

- Live demo: [ ]
- Code repository: [ ]
- Demo video (if required): [ ]

## Demo script (about 90 seconds)

1. **Open the site (0:00).** "Hai Kya? helps you find which nearby shops have what you need, without visiting five." Point at the demo banner: "Everything here is clearly labelled demo data."
2. **Search (0:10).** Tap **Class 10 maths book**. "Five shops were asked. Each answer has an icon and a word, and a price only when the shop gave one."
3. **Compare (0:30).** Tap **Available**, then change **Sort by** to **Lowest price**. Open the cheapest shop's **View details**, then press Esc.
4. **Pending to result (0:50).** Tap **Simulate replies**. "This is a labelled demo: the awaiting shop answers, and the card says it was simulated."
5. **Edge cases (1:05).** Tap **Start over**, search "ukulele" for the no-results state, then tick the demo switch and search to show the error and **Try again**.
6. **Close (1:20).** Narrow the browser to phone width, press Tab to show the skip link and focus rings. "Everything here is demo data; the interface and data layer are ready for real shops."

## 30-second path for judges

Open the link, tap **Phone charger**, tap **View details** on a shop, tap **Simulate replies**.

## Final submission checklist

- [ ] Live link opens in a private window and the demo works on a phone
- [ ] `npm run build` passes locally before deploying
- [ ] Repository is public (or shared as the rules require)
- [ ] README renders correctly on GitHub
- [ ] Devpost title, tagline and description filled in
- [ ] "Built with" tags added
- [ ] Screenshots added (idle, results on a phone, details dialog, an unavailable or pending state)
- [ ] Video recorded and linked, if the rules require one
- [ ] Re-read the hackathon rules page for any required fields I may have missed
- [ ] Submit before 2:30 AM IST on October 20, 2026, with time to spare
