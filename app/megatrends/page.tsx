import Link from "next/link";
import type { Metadata } from "next";
import {
  GitMerge,
  GitFork,
  RefreshCw,
  Shuffle,
  Minimize2,
  Zap,
  Lightbulb,
  Layers,
  TrendingUp,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Megatrends & Methodology — Trend Hunter",
  description:
    "How to hunt ideas, insights, megatrends and opportunity — the Trend Hunter methodology and the 6 Patterns of Opportunity.",
};

const levels: {
  icon: LucideIcon;
  level: string;
  title: string;
  count: string;
  desc: string;
}[] = [
  {
    icon: Lightbulb,
    level: "Level 1",
    title: "Ideas",
    count: "531,163",
    desc: "Individual examples of innovation — a single product, campaign or service that signals something new.",
  },
  {
    icon: Layers,
    level: "Level 2",
    title: "Insights / Clusters",
    count: "11,234",
    desc: "Groups of related ideas that reveal a shared consumer need or behavioral shift.",
  },
  {
    icon: TrendingUp,
    level: "Level 3",
    title: "Megatrends",
    count: "18",
    desc: "Long-arc shifts that span industries and persist for years, shaping entire markets.",
  },
  {
    icon: Compass,
    level: "Level 4",
    title: "Patterns of Opportunity",
    count: "6",
    desc: "Universal models of change you can apply to generate your own next big idea.",
  },
];

const patterns: { icon: LucideIcon; name: string; desc: string }[] = [
  {
    icon: GitMerge,
    name: "Convergence",
    desc: "Combining multiple products, services or trends into one elevated experience.",
  },
  {
    icon: GitFork,
    name: "Divergence",
    desc: "Breaking from the norm to stand apart — niche, personalized or counter-cultural.",
  },
  {
    icon: RefreshCw,
    name: "Cyclicality",
    desc: "Predictable cycles — seasonal, generational or economic — that repeat over time.",
  },
  {
    icon: Shuffle,
    name: "Redirection",
    desc: "Channeling energy or attention in a surprising new direction.",
  },
  {
    icon: Minimize2,
    name: "Reduction",
    desc: "Stripping away to the essential — simpler, faster, more focused.",
  },
  {
    icon: Zap,
    name: "Acceleration",
    desc: "Relentlessly perfecting one feature or attribute to the extreme.",
  },
];

const tactics = [
  "Hunt outside your industry to spot ideas your competitors will miss.",
  "Look for the consumer need beneath the example, not just the example itself.",
  "Track adjacent megatrends to anticipate where your market is heading.",
  "Apply each of the 6 Patterns to a current product to generate fresh concepts.",
  "Revisit your assumptions often — the biggest opportunities hide in your blind spots.",
];

export default function MegatrendsPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page py-20">
          <p className="section-label mb-4 !text-accent">Methodology</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            How to Hunt Ideas, Insights, Megatrends &amp; Opportunity
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Our framework turns the chaos of constant change into a repeatable
            system. It starts with raw ideas and climbs to the universal
            patterns you can use to engineer your own breakthroughs.
          </p>
        </div>
      </section>

      {/* 4 Levels */}
      <section className="container-page py-16">
        <SectionLabel className="mb-8">The 4 Levels of Opportunity</SectionLabel>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((l) => {
            const Icon = l.icon;
            return (
              <div
                key={l.title}
                className="flex flex-col border border-gray-200 p-6"
              >
                <Icon className="text-ink" size={28} />
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-wider text-gray-400">
                  {l.level}
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">{l.title}</h3>
                <p className="mt-1 inline-block bg-accent px-2 text-2xl font-extrabold text-black">
                  ~{l.count}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                  {l.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6 Patterns */}
      <section className="bg-gray-100 py-16">
        <div className="container-page">
          <SectionLabel className="mb-8">
            The 6 Patterns of Opportunity
          </SectionLabel>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {patterns.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{p.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keep Hunting tactics */}
      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel className="mb-3">Keep Hunting Ideas</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink">
              Tactics to sharpen your instincts.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              Innovation is a discipline, not a lightning strike. These habits
              keep your hunting sharp and your pipeline full.
            </p>
          </div>
          <ul className="space-y-4">
            {tactics.map((t, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-[14px] font-bold text-black">
                  {i + 1}
                </span>
                <p className="pt-1 text-[15px] leading-relaxed text-gray-600">
                  {t}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="container-page flex flex-col items-center py-16 text-center">
          <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Get the Free 2026 Trend Report
          </h2>
          <p className="mt-4 max-w-xl text-[15px] text-white/70">
            100+ pages of the megatrends shaping the year ahead — distilled from
            millions of data points.
          </p>
          <Link
            href="/pro"
            className="mt-7 bg-accent px-8 py-3 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white"
          >
            Download Free Report
          </Link>
        </div>
      </section>
    </>
  );
}
