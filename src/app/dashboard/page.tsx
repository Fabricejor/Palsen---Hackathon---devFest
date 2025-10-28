"use client";

import React from "react";
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
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SenegalMap = dynamic(
  () => import("@/components/dashboard/SenegalMap"),
  { ssr: false }
);

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
      <SenegalMap />
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

// Fonction pour générer des données randomisées réalistes
const generateRandomData = () => {
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  let prevCas = Math.floor(Math.random() * 50) + 80; // Entre 80 et 130
  
  return months.map((month) => {
    // Variation aléatoire entre -20 et +30 pour simuler des fluctuations réalistes
    const variation = Math.floor(Math.random() * 50) - 20;
    const cas = Math.max(50, prevCas + variation); // Minimum 50 cas
    
    // Prédiction légèrement supérieure avec une petite variation
    const prediction = cas + Math.floor(Math.random() * 20) + 5;
    
    // Seuil toujours au-dessus de la prédiction
    const seuil = prediction + Math.floor(Math.random() * 30) + 20;
    
    prevCas = cas;
    
    return {
      name: month,
      cas: cas,
      prediction: prediction,
      seuil: seuil,
    };
  });
};

const data = generateRandomData();

const TimeSeriesChart = () => {
  return (
    <div className="h-[400px] w-full rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-bold text-lg">Évolution des Cas</h3>
          <p className="text-sm text-gray-500">Cas confirmés et prévisions sur 30 jours</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs hover:bg-gray-50">
            <span>CSV</span>
          </button>
          <button className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs hover:bg-gray-50">
            <span>PDF</span>
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
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

// Données pour le heatmap des stocks
const stockData = [
  {
    category: "Matériel médical",
    values: [70, 35, 95, 60, 85, 25],
  },
  {
    category: "Vaccins",
    values: [90, 60, 85, 75, 90, 50],
  },
  {
    category: "Antibiotiques",
    values: [45, 80, 90, 55, 65, 40],
  },
  {
    category: "Antipaludiques",
    values: [85, 25, 70, 40, 80, 30],
  },
];

const districts = ["Dakar", "Thiès", "Kaolack", "Saint-Louis", "Ziguinchor", "Tambacounda"];

const StockLevelsChart = () => {
  const getColor = (value: number) => {
    if (value >= 75) return "bg-green-500";
    if (value >= 50) return "bg-emerald-500";
    if (value >= 25) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="h-[400px] w-full rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg">Niveaux de Stock</h3>
          <p className="text-sm text-gray-500">Par district et type de médicament</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs hover:bg-gray-50">
            <span>CSV</span>
          </button>
          <button className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs hover:bg-gray-50">
            <span>PDF</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        {/* Grid container */}
        <div className="grid grid-cols-[200px_repeat(6,1fr)] gap-1">
          {/* Header - empty cell */}
          <div></div>
          {/* District headers */}
          {districts.map((district) => (
            <div key={district} className="text-center text-sm font-medium text-gray-600 pb-2">
              <div className="-rotate-45 origin-center whitespace-nowrap">{district}</div>
            </div>
          ))}

          {/* Data rows */}
          {stockData.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* Category label */}
              <div className="flex items-center text-sm font-medium text-gray-700 pr-4">
                {row.category}
              </div>
              {/* Value cells */}
              {row.values.map((value, colIndex) => (
                <div
                  key={colIndex}
                  className={`${getColor(value)} flex items-center justify-center text-white font-semibold text-sm h-16 rounded`}
                >
                  {value}%
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-12 h-4 bg-orange-500 rounded-l"></div>
              <div className="w-12 h-4 bg-yellow-500"></div>
              <div className="w-12 h-4 bg-emerald-500"></div>
              <div className="w-12 h-4 bg-green-500 rounded-r"></div>
            </div>
            <div className="flex gap-8 text-xs text-gray-600">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const DashboardPage = () => {
  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <Header />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={itemVariants}
      >
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
      </motion.div>
      <motion.div variants={itemVariants}>
        <Filters />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        variants={itemVariants}
      >
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <MapChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ActiveAlerts />
        </motion.div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        variants={itemVariants}
      >
      <motion.div variants={itemVariants}>
        <TimeSeriesChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StockLevelsChart />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;
