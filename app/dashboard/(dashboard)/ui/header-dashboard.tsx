// app/dashboard/(dashboard)/ui/dashboard-header.tsx
import { oswald } from "@/components/ui/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function DashboardHeader({
  title,
  subtitle,
  actionLabel,
  actionHref,
}: DashboardHeaderProps) {
  return (
    <header className={`${oswald.className} mb-8 md:mb-12`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              {subtitle}
            </p>
          )}
        </div>

        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8B85F] text-[#1C1C30] rounded-full text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {actionLabel}
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        )}
      </div>
    </header>
  );
}
