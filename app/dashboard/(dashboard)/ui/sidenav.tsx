'use client';

import Link from 'next/link';
import NavLinks from '@/app/dashboard/(dashboard)/ui/nav-links';
import { PowerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { oswald } from '@/components/ui/fonts';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { LogoutButton } from '@/components/dashboard/LogoutButton';

export const dynamic = "force-dynamic"

export default function SideNav() {
  const [year, setYear] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const client = createClient();

  // Logout function
  const handleLogout = async () => {
    try {
      const { error } = await client.auth.signOut();
      if (error) {
        console.error("Logout error:", error.message);
        return;
      }
      console.log("User logged out successfully");
      router.push('/auth/login');
    } catch (err) {
      console.error("Unexpected logout error:", err);
    }
  };

  useEffect(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-[#E8B85F] dark:bg-[#1C1C30] shadow-lg hover:shadow-xl transition"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="w-6 h-6 text-gray-800 dark:text-white" />
      </button>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          ${oswald.className} fixed top-0 left-0 h-screen w-64 z-40 flex flex-col px-3 py-6
          bg-white dark:bg-[#1C1C30] border-r border-gray-200 dark:border-gray-700 shadow-xl
          transition-transform duration-300
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="mb-8 flex items-center justify-start p-4 bg-gradient-to-r from-[#1C1C30] to-[#2C2C40] dark:from-[#0A0A1A] dark:to-[#1C1C30] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8B85F] to-[#D8A84F] flex items-center justify-center shadow-md">
              <Image src="/logo/scholarbrood-light-logo.svg" alt="ScholarBrood logo" width={30} height={30} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ScholarBrood</h1>
              <p className="text-xs text-gray-300 mt-1">Academic Dashboard</p>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <NavLinks />
        </div>

        {/* Logout */}
        <div className="flex flex-col items-center justify-center mt-6 pt-6 w-3/4 sm:w-full border-t border-gray-200 dark:border-gray-700">
          
          <LogoutButton />

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {year} ScholarBrood
            </p>
          </div>
        </div>

        {/* Mobile close */}
        <button
          className="absolute top-4 right-4 md:hidden p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
      </div>
    </>
  );
}
