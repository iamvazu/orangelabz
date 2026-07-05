import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "About — Engineers Who Got Tired of AI Theatre",
  description: "Orange Labz is an AI implementation firm from Bengaluru. Built by engineers; inbound-first agents on client-owned infrastructure, compliant by design.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">About Orange Labz</div>
        <h1 style={{ margin: "14px 0" }}>Engineers who got tired of AI theatre.</h1>
        <p className="lead">Orange Labz started as a product and engineering team. We watched companies pay for &ldquo;AI&rdquo; that never shipped and pilots that died in slide decks — so we built a firm that ships, and a model where the client owns what we build.</p>
      </header>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">The story</div><h2>From Jugaad to Orange Labz.</h2></div>
        <p className="lead" style={{maxWidth:"70ch"}}>Six months ago we launched Jugaad AI — autonomous agents built for Indian businesses on a model-agnostic stack. It worked, and it taught us two things: the fastest ROI in Indian business is the inbound call nobody answers, and nobody wants to rent another SaaS. Orange Labz is that learning, grown up: the same engineering, now packaged as a Done-For-You implementation firm where you own the instance, the data, and the vendor relationships — and we keep it running, secure, and improving.</p>
      </div></section>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">What we believe</div><h2>Four rules we don&apos;t break.</h2></div>
        <div className="grid2">
          {[["AI should own a number","An agent that can't point to booked visits, scheduled consults, or qualified RFQs is a toy. Everything we deploy reports one metric."],
            ["Ownership beats rent","We build corporate assets, not subscriptions. Your instance, your data, your vendor bills at cost. Our retainer earns its keep or you leave — with the system."],
            ["Compliance is a feature","TRAI, DLT, DPDP — we build the rules into the system. The pitch writes itself: other tools get phone lines banned; ours are engineered for India."],
            ["Honesty over hype","We build on hardened open-source infrastructure and say so. We tell you when AI isn't the answer. Fabricated case studies destroy trust in this market faster than anything — so we only publish what we can prove."]].map(([t,d])=>(
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div></section>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">The team</div><h2>A tight team of engineers and operators.</h2></div>
        <p className="lead">[Add real founders/team here with real LinkedIn links — names, one-line backgrounds, photos. Nothing invented: this section gets background-checked by every serious prospect.]</p>
      </div></section>

      <CTABand />
    </main>
  );
}
