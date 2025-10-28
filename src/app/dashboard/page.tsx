"use client";

import {
  Bell,
  ChevronDown,
  HelpCircle,
  Lightbulb,
  Settings,
  TrendingUp,
  ShieldAlert,
  Siren,
  Users,
  SlidersHorizontal,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import StatsCard from "@/components/ui/cards/statsCard";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Line,
  Legend,
  CartesianGrid,
  LineChart,
} from "recharts";

const Header = () => {
  return (
    <header className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-[var(--neutre-fonce)]">
          Tableau de bord
        </h1>
        <p className="text-sm text-[var(--texte-secondaire)]">
          Dernière mise à jour : il y a 3 minutes
        </p>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-green-500" />
          <span className="text-sm font-medium">Système opérationnel</span>
        </div>
        <button className="relative">
          <Bell className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--danger)] text-xs text-white">
            3
          </span>
        </button>
        <button className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium">
          <HelpCircle className="h-5 w-5" />
          <span>Aide / Support</span>
        </button>
        <div className="flex items-center gap-3">
          <Image
            src="/images/profil.png"
            alt="Photo de profil"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">Dr. Aminata Diallo</p>
            <p className="text-xs text-[var(--texte-secondaire)]">
              Administrateur
            </p>
          </div>
          <button>
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Filters = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-md font-semibold text-[var(--neutre-fonce)]">
            Filtres globaux
          </h3>
          <div className="flex items-center gap-2">
            <label className="text-sm">Période</label>
            <select className="rounded-md border border-gray-200 p-2 text-sm">
              <option>3 derniers mois</option>
              <option>6 derniers mois</option>
              <option>1 an</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm">Région</label>
            <select className="rounded-md border border-gray-200 p-2 text-sm">
              <option>Toutes les régions</option>
              {/* Add other regions here */}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm">Indicateur</label>
            <select className="rounded-md border border-gray-200 p-2 text-sm">
              <option>Taux d'incidence</option>
              {/* Add other indicators here */}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-[var(--texte-secondaire)] hover:text-[var(--primaire)]">
            <RefreshCw className="h-4 w-4" />
            <span>Réinitialiser</span>
          </button>
          <button className="flex items-center gap-2 rounded-md bg-[var(--primaire)] px-4 py-2 text-sm text-white">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Appliquer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const MapChart = () => {
  return (
    <div className="h-[400px] w-full rounded-lg bg-white p-4 shadow-sm">
      <h3 className="font-bold">Carte des risques - Sénégal</h3>
      <div className="flex h-full items-center justify-center rounded-md bg-gray-100">
        <p className="text-gray-500">
          [L'implémentation de la carte dynamique viendra ici]
        </p>
      </div>
    </div>
  );
};

const ActiveAlerts = () => {
  const alerts = [
    {
      level: "Critique",
      title: "Pic épidémique détecté",
      description: "Région de Kolda - Augmentation de 45% des cas",
      time: "il y a 2h",
      color: "red",
    },
    {
      level: "Moyen",
      title: "Stock faible",
      description: "TDR disponibles < 20% à Tambacounda",
      time: "il y a 6h",
      color: "yellow",
    },
    {
      level: "Moyen",
      title: "Conditions climatiques",
      description: "Précipitations élevées prédites - Ziguinchor",
      time: "il y a 1j",
      color: "yellow",
    },
  ];

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h3 className="font-bold">Alertes actives</h3>
      <div className="mt-4 space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start gap-4">
            <div
              className={`mt-1 h-2 w-2 rounded-full bg-${alert.color}-500`}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold uppercase text-${alert.color}-600`}
                >
                  {alert.level}
                </span>
                <span className="text-xs text-gray-500">{alert.time}</span>
              </div>
              <p className="font-semibold">{alert.title}</p>
              <p className="text-sm text-gray-600">{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full rounded-md border py-2 text-sm font-semibold text-[var(--primaire)]">
        Voir toutes les alertes
      </button>
    </div>
  );
};

const data = [
  { name: "Jan", cas: 100, prediction: 105, seuil: 120 },
  { name: "Feb", cas: 110, prediction: 115, seuil: 130 },
  { name: "Mar", cas: 120, prediction: 125, seuil: 140 },
  { name: "Apr", cas: 130, prediction: 135, seuil: 150 },
  { name: "May", cas: 140, prediction: 145, seuil: 160 },
  { name: "Jun", cas: 150, prediction: 155, seuil: 170 },
  { name: "Jul", cas: 160, prediction: 165, seuil: 180 },
  { name: "Aug", cas: 170, prediction: 175, seuil: 190 },
  { name: "Sep", cas: 180, prediction: 185, seuil: 200 },
  { name: "Oct", cas: 190, prediction: 195, seuil: 210 },
  { name: "Nov", cas: 200, prediction: 205, seuil: 220 },
  { name: "Dec", cas: 210, prediction: 215, seuil: 230 },
];

const TimeSeriesChart = () => {
  return (
    <div className="h-[400px] w-full rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Évolution temporelle des cas</h3>
        {/* Add date range toggles here */}
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="cas"
            stackId="1"
            stroke="#007B5E"
            fill="#007B5E"
            fillOpacity={0.1}
          />
          <Line
            type="monotone"
            dataKey="prediction"
            stroke="#E8B10D"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="seuil"
            stroke="#D32F2F"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <Header />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Taux d'incidence (/1000)"
          value="12.4"
          change="5.2%"
          changeType="decrease"
          icon={TrendingUp}
          iconColor="bg-blue-500"
        />
        <StatsCard
          title="Districts à haut risque"
          value="8"
          change="2"
          changeType="increase"
          icon={ShieldAlert}
          iconColor="bg-yellow-500"
        />
        <StatsCard
          title="Alertes critiques"
          value="3"
          change=""
          changeType="none"
          status="Actives"
          icon={Siren}
          iconColor="bg-red-500"
        />
        <StatsCard
          title="Cas confirmés"
          value="1,247"
          change="12%"
          changeType="increase"
          icon={Users}
          iconColor="bg-green-500"
        />
      </div>
      <Filters />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MapChart />
        </div>
        <div>
          <ActiveAlerts />
        </div>
      </div>
      <TimeSeriesChart />
    </div>
  );
};

export default DashboardPage;
