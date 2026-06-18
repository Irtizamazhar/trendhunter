import { dataColumns } from "@/data/dataTrends";

export function DataTrendsColumns() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {dataColumns.map((col) => (
        <div key={col.label}>
          <p className="section-label mb-3 border-b border-gray-200 pb-2">
            {col.label}
          </p>
          <ol className="space-y-1.5">
            {col.items.map((item, i) => (
              <li
                key={item}
                className="flex gap-2 text-[14px] leading-snug text-gray-600"
              >
                <span className="w-4 shrink-0 font-semibold text-gray-400">
                  {i + 1}
                </span>
                <span className="transition-colors hover:text-ink">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
