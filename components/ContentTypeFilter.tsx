"use client";

import { useState } from "react";

const types = ["Ideas", "Lists", "Videos", "Photos", "Insights", "Show All"];

type Props = {
  active?: string;
  onChange?: (type: string) => void;
};

export function ContentTypeFilter({ active: controlled, onChange }: Props) {
  const [internal, setInternal] = useState("Ideas");
  const active = controlled ?? internal;

  const select = (type: string) => {
    onChange?.(type);
    if (controlled === undefined) setInternal(type);
  };

  return (
    <div
      className="no-scrollbar flex gap-2 overflow-x-auto"
      role="tablist"
      aria-label="Content type"
    >
      {types.map((t) => (
        <button
          key={t}
          type="button"
          role="tab"
          aria-selected={active === t}
          onClick={() => select(t)}
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
