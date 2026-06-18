"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

const events = [
  { city: "New York", date: "Jun 9, 2026", tag: "Innovation Day" },
  {
    city: "Toronto World Summit",
    date: "Sep 30 – Oct 1, 2026",
    tag: "Flagship",
  },
  { city: "FuturistU", date: "Sep 29 – Oct 1, 2026", tag: "Training" },
  { city: "Chicago", date: "Fall 2026", tag: "Innovation Day" },
];

const trustedBy = [
  "Starbucks",
  "Netflix",
  "Samsung",
  "NASA",
  "LEGO",
  "Google",
  "PepsiCo",
];

const whyAttend = [
  {
    title: "World-Class Keynotes",
    body: "Hear from futurists and innovators who turn megatrends into momentum.",
  },
  {
    title: "Hands-On Workshops",
    body: "Leave with frameworks and prototypes you can apply the moment you're back.",
  },
  {
    title: "Unmatched Networking",
    body: "Connect with thousands of senior innovators from every industry.",
  },
];

const testimonials = [
  {
    quote:
      "Future Festival completely reframed how our team approaches innovation. We left with a year's worth of ideas in two days.",
    name: "VP of Strategy, Global CPG Brand",
  },
  {
    quote:
      "The best innovation conference on the planet. The energy, the speakers, the workshops — nothing else compares.",
    name: "Head of Innovation, Fortune 100",
  },
  {
    quote:
      "I've attended for three years running. It pays for itself with a single idea every single time.",
    name: "Chief Marketing Officer, Retail",
  },
];

const speakers = [
  "Jeremy Gutsche",
  "Shelby Walsh",
  "Armida Ascano",
  "Gil Haddi",
  "Courtney Scharf",
  "Marc Hemeon",
  "Ay:Nidé Olojede",
  "Cameron Yick",
];

const sponsors = ["Adobe", "Salesforce", "IBM", "Microsoft", "Shopify"];

const faqs = [
  {
    q: "Where and when is Future Festival 2026?",
    a: "Our flagship Toronto World Summit runs Sep 30 – Oct 1, 2026, with additional Innovation Days in New York, Chicago and beyond throughout the year.",
  },
  {
    q: "Who attends Future Festival?",
    a: "Thousands of senior innovators, strategists and executives from across every industry — from startups to the Fortune 100.",
  },
  {
    q: "Is there a virtual option?",
    a: "Yes. Most events offer a hybrid pass so you can join the keynotes and workshops from anywhere in the world.",
  },
  {
    q: "What's included in a ticket?",
    a: "Full access to keynotes, hands-on workshops, networking sessions, the trend report library and post-event recordings.",
  },
];

export default function FutureFestivalPage() {
  const [t, setT] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="https://picsum.photos/seed/future-festival-hero/1600/700"
          alt="Future Festival stage"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="container-page relative py-28 text-center">
          <p className="section-label mb-4 !text-accent">Future Festival</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Unmissable Innovation Conference
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/80">
            Two days of keynotes, workshops and connections designed to send you
            home with your next big idea.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-accent px-8 py-3 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white"
          >
            Register Today
          </Link>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="container-page py-16">
        <SectionLabel className="mb-8">Upcoming 2026 Events</SectionLabel>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <div
              key={e.city}
              className="flex flex-col border border-gray-200 p-6"
            >
              <span className="self-start bg-gray-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                {e.tag}
              </span>
              <h3 className="mt-4 flex items-start gap-2 text-xl font-bold text-ink">
                <MapPin size={18} className="mt-1 shrink-0 text-ink" />
                {e.city}
              </h3>
              <p className="mt-1 text-[14px] font-medium text-gray-600">
                {e.date}
              </p>
              <Link
                href="/contact"
                className="mt-4 text-[13px] font-semibold uppercase tracking-wide text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-black"
              >
                Register →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-gray-200 bg-gray-100 py-10">
        <div className="container-page">
          <p className="section-label mb-6 text-center">Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedBy.map((c) => (
              <span
                key={c}
                className="text-xl font-bold uppercase tracking-tight text-gray-400"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why attend */}
      <section className="container-page py-16">
        <SectionLabel className="mb-8">Why Attend</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-3">
          {whyAttend.map((w) => (
            <div key={w.title} className="border-l-2 border-accent pl-5">
              <h3 className="text-xl font-bold text-ink">{w.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="bg-black py-16 text-white">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-8 !text-accent">What Attendees Say</p>
          <blockquote className="text-2xl font-medium leading-snug">
            &ldquo;{testimonials[t].quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-[14px] uppercase tracking-wide text-white/60">
            {testimonials[t].name}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() =>
                setT((t - 1 + testimonials.length) % testimonials.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setT((t + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="container-page py-16">
        <SectionLabel className="mb-8">Meet Our Speakers</SectionLabel>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {speakers.map((s, i) => (
            <div key={s} className="text-center">
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={`https://picsum.photos/seed/speaker-${i}/400/400`}
                  alt={s}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-[15px] font-semibold text-ink">{s}</h3>
              <p className="text-[12px] uppercase tracking-wide text-gray-400">
                Futurist
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors */}
      <section className="border-y border-gray-200 bg-gray-100 py-10">
        <div className="container-page">
          <p className="section-label mb-6 text-center">Our Sponsors</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {sponsors.map((s) => (
              <span
                key={s}
                className="text-xl font-bold uppercase tracking-tight text-gray-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="container-page py-16">
        <SectionLabel className="mb-8">Frequently Asked Questions</SectionLabel>
        <div className="mx-auto max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[16px] font-semibold text-ink">
                  {f.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <p className="animate-fade-in pb-5 text-[15px] leading-relaxed text-gray-600">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
