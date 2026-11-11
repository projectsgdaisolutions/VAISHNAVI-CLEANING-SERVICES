# Vaishnavi Glass Cleaning Service

The supplied visual design and page content have been retained. The project now uses **React + Vite + TypeScript**.

## Pages
- Home (`/`)
- About Us (`/about`)
- Our Services (`/services`)
- Gallery (`/gallery`)
- Contact Us (`/contact`)

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deployment
A Vercel rewrite (`vercel.json`) and a Netlify-style `_redirects` file are included so direct visits/reloads on `/about`, `/services`, `/gallery`, and `/contact` resolve to the SPA entry point.

## WhatsApp enquiries
The three supplied WhatsApp contact numbers remain available in the header, floating contact shortcuts, service enquiry links, and booking form.

## Images and branding
The supplied local logo and image assets are retained. Main page/service visuals now reference local supplied assets rather than depending on third-party image hosts, which helps prevent missing images when deployed.

## GD AI Solutions
The footer includes a hyperlink to https://www.gdaisolutions.com/.

## Notes
This remains a frontend website with WhatsApp-based enquiry submission; it does not store bookings in a backend/database.
