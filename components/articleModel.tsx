"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ArticleModalProps } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current === e.target) handleClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    modalRef.current?.addEventListener("click", handleClickOutside);
    contentRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      modalRef.current?.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 200);
  };

  return (
    <div
      ref={modalRef}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4
        transition-opacity duration-200
        ${isOpen ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"}`}
    >
      <div
        ref={contentRef}
        tabIndex={-1}
        className={`w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-lg relative
          transform transition-all duration-200
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-md text-gray-600 hover:text-black bg-white hover:bg-gray-50 border border-gray-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <article className="flex flex-col">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <Image
              src={article.photo_url || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-white to-transparent" />
          </div>
          <div className="flex flex-col gap-5 p-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                {article.category}
              </span>
              <time className="text-sm text-gray-500">
                {formatDate(article.created_at)}
              </time>
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              {article.title}
            </h1>

            <p className="text-gray-600 text-lg">{article.description}</p>

            <div className="h-px bg-gray-200" />

            <p className="leading-relaxed text-gray-800 whitespace-pre-wrap">
              {article.content_text}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
