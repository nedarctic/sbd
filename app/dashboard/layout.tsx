import SideNav from '@/app/dashboard/ui/sidenav';
import { oswald } from '@/components/ui/fonts';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${oswald.className} flex h-screen flex-col md:flex-row md:overflow-hidden antialiased bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className={`${oswald.className} grow p-6 md:overflow-y-auto md:p-12`}>{children}</div>
    </div>
  );
}