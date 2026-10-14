# Al Rowaad Dental, Derma & Laser Center — Premium Bilingual Site

Next.js 15 App Router + React 19 + Tailwind CSS 3 + Lucide React. Fully responsive one-page marketing site for a clinic in Deira, Dubai.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm run start
```

Or import the repository into Vercel (Next.js framework, zero build modifications).

## Configure before publishing

1. Set `NEXT_PUBLIC_SITE_URL=https://your-real-domain.ae` (in Vercel settings or `.env.local`). The example domain is **not confirmed to belong to the clinic**.
2. Replace example stock-photo URLs (in `app/globals.css`) with **licensed, genuine photographs** of the clinic and care team. External Unsplash-hosted images require internet access. CSS background colors are provided as fallbacks.
3. Confirm medical licensing, operating hours, any doctor credentials, treatment availability and Google rating with the business owner. Text avoids stating unverified medical accreditations and guarantees.
4. The rating text (5.0 from 15 ratings) reflects user-supplied information and is not a live Google feed. No fictional patient testimonials are included.
5. Replace the Google Maps search URL with the verified Google Business Profile link if available. Verify iframe pin points to the correct location.
6. Ensure the clinic has consent for displaying its logo and any photo assets.

## Included

- Original uploaded logo at `/public/al-rowaad-logo.png`
- English / Arabic switch (saved locally) with genuine translated copy and RTL layout including navigation and booking messages
- Autoplay 5-second hero slider, arrow/dot controls
- Smooth sticky-header-aware nav scrolling
- Three interactive treatment departments and WhatsApp inquiry links
- Clinic information, Google map, telephone and WhatsApp actions
- Mobile sticky conversion bar and floating WhatsApp icon
- Accessibility, `prefers-reduced-motion` and metadata, robots, sitemap and JSON-LD

## Important

A medical website should avoid falsely claiming MOH approval, sterilization guarantees, fabricated verified reviews, specific doctors' qualifications, or guaranteed outcomes without evidence. Those claims are deliberately not made.
