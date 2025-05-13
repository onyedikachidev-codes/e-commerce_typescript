export default function ProductSkeleton() {
  return (
    <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow animate-pulse">
      <div className="h-40 bg-gray-200 rounded mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="h-6 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
