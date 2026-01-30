"use client";

import { useEffect, useState } from "react";
import { fetchBlogPosts } from "@/lib/api";
import ArticleCard from "@/components/articleCard";
import ArticleModal from "@/components/articleModel";
import SearchBar from "@/components/searchBar";
import CategoryFilter from "@/components/articleCatagory";
import { Article } from "@/lib/types";
import ArticleSkeleton from "./articleSkeleton";

export default function ArticleCardList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then((data) => {
        setArticles(data.blogs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const categories = Array.from(
    new Set(articles.map((article) => article.category)),
  );

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = (
      article.title +
      article.description +
      article.content_text
    )
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      !selectedCategory || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="my-4">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <section className="container mx-auto flex items-center justify-between mb-6">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredArticles.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">{articles.length}</span>{" "}
          articles
        </p>
      </section>

      <section className="container mx-auto">
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ArticleSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                category={article.category}
                created_at={article.created_at}
                title={article.title}
                description={article.description}
                image={article.photo_url}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>
        )}

        {!loading && filteredArticles.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No articles found.</p>
        )}

        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </section>
    </>
  );
}
