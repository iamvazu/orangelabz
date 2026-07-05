import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, PhoneIncoming, MessageCircle, Search, Mail, ShieldCheck, Cpu, Activity, KeyRound } from "lucide-react";
import { CTABand } from "@/components/site";
import {
  getAllCombinations, getPageData, makeTitle, makeDescription, makeFAQs,
  VERTICALS, AGENTS, LOCATIONS,
} from "@/lib/pseo-data";

/* ── Static Params ─────────────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllCombinations();
}

/* ── Dynamic Metadata ──────────────────────────────────────────────── */
export function generateMetadata({ params }) {
  const data = getPageData(params.vertical, params.agent, params.role, params.location);
  if (!data) return {};
  const title = makeTitle(data);
  return {
    title,
    description: makeDescription(data),
    keywords: `${data.role.title}, ${data.vertical.name} AI agent, ${data.agent.name} ${data.location.name}, AI ${data.role.slug.replace(/-/g, " ")}, enterprise AI ${data.location.name}, OpenClaw, Hermes, TRAI compliance, DPDP, single-tenant AI`,
    openGraph: { title, description: makeDescription(data), type: "website" },
  };
}

/* ── Agent icon helper ─────────────────────────────────────────────── */
function agentIcon(slug) {
  const map = {
    "voice-concierge": <PhoneIncoming size={18} />,
    "whatsapp-sdr": <MessageCircle size={18} />,
    "prospector": <Search size={18} />,
    "emailer": <Mail size={18} />,
  };
  return map[slug] || <Cpu size={18} />;
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function Page({ params }) {
  const data = getPageData(params.vertical, params.agent, params.role, params.location);
  if (!data) notFound();

  const { vertical, agent, role, location } = data;
  const title = makeTitle(data);
  const faqs = makeFAQs(data);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: makeDescription(data),
    author: { "@type": "Organization", name: "Orange Labz", url: "https://orangelabz.com" },
    publisher: { "@type": "Organization", name: "Orange Labz", url: "https://orangelabz.com" },
    about: [
      { "@type": "Thing", name: role.title },
      { "@type": "Thing", name: `${vertical.name} AI Automation` },
      { "@type": "Thing", name: `Enterprise AI in ${location.name}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: `Autonomous ${agent.name} engineered via OpenClaw/Hermes for ${vertical.name.toLowerCase()} operations in ${location.name}. Source-available, single-tenant deployment.`,
    hiringOrganization: { "@type": "Organization", name: "Orange Labz Client Instance" },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: location.name, addressRegion: location.state, addressCountry: "IN" } },
    employmentType: "AI_AGENT",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header className="wrap hero-page">
        <div className="eyebrow">
          {vertical.eyebrow} · {agent.channel} · {location.name}
        </div>
        <h1 style={{ margin: "14px 0" }}>{title}</h1>
        <p className="lead">
          Deploy a source-available, single-tenant AI employee engineered to manage your {agent.name.toLowerCase()} workflows — with zero per-seat markups and absolute data sovereignty under the DPDP Act.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/contact">
            Book a Free AI Audit <ArrowRight size={16} />
          </Link>
          <a className="btn btn-ghost" href="https://wa.me/917483576808?text=Hi%20Orange%20Labz%2C%20I%20want%20a%20free%20AI%20audit">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </header>

      {/* ── AEO DIRECT-ANSWER BLOCK ──────────────────────────────────── */}
      <section><div className="wrap">
        <aside className="aeo-block">
          <div className="aeo-label">What is a {role.title}?</div>
          <p>
            <strong>A {role.title} is an autonomous AI agent that operates as a dedicated {agent.channel.toLowerCase()}-channel employee for {vertical.name.toLowerCase()} businesses.</strong> Unlike a chatbot or SaaS tool, it runs on a single-tenant, source-available infrastructure stack (OpenClaw/Hermes) deployed in your own AWS Mumbai instance. It {agent.shortDesc.charAt(0).toLowerCase() + agent.shortDesc.slice(1).split(".")[0]}. Built for {location.name}, with native support for {location.languages.join(", ")}.
          </p>
        </aside>
      </div></section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
      <section><div className="wrap">
        <div className="own">
          <div>
            <div className="eyebrow">The problem</div>
            <h2 style={{ margin: "10px 0 12px" }}>
              {vertical.metricStat} — {vertical.metricLabel}.
            </h2>
            <p className="lead">{role.problemCopy}</p>
          </div>
          <div>
            <div className="pseo-stat">
              <div className="pseo-stat-number">{vertical.metricStat}</div>
              <div className="pseo-stat-label">{vertical.metricLabel}</div>
            </div>
            <p className="mut" style={{ fontSize: 13, marginTop: 16 }}>
              The metric that matters: <strong style={{ color: "var(--bone)" }}>{vertical.metric}</strong>.
              Not impressions, not leads generated — booked outcomes with source attribution.
            </p>
          </div>
        </div>
      </div></section>

      {/* ── THE AI EMPLOYEE FIX ───────────────────────────────────────── */}
      <section><div className="wrap">
        <div className="shead">
          <div className="eyebrow">The {role.title}</div>
          <h2>How it works — from inbound trigger to CRM log.</h2>
          <p className="lead" style={{ marginTop: 10 }}>{role.solutionCopy}</p>
        </div>
        <div className="grid4">
          {agent.steps.map(([stepTitle, stepDesc], i) => (
            <div className="step" key={stepTitle}>
              <div className="ic" style={{ marginBottom: 8 }}>{agentIcon(agent.slug)}</div>
              <h3 style={{ fontSize: 16 }}>0{i + 1} · {stepTitle}</h3>
              <p>{stepDesc}</p>
            </div>
          ))}
        </div>
      </div></section>

      {/* ── TECHNICAL ARCHITECTURE ────────────────────────────────────── */}
      <section><div className="wrap">
        <div className="shead">
          <div className="eyebrow">Infrastructure</div>
          <h2>Source-available. Single-tenant. Yours.</h2>
        </div>
        <div className="grid3">
          <div className="card">
            <div className="ic"><Cpu size={18} /></div>
            <h3>Your instance, your data</h3>
            <p>
              Deployed as a dedicated container on your AWS Mumbai (ap-south-1) account.
              Source-available OpenClaw/Hermes codebase. You own the system — it keeps
              running even if our relationship ends.
            </p>
          </div>
          <div className="card">
            <div className="ic"><KeyRound size={18} /></div>
            <h3>Direct API billing</h3>
            <p>
              Meta WhatsApp, telephony, and LLM inference billed directly to your vendor
              accounts at cost. Zero middleman markup. Typically 60–70% lower than equivalent
              multi-tenant SaaS.
            </p>
          </div>
          <div className="card">
            <div className="ic"><ShieldCheck size={18} /></div>
            <h3>TRAI &amp; DPDP compliant</h3>
            <p>
              140/160-series SIP routing, real-time DND scrubbing, DLT consent logging,
              mandatory AI disclosure. DPDP data residency enforced architecturally — not
              configured, enforced. {vertical.complianceNote}
            </p>
          </div>
        </div>
      </div></section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
      <section><div className="wrap">
        <div className="shead">
          <div className="eyebrow">Before vs. after</div>
          <h2>What changes when you deploy the {role.title}.</h2>
        </div>
        <div className="vwrap">
          <table className="vtable">
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Before (Manual)</th>
                <th>After ({role.title})</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Response time</td>
                <td>4–6 hours average</td>
                <td>Under 1 ring / instant</td>
              </tr>
              <tr>
                <td>After-hours coverage</td>
                <td>Voicemail or missed</td>
                <td>24/7/365 — no exceptions</td>
              </tr>
              <tr>
                <td>Language support</td>
                <td>English only (usually)</td>
                <td>{location.languages.join(", ")} — auto-detected</td>
              </tr>
              <tr>
                <td>CRM logging</td>
                <td>Manual, inconsistent</td>
                <td>Automatic — {vertical.crmNote}</td>
              </tr>
              <tr>
                <td>Data sovereignty</td>
                <td>Vendor's multi-tenant cloud</td>
                <td>Your AWS Mumbai VPC — DPDP compliant</td>
              </tr>
              <tr>
                <td>Monthly cost structure</td>
                <td>Per-seat SaaS + markup</td>
                <td>AWS compute + direct API at cost</td>
              </tr>
              <tr>
                <td>Vendor exit</td>
                <td>Data export, rebuild from zero</td>
                <td>System keeps running — you own it</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div></section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section><div className="wrap">
        <div className="shead">
          <h2>Frequently asked questions</h2>
        </div>
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div></section>

      <CTABand title={vertical.ctaTitle} />
    </main>
  );
}
