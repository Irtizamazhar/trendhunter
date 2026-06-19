"use client";

import { useMemo, useState } from "react";
import { ContentTypeFilter } from "@/components/ContentTypeFilter";
import { TrendCard } from "@/components/TrendCard";
import type { Trend } from "@/data/trends";

function filterTrends(trends: Trend[], type: string): Trend[] {
  switch (type) {
    case "Lists":
      return trends.filter((_, i) => i % 2 === 0);
    case "Videos":
      return trends.filter((t) =>
        ["ai", "tech", "popculture", "marketing"].includes(t.category),
      );
    case "Photos":
      return trends.filter((t) =>
        ["artdesign", "fashion", "life", "luxury"].includes(t.category),
      );
    case "Insights":
      return [...trends].sort((a, b) => b.score - a.score).slice(0, 10);
    case "Show All":
      return trends;
    case "Ideas":
    default:
      return trends.slice(0, 12);
  }
}

type Props = {
  trends: Trend[];
};

export function BestTrendsSection({ trends }: Props) {
  const [active, setActive] = useState("Ideas");
  const filtered = useMemo(
    () => filterTrends(trends, active),
    [trends, active],
  );

  return (
    <section className="container-page py-14">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink">
          The Best
        </h2>
        <ContentTypeFilter active={active} onChange={setActive} />
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-[15px] text-gray-500">
          No {active.toLowerCase()} found right now. Try another filter.
        </p>
      ) : (
        <div
          key={active}
          className="grid animate-fade-in grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {filtered.map((t, i) => (
            <TrendCard
              key={t.slug}
              slug={t.slug}
              image={t.image}
              title={t.title}
              subtitle={t.subtitle}
              description={t.description}
              date={t.date}
              score={t.score}
              priority={i < 4}
            />
          ))}
        </div>
      )}
    </section>
  );
}
