import Link from "next/link";
import { ArrowRight, PhoneIncoming, MessageCircle, Mail, MessageSquare, Search, Brain, ShieldCheck } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "AI Agents — Inbound Voice, WhatsApp, SMS & Email",
  description: "Inbound-first AI agents that answer every call, qualify on WhatsApp, and book meetings. TRAI-aware outbound available as a compliance-gated add-on.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">AI Agents</div>
        <h1 style={{ margin: "14px 0" }}>Agents that answer, qualify, and book — not chatbots that chat.</h1>
        <p className="lead">A chatbot answers questions. An agent completes the workflow: it picks up the call, handles the objection, books the slot, sends the WhatsApp follow-up, and writes it all to your CRM. Persistent memory, real tool access, human escalation when it matters.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/contact">Book a Free AI Audit <ArrowRight size={16}/></Link></div>
      </header>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">Inbound first</div>
          <h2>Start where the money is already leaking.</h2>
          <p className="lead" style={{marginTop:10}}>You already pay for every enquiry — ads, listings, aggregators. The cheapest revenue you will ever add is the calls you currently miss. That is why our stack leads with inbound capture, not cold outbound.</p></div>
        <div className="agents">
          {[
            [<PhoneIncoming size={18} key="a"/>,"Inbound Voice Agent","FLAGSHIP","Answers in one ring, 24/7 — after-hours, weekends, festival spikes, front-desk overload. Qualifies with your script, handles fee and location objections, books the visit or consult against real availability, and logs the outcome before hanging up."],
            [<MessageCircle size={18} key="b"/>,"WhatsApp Agent","WhatsApp","Official Meta Cloud API under your verified business. Continues the conversation the second a call ends: brochures, location pins, cost sheets, pre-visit instructions, reminders — in Hinglish and regional languages."],
            [<Mail size={18} key="c"/>,"Email Agent","Email","Threaded follow-ups and inbound triage for longer B2B cycles. Proposals and replies that read like a person wrote them, because context carries across the whole thread."],
            [<MessageSquare size={18} key="d"/>,"SMS Agent","SMS","DLT-registered transactional flows: confirmations, reminders, re-engagement — the channel that lands when nothing else does."],
            [<Search size={18} key="e"/>,"Prospector","Multi","Watches IndiaMART, Justdial, LinkedIn, and MSME data for buyers matching your ICP and responds within the 90-second window that wins the deal."],
            [<Brain size={18} key="f"/>,"Memory & Deal Intel","System","Vector memory across every call, chat, and email, keyed to one customer identity. Greets repeat callers by name, scores pipeline, flags at-risk deals daily."],
          ].map(([ic,n,ch,d],k)=>(
            <div className="agent" key={k}>
              <div className="name"><span className="ic">{ic}</span><div><b>{n}</b><br/><span className={ch==="FLAGSHIP"?"tag hot":"tag"}>{ch}</span></div></div>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">Outbound, done legally</div>
          <h2>Outbound AI calling is a compliance-gated add-on.</h2>
          <p className="lead" style={{marginTop:10}}>TRAI enforcement is at its most aggressive in history. We treat that as a moat, not a footnote — outbound automation ships only with the full compliance layer, or we don&apos;t dial.</p></div>
        <div className="grid3">
          {[["140/160-series routing","Promotional traffic on registered 140-series numbers, transactional on 160-series. Never 10-digit personal numbers for commercial automation."],
            ["DLT consent & DND scrubbing","Consent managed through DLT with expiry windows respected; every list scrubbed against the NCPR at dial-time, not upload-time."],
            ["Mandatory AI disclosure","Every automated call opens with a clear AI disclosure. It's the law — and it builds more trust than pretending."]].map(([t,d])=>(
            <div className="item" key={t}><div className="ic" style={{marginBottom:10}}><ShieldCheck size={18}/></div><b>{t}</b><p>{d}</p></div>
          ))}
        </div>
        <p className="mut" style={{fontSize:12.5, marginTop:16}}>Regulations evolve; we validate current TRAI/DLT requirements per deployment with counsel where needed.</p>
      </div></section>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">Use cases</div><h2>One roster, many jobs.</h2></div>
        <div className="grid3">
          {[["Missed-call recovery","Every unanswered ring becomes an instant callback + WhatsApp thread."],
            ["Site visit / consult booking","The micro-conversion that pays for everything else."],
            ["Lead qualification","Budget, timeline, location, intent — tagged into your CRM automatically."],
            ["No-show reduction","Multi-channel reminders that confirm, reschedule, or escalate."],
            ["Speed-to-lead (B2B)","RFQ enquiries answered in seconds, specs captured, quote triggered."],
            ["Re-engagement","Cold leads from last quarter revived with context, not spam."]].map(([t,d])=>(
            <div className="item" key={t}><b>{t}</b><p>{d}</p></div>
          ))}
        </div>
      </div></section>

      <CTABand title="Tell us the workflow. We'll tell you which agents to deploy." />
    </main>
  );
}
