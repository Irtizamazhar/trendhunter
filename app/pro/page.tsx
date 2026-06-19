import Link from "next/link";
import type { Metadata } from "next";
import { Check, BarChart3, Library, Bot, FileText } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { StatCounter } from "@/components/StatCounter";
import { TrendCard } from "@/components/TrendCard";
import { topTrends } from "@/data/trends";

export const metadata: Metadata = {
  title: "Trend Hunter PRO — Insights for Innovators",
  description:
    "Trend Hunter PRO gives your team on-demand access to the world's largest library of trends, insights and AI-driven analysis.",
};

const features = [
  {
    icon: Library,
    title: "Full Trend Library",
    body: "Search 527,366+ innovations across 50 categories, updated daily.",
  },
  {
    icon: Bot,
    title: "Trend Hunter AI",
    body: "AI clusters millions of data points into the insights that matter to you.",
  },
  {
    icon: BarChart3,
    title: "PRO Dashboard",
    body: "Track scores, patterns and megatrends in one customizable workspace.",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    body: "Generate presentation-ready trend reports in minutes, not weeks.",
  },
];

const includes = [
  "Full 2026 Trend Library",
  "11,211 Insights",
  "50 Categories",
  "PRO Dashboard & Search",
  "AI-Powered Analysis",
  "Exportable Reports",
];

export default function ProPage() {
  const featured = topTrends.slice(0, 4);

  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page py-20">
          <p className="section-label mb-4 !text-accent">Trend Hunter PRO</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Insights That Help You Create the Future
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Give your team on-demand access to the world&apos;s largest library
            of trends, refined by AI and trusted by the most innovative brands on
            earth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/plans"
              className="bg-accent px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white"
            >
              See Plans
            </Link>
            <Link
              href="/contact"
              className="border border-white px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-14">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <StatCounter value="527,366" label="Innovations" />
          <StatCounter value="11,211" label="Insights" />
          <StatCounter value="50" label="Categories" />
          <StatCounter value="806+" label="Ideas / Week" />
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16">
        <div className="container-page">
          <SectionLabel className="mb-8">What You Get</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white p-6">
                  <Icon className="text-ink" size={28} />
                  <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Includes + CTA */}
      <section className="container-page py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel className="mb-3">Everything in PRO</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink">
              One subscription, the whole platform.
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {includes.map((f) => (
                <li key={f} className="flex gap-2 text-[15px] text-gray-600">
                  <Check size={18} className="mt-0.5 shrink-0 text-ink" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-accent p-8 text-center ring-1 ring-accent">
            <p className="section-label">Starting At</p>
            <div className="mt-2 flex items-baseline justify-center gap-2">
              <span className="text-5xl font-extrabold text-ink">$199</span>
              <span className="text-lg text-gray-400 line-through">$324</span>
            </div>
            <p className="text-[13px] text-gray-400">/ month, billed annually</p>
            <Link href="/plans" className="btn-primary mt-6 w-full">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Sample trends */}
      <section className="container-page py-12">
        <SectionLabel className="mb-6">Today&apos;s Top Insights</SectionLabel>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((t) => (
            <TrendCard
              key={t.slug}
              slug={t.slug}
              image={t.image}
              title={t.title}
              subtitle={t.subtitle}
              description={t.description}
              date={t.date}
              score={t.score}
            />
          ))}
        </div>
      </section>
    </>
  );
}
