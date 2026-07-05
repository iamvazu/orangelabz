import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site";

export const metadata = {
  title: "AI Visibility — SEO, PSEO, GEO & AEO",
  description: "Rank on Google and get recommended by ChatGPT, Claude, Gemini, and Perplexity. SEO, programmatic SEO, and generative/answer engine optimization by Orange Labz.",
};

export default function Page() {
  return (
    <main>
      <header className="wrap hero-page">
        <div className="eyebrow">AI Visibility</div>
        <h1 style={{ margin: "14px 0" }}>Get found by Google — and recommended by the AIs.</h1>
        <p className="lead">Buyers now ask ChatGPT, Claude, Gemini, and Perplexity for recommendations. We make sure your brand is the answer — and we practise it on this very site.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/contact">Book a Free AI Audit <ArrowRight size={16}/></Link></div>
      </header>

      <section><div className="wrap">
        <div className="shead"><div className="eyebrow">Four layers of discovery</div><h2>One footprint, every engine.</h2></div>
        <div className="grid2">
          {[["SEO — Traditional search","Structural tuning, speed, and keyword-cluster targeting to win organic rankings where buyers still start."],
            ["PSEO — Programmatic scale","Automated page pipelines for thousands of high-intent, geo-targeted long-tail queries — projects × localities × formats."],
            ["GEO — Generative Engine Optimization","Schema, structured data, and a clean entity footprint so LLMs consistently surface and recommend your brand."],
            ["AEO — Answer Engine Optimization","Knowledge formatted to win zero-click answers on Perplexity, AI search, and voice assistants."]].map(([t,d])=>(
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div></section>

      <CTABand title="If an AI can't recommend you, you don't exist to half your buyers." />
    </main>
  );
}
