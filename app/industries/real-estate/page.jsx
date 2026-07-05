import Link from "next/link";
import { ArrowRight, PhoneIncoming, MessageCircle, CalendarCheck, Database } from "lucide-react";
import { CTABand, ROI } from "@/components/site";

export const metadata = {
  title: "AI for Real Estate — Never Miss a Buyer Call Again",
  description: "Inbound AI agents for Indian real estate developers and brokers: every ad call answered in one ring, site visits booked, buyers nurtured on WhatsApp. Metric: cost per site visit booked.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Flagship vertical · Real Estate</div>
        <h1 style={{ margin: "14px 0" }}>Your ads ring on Sunday afternoon. Nobody answers.</h1>
        <p className="lead">Developers pour lakhs into Google, Meta, and listing portals — and then the leads call a number that goes unanswered after hours, on weekends, and during launch-day chaos. That buyer doesn&apos;t wait. They call the next project on the list. We fix the leaking bucket.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/contact">Audit my enquiry flow <ArrowRight size={16}/></Link>
          <Link className="btn btn-ghost" href="/solutions#real-estate">Explore Real Estate Solutions <ArrowRight size={16}/></Link>
        </div>
      </header>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">The workflow</div>
          <h2>One job: book the site visit.</h2>
          <p className="lead" style={{marginTop:10}}>The agent doesn&apos;t close a multi-crore transaction on the phone — nobody does. Its only goal is the micro-conversion that everything else depends on: a confirmed site visit on the calendar. Highly structured, endlessly repeatable, perfect for an AI script.</p></div>
        <div className="grid4">
          {[[<PhoneIncoming size={18} key="1"/>,"01 · Answer","Every inbound call answered in one ring — 11 PM on a Tuesday or 4 PM on Sunday. Project details, pricing brackets, possession dates, RERA basics: handled."],
            [<CalendarCheck size={18} key="2"/>,"02 · Book","Budget, BHK preference, and timeline qualified in the same call; the site visit is booked against real slot availability before the buyer hangs up."],
            [<MessageCircle size={18} key="3"/>,"03 · WhatsApp","Brochure, floor plans, location pin, and cost sheet land on WhatsApp within seconds — because Indian real estate moves on WhatsApp, not email."],
            [<Database size={18} key="4"/>,"04 · Remind & log","Visit reminders cut no-shows; every interaction, source, and signal is logged to your CRM with the ad campaign it came from."]].map(([ic,t,d])=>(
            <div className="step" key={t}><div className="ic" style={{marginBottom:8}}>{ic}</div><h3 style={{fontSize:16}}>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div></section>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">The metric</div><h2>We report one number: cost per site visit booked.</h2>
        <p className="lead" style={{marginTop:10}}>Not impressions, not "engagement" — booked visits, with source attribution, in a dashboard you own. Your marketing spend finally connects to walk-ins.</p></div>
        <ROI />
      </div></section>

      <section><div className="wrap">
        <div className="grid3">
          {[["Launch-day surge cover","Project launches spike 10x call volume for 72 hours. The agent scales instantly; your team focuses on walk-ins."],
            ["Channel partner intake","Broker enquiries qualified and routed separately from direct buyers, with the CP tagged for commission tracking."],
            ["Multi-project routing","One number, many projects: the agent identifies which campaign the buyer saw and answers with that project's script."]].map(([t,d])=>(
            <div className="item" key={t}><b>{t}</b><p>{d}</p></div>
          ))}
        </div>
        <p className="mut" style={{fontSize:13, marginTop:16}}>Works alongside your existing pre-sales team — the agent handles first response and booking; humans take over for negotiation and closing. Tier 1 (managed) and Tier 2 (owned instance) both available for this vertical. <Link href="/pricing" style={{color:"var(--ember2)"}}>See pricing</Link> or <Link href="/solutions#real-estate" style={{color:"var(--ember2)"}}>explore all configuration paths →</Link></p>
      </div></section>

      <CTABand title="How many site visits did you miss last weekend?"
        sub="Bring your ad spend and call logs to a free audit. We'll show you the leak — and the cost per visit after we plug it." />
    </main>
  );
}
