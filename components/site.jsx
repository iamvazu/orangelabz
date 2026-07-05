"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, MessageCircle, ShieldCheck, Cpu, Activity, PhoneIncoming,
} from "lucide-react";

// TODO before launch: replace with your real WhatsApp Business number
export const WA =
  "https://wa.me/919845240499?text=Hi%20Orange%20Labz%2C%20I%20want%20a%20free%20AI%20audit";

export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <Link className="brand" href="/">
          <img src="/logo-orangelabz-dark-01.png" alt="Orange Labz" style={{ height: "38px", width: "auto" }} />
        </Link>
        <div className="navlinks">
          <Link href="/ai-agents">AI Agents</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/ai-implementation">Implementation</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link className="btn btn-primary" style={{ padding: "9px 15px" }} href="/contact">
            Book a free audit
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Link className="brand" href="/" style={{ marginBottom: 12 }}>
              <img src="/logo-orangelabz-dark-01.png" alt="Orange Labz" style={{ height: "38px", width: "auto" }} />
            </Link>
            <p style={{ maxWidth: "32ch", fontSize: 13.5 }}>
              AI implementation firm. Inbound-first agents, client-owned
              infrastructure, compliant by design. Bengaluru, India.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/ai-agents">AI Agents</Link>
            <Link href="/ai-implementation">AI Implementation</Link>
            <Link href="/engineering">Engineering &amp; Automation</Link>
            <Link href="/ai-visibility">AI Visibility</Link>
            <Link href="/ai-commerce">AI Commerce</Link>
          </div>
          <div>
            <h4>Industries</h4>
            <Link href="/industries/real-estate">Real Estate</Link>
            <Link href="/industries#clinics">Premium Clinics</Link>
            <Link href="/industries#edtech">Test Prep &amp; Ed</Link>
            <Link href="/industries#industrial">B2B Industrial</Link>
            <Link href="/industries#auto">Automotive</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/jugaad-ai">Jugaad AI</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="fbase">
          <span>© 2026 Orange Labz · Jugaad AI is an Orange Labz product</span>
          <span className="mono">TRAI-aware · DPDP compliant · AWS Mumbai · built on hardened open-source agent infrastructure</span>
        </div>
      </div>
    </footer>
  );
}

const FEED = [
  ["10:02", "Inbound Voice", "answered in 1 ring", "missed-call save"],
  ["10:04", "Inbound Voice", "site visit booked", "Sat 11:00 · Whitefield"],
  ["10:05", "WhatsApp Agent", "sent brochure + location pin", "3BHK · Hinglish"],
  ["10:09", "Deal Intel", "flagged hot buyer", "asked about payment plan"],
  ["10:13", "WhatsApp Agent", "visit reminder confirmed", "no-show risk ↓"],
  ["10:17", "Inbound Voice", "after-hours call captured", "Sunday 10:17 PM"],
  ["10:21", "Email Agent", "sent cost sheet follow-up", "threaded reply"],
  ["10:24", "CRM Sync", "lead logged to Perfex", "source: Google Ads"],
];

export function Feed() {
  const [rows, setRows] = useState(FEED.slice(0, 5));
  const i = useRef(5);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setRows((r) => [...r.slice(1), FEED[i.current % FEED.length]]);
      i.current++;
    }, 1900);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="feed">
      <div className="feed-top">
        <span className="dot" /> agents · live · inbound watch&nbsp;
        <span style={{ marginLeft: "auto" }}>client-owned instance · AWS Mumbai</span>
      </div>
      <div className="feed-body">
        {rows.map((r, k) => (
          <div className="frow" key={r[0] + k}>
            <span className="t">{r[0]}</span>
            <span className="a">{r[1]} <b>▸ {r[2]}</b></span>
            <span className="v">{r[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  const items = (
    <>
      <span><b>Answers in 1 ring</b> · 24/7</span>
      <span><b>TRAI-aware</b> 140/160 routing</span>
      <span>DND scrubbing at dial-time</span>
      <span>AI disclosure built-in</span>
      <span><b>DPDP</b> compliant</span>
      <span>AWS Mumbai · single-tenant</span>
      <span>Official WhatsApp Cloud API</span>
      <span>OpenClaw · Hermes runtime</span>
      <span>Claude · GPT · Gemini · Llama</span>
      <span><b>You own the instance</b></span>
    </>
  );
  return (
    <div className="marq">
      <div className="track">{items}{items}</div>
    </div>
  );
}

export function ROI() {
  const [enq, setEnq] = useState(400);      // monthly inbound enquiries
  const [missed, setMissed] = useState(35); // % missed / unanswered today
  const [visitRate, setVisitRate] = useState(30); // % of answered → site visit
  const [closeRate, setCloseRate] = useState(10); // % of visits → deal
  const [value, setValue] = useState(300000);     // revenue per closed deal

  const savedCalls = enq * (missed / 100) * 0.85; // agent captures 85% of missed
  const extraVisits = savedCalls * (visitRate / 100);
  const extraDeals = extraVisits * (closeRate / 100);
  const extraRev = extraDeals * value;
  const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div className="roi">
      <div>
        <div className="eyebrow">The missed-call math</div>
        <h2 style={{ margin: "10px 0 18px" }}>What are unanswered calls costing you?</h2>
        <div className="field"><label>Monthly inbound enquiries (calls + WhatsApp)</label>
          <input type="number" value={enq} onChange={(e) => setEnq(+e.target.value || 0)} /></div>
        <div className="field"><label>% currently missed or answered late</label>
          <input type="number" value={missed} onChange={(e) => setMissed(+e.target.value || 0)} /></div>
        <div className="field"><label>% of answered enquiries that book a visit / consult</label>
          <input type="number" value={visitRate} onChange={(e) => setVisitRate(+e.target.value || 0)} /></div>
        <div className="field"><label>% of visits that close · revenue per deal (₹)</label>
          <div style={{ display: "flex", gap: 10 }}>
            <input type="number" value={closeRate} onChange={(e) => setCloseRate(+e.target.value || 0)} />
            <input type="number" value={value} onChange={(e) => setValue(+e.target.value || 0)} />
          </div></div>
        <p className="mut" style={{ fontSize: 12 }}>
          Assumes the agent captures 85% of currently-missed enquiries. Conservative — it answers 24/7.
        </p>
      </div>
      <div className="result">
        <div className="mut" style={{ fontSize: 13 }}>Revenue recovered per month</div>
        <div className="big">{fmt(extraRev)}</div>
        <div className="line"><span>Missed enquiries captured</span><b>{Math.round(savedCalls)}</b></div>
        <div className="line"><span>Extra visits / consults booked</span><b>{Math.round(extraVisits)}</b></div>
        <div className="line" style={{ borderBottom: 0 }}>
          <span>Extra deals closed</span><b className="net">+{extraDeals.toFixed(1)} / mo</b>
        </div>
        <Link className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 18 }}
          href="/contact">Recover this revenue <ArrowRight size={16} /></Link>
      </div>
    </div>
  );
}

export function CTABand({ title = "Your AI team starts this month.", sub =
  "Free 45-minute audit. A productized pilot you can start fast. If we can't find ROI, we'll tell you on the call." }) {
  return (
    <section id="contact-cta">
      <div className="wrap">
        <div className="final">
          <div className="eyebrow">Start today</div>
          <h2 style={{ margin: "12px 0 4px" }}>{title}</h2>
          <p className="lead" style={{ margin: "0 auto" }}>{sub}</p>
          <div className="checks">
            <span><PhoneIncoming size={15} className="tick" /> Inbound-first</span>
            <span><ShieldCheck size={15} className="tick" /> TRAI &amp; DPDP aware</span>
            <span><Cpu size={15} className="tick" /> Live in 14 days</span>
            <span><Activity size={15} className="tick" /> You own the instance</span>
          </div>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/contact">Book a Free AI Audit <ArrowRight size={16} /></Link>
            <a className="btn btn-ghost" href={WA}><MessageCircle size={16} /> WhatsApp instead</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const [state, setState] = useState("idle");
  async function submit(e) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.target));
    try {
      await fetch("/api/lead", { method: "POST", body: JSON.stringify(data) });
      setState("done");
    } catch { setState("error"); }
  }
  if (state === "done")
    return (
      <div className="result" style={{ textAlign: "center", padding: 40 }}>
        <h3>Got it. We reply within 4 hours.</h3>
        <p className="mut" style={{ margin: "10px 0 18px" }}>Faster on WhatsApp — or jump the queue:</p>
        <a className="btn btn-primary" href={WA}><MessageCircle size={16} /> Continue on WhatsApp</a>
      </div>
    );
  return (
    <form onSubmit={submit}>
      <div className="grid2" style={{ gap: 0, columnGap: 14 }}>
        <div className="field"><label>Full name</label><input name="name" required /></div>
        <div className="field"><label>Work email</label><input name="email" type="email" required /></div>
        <div className="field"><label>Company &amp; role</label><input name="company" /></div>
        <div className="field"><label>Phone (WhatsApp preferred)</label><input name="phone" required /></div>
      </div>
      <div className="field"><label>Industry</label>
        <select name="industry" defaultValue="Real Estate">
          <option>Real Estate</option><option>Premium Clinic / Healthcare</option>
          <option>Test Prep / Education</option><option>B2B Industrial / Manufacturing</option>
          <option>Automotive</option><option>Other</option>
        </select></div>
      <div className="field"><label>What do you need?</label>
        <select name="need" defaultValue="Capture inbound calls & book visits">
          <option>Capture inbound calls &amp; book visits</option>
          <option>WhatsApp qualification &amp; nurture</option>
          <option>Custom AI / LLM system build</option>
          <option>Workflow, CRM &amp; automation</option>
          <option>AI visibility (SEO / GEO / AEO)</option>
        </select></div>
      <div className="field"><label>Your bottleneck, in a sentence or two</label>
        <textarea name="brief" placeholder="e.g. We run Google Ads for 3 projects. Weekend calls go unanswered and leads go cold before Monday." /></div>
      <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}
        disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Book My Free AI Audit"} <ArrowRight size={16} />
      </button>
      {state === "error" && <p className="mut" style={{ marginTop: 10 }}>Something broke — WhatsApp us instead.</p>}
    </form>
  );
}
