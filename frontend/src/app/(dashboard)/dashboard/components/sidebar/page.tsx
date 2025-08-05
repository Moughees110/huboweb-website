"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, Users, Settings, LogOut, Menu, X } from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  isOpen: boolean;
  onLogout: () => void;
  toggleSidebar: () => void;
}

const navLinks = [
  { href: "/dashboard/home", label: "Home", icon: Home },
  { href: "/dashboard/users", label: "Users", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({
  isOpen,
  onLogout,
  toggleSidebar,
}: SidebarProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={clsx(
        "flex flex-col justify-between transition-all duration-300 ease-in-out bg-gradient-to-r from-[#070121] to-[#170080]",
        isOpen ? "w-64" : "w-16",
        "h-screen"
      )}
    >
      <div>
        {/* Logo + Toggle */}
        <div className="bg-white h-16 flex items-center justify-between px-3">
          {isOpen ? (
            <>
              <Image
                src="/img/huboweb2.png"
                alt="Logo"
                width={190}
                height={90}
                className="object-contain"
              />
              <button onClick={toggleSidebar}>
                <Menu size={30} className="text-black" />
              </button>
            </>
          ) : (
            <div className="w-full flex justify-center">
              <button onClick={toggleSidebar}>
                <X size={30} className="text-black" />
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 px-2 mt-2 text-white">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 relative group transition-all text-sm",
                  isActive ? "bg-gray-800" : ""
                )}
              >
                <Icon size={20} />
                {isOpen && <span>{label}</span>}
                {!isOpen && (
                  <span className="absolute left-full ml-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    {label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-2">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded text-white"
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
