import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "Engineering & Automation — The System Your AI Runs On",
  description: "CRM architecture, workflow automation, data pipelines, and custom software that make AI reliable in production. Built by Orange Labz.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Engineering &amp; Automation</div>
        <h1 style={{ margin: "14px 0" }}>The system your AI runs on.</h1>
        <p className="lead">Agents are only as good as the plumbing beneath them. A decade of production engineering means we build the CRM logic, automation, and software that make AI reliable — not a demo.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/contact">Book a Free AI Audit <ArrowRight size={16}/></Link></div>
      </header>

      <section><div className="wrap">
        <div className="grid2">
          {[["CRM architecture & the Universal Bridge","We don't rebuild your CRM — we make it autonomous. Real-time sync adapters pipe agent state into the tools you already run (Perfex, Zoho, HubSpot, Salesforce), with live conversation state handled on a fast edge layer so nothing lags."],
            ["Workflow automation","Automated logic loops that respond instantly to database changes — lead routing, task creation, escalations — so no lead falls through the cracks between fragmented tools."],
            ["Custom software & web builds","Full-stack engineering (Next.js, Node, Python) for the platforms and products your agents plug into. Production-grade APIs, security layers, and scalable data architecture."],
            ["Data pipelines","Clean, structured, queryable data — the difference between an agent that works and one that hallucinates. Ingestion, dedupe, embedding, and retrieval done properly."]].map(([t,d])=>(
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <p className="mut" style={{fontSize:13, marginTop:16}}>Also available on request inside larger engagements: native iOS/Android and PWA builds — offered when the product needs AI features, never as a standalone service.</p>
      </div></section>

      <CTABand title="Broken plumbing? That's usually where we start." />
    </main>
  );
}
