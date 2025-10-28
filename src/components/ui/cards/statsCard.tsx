import { LucideIcon } from "lucide-react";
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
  const changeColor =
    changeType === "increase" ? "text-green-500" : "text-red-500";
  const changeSymbol = changeType === "increase" ? "+" : "-";

  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${iconColor}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        {changeType !== "none" ? (
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
              isIncrease ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            <span>{changeSymbol}</span>
            <span>{change}</span>
          </div>
        ) : (
          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-700">
            {status}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-bold text-[var(--neutre-fonce)]">{value}</h3>
        <p className="text-sm text-[var(--texte-secondaire)]">{title}</p>
      </div>
    </div>
  );
};

export default StatsCard;
