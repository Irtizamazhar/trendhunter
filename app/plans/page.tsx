"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

type Plan = {
  name: string;
  price?: string;
  oldPrice?: string;
  cadence?: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
  group: "turnkey" | "custom";
};

const plans: Plan[] = [
  {
    name: "PRO",
    price: "$199",
    oldPrice: "$324",
    cadence: "/ month, billed annually",
    tagline: "On-demand access to the full Trend Hunter library.",
    features: [
      "Full 2026 Trend Library",
      "50 Categories",
      "PRO Dashboard",
      "11,211 Insights",
      "527,366 Innovations",
    ],
    cta: "Start PRO",
    featured: true,
    group: "turnkey",
  },
  {
    name: "Custom Research",
    tagline: "A dedicated researcher answering your toughest questions.",
    features: [
      "Dedicated researcher",
      "24-hour turnaround",
      "Tailored insight reports",
      "Unlimited topics",
      "Presentation-ready output",
    ],
    cta: "Request Research",
    group: "custom",
  },
  {
    name: "Keynotes & Workshops",
    tagline: "Inspire your team with futurist keynotes and workshops.",
    features: [
      "Custom keynote speakers",
      "Innovation workshops",
      "Hands-on facilitation",
      "Tailored to your industry",
      "Virtual or in-person",
    ],
    cta: "Book a Keynote",
    group: "custom",
  },
  {
    name: "Accelerator",
    tagline: "Fully customized programs to embed innovation in your org.",
    features: [
      "Fully customized program",
      "Multi-week engagement",
      "Trend-to-prototype process",
      "Executive alignment",
      "Ongoing advisory",
    ],
    cta: "Talk to Sales",
    group: "custom",
  },
];

const clients = [
  "Starbucks",
  "Netflix",
  "Samsung",
  "NASA",
  "LEGO",
  "Google",
  "PepsiCo",
];

export default function PlansPage() {
  const [tab, setTab] = useState<"turnkey" | "custom">("turnkey");
  const visible =
    tab === "turnkey"
      ? plans.filter((p) => p.group === "turnkey" || p.featured)
      : plans.filter((p) => p.group === "custom");

  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page py-20 text-center">
          <p className="section-label mb-4 !text-accent">Plans &amp; Pricing</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Accelerate Innovation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Whether you need self-serve access or a dedicated team, choose the
            way you want to put the world&apos;s #1 trend platform to work.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="container-page py-12">
        <div className="mb-10 flex justify-center">
          <div className="inline-flex border border-gray-200 p-1">
            {(["turnkey", "custom"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                  tab === t
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-ink"
                }`}
              >
                {t === "turnkey" ? "Turn-Key Service" : "Custom Services"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col border p-6 ${
                p.featured
                  ? "border-accent ring-1 ring-accent"
                  : "border-gray-200"
              }`}
            >
              {p.featured && (
                <span className="mb-4 self-start bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-extrabold text-ink">{p.name}</h3>
              <p className="mt-2 min-h-[40px] text-[14px] leading-relaxed text-gray-600">
                {p.tagline}
              </p>

              <div className="mt-4 min-h-[56px]">
                {p.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-ink">
                      {p.price}
                    </span>
                    {p.oldPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {p.oldPrice}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-lg font-bold text-ink">
                    Custom Pricing
                  </span>
                )}
                {p.cadence && (
                  <p className="text-[12px] text-gray-400">{p.cadence}</p>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[14px] text-gray-600">
                    <Check size={16} className="mt-0.5 shrink-0 text-ink" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-6 inline-flex items-center justify-center px-6 py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                  p.featured
                    ? "bg-accent text-black hover:bg-black hover:text-white"
                    : "bg-black text-white hover:bg-accent hover:text-black"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Client logos */}
      <section className="border-t border-gray-200 bg-gray-100 py-12">
        <div className="container-page">
          <p className="section-label mb-6 text-center">
            Trusted by the World&apos;s Best
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((c) => (
              <span
                key={c}
                className="text-xl font-bold uppercase tracking-tight text-gray-400"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
