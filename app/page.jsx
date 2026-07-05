import Link from "next/link";
import {
  ArrowRight, MessageCircle, Phone, PhoneIncoming, Mail, MessageSquare,
  Search, Brain, Zap, ShieldCheck, Cpu, Boxes, Activity, KeyRound,
} from "lucide-react";
import { Feed, Marquee, ROI, CTABand, WA } from "@/components/site";

export const metadata = {
  title: "Orange Labz — AI That Answers, Qualifies & Books | AI Implementation Firm",
  description:
    "Every missed call is a lead you already paid for. Orange Labz deploys inbound-first AI agents — voice, WhatsApp, SMS, email — on infrastructure you own. TRAI-aware, DPDP compliant.",
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow fade-in" style={{ "--d": "150ms" }}>AI Implementation Firm · TRAI-aware · DPDP compliant · Bengaluru</div>
            <h1 style={{ margin: "16px 0" }}>
              <span className="hw"><span style={{ "--d": "0ms" }}>Every</span></span>{" "}
              <span className="hw"><span style={{ "--d": "100ms" }}>missed</span></span>{" "}
              <span className="hw"><span style={{ "--d": "200ms" }}>call</span></span>{" "}
              <span className="hw"><span style={{ "--d": "300ms" }}>is</span></span>{" "}
              <span className="hw"><span style={{ "--d": "400ms" }}>a</span></span>{" "}
              <span className="hw"><span style={{ "--d": "500ms" }}>lead</span></span>{" "}
              <span className="hw"><span style={{ "--d": "600ms" }}>you</span></span>{" "}
              <span className="hw"><span style={{ "--d": "700ms" }}>already</span></span>{" "}
              <span className="hw"><span style={{ "--d": "800ms" }}><em>paid</em></span></span>{" "}
              <span className="hw"><span style={{ "--d": "900ms" }}><em>for.</em></span></span>
            </h1>
            <p className="lead fade-in" style={{ "--d": "1000ms" }}>
              Orange Labz deploys AI agents that answer every inbound call in one
              ring, qualify on WhatsApp, and book the meeting — 24/7, in the
              language your market speaks. Built on infrastructure you own. We
              make it work; you keep the system.
            </p>
            <div className="cta-row fade-in" style={{ "--d": "1150ms" }}>
              <Link className="btn btn-primary" href="/contact">
                Book a Free AI Audit <ArrowRight size={16} />
              </Link>
              <a className="btn btn-ghost" href={WA}>
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
          <Feed />
        </div>
        <Marquee />
      </header>

      {/* DUAL PATH */}
      <section>
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">Start here</div>
            <h2>Where is your revenue leaking?</h2>
          </div>
          <div className="grid2">
            <div className="card">
              <div className="ic"><PhoneIncoming size={18} /></div>
              <h3>&ldquo;We spend lakhs on ads, then miss the calls.&rdquo;</h3>
              <p>
                Google and Meta send you buyers. Weekends, after-hours, and busy
                front desks lose them. Our inbound agents answer instantly, book
                the visit, and follow up on WhatsApp — no lead goes cold.
              </p>
              <Link className="go" href="/ai-agents">See AI Agents <ArrowRight size={14} /></Link>
            </div>
            <div className="card">
              <div className="ic"><Brain size={18} /></div>
              <h3>&ldquo;We have an AI idea but no one to build it.&rdquo;</h3>
              <p>
                You know AI belongs somewhere in your business — you just don&apos;t
                have the engineering to make it real and reliable. We do the
                strategy and the build, on a stack you own.
              </p>
              <Link className="go" href="/ai-implementation">See AI Implementation <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars">
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">What we do</div>
            <h2>Three pillars. One outcome: booked revenue.</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <div className="ic"><Boxes size={18} /></div>
              <h3>AI Agents</h3>
              <p>
                Inbound-first agents across voice, WhatsApp, SMS, and email.
                They answer, qualify, book, remind, and re-engage — around the
                clock, logged straight into your CRM.
              </p>
              <Link className="go" href="/ai-agents">Explore <ArrowRight size={14} /></Link>
            </div>
            <div className="card">
              <div className="ic"><Cpu size={18} /></div>
              <h3>AI Implementation</h3>
              <p>
                Custom LLM and agent systems on hardened open-source
                infrastructure (OpenClaw, Hermes) — model-agnostic, integrated
                into your real operations. Strategy that ends in shipped software.
              </p>
              <Link className="go" href="/ai-implementation">Explore <ArrowRight size={14} /></Link>
            </div>
            <div className="card">
              <div className="ic"><Activity size={18} /></div>
              <h3>Engineering &amp; Automation</h3>
              <p>
                The moat. We build the CRM logic, data pipelines, and custom
                software your AI runs on. The agent is only as good as the
                system behind it — we build both.
              </p>
              <Link className="go" href="/engineering">Explore <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT ROSTER — inbound first */}
      <section id="agents">
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">The roster</div>
            <h2>The agents we deploy.</h2>
            <p className="lead" style={{ marginTop: 10 }}>
              Engineered per business on our orchestration layer — not templates.
              Inbound capture leads; everything else compounds it.
            </p>
          </div>
          <div className="agents">
            {[
              [<PhoneIncoming size={18} key="a" />, "Inbound Voice Agent", "FLAGSHIP",
                "Answers every call in one ring — nights, Sundays, festival weekends. Qualifies, handles objections, books the site visit or consult, and logs it to your CRM before the call ends."],
              [<MessageCircle size={18} key="b" />, "WhatsApp Agent", "WhatsApp",
                "Official Cloud API. Picks up the thread the moment a call ends — brochure, location pin, cost sheet, reminders — in Hinglish, Tamil, Telugu, whatever your buyer speaks."],
              [<Mail size={18} key="c" />, "Email Agent", "Email",
                "Threaded follow-ups, cost sheets, and inbound triage that read like a person wrote them. Built for longer B2B consideration cycles."],
              [<MessageSquare size={18} key="d" />, "SMS Agent", "SMS",
                "DLT-registered reminders, confirmations, and re-engagement where WhatsApp and email don't land."],
              [<Search size={18} key="e" />, "Prospector", "Multi",
                "Scans IndiaMART, Justdial, LinkedIn, and MSME data for buyers matching your ICP — and responds inside the 90-second window that wins the deal."],
              [<Brain size={18} key="f" />, "Memory & Deal Intel", "System",
                "Remembers every signal across calls, chats, and emails for months. Scores pipeline, flags at-risk deals, and greets repeat callers by name."],
            ].map(([ic, n, ch, d], k) => (
              <div className="agent" key={k}>
                <div className="name">
                  <span className="ic">{ic}</span>
                  <div>
                    <b>{n}</b><br />
                    <span className={ch === "FLAGSHIP" ? "tag hot" : "tag"}>{ch}</span>
                  </div>
                </div>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="mut" style={{ fontSize: 13, marginTop: 14 }}>
            Outbound AI calling is available as a compliance-gated add-on —
            140-series numbers, DLT consent, DND scrubbing, and AI disclosure
            included, or we don&apos;t dial. <Link href="/ai-agents" style={{ color: "var(--ember2)" }}>How we stay TRAI-clean →</Link>
          </p>
        </div>
      </section>

      {/* OWNERSHIP BAND */}
      <section>
        <div className="wrap">
          <div className="own">
            <div>
              <div className="eyebrow">The Orange Labz difference</div>
              <h2 style={{ margin: "10px 0 12px" }}>You own the system.<br />We make it work.</h2>
              <p className="lead">
                SaaS platforms rent you access, lock in your data, and mark up
                every message. We build your AI engine as a corporate asset —
                a dedicated, single-tenant instance deployed in AWS Mumbai,
                under your name.
              </p>
            </div>
            <ul>
              <li><b>Your instance, your data.</b> Source-available stack deployed into a container you own. Leave anytime — it keeps running.</li>
              <li><b>Your vendor accounts.</b> Meta, telephony, and model usage billed to you at cost. Zero middleman markup.</li>
              <li><b>Hardened open source.</b> Built on OpenClaw and Hermes — we harden, patch, and secure it under a managed retainer.</li>
              <li><b>Compliance included.</b> DPDP data residency, TRAI-aware calling, AI disclosure by default.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">The engagement</div>
            <h2>From first call to live agents in 14 days.</h2>
          </div>
          <div className="grid4">
            {[
              ["01", "AI Audit", "3 days mapping your enquiry flow, missed-call volume, and stack. We find where AI pays for itself fastest — and tell you if it doesn't."],
              ["02", "Architecture", "Each agent gets a job, a channel, a script, a memory, and a trigger. Compliance mapping (DLT, number series, disclosures) happens here."],
              ["03", "Concierge setup", "We sit with you and set up Meta Business Manager, WhatsApp Cloud API, telephony, and CRM sync on a screen-share. No onboarding cliff."],
              ["04", "Run & improve", "We operate, monitor, and tune the agents under a managed retainer. Weekly reports. You watch booked visits climb."],
            ].map(([n, t, d]) => (
              <div className="step" key={n}>
                <div className="n">{n}</div><h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section>
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">Compliant by design</div>
            <h2>Other tools get phone lines banned. Ours are built for TRAI.</h2>
          </div>
          <div className="comp">
            {[
              [<ShieldCheck size={18} key="1" />, "TRAI-clean calling",
                "140/160-series number routing, real-time DND scrubbing at dial-time, and mandatory AI disclosure on every automated call."],
              [<KeyRound size={18} key="2" />, "DPDP data sovereignty",
                "Your customer data lives in your dedicated AWS Mumbai container. No multi-tenant SaaS ever touches it. Zero training on your data."],
              [<Zap size={18} key="3" />, "Official channels only",
                "WhatsApp via the official Meta Cloud API under your verified business — never unofficial wrappers that get numbers banned at 2 AM."],
            ].map(([ic, t, d], k) => (
              <div className="item" key={k}>
                <div className="ic" style={{ marginBottom: 10 }}>{ic}</div>
                <b>{t}</b><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section id="roi">
        <div className="wrap"><ROI /></div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section>
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">Built per vertical</div>
            <h2>Blueprints, not blank prompts.</h2>
          </div>
          <div className="grid3">
            <div className="card flag">
              <span className="tag hot">FLAGSHIP VERTICAL</span>
              <h3 style={{ marginTop: 12 }}>Real Estate</h3>
              <p>
                Your ads ring on Sunday afternoon. Nobody answers. We fix the
                leaking bucket: every call answered, every buyer on WhatsApp,
                every site visit booked and reminded.
              </p>
              <Link className="go" href="/industries/real-estate">The Real Estate blueprint <ArrowRight size={14} /></Link>
            </div>
            <div className="card">
              <h3>Premium Clinics &amp; Diagnostics</h3>
              <p>
                IVF, dental, aesthetics, scans — patients call once, then click
                the next Google result. Instant answers, confirmed slots, DPDP-grade
                data sovereignty.
              </p>
              <Link className="go" href="/industries#clinics">Explore <ArrowRight size={14} /></Link>
            </div>
            <div className="card">
              <h3>Test Prep · Industrial · Auto</h3>
              <p>
                Counseling sessions booked for coaching institutes; 90-second RFQ
                response for IndiaMART manufacturers; test drives booked for
                dealerships.
              </p>
              <Link className="go" href="/industries">All industries <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section>
        <div className="wrap">
          <div className="shead">
            <div className="eyebrow">Three ways in</div>
            <h2>Managed, owned, or enterprise.</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <span className="tag">TIER 1 · SMB</span>
              <h3 style={{ marginTop: 12 }}>Jugaad Managed</h3>
              <p>We host and run everything. Low setup, monthly fee, and a share of booked outcomes — we win when you win.</p>
            </div>
            <div className="card flag">
              <span className="tag hot">TIER 2 · CORE</span>
              <h3 style={{ marginTop: 12 }}>Build &amp; Manage</h3>
              <p>Your own single-tenant AI engine, built as a capital asset. One-time engineering fee + flat managed-infrastructure retainer.</p>
            </div>
            <div className="card">
              <span className="tag">TIER 3</span>
              <h3 style={{ marginTop: 12 }}>Enterprise</h3>
              <p>Custom scope, compliance-heavy deployments, named SLA, dedicated engineering pod.</p>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className="btn btn-ghost" href="/pricing">Full pricing &amp; what&apos;s included <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
