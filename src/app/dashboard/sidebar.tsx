"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  LineChart,
  Truck,
  ShieldCheck,
  Bell,
  Settings,
  LogOut,
  Users,
} from "lucide-react";

const navLinks = [
  { name: "Tableau de bord", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Prédiction", icon: LineChart, href: "/dashboard/prediction" },
  { name: "Logistique", icon: Truck, href: "/dashboard/logistique" },
  { name: "Qualité", icon: ShieldCheck, href: "/dashboard/quality" },
  { name: "Alertes", icon: Bell, href: "/dashboard/alerts" },
  { name: "Administration", icon: Users, href: "/dashboard/utilisateurs" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`relative z-10 flex h-screen flex-col bg-white shadow-lg transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex h-20 items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <Image
              src="/images/palsen logo.png"
              alt="PalSense Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-[var(--neutre-fonce)]">
              PalSense
            </span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 z-20 rounded-full bg-white p-1 shadow-md transition-transform hover:scale-110"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>
      <nav className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`group relative flex items-center rounded-md px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "border-l-4 border-[var(--primaire)] bg-green-50 text-[var(--primaire)]"
                    : "text-[var(--texte-secondaire)] hover:bg-[var(--primaire)] hover:text-white"
                } ${isCollapsed ? "justify-center" : ""}`}
              >
                <link.icon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-3">{link.name}</span>}
                {isCollapsed && (
                  <span className="absolute left-full ml-4 hidden -translate-x-2 whitespace-nowrap rounded-md bg-[var(--neutre-fonce)] px-2 py-1 text-sm text-white opacity-0 transition-all group-hover:block group-hover:translate-x-0 group-hover:opacity-100">
                    {link.name}
                  </span>
                )}
              </a>
            );
          })}
        </div>
        <div>
          <a
            href="/login" // Or your logout logic
            className={`group relative flex items-center rounded-md px-4 py-3 text-[var(--texte-secondaire)] transition-colors hover:bg-red-500 hover:text-white ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Déconnexion</span>}
            {isCollapsed && (
              <span className="absolute left-full ml-4 hidden -translate-x-2 whitespace-nowrap rounded-md bg-red-500 px-2 py-1 text-sm text-white opacity-0 transition-all group-hover:block group-hover:translate-x-0 group-hover:opacity-100">
                Déconnexion
              </span>
            )}
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
