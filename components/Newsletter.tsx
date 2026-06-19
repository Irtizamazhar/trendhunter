"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function Newsletter({ variant = "light", className = "" }: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const dark = variant === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div
        className={`flex items-center border ${
          dark ? "border-white/30" : "border-gray-200"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className={`w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-400 ${
            dark ? "text-white" : "text-ink"
          }`}
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className={`flex h-12 w-12 shrink-0 items-center justify-center transition-colors ${
            dark
              ? "bg-white text-black hover:bg-accent hover:text-black"
              : "bg-black text-white hover:bg-accent hover:text-black"
          }`}
        >
          {done ? <Check size={18} /> : <ArrowRight size={18} />}
        </button>
      </div>
      {done && (
        <p
          className={`mt-2 text-[12px] ${dark ? "text-white/70" : "text-gray-600"}`}
        >
          Thanks — you&apos;re subscribed to the Trend Hunter newsletter.
        </p>
      )}
    </form>
  );
}
