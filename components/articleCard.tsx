"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArticleCardProps } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";

export default function ArticleCard({
  title,
  description,
  image,
  category,
  created_at,
  onClick,
}: ArticleCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group cursor-pointer h-full flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-100 transition"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col flex-1 gap-3 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            {category}
          </span>
          <time className="text-sm text-gray-500">
            {formatDate(created_at)}
          </time>
        </div>
        <h3 className="text-lg font-semibold line-clamp-2 text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 flex-1">
          {description}
        </p>

        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          Read More{" "}
          <ArrowRight className="w-4 h-4 transition-all group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
