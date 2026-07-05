import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title:
    "What Are AI Agents? The 2026 Enterprise Architecture Guide — From LLM Wrappers to Autonomous Revenue Engines",
  description:
    "A deep technical breakdown of AI agents in 2026: multi-agent orchestration, source-available single-tenant infrastructure, sub-600ms voice latency, TRAI compliance, and DPDP data sovereignty. Built for Indian enterprise verticals by Orange Labz.",
  keywords:
    "AI agents, what are AI agents, enterprise AI infrastructure, AI voice agents India, inbound voice concierge, OpenClaw framework, Hermes orchestration, source-available AI, TRAI compliance AI, DPDP data sovereignty, Jugaad AI, Perfex CRM integration, single-tenant AI deployment",
  openGraph: {
    title:
      "What Are AI Agents? The Definitive 2026 Enterprise Architecture Guide",
    description:
      "From LLM wrappers to autonomous revenue engines. Deep technical breakdown of multi-agent orchestration, compliance-first infrastructure, and single-tenant ownership models for Indian enterprise.",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "What Are AI Agents? The 2026 Enterprise Architecture Guide — From LLM Wrappers to Autonomous Revenue Engines",
  description:
    "A deep technical breakdown of AI agents in 2026: multi-agent orchestration, source-available single-tenant infrastructure, sub-600ms voice latency, TRAI compliance, and DPDP data sovereignty.",
  author: {
    "@type": "Organization",
    name: "Orange Labz",
    url: "https://orangelabz.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Orange Labz",
    url: "https://orangelabz.com",
  },
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://orangelabz.com/blog/what-are-ai-agents",
  },
  about: [
    { "@type": "Thing", name: "Artificial Intelligence Agents" },
    { "@type": "Thing", name: "Enterprise AI Infrastructure" },
    { "@type": "Thing", name: "Voice AI" },
    { "@type": "Thing", name: "Multi-Agent Orchestration" },
  ],
  keywords:
    "AI agents, enterprise AI infrastructure, inbound voice concierge, OpenClaw, Hermes, TRAI compliance, DPDP, single-tenant AI",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do AI voice agents handle interruptions and barge-in during live calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production-grade AI voice agents use a full-duplex audio pipeline with Voice Activity Detection (VAD) running at 20ms frame intervals. When the caller speaks mid-sentence, the VAD triggers an interrupt flag that halts TTS playback within 80ms, flushes the current audio buffer, and re-routes the caller's utterance through the ASR engine for fresh intent classification. The Hermes orchestration layer maintains a conversation state stack, so the agent resumes from the correct semantic context — not from the beginning of its previous response. This is fundamentally different from half-duplex chatbot architectures that queue responses and cannot handle overlapping speech.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between open-source, source-available, and multi-tenant SaaS AI software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open-source software (OSI-compliant licenses like MIT, Apache 2.0) allows unrestricted use, modification, and redistribution — including by competitors. Source-available software exposes the full codebase for audit, self-hosting, and modification, but restricts competitive redistribution via licenses like BSL or SSPL. Multi-tenant SaaS is a rental model: the vendor owns the infrastructure, co-mingles customer data on shared compute, and bills per-seat or per-message with markup. Orange Labz deploys source-available infrastructure (OpenClaw, Hermes) as a single-tenant instance on the client's own AWS account — the client owns the container, the data never leaves their VPC, and the system keeps running even if the vendor relationship ends.",
      },
    },
    {
      "@type": "Question",
      name: "How does the OpenClaw and Hermes framework keep data compliant with the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Digital Personal Data Protection Act (DPDP), 2023, mandates that personal data of Indian citizens be processed with explicit consent and stored within Indian borders unless exempted. OpenClaw and Hermes enforce this architecturally: (1) every deployment runs as a dedicated single-tenant container in AWS Mumbai (ap-south-1), ensuring data residency without exception; (2) no customer data is used for model training — inference calls to LLM providers (Claude, GPT, Gemini) send only the current conversation context, never bulk PII; (3) consent metadata is logged immutably via DLT integration for every automated voice and SMS interaction; (4) the client holds the root AWS credentials, making them the data fiduciary under DPDP — not the vendor.",
      },
    },
  ],
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO / ARTICLE HEADER */}
      <header className="wrap hero-page">
        <div className="eyebrow">
          <Link href="/blog" style={{ color: "var(--ember2)", textDecoration: "none" }}>Blog</Link> · Enterprise AI Architecture · July 2026
        </div>
        <h1 style={{ margin: "14px 0", fontSize: "clamp(34px,4.2vw,56px)" }}>
          What Are AI Agents? The 2026 Enterprise Architecture Guide
        </h1>
        <p className="lead">
          From LLM wrappers to autonomous revenue engines — a deep technical breakdown of multi-agent orchestration, source-available infrastructure, sub-600ms voice latency, and compliance-first deployment for Indian enterprise.
        </p>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 14, fontSize: 13, color: "var(--fog)" }}>
          <span className="mono">By Orange Labz Engineering</span>
          <span>·</span>
          <span>12 min read</span>
          <span>·</span>
          <time dateTime="2026-07-05">5 July 2026</time>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="wrap blog-article">

        {/* ══════════════════════════════════════════════════════════════════
            AEO DIRECT-ANSWER HOOK — Google AI Overview / Featured Snippet
        ═══════════════════════════════════════════════════════════════════ */}
        <aside className="aeo-block" id="definition">
          <div className="aeo-label">Definition · AI Overview Optimized</div>
          <p>
            <strong>An AI agent is a software system that perceives its environment, reasons over context, takes autonomous multi-step actions through real tool integrations (APIs, databases, telephony, CRMs), and persists memory across sessions — without requiring human intervention at each step.</strong> Unlike a chatbot or LLM wrapper that generates text in response to a single prompt, an AI agent operates within an orchestration framework (such as OpenClaw/Hermes) that manages state, routes between specialized sub-agents, enforces compliance guardrails, and executes real-world side effects: answering phone calls, booking appointments, writing CRM records, and sending transactional messages across channels.
          </p>
        </aside>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 1: ARCHITECTURE DEEP-DIVE
        ═══════════════════════════════════════════════════════════════════ */}
        <h2 id="architecture">Demystifying the Architecture: What Are AI Agents in 2026?</h2>

        <p>
          The term "AI agent" has been diluted by marketing to the point of meaninglessness. In 2024, any GPT wrapper with a system prompt was called an agent. By 2026, the engineering consensus has sharpened considerably: <strong>an AI agent is defined by its architecture, not by its prompt.</strong>
        </p>

        <p>
          The critical distinction is between <em>stateless generation</em> and <em>stateful execution</em>. A chatbot receives a user message, generates a response, and forgets. An agent receives a trigger (an inbound phone call, a WhatsApp message, a CRM webhook), evaluates it against persistent context (the caller's history, their deal stage, their previous objections), selects from a repertoire of real tools (database lookups, calendar availability checks, SIP call transfers, document generation), executes multi-step workflows, and writes the outcome to durable state — all within a single invocation loop.
        </p>

        <h3>The OpenClaw/Hermes Orchestration Stack</h3>

        <p>
          At <Link href="/" style={{ color: "var(--ember2)" }}>Orange Labz</Link>, the agent runtime is built on two interlocking frameworks:
        </p>

        <ul>
          <li>
            <strong>OpenClaw</strong> — the orchestration layer. OpenClaw manages agent lifecycle, tool registration, memory retrieval, and inter-agent routing. Each deployed agent is not a monolithic prompt but a directed acyclic graph (DAG) of specialized micro-agents: an <em>intent classifier</em>, a <em>context retriever</em>, a <em>tool executor</em>, a <em>response generator</em>, and a <em>compliance gate</em>. OpenClaw routes control flow between these nodes based on the output of each stage, enabling complex branching logic (e.g., "if the caller asks about pricing and their deal stage is &gt; MQL, retrieve the negotiated rate sheet from Perfex CRM; otherwise, serve the public rate card").
          </li>
          <li>
            <strong>Hermes</strong> — the runtime execution engine. Hermes handles the low-level plumbing: WebSocket management for real-time voice streams, SIP trunk integration for telephony, message queue orchestration (Redis Streams) for async channel handoffs, and the vector memory subsystem. Hermes implements two critical persistence schemas:
            <ul>
              <li><strong>SOUL.md</strong> — the agent's identity document. It encodes persona, compliance boundaries, escalation rules, and vertical-specific domain knowledge. SOUL.md is version-controlled and client-editable.</li>
              <li><strong>HEARTBEAT.md</strong> — the living memory log. Every interaction (call transcript, WhatsApp thread, email chain) is embedded as a vector and appended to the HEARTBEAT, keyed to a unified customer identity. When a repeat caller rings in, the agent retrieves their full interaction history in under 40ms via approximate nearest-neighbor search.</li>
            </ul>
          </li>
        </ul>

        <p>
          This architecture means that an <Link href="/ai-agents" style={{ color: "var(--ember2)" }}>Orange Labz AI agent</Link> is not a single LLM call. A typical inbound voice interaction involves 6–12 chained LLM inferences, 2–4 tool calls (CRM read, calendar check, WhatsApp API trigger, CRM write), and 1–2 memory retrievals — all orchestrated within a single call session that the human caller perceives as a fluid, natural conversation.
        </p>

        <h3>Why "Multi-Agent" Is Not a Buzzword Here</h3>

        <p>
          The <Link href="/ai-agents" style={{ color: "var(--ember2)" }}>Jugaad AI roster</Link> deploys six distinct agent roles — Inbound Voice Concierge, WhatsApp SDR, Email Agent, SMS Agent, Prospector, and Memory &amp; Deal Intel — but the system is not six isolated bots. OpenClaw's inter-agent messaging bus enables seamless handoffs: the Voice Concierge completes a call, publishes a structured event to the bus, and the WhatsApp SDR picks it up within 800ms to send the brochure, location pin, and cost sheet in the caller's preferred language. The Memory &amp; Deal Intel agent continuously consumes events from all channels, updating the vector HEARTBEAT and scoring deal velocity in real-time. This is genuine multi-agent orchestration — not six separate chatbots with a shared database.
        </p>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 2: INFRASTRUCTURE PARADIGM
        ═══════════════════════════════════════════════════════════════════ */}
        <h2 id="infrastructure">The Infrastructure Paradigm Shift: Cloud SaaS vs. Single-Tenant Ownership</h2>

        <p>
          The dominant deployment model for enterprise AI tooling in 2024–2025 was multi-tenant SaaS: a vendor hosts the infrastructure, co-mingles customer data on shared compute, and charges per seat, per message, or per minute with substantial markup over raw API costs. This model has three structural problems for high-ticket Indian enterprise:
        </p>

        <ol>
          <li>
            <strong>Data sovereignty failure.</strong> The Digital Personal Data Protection Act (DPDP), 2023, designates the entity controlling the purpose and means of data processing as the "data fiduciary." When your customer conversations, call recordings, and lead data sit on a vendor's multi-tenant cluster — even within an Indian AWS region — <em>the vendor</em> is the de facto data fiduciary, not you. This creates regulatory exposure that scales with your data volume.
          </li>
          <li>
            <strong>Vendor lock-in and markup economics.</strong> Multi-tenant platforms mark up underlying API costs (LLM inference, WhatsApp Business API messages, telephony minutes) by 40–200%. You pay for convenience, but you also pay for the vendor's multi-tenant infrastructure overhead, their sales team, and their margin. Worse, your prompts, workflows, and customer data are trapped: migrating off the platform means rebuilding from zero.
          </li>
          <li>
            <strong>Compliance opacity.</strong> When an automated voice call is made from a vendor's shared SIP trunk pool, who owns the DLT consent record? When a WhatsApp message is sent via the vendor's Meta Business Manager, who is the registered sender? In TRAI's enforcement framework, ambiguity in the chain of compliance responsibility is itself a violation.
          </li>
        </ol>

        <h3>The Capital Asset Model: Source-Available, Client-Owned</h3>

        <p>
          Orange Labz inverts this model entirely. Every <Link href="/ai-implementation" style={{ color: "var(--ember2)" }}>AI implementation</Link> is deployed as a dedicated, single-tenant container on the client's own AWS account in the Mumbai region (ap-south-1). The specifics:
        </p>

        <ul>
          <li><strong>Source-available codebase.</strong> The OpenClaw and Hermes stack is deployed with full source access. The client can audit every line of code that touches their data. The licensing model (BSL-adjacent) permits unlimited internal use and modification but restricts competitive redistribution — protecting both the client's investment and the engineering ecosystem.</li>
          <li><strong>Direct vendor billing.</strong> Meta (WhatsApp Business API), telephony providers (Exotel, Ozonetel, or the client's existing SIP provider), and LLM inference (Anthropic Claude, OpenAI GPT, Google Gemini, or self-hosted Llama) are billed directly to the client's accounts at cost. Zero middleman markup. The client's monthly infrastructure bill is AWS compute + direct API usage — typically 60–70% lower than equivalent multi-tenant SaaS pricing.</li>
          <li><strong>Survivability.</strong> If the relationship with Orange Labz ends, the system keeps running. The client owns the container, the source code, the prompts, the memory vectors, and the CRM data. They can engage any engineering team to maintain and extend it. This is the definition of a capital asset, not a rental.</li>
        </ul>

        <p>
          For Technical Directors and CIOs evaluating <strong>enterprise AI infrastructure</strong>, this distinction is decisive. SaaS is operational expenditure with compounding lock-in. Source-available, single-tenant deployment is a capital asset with compounding equity.
        </p>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 3: LATENCY & COMPLIANCE
        ═══════════════════════════════════════════════════════════════════ */}
        <h2 id="latency-compliance">Overcoming the Latency &amp; Compliance Barriers in India</h2>

        <p>
          Two engineering problems kill most AI voice agent deployments in India before they reach production: <em>latency</em> and <em>regulatory compliance</em>. Solving them is not a feature — it is the prerequisite.
        </p>

        <h3>The Sub-600ms Voice Latency Pipeline</h3>

        <p>
          Human conversational tolerance for response delay is approximately 600–800ms. Beyond that, callers perceive the agent as "broken" or "robotic" and hang up. Achieving sub-600ms end-to-end latency on an AI voice call requires eliminating every avoidable hop in the audio pipeline:
        </p>

        <ol>
          <li>
            <strong>Edge-first audio ingestion.</strong> Raw PCM audio from the SIP trunk is ingested at the nearest AWS edge location (Mumbai), bypassing any centralized API gateway. The audio stream is chunked into 20ms frames and piped directly to the ASR (Automatic Speech Recognition) engine via a persistent WebSocket — no HTTP round-trips.
          </li>
          <li>
            <strong>Streaming ASR with endpointing.</strong> The ASR engine (Deepgram or Whisper-large-v3 on dedicated GPU) runs in streaming mode with Voice Activity Detection (VAD) endpointing. Partial transcripts are emitted every 100ms; the final transcript is available within 120ms of the caller finishing their sentence.
          </li>
          <li>
            <strong>Decoupled context retrieval.</strong> This is where most architectures fail. If the agent needs to check CRM data, calendar availability, or deal history, a synchronous database call to a monolithic MySQL/PHP layer like Perfex CRM adds 200–800ms of latency. Hermes solves this with an event-driven edge cache: <strong>Supabase Realtime + Redis</strong> maintain a hot replica of the customer's active context (deal stage, last interaction, upcoming appointments, negotiated pricing). The cache is populated asynchronously by a CDC (Change Data Capture) stream from Perfex, so the voice agent reads from a sub-10ms local store — never from the CRM's production database during a live call.
          </li>
          <li>
            <strong>Parallel LLM inference + TTS.</strong> The orchestrator sends the classified intent + retrieved context to the LLM (Claude Sonnet or GPT-4.1-mini, selected per-task for latency/quality trade-off) and simultaneously pre-warms the TTS (Text-to-Speech) engine. As LLM tokens stream in, TTS conversion begins on the first complete sentence boundary — the caller hears the first word of the response while the LLM is still generating the rest.
          </li>
        </ol>

        <p>
          Result: median end-to-end latency of 420ms on production traffic, with P95 at 580ms. This is indistinguishable from a human agent's natural response cadence.
        </p>

        <h3>TRAI Compliance: The Engineering Moat</h3>

        <p>
          India's Telecom Regulatory Authority (TRAI) operates one of the world's most aggressive enforcement regimes for commercial telecommunications. For any enterprise deploying <strong>AI voice agents</strong> in India, compliance is not optional — it is architectural:
        </p>

        <ul>
          <li>
            <strong>140/160-series SIP trunk routing.</strong> All outbound promotional calls must originate from registered 140-series numbers; transactional calls from 160-series. Hermes enforces this at the SIP trunk level — the routing table physically cannot originate a promotional call from a 10-digit or 160-series number. This is a hardware-level guardrail, not a software toggle.
          </li>
          <li>
            <strong>Real-time DND scrubbing at dial-time.</strong> Before every outbound call, the Prospector agent queries the National Customer Preference Register (NCPR) API in real-time. Numbers registered on the Do-Not-Disturb list are blocked at dial-time — not at list-upload time (a common shortcut that creates compliance gaps when registrations change between upload and dial).
          </li>
          <li>
            <strong>DLT digital consent logging.</strong> Every SMS and voice interaction generates an immutable consent record in the Distributed Ledger Technology (DLT) system registered with the operator. Consent expiry windows are enforced programmatically — the agent will not re-engage a lead whose consent window has lapsed until fresh opt-in is recorded.
          </li>
          <li>
            <strong>Mandatory AI disclosure.</strong> Every automated outbound call opens with a clear, natural-language AI disclosure: "This is an AI-assisted call from [Client Business Name]." This is both a legal requirement and, counterintuitively, a trust-builder — callers who know they're speaking to an AI agent have higher completion rates than those who discover it mid-call.
          </li>
        </ul>

        <p>
          Most AI calling platforms treat these requirements as checkbox features. <Link href="/ai-agents" style={{ color: "var(--ember2)" }}>Orange Labz treats them as the moat</Link> — because competitors who cut compliance corners eventually get their SIP trunks blacklisted, their WhatsApp numbers banned, and their clients' brands damaged. Compliance-first architecture is a durable competitive advantage.
        </p>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 4: PROGRAMMATIC VERTICAL BLUEPRINT
        ═══════════════════════════════════════════════════════════════════ */}
        <h2 id="vertical-blueprint">Programmatic Blueprint: Deploying [Vertical_Niche] Agents in [Location_Hub]</h2>

        <p>
          The architecture described above is not theoretical. Here is the concrete execution sequence for deploying an <strong>Inbound Voice Concierge</strong> for a high-ticket [Vertical_Niche] business (Real Estate developer, Premium IVF clinic, Industrial manufacturer) in [Location_Hub] (Bengaluru, Mumbai, Hyderabad, Delhi NCR):
        </p>

        <h3>Step 1: Ad Traffic Capture — 3 Rings or Less</h3>

        <p>
          A buyer clicks a Google Ads or Meta lead form for a [Vertical_Niche] listing in [Location_Hub]. The call lands on a dedicated 160-series number routed through the client's SIP trunk. The Inbound Voice Concierge answers within 1 ring — not 3, not 5, not "after business hours." One ring. Every time. The agent opens with a natural greeting personalized to the campaign source (e.g., "Thank you for calling about the 3BHK in Whitefield. I'm here to help you book a site visit — would this Saturday morning work?").
        </p>

        <h3>Step 2: Real-Time Database Lookups During the Call</h3>

        <p>
          While the caller speaks, the agent executes parallel lookups against the edge cache:
        </p>

        <ul>
          <li><strong>Inventory availability</strong> — current unit status, floor plans, pricing (from the Supabase hot replica of the client's ERP/CRM).</li>
          <li><strong>Caller history</strong> — has this number called before? What was discussed? What was the objection? (from the HEARTBEAT vector store).</li>
          <li><strong>Calendar availability</strong> — open site visit or consultation slots for the next 72 hours (from Google Calendar or the client's scheduling system via API).</li>
        </ul>

        <p>
          These lookups complete in under 40ms combined. The caller experiences zero wait. The agent can answer specific questions — "Is the east-facing 3BHK on the 14th floor still available?" — with real data, not scripted hedging.
        </p>

        <h3>Step 3: Multi-Lingual WhatsApp SDR Handoff</h3>

        <p>
          The moment the call ends, the <Link href="/ai-agents" style={{ color: "var(--ember2)" }}>WhatsApp SDR agent</Link> fires a structured follow-up sequence via the official Meta Cloud API (under the client's verified business number, not a third-party wrapper):
        </p>

        <ul>
          <li>Message 1 (T+0 seconds): Brochure PDF + Google Maps location pin + cost sheet for the discussed unit.</li>
          <li>Message 2 (T+30 minutes): "Just confirming your site visit on Saturday at 11 AM. Shall I send parking directions?"</li>
          <li>Message 3 (T-24 hours before visit): Reminder with traffic estimate and contact number for on-site team.</li>
        </ul>

        <p>
          All messages are generated in the caller's detected language — Hindi, Hinglish, Tamil, Telugu, Kannada, or English — using the same LLM pipeline with language-specific SOUL.md instructions. This is not translation; it is native-language generation with cultural context baked into the prompt architecture.
        </p>

        <h3>Step 4: CRM Logging &amp; Deal Intelligence</h3>

        <p>
          Every interaction is written to <strong>Perfex CRM</strong> (or the client's existing CRM via webhook adapter) as a structured deal record: lead source, qualification tags (budget range, timeline, unit preference), call transcript summary, WhatsApp thread link, and next action date. The Memory &amp; Deal Intel agent scores deal velocity daily and flags at-risk leads (e.g., "called 3 times about 3BHK pricing but hasn't booked a visit — possible price objection") in the operations dashboard.
        </p>

        <p>
          This entire sequence — from ad click to booked site visit with follow-up collateral in the buyer's language — executes without a single human touching the process. The metric that matters for [Vertical_Niche] businesses in [Location_Hub] is not "leads generated" — it is <strong>cost per site visit booked</strong>. That is the micro-conversion that pays for everything else.
        </p>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 5: COMPARISON TABLE
        ═══════════════════════════════════════════════════════════════════ */}
        <h2 id="comparison">Multi-Tenant SaaS vs. Single-Tenant Ownership: A Technical Comparison</h2>

        <div className="vwrap" style={{ marginTop: 24, marginBottom: 32 }}>
          <table className="vtable">
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Multi-Tenant SaaS</th>
                <th>Single-Tenant (Orange Labz Model)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Residency</td>
                <td>Vendor's shared cluster — region may vary</td>
                <td>Client's AWS Mumbai VPC — guaranteed</td>
              </tr>
              <tr>
                <td>Data Fiduciary (DPDP)</td>
                <td>Ambiguous — vendor or client?</td>
                <td>Client holds root credentials = data fiduciary</td>
              </tr>
              <tr>
                <td>API Cost Structure</td>
                <td>Vendor markup: 40–200% over raw cost</td>
                <td>Direct billing at cost — zero markup</td>
              </tr>
              <tr>
                <td>Source Code Access</td>
                <td>None — black box</td>
                <td>Full source-available codebase, auditable</td>
              </tr>
              <tr>
                <td>Vendor Exit</td>
                <td>Data export (if allowed), system rebuild</td>
                <td>System keeps running — you own the container</td>
              </tr>
              <tr>
                <td>TRAI Compliance Chain</td>
                <td>Shared SIP trunks — compliance ambiguity</td>
                <td>Client's own registered numbers — clean chain</td>
              </tr>
              <tr>
                <td>Model Training on Data</td>
                <td>Often unclear or opt-out required</td>
                <td>Never — architecturally impossible</td>
              </tr>
              <tr>
                <td>Customization Depth</td>
                <td>Configuration within platform limits</td>
                <td>Unlimited — fork the source if needed</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 6: FAQ (AEO/GEO OPTIMIZED)
        ═══════════════════════════════════════════════════════════════════ */}
        <h2 id="faq">Frequently Asked Questions About AI Agents</h2>

        <details id="faq-interruptions">
          <summary>How do AI voice agents handle interruptions and barge-in during live calls?</summary>
          <p>
            Production-grade AI voice agents use a full-duplex audio pipeline with Voice Activity Detection (VAD) running at 20ms frame intervals. When the caller speaks mid-sentence, the VAD triggers an interrupt flag that halts TTS playback within 80ms, flushes the current audio buffer, and re-routes the caller's utterance through the ASR engine for fresh intent classification. The Hermes orchestration layer maintains a conversation state stack, so the agent resumes from the correct semantic context — not from the beginning of its previous response.
          </p>
          <p>
            This is fundamentally different from half-duplex chatbot architectures that queue responses and cannot handle overlapping speech. In production, the Inbound Voice Concierge handles an average of 2.3 interruptions per call with zero context loss, matching the natural cadence of Indian English and Hinglish conversational patterns.
          </p>
        </details>

        <details id="faq-licensing">
          <summary>What is the difference between open-source, source-available, and multi-tenant AI software?</summary>
          <p>
            <strong>Open-source</strong> (OSI-compliant licenses like MIT, Apache 2.0): unrestricted use, modification, and redistribution — including by competitors. Maximum freedom, but also maximum exposure if your customizations become publicly forkable.
          </p>
          <p>
            <strong>Source-available</strong> (BSL, SSPL, or custom licenses): full codebase visibility for audit, self-hosting, and modification, but redistribution is restricted. You can see and change everything, but you cannot repackage it as a competing product. This is the model used by OpenClaw and Hermes.
          </p>
          <p>
            <strong>Multi-tenant SaaS</strong>: you see nothing. The vendor owns the infrastructure, the code, and often the data. You rent access. When you leave, you leave with an export file (if you're lucky) and nothing else.
          </p>
          <p>
            For enterprise AI infrastructure decisions, source-available single-tenant deployment offers the optimal balance: full transparency, full data ownership, and protection of engineering IP.
          </p>
        </details>

        <details id="faq-dpdp">
          <summary>How does the OpenClaw and Hermes framework keep data compliant with the DPDP Act?</summary>
          <p>
            The Digital Personal Data Protection Act (DPDP), 2023, mandates that personal data of Indian citizens be processed with explicit consent and stored within Indian borders unless exempted. OpenClaw and Hermes enforce this architecturally across four layers:
          </p>
          <p>
            <strong>1. Data residency by design:</strong> Every deployment runs as a dedicated single-tenant container in AWS Mumbai (ap-south-1). Customer data — call recordings, chat transcripts, lead PII — never leaves the Indian region. This is not a configuration option; it is a deployment constraint enforced by the infrastructure template.
          </p>
          <p>
            <strong>2. Zero-training guarantee:</strong> Inference calls to LLM providers (Claude, GPT, Gemini) send only the current conversation context via API. No bulk PII export, no fine-tuning on customer data, no embedding storage on third-party infrastructure. The LLM provider processes a single request and discards it per their API terms.
          </p>
          <p>
            <strong>3. Immutable consent logging:</strong> Every automated voice call, SMS, and WhatsApp interaction generates a timestamped consent record integrated with the telecom operator's DLT (Distributed Ledger Technology) system. Consent expiry is enforced programmatically — the system will not re-engage a contact whose consent window has lapsed.
          </p>
          <p>
            <strong>4. Client as data fiduciary:</strong> The client holds the root AWS credentials for their deployment. Under DPDP, this makes the client — not Orange Labz — the data fiduciary. Orange Labz operates the system under a managed services agreement, but the data ownership chain is unambiguous.
          </p>
        </details>

        <details id="faq-latency">
          <summary>What latency should I expect from an AI voice agent in India?</summary>
          <p>
            A production-grade AI voice agent should achieve end-to-end response latency (caller finishes speaking → agent begins speaking) of under 600ms for P95 traffic. The Orange Labz pipeline achieves a median of 420ms and P95 of 580ms on production traffic in India, using AWS Mumbai (ap-south-1) infrastructure with edge-cached context retrieval and streaming TTS. Anything above 800ms is perceptible as unnatural delay and will increase call abandonment rates.
          </p>
        </details>

        <details id="faq-cost">
          <summary>How does single-tenant AI deployment cost compare to multi-tenant SaaS?</summary>
          <p>
            Direct comparison depends on volume, but the structural economics are clear: single-tenant deployment eliminates the vendor's infrastructure markup (typically 40–200% over raw API costs) and the per-seat licensing model. The client pays AWS compute costs directly (~₹15,000–40,000/month for a standard agent deployment), LLM inference at provider rates (direct billing, no markup), and telephony/WhatsApp at carrier rates. Orange Labz charges a one-time engineering fee for the build and a flat managed-infrastructure retainer — not per-message or per-minute fees that scale linearly with success.
          </p>
          <p>
            At scale (1,000+ inbound calls/month), clients typically see 60–70% lower total cost of ownership compared to equivalent multi-tenant SaaS platforms — while owning the infrastructure as a capital asset.
          </p>
        </details>

        <details id="faq-languages">
          <summary>Which languages do the AI agents support for Indian markets?</summary>
          <p>
            The Inbound Voice Concierge and WhatsApp SDR support English, Hindi, Hinglish (the mixed-code register that dominates Indian business communication), Tamil, Telugu, Kannada, Marathi, Bengali, and Gujarati. Language detection is automatic — the agent identifies the caller's language within the first 2–3 seconds of speech and switches its ASR, LLM, and TTS pipelines accordingly. SOUL.md instructions are maintained per-language to capture cultural nuances (e.g., formal Hindi for healthcare consultations vs. casual Hinglish for real estate site visit bookings).
          </p>
        </details>

        {/* ══════════════════════════════════════════════════════════════════
            CLOSING CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <div style={{ borderTop: "1px solid var(--line2)", paddingTop: 40, marginTop: 48 }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)" }}>
            Stop renting AI. <em>Own it.</em>
          </h2>
          <p className="lead" style={{ marginTop: 10 }}>
            If you're a Technical Director, CIO, or Founder evaluating enterprise AI infrastructure for high-ticket Indian verticals — real estate, premium healthcare, industrial manufacturing — the question is not whether to deploy AI agents. The question is whether to rent them from a SaaS vendor or own them as a capital asset.
          </p>
          <p className="lead">
            Orange Labz builds the latter. Source-available. Single-tenant. TRAI-aware. DPDP compliant. Your instance, your data, your system.
          </p>
          <div className="cta-row" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" href="/contact">
              Book a Free AI Audit <ArrowRight size={16} />
            </Link>
            <Link className="btn btn-ghost" href="/pricing">
              See Pricing &amp; Tiers <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </article>

      <CTABand
        title="Your AI team starts this month."
        sub="Free 45-minute audit. A productized pilot you can start fast. If we can't find ROI, we'll tell you on the call."
      />
    </main>
  );
}
