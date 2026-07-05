/**
 * PSEO 4D Data Matrix for Orange Labz / Jugaad AI
 *
 * Vertical × Agent Type × Worker Role × Location Hub = Landing Page
 *
 * This module produces all programmatic page permutations and can be
 * migrated to Supabase without changing the page template.
 */

// ──────────────────────────────────────────────────────────────────────
// VERTICALS
// ──────────────────────────────────────────────────────────────────────
export const VERTICALS = [
  {
    slug: "real-estate",
    name: "Real Estate",
    firmNoun: "Real Estate Firm",
    eyebrow: "Real Estate Developers & Brokers",
    painPoint:
      "Real estate field teams routinely drop 30–40% of weekend and after-hours inbound ad leads. Buyers call once, get voicemail, and dial the next project on the search results page. Every missed ring is a site visit that never happens — and a media spend that returns nothing.",
    metric: "Cost per site visit booked",
    metricStat: "35%",
    metricLabel: "of inbound ad calls go unanswered on weekends",
    complianceNote:
      "RERA disclosure handled in every call script. DPDP-grade data residency for buyer PII.",
    crmNote: "Perfex CRM, Sell.Do, or your existing real estate CRM",
    ctaTitle: "How many site visits did you miss last weekend?",
  },
  {
    slug: "premium-clinics",
    name: "Premium Clinics",
    firmNoun: "Premium Clinic",
    eyebrow: "IVF · Dental · Aesthetics · Diagnostics",
    painPoint:
      "Premium clinics spend heavily on Google Ads for high-ticket procedures — IVF, dental implants, cosmetic surgery. Patients call once during their lunch break. If the front desk is busy, they call the next clinic. In healthcare, the first response wins the consultation.",
    metric: "Cost per consultation booked",
    metricStat: "42%",
    metricLabel: "of clinic calls go to voicemail during peak hours",
    complianceNote:
      "DPDP-grade patient data sovereignty. No health data leaves your AWS Mumbai instance.",
    crmNote: "Practo, your HMS, or Perfex CRM",
    ctaTitle: "How many consultation slots went unfilled this week?",
  },
  {
    slug: "industrial",
    name: "B2B Industrial",
    firmNoun: "Industrial Business",
    eyebrow: "Manufacturing · Engineering · B2B Supply",
    painPoint:
      "IndiaMART and Justdial generate hundreds of RFQ enquiries per month. The 90-second response window determines whether the buyer engages or moves to the next supplier. Manual sales teams cannot sustain sub-2-minute response times across shifts.",
    metric: "Speed-to-lead on RFQ response",
    metricStat: "90s",
    metricLabel: "response window that wins the RFQ deal",
    complianceNote:
      "GST and MSME compliance data captured during qualification. Single-tenant deployment for procurement-sensitive data.",
    crmNote: "Perfex CRM, Zoho, or your existing ERP",
    ctaTitle: "How many RFQs went cold while your team was on the floor?",
  },
  {
    slug: "test-prep",
    name: "Test Prep & Education",
    firmNoun: "Test Prep Institute",
    eyebrow: "Coaching · Ed-Tech · Training Institutes",
    painPoint:
      "Coaching institutes run aggressive seasonal campaigns — JEE, NEET, CAT, UPSC cycles. Parents and students call to compare options during a narrow decision window. If the counselor line is busy, they enroll elsewhere. Batch fill rates depend on first-call conversion.",
    metric: "Cost per counseling session booked",
    metricStat: "28%",
    metricLabel: "of enquiry calls during admission season go unanswered",
    complianceNote:
      "Student data handled under DPDP. No bulk PII shared with third-party platforms.",
    crmNote: "LeadSquared, Meritto, or Perfex CRM",
    ctaTitle: "How many admission enquiries dropped during the last season?",
  },
  {
    slug: "diagnostics",
    name: "Diagnostic Centers",
    firmNoun: "Diagnostic Center",
    eyebrow: "Pathology · Radiology · Health Checkups",
    painPoint:
      "Diagnostic centers depend on high-volume appointment throughput. Patients booking health checkups, scans, or lab tests call once — if the line is busy or the hold time exceeds 30 seconds, they book with the aggregator or the next center on Google Maps. Every unanswered call is a lost test booking.",
    metric: "Cost per test booking confirmed",
    metricStat: "38%",
    metricLabel: "of diagnostic appointment calls abandoned on hold",
    complianceNote:
      "NABL/NABH workflow compliance. Patient health data stays in your Mumbai VPC.",
    crmNote: "Your LIMS, HMS, or Perfex CRM",
    ctaTitle: "How many test bookings did your front desk miss this month?",
  },
];

// ──────────────────────────────────────────────────────────────────────
// AGENT TYPES
// ──────────────────────────────────────────────────────────────────────
export const AGENTS = [
  {
    slug: "voice-concierge",
    name: "Inbound Voice Concierge",
    channel: "Voice",
    tag: "FLAGSHIP",
    shortDesc:
      "Answers every inbound call within 1 ring — 24/7, including after-hours, weekends, and festival spikes. Qualifies, handles objections, and books appointments against real availability before the caller hangs up.",
    techStack:
      "SIP trunk integration, streaming ASR, sub-600ms latency pipeline, Hermes orchestration, SOUL.md persona, HEARTBEAT.md vector memory",
    steps: [
      ["Answer", "Every call picked up in 1 ring — nights, Sundays, festival weekends. No voicemail, no IVR maze."],
      ["Qualify", "Budget, timeline, preferences captured in natural conversation. Objections handled with your script."],
      ["Book", "Appointment or visit booked against real calendar availability before the caller hangs up."],
      ["Log", "Full interaction logged to CRM with source attribution, qualification tags, and call transcript."],
    ],
  },
  {
    slug: "whatsapp-sdr",
    name: "WhatsApp SDR",
    channel: "WhatsApp",
    tag: "WhatsApp",
    shortDesc:
      "Official Meta Cloud API under your verified business number. Continues the conversation the instant a call ends — brochures, location pins, cost sheets, reminders — in the buyer's language.",
    techStack:
      "Official WhatsApp Cloud API, multi-lingual NLG, template + freeform messaging, OpenClaw routing, Perfex CRM webhook sync",
    steps: [
      ["Engage", "Brochure, location pin, and key details sent within seconds of call or form submission."],
      ["Nurture", "Follow-up sequence with cost sheets, FAQs, and objection-handling in the buyer's language."],
      ["Remind", "Appointment reminders with traffic estimates and contact details for on-site team."],
      ["Re-engage", "Cold leads from previous cycles revived with context, not spam."],
    ],
  },
  {
    slug: "prospector",
    name: "Automated Prospector",
    channel: "Multi-Channel",
    tag: "Outbound",
    shortDesc:
      "Scans IndiaMART, Justdial, LinkedIn, and MSME data for buyers matching your ICP and responds within the 90-second window that wins the deal. Compliance-gated with TRAI 140-series routing and DND scrubbing.",
    techStack:
      "Multi-source data ingestion, ICP matching engine, TRAI 140-series SIP routing, real-time DND scrubbing, DLT consent logging",
    steps: [
      ["Scan", "Monitors listing platforms and directories for enquiries matching your ideal customer profile."],
      ["Respond", "Sub-90-second outreach via the highest-converting channel for that lead source."],
      ["Qualify", "Automated qualification against your criteria — budget, timeline, specifications."],
      ["Route", "Qualified leads routed to your sales team with full context and priority scoring."],
    ],
  },
  {
    slug: "emailer",
    name: "Emailer Agent",
    channel: "Email",
    tag: "Email",
    shortDesc:
      "Threaded follow-ups, proposals, and inbound triage that read like a person wrote them. Built for longer B2B consideration cycles with context that carries across the entire thread.",
    techStack:
      "SMTP/IMAP integration, thread-aware context retrieval, document generation, OpenClaw orchestration, CRM deal-stage sync",
    steps: [
      ["Triage", "Inbound emails classified, prioritized, and routed — spam filtered, urgent flagged."],
      ["Respond", "Contextual replies generated from deal history, product data, and pricing rules."],
      ["Follow up", "Automated follow-up sequences timed to your sales cycle — proposals, reminders, check-ins."],
      ["Sync", "Every thread logged to CRM with deal-stage updates and next-action dates."],
    ],
  },
];

// ──────────────────────────────────────────────────────────────────────
// WORKER ROLES (keyed by vertical-agent pair)
// ──────────────────────────────────────────────────────────────────────
export const ROLES = {
  "real-estate": {
    "voice-concierge": [
      {
        slug: "pre-sales-telecaller",
        title: "AI Pre-Sales Telecaller",
        problemCopy:
          "Your pre-sales team handles 40 calls during working hours. The 60 calls that land after 6 PM and on weekends go to voicemail. Those are your most motivated buyers — they're calling after seeing your ad, right now.",
        solutionCopy:
          "The AI Pre-Sales Telecaller operates directly inside your dedicated container instance. It picks up inbound calls within 1 ring, qualifies budget, BHK preference, and timeline, handles pricing objections with your approved script, and books the site visit against real slot availability — all before the buyer hangs up.",
      },
    ],
    "whatsapp-sdr": [
      {
        slug: "buyer-nurture-executive",
        title: "AI Buyer Nurture Executive",
        problemCopy:
          "Buyers who express interest on a call need immediate follow-up material — brochures, floor plans, location pins, cost sheets. If your sales team sends these manually, the delay averages 4–6 hours. By then, the buyer has visited two competitor project sites.",
        solutionCopy:
          "The AI Buyer Nurture Executive triggers a WhatsApp sequence within seconds of the call ending. Brochure, floor plan PDF, Google Maps pin, and cost sheet land in the buyer's WhatsApp — in Hindi, Hinglish, or English, matched to their detected language preference.",
      },
    ],
    "prospector": [
      {
        slug: "lead-sourcing-agent",
        title: "AI Lead Sourcing Agent",
        problemCopy:
          "Your marketing team spends lakhs on portal listings — 99acres, MagicBricks, Housing.com. Enquiries arrive as form fills and calls. The ones that aren't contacted within 90 seconds have a 10x lower conversion rate.",
        solutionCopy:
          "The AI Lead Sourcing Agent monitors listing portal enquiries in real-time and triggers a multi-channel response — call + WhatsApp — within the 90-second window that determines whether you win or lose the lead.",
      },
    ],
    "emailer": [
      {
        slug: "post-visit-coordinator",
        title: "AI Post-Visit Coordinator",
        problemCopy:
          "After a site visit, buyers enter a 2–4 week consideration phase. Sales teams juggle 200+ active leads and follow-up becomes inconsistent. The deals that close are often the ones that received timely, personalized communication.",
        solutionCopy:
          "The AI Post-Visit Coordinator sends threaded email follow-ups timed to your sales cycle — post-visit summary, payment plan options, RERA documentation, and deadline reminders — with full context from the original call and visit.",
      },
    ],
  },
  "premium-clinics": {
    "voice-concierge": [
      {
        slug: "patient-receptionist",
        title: "AI Patient Receptionist",
        problemCopy:
          "Premium clinics receive 60–100 calls daily. During peak consultation hours, the front desk is managing walk-ins, insurance verifications, and existing patients. New patient calls — your highest-margin conversions — roll to voicemail.",
        solutionCopy:
          "The AI Patient Receptionist answers every call in 1 ring, captures symptoms and procedure interest, checks doctor availability in real-time, and confirms the consultation slot — all while maintaining the empathetic, professional tone your clinic's brand requires.",
      },
    ],
    "whatsapp-sdr": [
      {
        slug: "care-coordinator",
        title: "AI Care Coordinator",
        problemCopy:
          "Patients researching high-ticket procedures (IVF, dental implants, cosmetic surgery) need detailed information before committing to a consultation. They compare 3–5 clinics simultaneously. The clinic that provides comprehensive, personalized information fastest wins.",
        solutionCopy:
          "The AI Care Coordinator sends procedure-specific information packages via WhatsApp — doctor profiles, success rates, pre-procedure instructions, and insurance/payment details — in the patient's preferred language, within seconds of their initial enquiry.",
      },
    ],
    "prospector": [
      {
        slug: "patient-outreach-specialist",
        title: "AI Patient Outreach Specialist",
        problemCopy:
          "Clinics running Google Ads for specific procedures generate form fills from patients actively searching for treatment. These leads have the highest intent — but if the callback takes more than 2 hours, the patient has already booked elsewhere.",
        solutionCopy:
          "The AI Patient Outreach Specialist contacts ad-generated leads within minutes via the most appropriate channel, qualifies their treatment needs, and books a consultation — all with TRAI-compliant calling and DPDP-grade patient data handling.",
      },
    ],
    "emailer": [
      {
        slug: "treatment-follow-up-manager",
        title: "AI Treatment Follow-Up Manager",
        problemCopy:
          "Post-consultation follow-up is critical for high-ticket procedures with long decision cycles. Patients who received a treatment plan need timely reminders, financing options, and answers to follow-up questions. Manual follow-up is inconsistent and drops off after week two.",
        solutionCopy:
          "The AI Treatment Follow-Up Manager maintains threaded email communication with patients through the entire decision cycle — treatment plan summaries, financing options, pre-procedure checklists, and appointment reminders — personalized to the specific procedure and doctor.",
      },
    ],
  },
  "industrial": {
    "voice-concierge": [
      {
        slug: "rfq-response-agent",
        title: "AI RFQ Response Agent",
        problemCopy:
          "B2B industrial enquiries arrive from IndiaMART, Justdial, and direct calls. Your sales engineers are on the factory floor. The enquiry that gets a response within 90 seconds wins the order — the one that waits 4 hours loses to a competitor who answered first.",
        solutionCopy:
          "The AI RFQ Response Agent answers every inbound call instantly, captures product specifications, quantity requirements, and delivery timelines, performs a real-time inventory check, and routes the qualified RFQ to the appropriate sales engineer with full context.",
      },
    ],
    "whatsapp-sdr": [
      {
        slug: "procurement-liaison",
        title: "AI Procurement Liaison",
        problemCopy:
          "B2B buyers expect spec sheets, MOQ details, and pricing within minutes — not days. Your sales team manages 50+ active enquiries. Sending customized spec packages manually is a bottleneck that costs deals.",
        solutionCopy:
          "The AI Procurement Liaison sends product spec sheets, MOQ tables, and preliminary pricing via WhatsApp within seconds of the initial enquiry. Follow-ups include sample availability, delivery estimates, and GST-compliant quotation documents.",
      },
    ],
    "prospector": [
      {
        slug: "procurement-scouter",
        title: "AI Procurement Scouter",
        problemCopy:
          "Your best leads are actively posting RFQs on IndiaMART and trade directories right now. Your competitors' sales teams are monitoring these platforms 24/7. If you're not responding within the first 90 seconds, you're not in the consideration set.",
        solutionCopy:
          "The AI Procurement Scouter monitors IndiaMART, Justdial, LinkedIn, and MSME databases continuously, matches enquiries against your product catalog and ICP, and triggers a multi-channel response — call + WhatsApp + email — within the critical 90-second window.",
      },
    ],
    "emailer": [
      {
        slug: "quotation-follow-up-agent",
        title: "AI Quotation Follow-Up Agent",
        problemCopy:
          "B2B sales cycles run 4–12 weeks. After the initial quotation, buyers go silent for days while comparing suppliers. The supplier who maintains professional, timely follow-up without being pushy wins the PO.",
        solutionCopy:
          "The AI Quotation Follow-Up Agent manages threaded email sequences timed to B2B procurement cycles — quotation summaries, MOQ flexibility offers, delivery timeline updates, and sample dispatch confirmations — with full thread context across every touchpoint.",
      },
    ],
  },
  "test-prep": {
    "voice-concierge": [
      {
        slug: "admissions-telecaller",
        title: "AI Admissions Telecaller",
        problemCopy:
          "Admission season generates 200+ enquiry calls per day. Your counseling team is booked in back-to-back sessions. Parents calling to compare coaching options get voicemail — and enroll their child at the institute that answered first.",
        solutionCopy:
          "The AI Admissions Telecaller answers every enquiry call instantly, captures the student's target exam, current preparation level, and location preference, explains batch timings and fee structures, and books a counseling session — all in Hindi, Hinglish, or English.",
      },
    ],
    "whatsapp-sdr": [
      {
        slug: "student-engagement-executive",
        title: "AI Student Engagement Executive",
        problemCopy:
          "Parents and students researching coaching options need batch schedules, fee breakdowns, faculty profiles, and success metrics. If your team sends a generic PDF 6 hours later, the student has already attended a competing institute's demo class.",
        solutionCopy:
          "The AI Student Engagement Executive sends tailored information packages via WhatsApp within seconds — batch schedules matching the student's exam timeline, fee breakdowns, faculty highlights, and previous year results — triggering demo class bookings automatically.",
      },
    ],
    "prospector": [
      {
        slug: "enquiry-capture-agent",
        title: "AI Enquiry Capture Agent",
        problemCopy:
          "Your Google and Meta campaigns generate form fills and missed calls during peak season. Each hour of delay reduces the probability of enrollment by 15%. Your counseling team cannot manually process the volume fast enough.",
        solutionCopy:
          "The AI Enquiry Capture Agent monitors all ad-generated leads in real-time, triggers instant callbacks and WhatsApp outreach, qualifies the student's exam and timeline, and books counseling sessions — compressing the response window from hours to seconds.",
      },
    ],
    "emailer": [
      {
        slug: "admissions-counselor",
        title: "AI Admissions Counselor",
        problemCopy:
          "Prospective students and parents who attended a demo class or counseling session need follow-up — batch confirmation, fee payment links, preparation material previews. Manual follow-up drops off after the first week, losing students who were 80% convinced.",
        solutionCopy:
          "The AI Admissions Counselor maintains personalized email threads through the entire enrollment funnel — demo class summaries, batch recommendations, early-bird fee deadlines, and preparation tips — keeping your institute top-of-mind through the decision window.",
      },
    ],
  },
  "diagnostics": {
    "voice-concierge": [
      {
        slug: "appointment-coordinator",
        title: "AI Appointment Coordinator",
        problemCopy:
          "Diagnostic centers handle 150+ calls daily for test bookings, report collection, and general enquiries. During morning peak hours, 30–40% of calls are abandoned on hold. Each abandoned call is a lost test booking worth ₹800–5,000.",
        solutionCopy:
          "The AI Appointment Coordinator answers every call in 1 ring, identifies the required test or package, checks slot availability and fasting requirements, confirms the appointment with pre-preparation instructions, and sends a WhatsApp confirmation — all within a 90-second call.",
      },
    ],
    "whatsapp-sdr": [
      {
        slug: "patient-communications-agent",
        title: "AI Patient Communications Agent",
        problemCopy:
          "Patients booking health checkups and diagnostic tests need preparation instructions (fasting, medication pauses, document requirements) well before their appointment. Manual communication is inconsistent and leads to no-shows and rescheduling that wastes lab capacity.",
        solutionCopy:
          "The AI Patient Communications Agent sends personalized WhatsApp sequences — appointment confirmation, preparation instructions, location and parking details, and day-of reminders — reducing no-show rates and ensuring patients arrive prepared.",
      },
    ],
    "prospector": [
      {
        slug: "health-checkup-outreach-agent",
        title: "AI Health Checkup Outreach Agent",
        problemCopy:
          "Corporate tie-ups and annual health checkup campaigns generate bulk enquiries. Processing these manually means slow responses, missed follow-ups, and competitors capturing the contract.",
        solutionCopy:
          "The AI Health Checkup Outreach Agent processes bulk corporate and campaign enquiries at scale, qualifies the organization size and package requirements, and schedules coordination calls with your business development team — all with TRAI-compliant calling.",
      },
    ],
    "emailer": [
      {
        slug: "report-follow-up-agent",
        title: "AI Report Follow-Up Agent",
        problemCopy:
          "After test completion, patients expect timely report delivery and clear communication about next steps. Delays in report delivery and follow-up create negative reviews and reduce repeat bookings.",
        solutionCopy:
          "The AI Report Follow-Up Agent manages post-test email communication — report availability notifications, download instructions, doctor consultation recommendations for abnormal findings, and annual checkup reminders — maintaining patient engagement beyond the single transaction.",
      },
    ],
  },
};

// ──────────────────────────────────────────────────────────────────────
// LOCATION HUBS
// ──────────────────────────────────────────────────────────────────────
export const LOCATIONS = [
  { slug: "bengaluru", name: "Bengaluru", state: "Karnataka", languages: ["English", "Kannada", "Hindi"], region: "South" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", languages: ["English", "Hindi", "Marathi"], region: "West" },
  { slug: "delhi-ncr", name: "Delhi NCR", state: "Delhi/Haryana/UP", languages: ["English", "Hindi"], region: "North" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", languages: ["English", "Hindi", "Gujarati"], region: "West" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", languages: ["English", "Tamil", "Hindi"], region: "South" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", languages: ["English", "Telugu", "Hindi"], region: "South" },
  { slug: "pune", name: "Pune", state: "Maharashtra", languages: ["English", "Hindi", "Marathi"], region: "West" },
];

// ──────────────────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────────────────

/** Returns all valid (vertical, agent, role, location) combinations */
export function getAllCombinations() {
  const combos = [];
  for (const v of VERTICALS) {
    const verticalRoles = ROLES[v.slug];
    if (!verticalRoles) continue;
    for (const a of AGENTS) {
      const agentRoles = verticalRoles[a.slug];
      if (!agentRoles) continue;
      for (const r of agentRoles) {
        for (const l of LOCATIONS) {
          combos.push({
            vertical: v.slug,
            agent: a.slug,
            role: r.slug,
            location: l.slug,
          });
        }
      }
    }
  }
  return combos;
}

/** Looks up full data for a specific combination */
export function getPageData(verticalSlug, agentSlug, roleSlug, locationSlug) {
  const vertical = VERTICALS.find((v) => v.slug === verticalSlug);
  const agent = AGENTS.find((a) => a.slug === agentSlug);
  const location = LOCATIONS.find((l) => l.slug === locationSlug);
  if (!vertical || !agent || !location) return null;

  const verticalRoles = ROLES[verticalSlug];
  if (!verticalRoles) return null;
  const agentRoles = verticalRoles[agentSlug];
  if (!agentRoles) return null;
  const role = agentRoles.find((r) => r.slug === roleSlug);
  if (!role) return null;

  return { vertical, agent, role, location };
}

/** Generates the page title */
export function makeTitle(data) {
  return `Hire a Dedicated ${data.role.title} for Your ${data.vertical.firmNoun} in ${data.location.name}`;
}

/** Generates meta description */
export function makeDescription(data) {
  return `Deploy a source-available, single-tenant ${data.role.title} for ${data.vertical.name} in ${data.location.name}. ${data.agent.name} powered by OpenClaw/Hermes on your own AWS Mumbai instance. TRAI-aware. DPDP compliant. Zero vendor markup.`;
}

/** Generates FAQ items per combination */
export function makeFAQs(data) {
  return [
    {
      q: `How does the ${data.role.title} handle ${data.location.name}-specific languages?`,
      a: `The ${data.role.title} supports ${data.location.languages.join(", ")} with automatic language detection within the first 2–3 seconds of interaction. Language-specific SOUL.md instructions capture cultural nuances for ${data.vertical.name} communication in ${data.location.state}. This is native-language generation, not translation.`,
    },
    {
      q: `What infrastructure does the ${data.role.title} run on in ${data.location.name}?`,
      a: `Every deployment runs as a dedicated, single-tenant container on your own AWS account in Mumbai (ap-south-1). The ${data.role.title} uses the OpenClaw orchestration layer and Hermes runtime, with direct API billing to your accounts — zero middleman markup. Data never leaves your VPC.`,
    },
    {
      q: `How quickly can I deploy the ${data.role.title} for my ${data.vertical.firmNoun} in ${data.location.name}?`,
      a: `From AI audit to live deployment takes 14 days. This includes compliance mapping (TRAI 160-series routing, DLT consent, DPDP data residency), ${data.agent.name} configuration with your specific scripts and workflows, ${data.vertical.crmNote} integration, and a concierge setup session where we configure Meta Business Manager and telephony on a screen-share with your team.`,
    },
  ];
}
