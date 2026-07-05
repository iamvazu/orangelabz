import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "Jugaad AI — The Managed AI Suite for SMBs",
  description: "Jugaad AI by Orange Labz: inbound voice + WhatsApp agents, hosted and run for you. Low setup, monthly fee, and a share of booked outcomes — we win when you win.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Jugaad AI · an Orange Labz product</div>
        <h1 style={{ margin: "14px 0" }}>Big-company AI, jugaad economics.</h1>
        <p className="lead">India runs on jugaad — doing more with less, cleverly. Jugaad AI is our managed agent suite for SMBs: we host it, we run it, you get answered calls and booked meetings from week two. No infrastructure to own, no team to hire.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/contact">Start a pilot <ArrowRight size={16}/></Link></div>
      </header>

      <section><div className="wrap">
        <div className="grid3">
          {[["We host, we run","Your agents live on our managed cluster in AWS Mumbai. Zero setup burden on your side beyond a WhatsApp verification we do with you."],
            ["Outcome-aligned pricing","Low setup + monthly fee + a share of verified booked outcomes. Because we run the system, the numbers are measurable — so the alignment is real, not marketing."],
            ["The graduation path","Prove ROI on Jugaad Managed, then graduate to your own Build & Manage instance — with your history, prompts, and data migrating with you."]].map(([t,d])=>(
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <p className="mut" style={{fontSize:13, marginTop:16}}>Serious mid-market or compliance-heavy requirement? Start directly at <Link href="/pricing" style={{color:"var(--ember2)"}}>Build &amp; Manage</Link> — the tier where you own the instance.</p>
      </div></section>

      <CTABand title="Jugaad the setup. Never the system." sub="The name means clever frugality — the engineering underneath is the same hardened stack our enterprise clients run." />
    </main>
  );
}
