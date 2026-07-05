import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "AI Implementation & Consulting — Custom LLM & Agent Systems",
  description: "AI strategy that ends in shipped software. Custom agent systems on hardened open-source infrastructure, RAG, model selection, and integration — on a stack you own.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">AI Implementation &amp; Consulting</div>
        <h1 style={{ margin: "14px 0" }}>AI strategy that ends in shipped, working software.</h1>
        <p className="lead">We audit where AI pays off, design the system, build it on a model-agnostic stack, and integrate it into your real operations — not a sandbox. Then we run it.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/contact">Book a Free AI Audit <ArrowRight size={16}/></Link></div>
      </header>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">What we build</div><h2>From audit to production.</h2></div>
        <div className="grid3">
          {[["AI Opportunity Audit","Fixed-scope engagement: we map your stack, find the highest-ROI use cases, and return a build plan with effort, cost, and expected return. If AI isn't the answer, the audit says so."],
            ["Custom agent & LLM systems","Multi-agent architectures on our orchestration layer — built on hardened open-source infrastructure (OpenClaw, Hermes) that we deploy, secure, and maintain in your instance."],
            ["RAG & knowledge systems","Your documents, tickets, and records turned into a reliable, queryable brain for agents and staff alike."],
            ["Predictive analytics & BI","Forecasting, anomaly detection, and risk scoring wired into dashboards your team already opens."],
            ["Integration & deployment","CRM, WhatsApp, voice, email, payments, and data — connected, monitored, and maintained under a managed retainer."],
            ["Compliance engineering","DPDP data-residency architecture, TRAI-aware calling flows, consent and disclosure logic built into the system, not bolted on."]].map(([t,d])=>(
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div></section>

      <section><div className="wrap">
        <div className="own">
          <div>
            <div className="eyebrow">Honest stack</div>
            <h2 style={{margin:"10px 0 12px"}}>Open source, hardened. Yours, managed.</h2>
            <p className="lead">We don&apos;t pretend to have built a foundation model, and we don&apos;t rent you a black box. We build on the best open agent infrastructure available, harden it for production — security, latency, memory, failover — and deploy it into a single-tenant instance you own.</p>
          </div>
          <ul>
            <li><b>Model-agnostic routing.</b> Each task goes to the best model — Claude, GPT, Gemini, Llama, Mistral, or on-prem — never one vendor&apos;s lock-in.</li>
            <li><b>Real-time where it matters.</b> Live conversation state on an edge store beside the runtime; your CRM stays the clean system of record, synced asynchronously.</li>
            <li><b>Sub-second voice.</b> Streaming STT → reasoning → TTS pipeline engineered for the latency that makes voice feel human.</li>
            <li><b>Central updates, isolated data.</b> One Git push updates every client container; your data never leaves yours.</li>
          </ul>
        </div>
      </div></section>

      <CTABand title="Bring us the idea. We'll bring the build plan." />
    </main>
  );
}
