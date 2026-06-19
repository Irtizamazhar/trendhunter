import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { TrendCard } from "@/components/TrendCard";
import { RankingTabs } from "@/components/RankingTabs";
import { CategoryChips } from "@/components/CategoryChips";
import { InsightSpotlight } from "@/components/InsightSpotlight";
import {
  categories,
  getCategory,
  topicCloud,
} from "@/data/categories";
import { trendsByCategory, trends } from "@/data/trends";
import { insights } from "@/data/insights";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const cat = getCategory(params.category);
  if (!cat) return { title: "Category — Trend Hunter" };
  return {
    title: `${cat.title} — Trend Hunter`,
    description: cat.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = getCategory(params.category);
  if (!cat) notFound();

  let list = trendsByCategory(cat.slug);
  // Fallback so every category has a full-looking grid
  if (list.length < 6) {
    list = [...list, ...trends.filter((t) => t.category !== cat.slug)].slice(
      0,
      12,
    );
  }
  const ranking = [...list].sort((a, b) => b.score - a.score);
  const insight = insights[categories.indexOf(cat) % insights.length];

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="container-page flex items-center gap-1.5 py-3 text-[13px] text-gray-400">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="font-medium text-ink">{cat.navLabel}</span>
        </div>
      </div>

      {/* Category hero */}
      <section className="container-page py-12">
        <SectionLabel>Category</SectionLabel>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
          {cat.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-gray-600">
          {cat.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link href="/plans" className="btn-primary">
            Explore Our Solutions
          </Link>
          <Link href="/pro" className="btn-outline">
            Download Annual Trend Report
          </Link>
        </div>
      </section>

      {/* Top 20 ranking */}
      <section className="container-page py-10">
        <div className="mb-6">
          <SectionLabel>Top 20 in {cat.navLabel}</SectionLabel>
        </div>
        <RankingTabs tabs={["Week", "Month", "2 Months"]} trends={ranking} />
      </section>

      {/* Sub-category chips */}
      {cat.subCategories.length > 0 && (
        <section className="container-page py-8">
          <SectionLabel className="mb-3">Sub-Categories</SectionLabel>
          <CategoryChips items={cat.subCategories} />
        </section>
      )}

      {/* Trend grid */}
      <section className="container-page py-10">
        <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-ink">
          Latest in {cat.navLabel}
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {list.map((t, i) => (
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

      {/* Insight spotlight */}
      <section className="bg-gray-100 py-14">
        <div className="container-page">
          <SectionLabel className="mb-6">Insight Spotlight</SectionLabel>
          <InsightSpotlight insight={insight} />
        </div>
      </section>

      {/* Explore Topics */}
      <section className="container-page py-14">
        <SectionLabel className="mb-5">Explore Topics</SectionLabel>
        <CategoryChips
          items={topicCloud}
          className="gap-x-4 gap-y-3"
        />
      </section>

      {/* #1 Trend Platform promo */}
      <section className="bg-black text-white">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="section-label !text-accent">The #1 Trend Platform</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Put 527,366+ innovations to work for your team.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
              Trend Hunter PRO gives your organization on-demand access to our
              full library of trends, insights and AI-driven analysis — built to
              accelerate your next big idea.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/plans"
                className="bg-accent px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white"
              >
                Book a Demo
              </Link>
              <Link
                href="/pro"
                className="border border-white px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-white/5">
            <Image
              src="https://picsum.photos/seed/trendhunter-pro-laptop/900/600"
              alt="Trend Hunter PRO dashboard"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
