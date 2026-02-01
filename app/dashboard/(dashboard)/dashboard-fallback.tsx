import { oswald } from "@/components/ui/fonts";

export default function DashboardFallback() {
  return (
    <main
      className={`${oswald.className} min-h-screen overflow-x-hidden
        bg-white dark:bg-[#1C1C30]
        text-gray-900 dark:text-gray-100
        transition-colors duration-500`}
    >
      <section className="relative pt-[110px] pb-[55px] px-5 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12 animate-pulse">

          {/* Hero */}
          <div className="space-y-4">
            <div className="h-10 w-2/3 rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-5 w-1/2 rounded-lg bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Protected banner */}
          <div className="rounded-2xl border-l-4 border-[#E8B85F] p-6 bg-gray-100 dark:bg-[#1C1C30]/60">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="space-y-3 flex-1">
                <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User details skeleton */}
            <div className="lg:col-span-2 rounded-3xl border p-8 space-y-6 bg-white dark:bg-[#1C1C30]/80 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
                <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>

            {/* Actions + plan */}
            <div className="space-y-6">
              <div className="rounded-3xl border p-8 space-y-4 bg-white dark:bg-[#1C1C30]/80 border-gray-200 dark:border-gray-700">
                <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-14 w-full rounded-2xl bg-gray-200 dark:bg-gray-700"
                  />
                ))}
              </div>

              <div className="rounded-3xl p-8 space-y-4 bg-gray-100 dark:bg-[#1C1C30]/60">
                <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-full mt-4" />
              </div>
            </div>
          </div>

          {/* Next steps */}
          <div className="rounded-3xl border p-8 space-y-6 bg-white dark:bg-[#1C1C30]/80 border-gray-200 dark:border-gray-700">
            <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
