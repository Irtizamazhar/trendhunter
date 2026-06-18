"use client";

import { useState } from "react";

const types = ["Ideas", "Lists", "Videos", "Photos", "Insights", "Show All"];

export function ContentTypeFilter() {
  const [active, setActive] = useState("Ideas");
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto">
      {types.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
            active === t
              ? "border-black bg-black text-white"
              : "border-gray-200 text-gray-600 hover:border-black hover:text-ink"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
