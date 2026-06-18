import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

// "TREND HUNTER" wordmark with an accent starburst mark.
export function Logo({ variant = "dark", className = "" }: Props) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 ${className}`}
      aria-label="Trend Hunter home"
    >
      <Starburst className="h-6 w-6 shrink-0 text-accent" />
      <span
        className={`text-[19px] font-extrabold uppercase leading-none tracking-tight ${text}`}
      >
        Trend<span className="font-light">Hunter</span>
      </span>
    </Link>
  );
}

function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0l2.4 6.3L20 3.5l-2.8 5.6 6.3 1.4-6 2.5 4 5-5.6-2.2.9 6.7-3.2-5.8-3.2 5.8.9-6.7L5.6 21l4-5-6-2.5 6.3-1.4L7 3.5l5.6 2.8z" />
    </svg>
  );
}
