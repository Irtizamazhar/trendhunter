import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { StatCounter } from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "About — The World's #1 Trend Platform | Trend Hunter",
  description:
    "Trend Hunter is the world's #1 trend platform — powered by AI and a global community of trend spotters based in Toronto.",
};

const stats = [
  { value: "3,572,096,508", label: "All-Time Views" },
  { value: "1,000,000+", label: "Monthly Users" },
  { value: "806+", label: "Ideas / Week" },
  { value: "407,283", label: "Trend Hunters" },
];

const awards = ["WSJ", "CNN", "A' Design Award", "CIX", "National Post"];

const blocks: {
  label: string;
  title: string;
  body: string;
  seed: string;
  reverse?: boolean;
}[] = [
  {
    label: "Custom Research",
    title: "Answers to your toughest questions in 24 hours",
    body: "Our dedicated researchers tap a library of 500,000+ ideas to deliver tailored insight reports faster than any traditional agency.",
    seed: "about-research",
  },
  {
    label: "Innovation Accelerator",
    title: "Programs that turn insight into action",
    body: "Multi-week accelerators help teams move from trend to prototype, combining our data with hands-on facilitation.",
    seed: "about-accelerator",
    reverse: true,
  },
  {
    label: "Future Festival",
    title: "The world's most unmissable innovation conference",
    body: "Thousands of innovators gather each year for keynotes, workshops and the connections that spark their next big idea.",
    seed: "about-festival",
  },
  {
    label: "Keynotes",
    title: "Futurist speakers who electrify the room",
    body: "Our keynote speakers translate megatrends into momentum, leaving audiences with concrete ways to create the future.",
    seed: "about-keynotes",
    reverse: true,
  },
  {
    label: "AI Pioneers",
    title: "Two decades of trend intelligence, supercharged by AI",
    body: "We were spotting trends with data long before it was fashionable. Today our AI scans the world so your team can focus on what matters.",
    seed: "about-ai",
  },
  {
    label: "Social Good",
    title: "Innovation in service of a better world",
    body: "From charity initiatives to cause-driven design, we champion ideas that prove doing good and doing well belong together.",
    seed: "about-good",
    reverse: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page py-20">
          <p className="section-label mb-4 !text-accent">About Trend Hunter</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The World&apos;s #1 Trend Platform
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Trend Hunter empowers the world&apos;s most prolific innovators with
            custom research, AI-driven insight and a global community of trend
            spotters — all dedicated to helping you create the future.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="border-y border-gray-200 bg-gray-100 py-10">
        <div className="container-page">
          <p className="section-label mb-6 text-center">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {awards.map((a) => (
              <span
                key={a}
                className="text-xl font-bold uppercase tracking-tight text-gray-400"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Get Inspired blocks */}
      <section className="container-page py-16">
        <SectionLabel className="mb-10">Get Inspired</SectionLabel>
        <div className="space-y-16">
          {blocks.map((b) => (
            <div
              key={b.label}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <div className={b.reverse ? "lg:order-2" : ""}>
                <p className="inline-block bg-accent px-2 py-0.5 text-[12px] font-semibold uppercase tracking-wider text-black">
                  {b.label}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  {b.body}
                </p>
              </div>
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden bg-gray-100 ${
                  b.reverse ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={`https://picsum.photos/seed/${b.seed}/900/600`}
                  alt={b.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Join */}
      <section className="bg-black text-white">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="section-label !text-accent">Our Team</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              70+ innovators, based in Toronto.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
              We&apos;re a diverse team of researchers, technologists and
              storytellers united by a single mission: to help the world create
              the future. And we&apos;re always looking for curious people to
              join us.
            </p>
            <Link
              href="/jobs"
              className="mt-7 inline-block bg-accent px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-black transition-colors hover:bg-white"
            >
              Join Us
            </Link>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-white/5">
            <Image
              src="https://picsum.photos/seed/about-team-toronto/900/600"
              alt="The Trend Hunter team in Toronto"
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
