"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  LineChart,
  Truck,
  ShieldCheck,
  Bell,
  Settings,
} from "lucide-react";

const navLinks = [
  {
    name: "Tableau de bord",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    name: "Prédiction",
    icon: LineChart,
    href: "/dashboard/prediction",
  },
  {
    name: "Logistique",
    icon: Truck,
    href: "/dashboard/logistics",
  },
  {
    name: "Qualité",
    icon: ShieldCheck,
    href: "/dashboard/quality",
  },
  {
    name: "Alertes",
    icon: Bell,
    href: "/dashboard/alerts",
  },
  {
    name: "Administration",
    icon: Settings,
    href: "/dashboard/admin",
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out ${
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
          className="absolute -right-3 top-6 rounded-full bg-white p-1 shadow-md"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`group relative flex items-center rounded-md px-4 py-3 text-[var(--texte-secondaire)] transition-colors hover:bg-[var(--primaire)] hover:text-white ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <link.icon className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">{link.name}</span>}
            {isCollapsed && (
              <span className="absolute left-full ml-4 hidden -translate-x-2 rounded-md bg-[var(--neutre-fonce)] px-2 py-1 text-sm text-white opacity-0 transition-all group-hover:block group-hover:translate-x-0 group-hover:opacity-100">
                {link.name}
              </span>
            )}
          </a>
        ))}
      </nav>
      <div className="p-4">
        <div
          className={`rounded-lg bg-[var(--fond-carte)] p-4 text-center ${
            isCollapsed ? "hidden" : ""
          }`}
        >
          <h3 className="font-bold text-[var(--neutre-fonce)]">Besoin d'aide ?</h3>
          <p className="mt-1 text-xs text-[var(--texte-secondaire)]">
            Consultez notre documentation ou contactez le support.
          </p>
          <button className="mt-3 w-full rounded-md bg-[var(--primaire)] py-2 text-sm text-white">
            Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
