import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "AI Commerce — Stores That Sell, Recover & Support on Autopilot",
  description: "WhatsApp shopping agents, cart recovery, AI product content, and support automation on Shopify or headless — built and run by Orange Labz.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">AI Commerce</div>
        <h1 style={{ margin: "14px 0" }}>Turn your store into a 24/7 revenue engine.</h1>
        <p className="lead">We don&apos;t just build storefronts — we wire AI into the whole funnel so it sells, recovers, and supports on its own. Built on Shopify or headless, with agents on top.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/contact">Book a Free AI Audit <ArrowRight size={16}/></Link></div>
      </header>

      <section><div className="wrap">
        <div className="grid3">
          {[["WhatsApp commerce agents","Catalogue browsing, order updates, and checkout nudges in the channel your buyers actually open."],
            ["Cart & re-engagement recovery","Personalised recovery across WhatsApp, SMS, and email — not a generic discount blast."],
            ["AI product content at scale","Descriptions, variants, and SEO/PSEO collection pages generated and kept fresh."],
            ["Support deflection","'Where's my order', sizing, and returns answered instantly, with human escalation when it matters."],
            ["Storefront build & migration","High-performance Shopify or headless builds — delivered inside the AI engagement."],
            ["Commerce analytics","Cohorts, LTV, and repeat-purchase signals surfaced automatically."]].map(([t,d])=>(
            <div className="item" key={t}><b>{t}</b><p>{d}</p></div>
          ))}
        </div>
      </div></section>

      <CTABand title="Your store never sleeps. Neither should your sales." />
    </main>
  );
}
