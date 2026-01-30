export default function ArticleSkeleton() {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-4 animate-pulse">
      <div className="h-40 w-full rounded bg-gray-200 mb-4"></div>
      <div className="flex items-center gap-4 mb-3">
        <div className="h-6 w-24 rounded-full bg-gray-200"></div>
        <div className="h-4 w-20 rounded bg-gray-200"></div>
      </div>

      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>

      <div className="mt-4 h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  );
}
