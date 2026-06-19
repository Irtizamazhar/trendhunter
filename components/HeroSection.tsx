"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Trend } from "@/data/trends";

type Props = {
  trends: Trend[];
};

const socialLinks = [
  { Icon: Mail, label: "Email" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "X" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: PinterestIcon, label: "Pinterest" },
  { Icon: TikTokIcon, label: "TikTok" },
];

function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.403.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

export function HeroSection({ trends }: Props) {
  const [tab, setTab] = useState(0);
  const [slide, setSlide] = useState(0);

  const tabs = ["Today", "Week", "Month"];
  const rotated = trends
    .slice(tab, trends.length)
    .concat(trends.slice(0, tab));
  const featured = rotated[0];
  const carousel = rotated.slice(1);

  if (!featured) return null;

  const pairCount = Math.max(1, Math.ceil(carousel.length / 2));
  const safeSlide = slide % pairCount;
  const leftImage = carousel[safeSlide * 2] ?? featured;
  const rightImage = carousel[safeSlide * 2 + 1] ?? rotated[1] ?? featured;

  const prevSlide = () =>
    setSlide((s) => (s - 1 + pairCount) % pairCount);
  const nextSlide = () => setSlide((s) => (s + 1) % pairCount);

  return (
    <section className="bg-black text-white">
      {/* Split hero: ~40% copy / ~60% images */}
      <div className="grid lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
          <h1 className="text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Create The Future
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">
            Spark new ideas with Trend Hunter AI, the world&apos;s #1 largest,
            most powerful trend platform. We unlock insights with a global
            network of 408,404 Hunters, billions of views, AI and a skilled
            team of Researchers and Futurists. Join 3,500,000+ on the cutting
            edge:
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            {socialLinks.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white/80 transition-colors hover:text-accent"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="mt-7 flex w-full max-w-sm flex-col gap-3">
            <Link
              href="/plans"
              className="inline-flex w-full items-center justify-center border border-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            >
              Advisory Services
            </Link>
            <Link
              href="/pro"
              className="inline-flex w-full items-center justify-center bg-accent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white"
            >
              Free 2026 Trend Report
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
          <div className="grid flex-1 grid-cols-2">
            {[leftImage, rightImage].map((t) => (
              <div
                key={`${t.slug}-${safeSlide}`}
                className="relative h-full min-h-[280px] overflow-hidden bg-neutral-900 sm:min-h-[360px] lg:min-h-[420px]"
              >
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 flex h-full w-9 flex-col sm:w-10">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prevSlide}
              className="flex flex-1 items-center justify-center bg-black/70 text-white transition-colors duration-200 hover:bg-accent hover:text-black"
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={nextSlide}
              className="flex flex-1 items-center justify-center bg-black/70 text-white transition-colors duration-200 hover:bg-accent hover:text-black"
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width trending bar */}
      <div className="border-t border-gray-200 bg-white text-ink">
        <div className="container-page py-5 sm:py-6">
          <div
            className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-1"
            role="tablist"
            aria-label="Trend ranking period"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-400">
              Top 20
            </span>
            {tabs.map((label, i) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={tab === i}
                onClick={() => {
                  setTab(i);
                  setSlide(0);
                }}
                className={`text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  tab === i
                    ? "text-ink underline decoration-black decoration-2 underline-offset-[6px]"
                    : "text-gray-400 hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <Link href={`/trends/${featured.slug}`} className="group block">
            <h2 className="text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-[1.65rem]">
              #1: {featured.title}
            </h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
              {featured.subtitle}{" "}
              <span className="font-semibold uppercase tracking-wide text-gray-400 transition-colors group-hover:text-ink">
                Full Article
              </span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
