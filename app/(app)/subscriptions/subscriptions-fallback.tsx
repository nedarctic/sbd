export default function SubscriptionsFallback() {
  return (
    <main className="min-h-screen bg-background px-6 py-40">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-14">
          <div className="mx-auto h-10 w-80 rounded-lg bg-muted animate-pulse mb-4" />
          <div className="mx-auto h-4 w-[36rem] rounded bg-muted animate-pulse" />
        </div>

        {/* Plans grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border p-6"
            >
              <div className="h-6 w-32 rounded bg-muted animate-pulse mb-3" />
              <div className="h-4 w-full rounded bg-muted animate-pulse mb-6" />
              <div className="h-10 w-24 rounded bg-muted animate-pulse mb-8" />
              <div className="mt-auto">
                <div className="h-10 w-full rounded-xl bg-muted animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
