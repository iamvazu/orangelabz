import { MessageCircle } from "lucide-react";
import { LeadForm, WA } from "@/components/site";

export const metadata = {
  title: "Contact — Book a Free AI Audit",
  description: "Book a free 45-minute AI audit with Orange Labz. We map the highest-ROI use case in your business and hand you a build plan — whether or not you work with us.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Contact</div>
        <h1 style={{ margin: "14px 0" }}>Let&apos;s find where AI pays for itself in your business.</h1>
        <p className="lead">Tell us your enquiry flow, your bottleneck, or your AI idea. On a free 45-minute audit we&apos;ll map the highest-ROI use case and hand you a build plan — whether or not you work with us. If we can&apos;t find ROI, we&apos;ll say so on the call.</p>
      </header>

      <section style={{paddingTop:10}}><div className="wrap">
        <div className="roi" style={{gridTemplateColumns:"1.1fr .9fr"}}>
          <div><LeadForm /></div>
          <div className="result" style={{alignSelf:"start"}}>
            <h3>Faster on WhatsApp</h3>
            <p className="mut" style={{margin:"10px 0 18px", fontSize:14}}>Most of our clients start with a two-line WhatsApp message. We reply within 4 hours on any channel — usually much faster.</p>
            <a className="btn btn-primary" style={{width:"100%",justifyContent:"center"}} href={WA}>
              <MessageCircle size={16}/> Message us on WhatsApp
            </a>
            <div className="line" style={{marginTop:20}}><span>Response time</span><b>&lt; 4 hours</b></div>
            <div className="line"><span>Audit length</span><b>45 minutes</b></div>
            <div className="line" style={{borderBottom:0}}><span>Cost</span><b>Free</b></div>
          </div>
        </div>
      </div></section>
    </main>
  );
}
