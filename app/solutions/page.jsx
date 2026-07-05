import Link from "next/link";
import { ArrowRight, PhoneIncoming, MessageCircle, Search, Mail } from "lucide-react";
import { CTABand } from "@/components/site";
import { VERTICALS, AGENTS, ROLES, LOCATIONS } from "@/lib/pseo-data";

export const metadata = {
  title: "AI Solutions by Industry & Location — Find Your AI Employee",
  description:
    "Browse AI agent deployments by industry vertical, agent type, and Indian city. Source-available, single-tenant AI employees for Real Estate, Healthcare, Industrial, Education, and Diagnostics.",
};

function agentIcon(slug) {
  const map = {
    "voice-concierge": <PhoneIncoming size={16} />,
    "whatsapp-sdr": <MessageCircle size={16} />,
    "prospector": <Search size={16} />,
    "emailer": <Mail size={16} />,
  };
  return map[slug] || null;
}

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Solutions directory</div>
        <h1 style={{ margin: "14px 0" }}>
          Find the AI employee built for your industry.
        </h1>
        <p className="lead">
          Every combination below is a dedicated, source-available AI agent
          deployed on your own AWS Mumbai instance — TRAI-aware, DPDP compliant,
          zero vendor markup. Pick your vertical, your channel, your city.
        </p>
      </header>

      {VERTICALS.map((v) => {
        const verticalRoles = ROLES[v.slug];
        if (!verticalRoles) return null;

        return (
          <section key={v.slug} id={v.slug}>
            <div className="wrap">
              <div className="shead">
                <div className="eyebrow">{v.eyebrow}</div>
                <h2>{v.name}</h2>
                <p className="lead" style={{ marginTop: 10 }}>
                  {v.painPoint.split(".")[0]}.{" "}
                  <strong style={{ color: "var(--bone)" }}>
                    Key metric: {v.metric}.
                  </strong>
                </p>
              </div>

              <div className="agents">
                {AGENTS.map((a) => {
                  const roles = verticalRoles[a.slug];
                  if (!roles) return null;

                  return roles.map((r) => (
                    <div className="agent" key={`${v.slug}-${a.slug}-${r.slug}`}>
                      <div className="name">
                        <span className="ic" style={{ marginTop: 3 }}>
                          {agentIcon(a.slug)}
                        </span>
                        <div>
                          <b>{r.title}</b>
                          <br />
                          <span className={a.tag === "FLAGSHIP" ? "tag hot" : "tag"}>
                            {a.channel}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p style={{ marginBottom: 12 }}>
                          {r.solutionCopy.split(".").slice(0, 2).join(".") + "."}
                        </p>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {LOCATIONS.map((l) => (
                            <Link
                              key={l.slug}
                              href={`/${v.slug}/${a.slug}/${r.slug}/${l.slug}`}
                              className="go"
                              style={{ fontSize: 12 }}
                            >
                              {l.name} <ArrowRight size={11} />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ));
                })}
              </div>
            </div>
          </section>
        );
      })}

      <CTABand
        title="Don't see your exact combination?"
        sub="Tell us your vertical, city, and workflow. We'll architect the agent for you — free 45-minute audit."
      />
    </main>
  );
}
