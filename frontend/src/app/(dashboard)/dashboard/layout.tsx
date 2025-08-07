"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./components/sidebar/page";
import Header from "./components/header/page"; // ✅ Correct import

const pathToTitle: Record<string, string> = {
  "/dashboard/home": "Dashboard Home",
  "/dashboard/users": "Users",
  "/dashboard/settings": "Settings"
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const pageTitle = pathToTitle[pathname] || "Dashboard";

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/auth/login");
    }
  }, [pathname]);

  if (isAuthenticated === null) return null;
  if (!isAuthenticated) return null;

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/auth/login");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={sidebarOpen}
        onLogout={handleLogout}
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-col flex-1">
        <Header isOpen={sidebarOpen} title={pageTitle} />
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
