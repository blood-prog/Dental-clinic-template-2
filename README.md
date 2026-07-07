# AsmSmile Dental Clinic

A modern, responsive dental clinic website and admin dashboard with a warm clinical aesthetic. Built with Tailwind CSS, DM Serif Display + Hanken Grotesk typography, and a Material Design 3 color system.

## Features

### Website
- **Home** — Brand hero section with appointment CTA
- **Services** — 4 service cards (Whitening, Braces, Invisalign, Root Canal) with scroll marquee
- **Doctors** — Team profiles + collaborative care bento section
- **Reviews** — Patient testimonials with star ratings and category filters
- **Shop** — Product grid with add-to-cart interaction
- **Appointment** — Full booking form with service selection, date/time picker, and patient details

### Admin Dashboard
- **Overview** — Analytics cards (visits, unique visitors, appointments, conversion rate) + 30-day chart + live visitor counter
- **Appointments** — Editable table with status management (Pending/Confirmed/Completed/Cancelled), filtering, pagination, and CSV export
- **Analytics** — Detailed metrics (avg duration, bounce rate, top service) + daily visitors chart
- **Settings** — Clinic name, auto-confirm toggle, data retention
- All data persisted via `localStorage`

## Design System

- **Colors:** M3 palette with warm pastels (primary: #5d613b, surface: #f9f9f7)
- **Typography:** DM Serif Display (headings) + Hanken Grotesk (body)
- **Shapes:** Large-radius corners, pill buttons, circular motifs
- **Spacing:** 8px scale, 120px section gaps, 1280px container max

## Tech Stack

- HTML5 / Tailwind CSS (CDN)
- Google Fonts (DM Serif Display, Hanken Grotesk)
- Material Symbols + Font Awesome icons
- Vanilla JavaScript (no frameworks)
- Canvas API for charts

## Deployment

Deploy the two HTML files to any static host:

| File | Purpose |
|------|---------|
| `smilix.html` | Public-facing website |
| `dashboard.html` | Admin dashboard |

**Recommended free hosts:** Cloudflare Pages, Vercel, Netlify, GitHub Pages.

## Analytics (recommended)

1. Deploy [Umami](https://umami.is) on Railway (free tier) or use [Plausible](https://plausible.io) self-hosted
2. Add the tracking script to `<head>` of `smilix.html`
3. Link the analytics dashboard from the admin sidebar

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/asm-smile.git

# Open the website
open smilix.html

# Open the admin dashboard
open dashboard.html
```

## License

MIT
