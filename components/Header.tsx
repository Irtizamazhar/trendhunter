"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { navMenus } from "@/data/nav";
import { categoryBar } from "@/data/categories";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const hidden = y > 2;
      setNavHidden(hidden);
      if (hidden) setOpenMenu(null);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="sticky top-0 z-[100] bg-black text-white">
      {/* Row 1: primary nav — hides as soon as page scrolls */}
      <div
        className={`relative z-30 grid bg-black transition-[grid-template-rows] duration-[420ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none ${
          navHidden && !mobileOpen ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div
          className={
            navHidden && !mobileOpen ? "overflow-hidden" : "overflow-visible"
          }
        >
          <div
            className={`transition-[transform,opacity] duration-[420ms] ease-[cubic-bezier(0.33,1,0.68,1)] will-change-[transform,opacity] motion-reduce:transition-none ${
              navHidden && !mobileOpen
                ? "-translate-y-3 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <div className="container-page flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Logo variant="light" />
            <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navMenus.map((menu) => (
              <div
                key={menu.label}
                className={`relative ${openMenu === menu.label ? "z-50" : ""}`}
                onMouseEnter={() => setOpenMenu(menu.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={menu.href}
                  className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-white transition-colors hover:text-accent"
                  aria-expanded={openMenu === menu.label}
                  aria-haspopup="true"
                >
                  {menu.label}
                  <ChevronDown size={14} className="text-white/50" />
                </Link>

                {openMenu === menu.label && (
                  <div className="absolute left-0 top-full z-[110] pt-2">
                    <div className="animate-fade-in flex gap-10 border border-gray-200 bg-white p-6 text-ink shadow-2xl">
                      {menu.columns.map((col, i) => (
                        <div key={i} className="min-w-[180px]">
                          {col.heading && (
                            <p className="section-label mb-3">{col.heading}</p>
                          )}
                          <ul className="space-y-2">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="block whitespace-nowrap text-[14px] text-gray-600 transition-colors hover:text-ink"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
          <button
            aria-label="Search"
            className="p-2 text-white transition-colors hover:text-accent"
          >
            <Search size={18} />
          </button>
          <Link
            href="/pro"
            className="hidden text-[14px] font-medium text-white transition-colors hover:text-accent sm:block"
          >
            Log In
          </Link>
          <Link
            href="/plans"
            className="hidden bg-accent px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white sm:inline-block"
          >
            Subscribe
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-white lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: category bar — stays fixed at top */}
      <div
        className={`relative z-20 bg-black shadow-sm transition-[border-color,padding] duration-[420ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none ${
          navHidden ? "border-t border-transparent" : "border-t border-white/10"
        }`}
      >
        <div className="container-page flex items-center gap-3">
          <nav
            aria-label="Categories"
            className="no-scrollbar flex flex-1 gap-5 overflow-x-auto py-2.5"
          >
            {categoryBar.map((c) => (
              <Link
                key={c.label}
                href={c.slug ? `/${c.slug}` : "/"}
                className="whitespace-nowrap text-[13px] font-medium text-white/70 underline-offset-4 transition-colors hover:text-accent"
              >
                {c.label}
              </Link>
            ))}
          </nav>
          {navHidden && (
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="shrink-0 p-2 text-white lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {navMenus.map((menu) => (
              <details key={menu.label} className="border-b border-white/10 py-1">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-[15px] font-semibold text-white">
                  {menu.label}
                  <ChevronDown size={16} className="text-white/50" />
                </summary>
                <div className="pb-2 pl-3">
                  {menu.columns.map((col, i) => (
                    <div key={i} className="mb-2">
                      {col.heading && (
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                          {col.heading}
                        </p>
                      )}
                      <ul className="space-y-1">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-[14px] text-white/70 hover:text-accent"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ))}
            <div className="mt-4 flex gap-3">
              <Link
                href="/pro"
                onClick={() => setMobileOpen(false)}
                className="flex-1 border border-white px-6 py-3 text-center text-[13px] font-semibold uppercase tracking-wide text-white"
              >
                Log In
              </Link>
              <Link
                href="/plans"
                onClick={() => setMobileOpen(false)}
                className="btn-accent flex-1"
              >
                Subscribe
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
