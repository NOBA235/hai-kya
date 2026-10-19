# Hai Kya? Find it nearby. Without going everywhere.

A prototype for the Hyperbloom October UI/UX and Web Design Hackathon. Search once for an item and see which nearby shops have it, what they quoted, and who has not replied yet.

> **Everything in this prototype is demonstration data.** The shops, prices and replies are invented. No real shop is contacted, and nothing here is real-time. The app says so on every screen.

## Run it (Windows CMD)

```
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check code style and common mistakes |
| `npm run build` | Make the production build (also type-checks) |
| `npx tsx scripts/check-search.ts` | Run the 13 checks on the data and search logic |

## What you can do

- Search by item name, or tap an example search.
- Choose an area, or search all areas. The site never asks for your device location.
- See each shop as Available, Not available or Awaiting reply (icon and word, never colour alone).
- Prices appear only when a shop supplied one. Reply times appear only when a reply exists.
- Filter by status, sort by availability, price or name, and open a shop's details.
- Press **Simulate replies** to watch awaiting shops reply. These replies are labelled as simulated.
- Preview the no-results, empty-area, loading and error states.
- Share or refresh a search: the web address stores it (`?q=charger&area=station-road`).

## How it is built

- Next.js (App Router), React, strict TypeScript, Tailwind CSS, Lucide icons.
- No database, login, paid API or AI provider.

```
src/
  app/          page, layout, design tokens (globals.css)
  components/   small display components (cards, badges, dialog, toolbar, states)
  data/
    demo-data.ts   invented shops, items and replies
    repository.ts  the ONLY file the UI reads data from
  lib/
    types.ts       the shape of the data
    search.ts      pure functions: validate, match, filter, sort
    format.ts      rupees and India-time formatting
scripts/
  check-search.ts  checks for the data and search logic
```

### Why the data layer is separate

Components never import `demo-data.ts`. They call functions in `repository.ts`. To go live, rewrite those functions to call a real API; no component has to change.

## Demo versus production

| Part | In this prototype | In a real product |
| --- | --- | --- |
| Shops, items, replies | Invented, in `demo-data.ts` | Shops onboarded and verified |
| "Looking up" pause | A short fake delay | A real request |
| Pending to reply | Button press, labelled simulated | Shops reply in real time |
| Error state | A demo switch forces it | Real network failures |
| Distance and map | Not shown (no location data) | Only with the person's permission |

## Deploy (Vercel)

No environment variables are needed.

1. Push the project to GitHub:
   ```
   git add .
   git commit -m "Hai Kya prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/hai-kya.git
   git push -u origin main
   ```
2. In Vercel, choose **Add New Project**, import the repository, and press **Deploy**.
3. Open the live link in a private window and run through the demo once.

Or from the terminal: `npx vercel` for a preview, then `npx vercel --prod`.
