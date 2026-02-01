import Footer from "@/components/footer";
import { oswald } from "@/components/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${oswald.className} flex flex-col min-h-screen antialiased bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      {children}
      <Footer />
    </div>
  );
}