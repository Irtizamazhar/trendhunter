type Props = {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-9 w-9 text-[13px]",
  md: "h-12 w-12 text-base",
  lg: "h-16 w-16 text-xl",
};

export function ScoreBadge({ score, size = "md", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-accent font-bold leading-none text-black ${sizes[size]} ${className}`}
      aria-label={`Trend score ${score.toFixed(1)} out of 10`}
    >
      {score.toFixed(1)}
    </span>
  );
}
