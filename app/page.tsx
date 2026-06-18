import Link from "next/link";
import { Linkedin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { TrendCard } from "@/components/TrendCard";
import { RankingTabs } from "@/components/RankingTabs";
import { ContentTypeFilter } from "@/components/ContentTypeFilter";
import { InsightSpotlight } from "@/components/InsightSpotlight";
import { DataTrendsColumns } from "@/components/DataTrendsColumns";
import { trends, topTrends } from "@/data/trends";
import { insights } from "@/data/insights";

export default function HomePage() {
  const best = trends.slice(0, 12);
  const more = trends.slice(12, 24);

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-black text-white">
        <div className="container-page py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="section-label mb-4 !text-accent">
              The World&apos;s #1 Trend Platform
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Create The Future
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
              Trend Hunter is the world&apos;s #1 trend platform — fueled by
              408,314 Hunters, accelerated by AI and refined by our team of
              researchers. Join 3,500,000+ innovators using our insights to spot
              opportunity and create the future.
            </p>

            <div className="mt-7 flex gap-3">
              {[Linkedin, Instagram, Twitter, Youtube, Facebook].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-black"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/plans"
                className="bg-accent px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white"
              >
                Advisory Services
              </Link>
              <Link
                href="/pro"
                className="border border-white px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                Free 2026 Trend Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top 20 ranking */}
      <section className="container-page py-14">
        <div className="mb-6 flex items-baseline justify-between">
          <SectionLabel>Top 20</SectionLabel>
          <Link
            href="/pro"
            className="text-[13px] font-semibold uppercase tracking-wide text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-black"
          >
            See the Ranking
          </Link>
        </div>
        <RankingTabs tabs={["Today", "Week", "Month"]} trends={topTrends} />
      </section>

      {/* 3 + 4. Content filter + The Best grid */}
      <section className="container-page py-14">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">
            The Best
          </h2>
          <ContentTypeFilter />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {best.map((t, i) => (
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
      </section>

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
