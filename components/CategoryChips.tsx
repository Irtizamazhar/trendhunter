import Link from "next/link";

type Props = {
  items: string[];
  className?: string;
  hrefFor?: (item: string) => string;
};

export function CategoryChips({ items, className = "", hrefFor }: Props) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <Link
            href={hrefFor ? hrefFor(item) : "#"}
            className="text-[14px] font-medium text-gray-600 underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
