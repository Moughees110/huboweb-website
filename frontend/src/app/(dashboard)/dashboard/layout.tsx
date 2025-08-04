"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("isAuthenticated");
      if (auth === "true") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/auth/login");
      }
    }
  }, [pathname]);

  // Prevent flashing or wrong redirect
  if (isAuthenticated === null) return null;

  if (!isAuthenticated) return null;

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col justify-between">
        {/* Top Navigation */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <nav className="flex flex-col space-y-2">
            <a href="/dashboard">Home</a>
            <a href="/dashboard/users">Users</a>
            <a href="/dashboard/settings">Settings</a>
          </nav>
        </div>

        {/* Bottom Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            router.push("/auth/login");
          }}
          className="bg-red-600 hover:bg-red-700 text-white mt-4 py-2 px-4 rounded"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
