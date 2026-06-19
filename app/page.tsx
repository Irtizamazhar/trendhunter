import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { TrendCard } from "@/components/TrendCard";
import { HeroSection } from "@/components/HeroSection";
import { BestTrendsSection } from "@/components/BestTrendsSection";
import { InsightSpotlight } from "@/components/InsightSpotlight";
import { DataTrendsColumns } from "@/components/DataTrendsColumns";
import { trends, topTrends } from "@/data/trends";
import { insights } from "@/data/insights";

export default function HomePage() {
  const more = trends.slice(12, 24);

  return (
    <>
      {/* 1. Hero + Top 20 spotlight */}
      <HeroSection trends={topTrends} />

      {/* 2. Content filter + The Best grid */}
      <BestTrendsSection trends={trends} />

      {/* 5. Featured Insight */}
      <section className="bg-gray-100 py-14">
        <div className="container-page">
          <div className="mb-6">
            <SectionLabel>Data Trends by Trend Hunter AI</SectionLabel>
          </div>
          <InsightSpotlight insight={insights[0]} />
        </div>
      </section>

      {/* 6. Data Trends columns */}
      <section className="container-page py-14">
        <div className="mb-8">
          <SectionLabel>Data Trends</SectionLabel>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
            What the World Is Hunting Right Now
          </h2>
        </div>
        <DataTrendsColumns />
      </section>

      {/* 7. Big trend grid */}
      <section className="container-page py-14">
        <div className="mb-6">
          <SectionLabel>Get Inspired</SectionLabel>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
            More Trending Ideas
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {more.map((t) => (
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
        <div className="mt-12 text-center">
          <Link href="/tech" className="btn-primary">
            View More
          </Link>
        </div>
      </section>
    </>
  );
}
