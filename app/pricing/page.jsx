import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "Pricing — Managed, Owned, or Enterprise",
  description: "Three ways to work with Orange Labz: Jugaad Managed for SMBs, Build & Manage asset ownership for mid-market, and Enterprise. Transparent, no per-seat SaaS markup.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Pricing</div>
        <h1 style={{ margin: "14px 0" }}>No per-seat SaaS. No message markups. Pick your altitude.</h1>
        <p className="lead">All direct usage — Meta, telephony, model tokens — is billed to your own accounts at cost. We charge for engineering and for keeping the system fast, secure, and improving.</p>
      </header>

      <section><div className="wrap">
        <div className="tiers">
          <div className="tier">
            <span className="tag">TIER 1 · SMB</span>
            <h3 style={{marginTop:12}}>Jugaad Managed</h3>
            <div className="price">₹[10–25K] <span className="per">setup</span></div>
            <span className="per">+ monthly fee + share of booked outcomes</span>
            <ul>
              <li><b>We host, we run.</b> Fastest way to get agents working.</li>
              <li>Inbound voice + WhatsApp agent on our managed cluster</li>
              <li>Vertical blueprint (scripts, objections, flows) included</li>
              <li>Outcome-aligned: we earn a share of verified bookings</li>
              <li>Upgrade path: graduate to your own instance anytime</li>
            </ul>
            <Link className="btn btn-ghost" href="/jugaad-ai" style={{justifyContent:"center"}}>About Jugaad AI <ArrowRight size={16}/></Link>
          </div>

          <div className="tier mid">
            <span className="tag hot">TIER 2 · THE CORE OFFER</span>
            <h3 style={{marginTop:12}}>Build &amp; Manage</h3>
            <div className="price">₹[3.5–7.5L] <span className="per">one-time engineering fee</span></div>
            <span className="per">+ ₹[25–60K]/month managed infrastructure</span>
            <ul>
              <li><b>You own the asset.</b> Dedicated single-tenant instance in AWS Mumbai, under your name.</li>
              <li>Full agent system: inbound voice, WhatsApp, email, SMS, CRM sync</li>
              <li>Concierge onboarding: Meta, WBIZ, telephony, DLT — done with you</li>
              <li>Retainer covers updates, security hardening, backups, prompt tuning, and a 99.5% uptime commitment</li>
              <li>Optional performance bonus per verified booking — measured in your dashboard, not our word</li>
            </ul>
            <Link className="btn btn-primary" href="/contact" style={{justifyContent:"center"}}>Start with an audit <ArrowRight size={16}/></Link>
          </div>

          <div className="tier">
            <span className="tag">TIER 3</span>
            <h3 style={{marginTop:12}}>Enterprise</h3>
            <div className="price">Custom <span className="per">scoped per engagement</span></div>
            <span className="per">compliance-heavy &amp; multi-location deployments</span>
            <ul>
              <li>Named SLA and dedicated engineering pod</li>
              <li>DPDP data-sovereignty architecture &amp; audits</li>
              <li>Multi-brand / multi-location orchestration</li>
              <li>On-prem or private-cloud model hosting available</li>
              <li>Quarterly optimization &amp; compliance reviews</li>
            </ul>
            <Link className="btn btn-ghost" href="/contact" style={{justifyContent:"center"}}>Talk to us <ArrowRight size={16}/></Link>
          </div>
        </div>
        <p className="mut" style={{fontSize:12.5, marginTop:16}}>Ranges shown; exact pricing follows the audit. Third-party licence costs (e.g. CRM licences) are itemised transparently in the setup fee.</p>
      </div></section>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">Straight answers</div><h2>Pricing FAQ</h2></div>
        <details><summary>Why is revenue share only on Tier 1?</summary>
          <p>Because it&apos;s the only tier where we can honestly verify it. On Tier 1 we run the system, so booked outcomes are measured in our infrastructure. On Tier 2 you own the instance and the data — so instead of an unverifiable revenue share, we offer an optional per-verified-booking bonus measured in your own dashboard. We&apos;d rather structure it honestly than promise alignment we can&apos;t enforce.</p></details>
        <details><summary>What exactly do I own on Tier 2?</summary>
          <p>The deployed instance: your configured agent system, CRM, databases, prompts, and integrations, running in a dedicated container under your cloud account, with vendor billing (Meta, telephony, models) in your name. The stack is built on open-source and source-available components — you keep full access and can walk away with it running. Our retainer pays for keeping it updated, secure, and improving; it&apos;s never a hostage fee.</p></details>
        <details><summary>Why a flat retainer instead of per-user or per-minute pricing?</summary>
          <p>Per-seat and per-minute pricing punishes you for growing. Your usage costs already flow to vendors at cost; our retainer is flat because our job — updates, security, tuning, uptime — doesn&apos;t change with your seat count.</p></details>
        <details><summary>What&apos;s the uptime commitment?</summary>
          <p>99.5% with defined response times on Tier 2, and a named custom SLA on Enterprise. We&apos;d rather commit to a number we can defend than print 99.99% and break it.</p></details>
        <details><summary>Can I start small and upgrade?</summary>
          <p>Yes — that&apos;s the design. Start on Jugaad Managed, prove the ROI on real bookings, then graduate to your own instance with the setup fee partially offset by what you&apos;ve already paid.</p></details>
      </div></section>

      <CTABand title="The audit tells you the price — and whether it's worth it." />
    </main>
  );
}
