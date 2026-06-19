import {
  GitMerge,
  GitFork,
  RefreshCw,
  Shuffle,
  Minimize2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ScoreBadge } from "./ScoreBadge";
import { TrendCard } from "./TrendCard";
import type { Insight } from "@/data/insights";
import { getTrend } from "@/data/trends";

const patternIcons: Record<string, LucideIcon> = {
  Convergence: GitMerge,
  Divergence: GitFork,
  Cyclicality: RefreshCw,
  Redirection: Shuffle,
  Reduction: Minimize2,
  Acceleration: Zap,
};

function MiniBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-20 w-3 items-end overflow-hidden rounded-full bg-gray-200">
        <div
          className="w-full rounded-full bg-accent"
          style={{ height: `${(value / 10) * 100}%` }}
        />
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
        {label}
      </span>
    </div>
  );
}

export function InsightSpotlight({ insight }: { insight: Insight }) {
  const related = insight.related
    .map((slug) => getTrend(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="border border-gray-200 bg-white">
      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_auto] lg:p-10">
        {/* Left: structured text */}
        <div className="max-w-2xl">
          <p className="section-label mb-2">Featured Insight</p>
          <h3 className="text-3xl font-extrabold leading-tight text-ink">
            {insight.title}
          </h3>

          <dl className="mt-6 space-y-5">
            <div>
              <dt className="inline-block bg-accent px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
                Trend
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-gray-600">
                {insight.trendText}
              </dd>
            </div>
            <div>
              <dt className="inline-block bg-accent px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
                Insight
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-gray-600">
                {insight.insightText}
              </dd>
            </div>
            <div>
              <dt className="inline-block bg-accent px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
                Workshop Question
              </dt>
              <dd className="mt-1 text-[15px] font-medium leading-relaxed text-ink">
                {insight.workshopQuestion}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="section-label mb-2">Patterns</p>
              <div className="flex gap-3">
                {insight.patterns.map((p) => {
                  const Icon = patternIcons[p] ?? Zap;
                  return (
                    <div
                      key={p}
                      className="flex flex-col items-center gap-1"
                      title={p}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-ink">
                        <Icon size={18} />
                      </span>
                      <span className="text-[10px] text-gray-400">{p}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="section-label mb-2">Megatrends</p>
              <div className="flex flex-wrap gap-2">
                {insight.megatrends.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-gray-100 px-3 py-1 text-[12px] font-medium text-gray-600"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: score + bars */}
        <div className="flex flex-row items-center gap-6 border-gray-200 lg:flex-col lg:border-l lg:pl-10">
          <div className="text-center">
            <p className="section-label mb-2">Score</p>
            <ScoreBadge score={insight.score} size="lg" className="mx-auto" />
          </div>
          <div className="flex gap-4">
            <MiniBar label="Pop" value={insight.popularity} />
            <MiniBar label="Act" value={insight.activity} />
            <MiniBar label="Fresh" value={insight.freshness} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-gray-200 p-6 lg:p-10">
          <p className="section-label mb-5">Related Trends</p>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {related.map((t) => (
              <TrendCard
                key={t.slug}
                slug={t.slug}
                image={t.image}
                title={t.title}
                subtitle={t.subtitle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
