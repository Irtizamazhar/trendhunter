import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { Newsletter } from "./Newsletter";

const columns: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Trends & Insights",
      links: [
        { label: "Ideas", href: "/" },
        { label: "Insights", href: "/pro" },
        { label: "Megatrends", href: "/megatrends" },
        { label: "Trend Reports", href: "/pro" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Advisory", href: "/plans" },
        { label: "Custom Research", href: "/plans" },
        { label: "Keynotes", href: "/future-festival" },
        { label: "Plans & Pricing", href: "/plans" },
      ],
    },
    {
      heading: "Events",
      links: [
        { label: "Future Festival", href: "/future-festival" },
        { label: "FuturistU", href: "/future-festival" },
        { label: "World Summit", href: "/future-festival" },
      ],
    },
    {
      heading: "About",
      links: [
        { label: "About Us", href: "/about-trend-hunter" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/jobs" },
      ],
    },
  ];

export function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr_1.4fr]">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/60">
              Solutions for innovators working at the edge of change — powered by
              AI and the world&apos;s largest community of trend spotters.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "X" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-black"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-white/80 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">
              Newsletter
            </p>
            <p className="mb-4 text-[14px] text-white/60">
              Get the day&apos;s top trends in your inbox.
            </p>
            <Newsletter variant="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-[13px] text-white/50 sm:flex-row">
          <p>Trends © 2026 Trend Hunter Inc. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
