# Orange Labz — Full Site (Next.js 14, App Router)

Inbound-first AI implementation firm site. Dark console design system,
live agent feed, ROI calculator, TRAI/DPDP compliance positioning,
3-tier pricing, Real Estate flagship vertical.

## Run locally
npm install
npm run dev        # http://localhost:3000

## Deploy (free)
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → deploy. Zero config needed.
3. Point orangelabz.com DNS at Vercel (CNAME → cname.vercel-dns.com).

## Before launch — replace placeholders
- WhatsApp number: components/site.jsx → WA constant
- All [bracketed] proof numbers sitewide (search for "[")
- /app/api/lead/route.js → wire form to your CRM/webhook (currently logs only)
