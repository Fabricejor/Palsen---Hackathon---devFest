import { LucideIcon, TrendingUp, TrendingDown, Download } from "lucide-react";
import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "none";
  icon: LucideIcon;
  iconColor: string;
  status?: string;
}

const StatsCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
  status,
}: StatsCardProps) => {
  const isIncrease = changeType === "increase";

  // Convertir iconColor (bg-color) en couleur de fond et texte
  const getColors = (bgClass: string) => {
    const colorMap: { [key: string]: { bg: string; icon: string } } = {
      "bg-blue-500": { bg: "bg-blue-50", icon: "text-blue-500" },
      "bg-yellow-500": { bg: "bg-yellow-50", icon: "text-yellow-500" },
      "bg-red-500": { bg: "bg-red-50", icon: "text-red-500" },
      "bg-green-500": { bg: "bg-green-50", icon: "text-green-500" },
    };
    return colorMap[bgClass] || { bg: "bg-gray-50", icon: "text-gray-500" };
  };

  const colors = getColors(iconColor);

  // Générer des mini données pour le graphique
  const generateMiniChart = () => {
    const heights = [40, 55, 45, 60, 70, 50, 80];
    return heights.map((height, index) => (
      <div
        key={index}
        className="flex-1 bg-green-500 rounded-sm"
        style={{ height: `${height}%` }}
      />
    ));
  };

  return (
    <div className="relative overflow-visible rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
      {/* Header avec icône et titre */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg}`}>
            <Icon className={`h-7 w-7 ${colors.icon}`} />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Download className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      {/* Valeur principale et statistiques */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{value}</h2>
          <div className="flex items-center gap-2">
            {changeType !== "none" ? (
              <>
                <div className={`flex items-center gap-1 ${isIncrease ? "text-green-600" : "text-red-600"}`}>
                  {isIncrease ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="font-semibold text-sm">
                    {isIncrease ? "+" : ""}{change}
                  </span>
                </div>
                <span className="text-sm text-gray-500">vs semaine passée</span>
              </>
            ) : (
              <span className="text-sm font-medium text-yellow-600">{status}</span>
            )}
          </div>
        </div>

        {/* Mini graphique à barres */}
        <div className="flex items-end gap-1 h-16 w-24">
          {generateMiniChart()}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
