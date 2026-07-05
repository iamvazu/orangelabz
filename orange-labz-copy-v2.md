# Orange Labz — Website Copy & Positioning v2
## Inbound-First · Ownership-Led · Compliance-as-Moat

> **v2 supersedes v1.** The full page copy now lives *in the site code* (orangelabz-site.zip — every page.jsx contains the final copy). This doc records the strategy, the messaging rules, and the copy skeleton so anyone on the team can extend the site consistently. `[Brackets]` = fill with real, verifiable data before launch.

---

## What changed from v1 → v2 (and why)

1. **Inbound-first, not outbound-first.** TRAI's enforcement regime (140/160-series numbers, DLT consent windows, dial-time DND scrubbing, mandatory AI disclosure, penalties per violation) makes cold outbound AI calling in India a minefield. Meanwhile the proven wedge (see GoSameDay) is *inbound*: missed calls, after-hours, surge overflow. Every hero, roster, and use case now leads with "answer every call, book the visit." Outbound is a **compliance-gated add-on**.
2. **Ownership is the headline hook.** "You own the system. We make it work." Single-tenant instance in AWS Mumbai, vendor billing (Meta/telephony/models) in the client's name at cost, no per-seat SaaS, no message markup. This is the anti-SaaS pitch that matches how Indian mid-market and industrial buyers purchase (capital assets, not subscriptions).
3. **Honest stack language.** Never "our proprietary engines." The stack is **hardened open-source agent infrastructure (OpenClaw, Hermes)** plus **source-available components (Perfex CRM, AgentLabs)** deployed into a client-owned instance. We charge for hardening, integration, and management — that's the retainer's honest job. Never claim "open source you own" for licensed components; say "source-available, your instance, your data, no lock-in." Itemize licence costs in the setup fee.
4. **Compliance is a pillar, not a footnote.** "Other tools get phone lines banned. Ours are built for TRAI." Also DPDP data sovereignty: dedicated container, zero training on client data — the killer pitch for clinics.
5. **Three-tier pricing ladder** (resolves the rev-share vs ownership contradiction):
   - **Tier 1 · Jugaad Managed (SMB):** we host & run → outcome share is *verifiable*, so rev-share lives here only. ₹[10–25K] setup + monthly + share of verified bookings.
   - **Tier 2 · Build & Manage (core):** ₹[3.5–7.5L] one-time engineering fee (framed as capital asset) + ₹[25–60K]/mo managed-infrastructure retainer + *optional per-verified-booking bonus* (measured in the client's own dashboard — never an unverifiable revenue share on an owned instance). SLA: 99.5%, defended, not 99.9% promised and broken.
   - **Tier 3 · Enterprise:** custom scope, named SLA, DPDP-heavy, dedicated pod.
   - Graduation path Tier 1 → Tier 2 with setup partially offset.
6. **Vertical beachhead: Real Estate** (developers + premium brokers). One metric: **cost per site visit booked**. Dedicated flagship page. Follow-on blueprints: Premium Clinics (cost per appointment; DPDP sovereignty pitch), Test Prep/Ed (cost per counseling session), B2B Industrial (cost per qualified RFQ; 90-second window; capital-asset buying behavior), Automotive (cost per test drive).
7. **Brand architecture confirmed:** Orange Labz = the firm (all mid-market/enterprise pitching). Jugaad AI = the managed SMB product tier ("Jugaad the setup. Never the system." — the name is frugal-clever, the engineering is the same hardened stack). AgentLabs/Perfex = ingredient components, not brands we lead with.

---

## Messaging foundation (unchanged rules + new lines)

**Positioning:** Orange Labz is an AI implementation firm. We deploy inbound-first AI agents — voice, WhatsApp, SMS, email — on infrastructure the client owns, with TRAI/DPDP compliance built in, and we run them under a managed retainer.

**Hero line (home):** "Every missed call is a lead you already paid for."
**Ownership hook:** "You own the system. We make it work."
**Compliance hook:** "Other tools get phone lines banned. Ours are built for TRAI."
**Anti-chatbot line (kept):** "Agents that answer, qualify, and book — not chatbots that chat."
**Honesty block (kept):** "We'll tell you when AI isn't the answer."

**The only CTA:** Book a Free AI Audit. Secondary everywhere: WhatsApp.
**Proof rule:** claim → mechanism → number; publish nothing unverifiable. Team section ships with real people or the "tight team" line — never invented bios.

---

## Sitemap (as built)

```
/                          Home — missed-call hero, live feed, dual path, pillars,
                           roster (inbound first), ownership band, 14-day process,
                           compliance grid, missed-call ROI calc, verticals, pricing teaser
/ai-agents                 Roster in depth + TRAI-gated outbound + use cases
/ai-implementation         Audit → build → run; honest-stack ownership band
/engineering               Universal Bridge (CRM sync), automation, custom software,
                           data pipelines; mobile = on-request footnote
/ai-visibility             SEO · PSEO · GEO · AEO
/ai-commerce               Shopify reframed as AI outcome (Tier-3 capability, on-brand)
/industries                Vertical matrix table + 4 secondary vertical cards
/industries/real-estate    FLAGSHIP — Sunday-afternoon hero, 4-step workflow,
                           cost-per-site-visit metric, ROI calc, launch-surge/CP/multi-project
/pricing                   3 tiers + honest FAQ (why rev-share is Tier-1 only, what you
                           own, why flat retainer, 99.5% SLA, graduation path)
/jugaad-ai                 SMB managed tier
/about                     Origin story, four beliefs, [real team]
/contact                   Lead form (→ /api/lead) + WhatsApp panel
```

## Key copy blocks (canonical versions)

**Home hero:** "Every missed call is a lead you already **paid for.** / Orange Labz deploys AI agents that answer every inbound call in one ring, qualify on WhatsApp, and book the meeting — 24/7, in the language your market speaks. Built on infrastructure you own. We make it work; you keep the system."

**Ownership band bullets:** Your instance, your data (leave anytime — it keeps running) · Your vendor accounts at cost, zero markup · Hardened open source (OpenClaw, Hermes) — we harden, patch, secure under retainer · Compliance included (DPDP residency, TRAI-aware calling, AI disclosure by default).

**14-day process:** 01 AI Audit (3 days; we tell you if AI *isn't* the answer) → 02 Architecture (incl. compliance mapping: DLT, number series, disclosures) → 03 **Concierge setup** (Meta Business Manager, WhatsApp Cloud API, telephony, CRM sync — done on a screen-share; kills the onboarding cliff) → 04 Run & improve (managed retainer, weekly reports).

**Real-estate hero:** "Your ads ring on Sunday afternoon. Nobody answers." Workflow: Answer → Book (against real slots, before hang-up) → WhatsApp (brochure/floor plan/pin/cost sheet in seconds) → Remind & log (no-show cuts; ad-source attribution). Metric sentence: "We report one number: cost per site visit booked."

**Jugaad reframe:** "Big-company AI, jugaad economics." / "Jugaad the setup. Never the system."

**Pricing FAQ #1 (the honesty differentiator — keep verbatim):** "Why is revenue share only on Tier 1? Because it's the only tier where we can honestly verify it… We'd rather structure it honestly than promise alignment we can't enforce."

---

## Pre-launch checklist
1. Replace WA number in `components/site.jsx` and all `[bracketed]` figures/pricing sitewide.
2. Wire `/api/lead` to Perfex/webhook; add WhatsApp notification on new lead.
3. Real team + any *verifiable* proof on /about and home trust strip; ship without counters rather than invent.
4. Validate current TRAI/DLT specifics with counsel before printing exact rules in sales collateral.
5. Account for Perfex/AgentLabs licence cost per client inside Tier-2 setup fee.
6. GEO layer: Organization schema is in layout.jsx; add Service + FAQ schema per page, launch /insights (MDX) with buyer-question posts ("cost of missed calls real estate India", "TRAI rules for AI calling 2026", "DPDP compliant AI for clinics").
7. Domain → Vercel; kill the WordPress under-construction page.
