import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "Industries — Vertical AI Blueprints",
  description: "Pre-built AI agent blueprints for Real Estate, Premium Clinics, Test Prep, B2B Industrial, and Automotive — each tuned to the vertical's urgency, compliance, and metric.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Industries</div>
        <h1 style={{ margin: "14px 0" }}>Blueprints, not blank prompts.</h1>
        <p className="lead">Every vertical has its own urgency window, compliance load, and one metric that matters. We build pre-mapped agent blueprints per vertical — scripts, objection handling, CRM schema, compliance flow — and deploy the same proven system client after client.</p>
      </header>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">How we choose the play</div><h2>The vertical matrix.</h2></div>
        <div className="vwrap">
          <table className="vtable">
            <thead><tr><th>Vertical</th><th>Lead urgency</th><th>Data sensitivity</th><th>The one metric</th></tr></thead>
            <tbody>
              <tr><td>Real Estate (flagship)</td><td>High</td><td>Medium</td><td>Cost per site visit booked</td></tr>
              <tr><td>Premium Clinics</td><td>Critical</td><td>Very high (DPDP-heavy)</td><td>Cost per appointment scheduled</td></tr>
              <tr><td>Test Prep / Ed</td><td>Medium</td><td>Low</td><td>Cost per counseling session booked</td></tr>
              <tr><td>B2B Industrial</td><td>Severe — 90-second window</td><td>Low</td><td>Cost per qualified RFQ</td></tr>
              <tr><td>Automotive</td><td>High</td><td>Low</td><td>Cost per test drive booked</td></tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <section><div className="wrap">
        <div className="card flag" style={{marginBottom:18}}>
          <span className="tag hot">FLAGSHIP VERTICAL</span>
          <h3 style={{marginTop:12}}>Real Estate — Developers &amp; Premium Brokers</h3>
          <p>Millions spent on Google, Meta, and listing portals — then the ad number rings unanswered on a Sunday afternoon and the buyer calls the next project. Our inbound agent answers instantly, books the site visit, and moves the buyer to WhatsApp where Indian real estate actually happens.</p>
          <div style={{display:"flex", gap:20, flexWrap:"wrap", marginTop:16}}>
            <Link className="go" href="/industries/real-estate">The full Real Estate blueprint <ArrowRight size={14}/></Link>
            <Link className="go" style={{color:"var(--ember2)"}} href="/solutions#real-estate">Explore Real Estate Solutions <ArrowRight size={14}/></Link>
          </div>
        </div>

        <div className="grid2">
          <div className="card" id="clinics">
            <h3>Premium Clinics &amp; Diagnostics</h3>
            <p><b style={{color:"var(--bone)"}}>The pain:</b> a patient calling an IVF clinic, dental hospital, or scan centre wants an answer now. If the front desk is busy, they click the next Google Maps result. <b style={{color:"var(--bone)"}}>The micro-conversion:</b> a confirmed consultation slot or home sample collection. <b style={{color:"var(--bone)"}}>The WhatsApp loop:</b> confirmations, location pins, pre-procedure instructions, report PDFs. <b style={{color:"var(--bone)"}}>The structural win:</b> under DPDP, hospitals are rightly paranoid about multi-tenant SaaS — our single-tenant architecture keeps patient data inside their own dedicated AWS Mumbai container.</p>
            <div style={{display:"flex", gap:20, flexWrap:"wrap", marginTop:16}}>
              <Link className="go" style={{color:"var(--ember2)"}} href="/solutions#premium-clinics">Explore Clinic Solutions <ArrowRight size={14}/></Link>
              <Link className="go" style={{color:"var(--ember2)"}} href="/solutions#diagnostics">Explore Diagnostic Solutions <ArrowRight size={14}/></Link>
            </div>
          </div>
          <div className="card" id="edtech">
            <h3>Test Prep &amp; Study Abroad</h3>
            <p><b style={{color:"var(--bone)"}}>The pain:</b> institutes spend crores on Meta and Google lead forms; anxious parents call directly from the ad, and an enquiry left cold for an hour goes to the competitor. <b style={{color:"var(--bone)"}}>The micro-conversion:</b> a booked diagnostic counseling session or scholarship mock test. <b style={{color:"var(--bone)"}}>The loop:</b> brochures, fee schedules, topper results, mock-test links — with the agent filtering target year, background, and budget before a human counselor ever picks up.</p>
            <div style={{marginTop:16}}>
              <Link className="go" style={{color:"var(--ember2)"}} href="/solutions#test-prep">Explore Test Prep &amp; Ed Solutions <ArrowRight size={14}/></Link>
            </div>
          </div>
          <div className="card" id="industrial">
            <h3>B2B Industrial &amp; Machinery</h3>
            <p><b style={{color:"var(--bone)"}}>The pain:</b> IndiaMART blasts a ₹15-lakh machinery lead to five competitors at once; the vendor who responds in 90 seconds wins, the next-day responder is dead on arrival. <b style={{color:"var(--bone)"}}>The micro-conversion:</b> precise specs extracted into a technical RFQ. <b style={{color:"var(--bone)"}}>The structural win:</b> manufacturers despise SaaS subscriptions but happily invest in capital equipment — our one-time engineering asset model matches exactly how they already buy.</p>
            <div style={{marginTop:16}}>
              <Link className="go" style={{color:"var(--ember2)"}} href="/solutions#industrial">Explore B2B Industrial Solutions <ArrowRight size={14}/></Link>
            </div>
          </div>
          <div className="card" id="auto">
            <h3>Premium Automotive</h3>
            <p><b style={{color:"var(--bone)"}}>The pain:</b> chaotic showroom desks drop calls about test drives, trade-in valuations, and high-margin insurance renewals every day. <b style={{color:"var(--bone)"}}>The micro-conversion:</b> a confirmed home test-drive slot or on-site vehicle evaluation. <b style={{color:"var(--bone)"}}>The loop:</b> digital brochures, on-road price breakdowns, EMI matrices, and RC photo collection for instant trade-in valuation.</p>
            <div style={{marginTop:16}}>
              <Link className="go" style={{color:"var(--ember2)"}} href="/contact?vertical=automotive">Request Custom Auto Blueprint <ArrowRight size={14}/></Link>
            </div>
          </div>
        </div>
      </div></section>

      <CTABand title="Your vertical, our blueprint, live in 14 days." />
    </main>
  );
}
