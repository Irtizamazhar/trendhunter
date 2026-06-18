"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page py-16">
          <p className="section-label mb-4 !text-accent">Contact Us</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s Create the Future Together
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Questions about our solutions, events or research? Send us a note and
            our team will be in touch within one business day.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div>
            {sent ? (
              <div className="border border-accent bg-gray-100 p-8">
                <h2 className="text-2xl font-bold text-ink">
                  Thanks for reaching out!
                </h2>
                <p className="mt-2 text-[15px] text-gray-600">
                  We&apos;ve received your message and will respond shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" id="name" />
                  <Field label="Email" id="email" type="email" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[13px] font-semibold text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full border border-gray-200 px-4 py-3 text-[15px] outline-none transition-colors focus:border-black"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <aside>
            <SectionLabel className="mb-5">Get in Touch</SectionLabel>
            <ul className="space-y-5 text-[15px] text-gray-600">
              <li className="flex gap-3">
                <MapPin size={20} className="shrink-0 text-ink" />
                <span>
                  Trend Hunter Inc.
                  <br />
                  79 Front Street East
                  <br />
                  Toronto, ON M5E 1B5, Canada
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="shrink-0 text-ink" />
                <span>hello@trendhunter.example</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="shrink-0 text-ink" />
                <span>+1 (416) 555-0142</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
}: {
  label: string;
  id: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-semibold text-ink"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="w-full border border-gray-200 px-4 py-3 text-[15px] outline-none transition-colors focus:border-black"
      />
    </div>
  );
}
