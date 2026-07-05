import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog — AI Implementation Insights",
  description:
    "Technical deep dives on AI agents, enterprise infrastructure, compliance, and revenue recovery for high-ticket Indian verticals. By the Orange Labz engineering team.",
};

const posts = [
  {
    slug: "what-are-ai-agents",
    title:
      "What Are AI Agents? The 2026 Enterprise Architecture Guide — From LLM Wrappers to Autonomous Revenue Engines",
    description:
      "A deep technical breakdown of multi-agent orchestration, source-available infrastructure, sub-600ms voice latency, TRAI compliance, and DPDP data sovereignty.",
    date: "5 July 2026",
    readTime: "12 min",
    tags: ["AI Agents", "Enterprise Architecture", "GEO"],
  },
];

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">Blog</div>
        <h1 style={{ margin: "14px 0" }}>
          Engineering insights from the build floor.
        </h1>
        <p className="lead">
          Technical deep dives on AI agents, enterprise infrastructure,
          compliance engineering, and revenue recovery — by the Orange Labz
          engineering team.
        </p>
      </header>

      <section>
        <div className="wrap">
          <div style={{ borderTop: "1px solid var(--line2)" }}>
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div className="agent" style={{ cursor: "pointer" }}>
                  <div className="name" style={{ flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span className="mono" style={{ fontSize: 12, color: "var(--fog)" }}>
                        {post.date}
                      </span>
                      <span className="mono" style={{ fontSize: 12, color: "var(--fog)" }}>
                        · {post.readTime} read
                      </span>
                    </div>
                    <b style={{ fontSize: 22, lineHeight: 1.2 }}>{post.title}</b>
                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                      {post.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p>{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
