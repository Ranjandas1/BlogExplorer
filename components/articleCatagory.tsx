"use client";

import { CategoryFilterProps } from "@/lib/types";
import { X } from "lucide-react";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="category-select" className="sr-only">
        Select Category
      </label>

      <select
        id="category-select"
        value={selectedCategory ?? ""}
        onChange={(e) => onCategoryChange(e.target.value || null)}
        className="border border-gray-300 text-sm rounded-md px-3 py-2 text-gray-800
                   focus:outline-none focus:ring-1 focus:ring-gray-900"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <button
          onClick={() => onCategoryChange(null)}
          className="text-xs text-blue-600 hover:underline font-medium flex items-center gap-1"
          aria-label="Clear category filter"
        >
          <X className="w-3 h-3" />
          Clear filter
        </button>
      )}
    </div>
  );
}
