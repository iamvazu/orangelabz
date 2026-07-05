import { getAllCombinations } from "@/lib/pseo-data";

const BASE = "https://orangelabz.com";

const staticPages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/ai-agents", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ai-implementation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/engineering", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-visibility", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-commerce", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/real-estate", priority: 0.85, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/jugaad-ai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog/what-are-ai-agents", priority: 0.85, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap() {
  const now = new Date().toISOString();

  const staticEntries = staticPages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const pseoEntries = getAllCombinations().map((c) => ({
    url: `${BASE}/${c.vertical}/${c.agent}/${c.role}/${c.location}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...pseoEntries];
}
