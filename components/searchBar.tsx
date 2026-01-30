"use client";

import { SearchBarProps } from "@/lib/types";
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />

        <input
          type="text"
          placeholder="Search articles by title, description, or content..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onChange("");
            }
          }}
          className="w-full pl-12 pr-10 py-3 rounded-lg border border-gray-300 text-black
                     focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700 hover:border-gray-400
                     transition"
          aria-label="Search articles"
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 text-gray-400 hover:text-gray-700 transition"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
