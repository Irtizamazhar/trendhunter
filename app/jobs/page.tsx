import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Careers — Join Trend Hunter",
  description:
    "Join Trend Hunter's Toronto-based team of 70+ innovators on a mission to help the world create the future.",
};

const perks = [
  "Hybrid, Toronto-based team",
  "Work with the world's top brands",
  "Annual Future Festival pass",
  "Learning & development budget",
];

const jobs = [
  {
    title: "Trend Researcher",
    team: "Research",
    type: "Full-time",
    location: "Toronto / Hybrid",
  },
  {
    title: "Senior Front-End Engineer",
    team: "Product",
    type: "Full-time",
    location: "Toronto / Remote",
  },
  {
    title: "AI / ML Engineer",
    team: "Data & AI",
    type: "Full-time",
    location: "Toronto / Hybrid",
  },
  {
    title: "Innovation Strategist",
    team: "Advisory",
    type: "Full-time",
    location: "Toronto / Hybrid",
  },
  {
    title: "Content Producer",
    team: "Editorial",
    type: "Contract",
    location: "Remote",
  },
  {
    title: "Event Marketing Manager",
    team: "Events",
    type: "Full-time",
    location: "Toronto",
  },
];

export default function JobsPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page py-16">
          <p className="section-label mb-4 !text-accent">Careers</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Help the World Create the Future
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
            We&apos;re a curious, ambitious team of 70+ based in Toronto. If
            you&apos;re energized by innovation and big ideas, we&apos;d love to
            meet you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="container-page py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div
              key={p}
              className="border border-gray-200 p-5 text-[15px] font-medium text-gray-600"
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="container-page py-8">
        <SectionLabel className="mb-6">Open Positions</SectionLabel>
        <ul className="divide-y divide-gray-200 border-y border-gray-200">
          {jobs.map((j) => (
            <li key={j.title}>
              <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-ink">{j.title}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-gray-400">
                    <span className="bg-accent px-1.5 py-0.5 font-semibold uppercase tracking-wide text-black">
                      {j.team}
                    </span>
                    <span>{j.type}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {j.location}
                    </span>
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn-outline self-start sm:self-auto"
                >
                  Apply
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-100 py-14">
        <div className="container-page text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">
            Don&apos;t see your role?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-gray-600">
            We&apos;re always looking for exceptional people. Send us your
            résumé and tell us how you&apos;d help us create the future.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
