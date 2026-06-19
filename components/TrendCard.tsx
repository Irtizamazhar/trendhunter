import Image from "next/image";
import Link from "next/link";

export type TrendCardProps = {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  date?: string;
  slug: string;
  score?: number;
  priority?: boolean;
};

export function TrendCard({
  image,
  title,
  subtitle,
  description,
  date,
  slug,
  score,
  priority = false,
}: TrendCardProps) {
  return (
    <article className="group flex flex-col">
      <Link
        href={`/trends/${slug}`}
        className="relative block overflow-hidden bg-gray-100"
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 250px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
        </div>
        {typeof score === "number" && (
          <span className="absolute left-0 top-0 bg-accent px-2 py-1 text-[12px] font-bold leading-none text-black">
            {score.toFixed(1)}
          </span>
        )}
      </Link>
      <div className="pt-2.5">
        {date && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            {date}
          </p>
        )}
        <h3 className="text-[15px] font-bold leading-tight text-ink">
          <Link
            href={`/trends/${slug}`}
            className="decoration-2 underline-offset-2 group-hover:underline"
          >
            {title}
          </Link>
        </h3>
        {subtitle && (
          <p className="mt-1 line-clamp-2 text-[12px] font-medium text-gray-600">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-gray-600">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
