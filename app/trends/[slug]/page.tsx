import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { TrendCard } from "@/components/TrendCard";
import { ScoreBadge } from "@/components/ScoreBadge";
import { trends, getTrend, relatedTrends } from "@/data/trends";
import { getCategory } from "@/data/categories";

export function generateStaticParams() {
  return trends.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const trend = getTrend(params.slug);
  if (!trend) return { title: "Trend — Trend Hunter" };
  return { title: `${trend.title} — Trend Hunter`, description: trend.subtitle };
}

function StatRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[13px]">
        <span className="font-medium text-gray-600">{label}</span>
        <span className="font-semibold text-ink">{value.toFixed(1)}</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function TrendPage({ params }: { params: { slug: string } }) {
  const trend = getTrend(params.slug);
  if (!trend) notFound();

  const cat = getCategory(trend.category);
  const related = relatedTrends(trend, 4);

  // Deterministic mock sub-scores derived from the headline score
  const popularity = Math.min(10, Math.max(1, trend.score + 0.4));
  const activity = Math.min(10, Math.max(1, trend.score - 0.6));
  const freshness = Math.min(10, Math.max(1, trend.score + 0.9));

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="container-page flex items-center gap-1.5 py-3 text-[13px] text-gray-400">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <ChevronRight size={14} />
          {cat && (
            <>
              <Link href={`/${cat.slug}`} className="hover:text-ink">
                {cat.navLabel}
              </Link>
              <ChevronRight size={14} />
            </>
          )}
          <span className="line-clamp-1 font-medium text-ink">
            {trend.title}
          </span>
        </div>
      </div>

      <article className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Main */}
          <div>
            <p className="inline-block bg-accent px-2 py-1 text-[12px] font-semibold uppercase tracking-wider text-black">
              {cat?.navLabel ?? "Trend"} · {trend.date}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              {trend.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600">{trend.subtitle}</p>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <Image
                src={trend.image}
                alt={trend.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                priority
              />
            </div>

            <div className="prose mt-8 max-w-none space-y-5 text-[16px] leading-relaxed text-gray-600">
              <p>{trend.description}</p>
              <p>
                This shift is part of a broader move toward smarter, more
                intentional design across the {cat?.navLabel ?? "industry"}{" "}
                space. As consumer expectations climb, brands that lead with this
                kind of innovation are setting a new baseline for what audiences
                consider table stakes — and quietly redefining the category in
                the process.
              </p>
              <p>
                For innovators, the opportunity is less about copying the
                specific execution and more about reading the underlying signal:
                people increasingly reward experiences that feel effortless,
                purposeful and a little surprising. The question is where else
                that same logic could be applied.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-gray-200 p-6">
              <div className="flex items-center gap-4">
                <ScoreBadge score={trend.score} size="lg" />
                <div>
                  <p className="section-label">Trend Score</p>
                  <p className="text-[13px] text-gray-600">
                    out of 10.0
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <StatRow label="Popularity" value={popularity} />
                <StatRow label="Activity" value={activity} />
                <StatRow label="Freshness" value={freshness} />
              </div>
              <Link
                href="/plans"
                className="btn-primary mt-6 w-full"
              >
                Unlock Full Analysis
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {/* Related */}
      <section className="container-page py-12">
        <SectionLabel className="mb-6">Related Trends</SectionLabel>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {related.map((t) => (
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
