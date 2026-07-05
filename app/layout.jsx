import "./globals.css";
import { Nav, Footer } from "@/components/site";
import MotionObserver from "@/components/motion";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://orangelabz.com"),
  title: {
    default: "Orange Labz — AI That Answers, Qualifies & Books | AI Implementation Firm, India",
    template: "%s | Orange Labz",
  },
  description:
    "Inbound-first AI agents that answer every call in one ring, qualify on WhatsApp, and book the meeting — on infrastructure you own. TRAI-aware, DPDP compliant. Bengaluru, India.",
  openGraph: { siteName: "Orange Labz", type: "website" },
  icons: {
    icon: "/favicon-svg.svg",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orange Labz",
  url: "https://orangelabz.com",
  description:
    "Orange Labz is an AI implementation firm in Bengaluru, India. It builds and manages inbound-first AI agents (voice, WhatsApp, SMS, email) on client-owned, single-tenant infrastructure, with TRAI and DPDP compliance built in. Jugaad AI is its productized suite for SMBs.",
  areaServed: "IN",
  brand: [{ "@type": "Brand", name: "Jugaad AI" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <MotionObserver />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <div className="veil">
          <Nav />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

