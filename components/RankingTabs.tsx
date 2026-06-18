"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Trend } from "@/data/trends";

type Props = {
  tabs?: string[];
  trends: Trend[];
};

export function RankingTabs({
  tabs = ["Today", "Week", "Month"],
  trends,
}: Props) {
  const [active, setActive] = useState(0);

  // Rotate the list per tab so each tab shows a different #1
  const rotated = trends
    .slice(active, trends.length)
    .concat(trends.slice(0, active));
  const featured = rotated[0];
  const rest = rotated.slice(1, 6);

  if (!featured) return null;

  return (
    <div>
      <div
        className="mb-6 flex gap-6 border-b border-gray-200"
        role="tablist"
        aria-label="Trend ranking period"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`-mb-px border-b-2 pb-3 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
              active === i
                ? "border-black text-ink"
                : "border-transparent text-gray-400 hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Link href={`/trends/${featured.slug}`} className="group block">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <span className="absolute left-0 top-0 bg-accent px-3 py-1.5 text-sm font-bold text-black">
              #1
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold leading-tight text-ink group-hover:underline">
            #1: {featured.title}
          </h3>
          <p className="mt-2 text-[15px] text-gray-600">{featured.subtitle}</p>
          <span className="mt-3 inline-block text-[13px] font-semibold uppercase tracking-wide text-ink underline decoration-accent decoration-2 underline-offset-4">
            Full Article →
          </span>
        </Link>

        <ol className="flex flex-col divide-y divide-gray-200">
          {rest.map((t, i) => (
            <li key={t.slug}>
              <Link
                href={`/trends/${t.slug}`}
                className="group flex items-center gap-4 py-3"
              >
                <span className="w-6 shrink-0 text-lg font-bold text-gray-400">
                  {i + 2}
                </span>
                <div className="relative h-16 w-24 shrink-0 overflow-hidden bg-gray-100">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="line-clamp-2 text-[15px] font-semibold leading-snug text-ink group-hover:underline">
                    {t.title}
                  </h4>
                  <p className="line-clamp-1 text-[12px] text-gray-400">
                    {t.subtitle}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
