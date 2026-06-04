export default function SkeletonCard() {
  return (
    <div className="overflow-hidden bg-white border dark:bg-zinc-900 rounded-2xl border-zinc-200 dark:border-zinc-800 animate-pulse">
      <div className="aspect-square bg-zinc-100 dark:bg-zinc-800" />
      <div className="p-4 space-y-2">
        <div className="w-3/4 h-3 rounded bg-zinc-100 dark:bg-zinc-800" />
        <div className="w-1/2 h-3 rounded bg-zinc-100 dark:bg-zinc-800" />
        <div className="h-8 mt-3 rounded bg-zinc-100 dark:bg-zinc-800" />
      </div>
    </div>
  );
}
