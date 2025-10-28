"use client";

import React from 'react';
import { Search, ChevronDown, Filter, RefreshCw, Calendar, Download, List, BarChartHorizontal, BrainCircuit, Info, CloudRain, Thermometer, Users, Users2, Lightbulb, MapPin, FileText } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const Header = () => (
  <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Prédictions Paludisme - Sénégal</h1>
      <p className="text-gray-500 mt-1">Analyse prédictive par district avec IA explicable</p>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm">
        <Calendar size={16} className="text-gray-500" />
        <span className="font-medium">Décembre 2024</span>
      </div>
      <button className="flex items-center gap-2 bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-teal-700 transition-colors transform hover:scale-105">
        <Download size={16} />
        <span>Exporter</span>
      </button>
    </div>
  </motion.div>
);

const Filters = () => (
  <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between mb-6">
    <div className="flex items-center gap-4 w-full">
      <div className="relative w-1/3">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Rechercher un district..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
      </div>
      <div className="relative w-1/3">
        <select className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-teal-500 focus:outline-none">
          <option>Tous les niveaux de risque</option>
          <option>Élevé</option>
          <option>Moyen</option>
          <option>Faible</option>
        </select>
        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors transform hover:scale-110">
          <Filter size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors transform hover:scale-110">
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

const PredictionsTable = () => {
    const districts = [
    { name: 'Dakar', riskScore: 8.7, riskLevel: 'Élevé', precipitation: 145, cases: 78, temp: 28, prediction: '+23%', color: 'bg-red-100 text-red-700' },
    { name: 'Thiès', riskScore: 6.2, riskLevel: 'Moyen', precipitation: 92, cases: 45, temp: 26, prediction: '+12%', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Saint-Louis', riskScore: 3.4, riskLevel: 'Faible', precipitation: 34, cases: 12, temp: 24, prediction: '-5%', color: 'bg-green-100 text-green-700' },
    { name: 'Kaolack', riskScore: 8.1, riskLevel: 'Élevé', precipitation: 128, cases: 65, temp: 29, prediction: '+19%', color: 'bg-red-100 text-red-700' },
  ];

  return (
    <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <List className="text-teal-600" />
        <h2 className="text-xl font-bold text-gray-800">Prévisions par District</h2>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200 text-sm text-gray-500">
            <th className="py-3 font-medium">District</th>
            <th className="py-3 font-medium">Score Risque</th>
            <th className="py-3 font-medium">Facteurs Clés</th>
            <th className="py-3 font-medium">Prévision</th>
            <th className="py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {districts.map(d => (
            <motion.tr 
              key={d.name} 
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: Math.random() * 0.5 }}
            >
              <td className="py-4 font-semibold text-gray-700 flex items-center gap-2"><MapPin size={16} className="text-teal-500" />{d.name}</td>
              <td className="py-4"><span className={`px-3 py-1 text-sm font-semibold rounded-full ${d.color}`}>{d.riskLevel} ({d.riskScore})</span></td>
              <td className="py-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded-md"><CloudRain size={14} /> {d.precipitation}mm</span>
                  <span className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-1 rounded-md"><Users size={14} /> {d.cases}</span>
                  <span className="flex items-center gap-1 bg-lime-50 text-lime-600 px-2 py-1 rounded-md"><Thermometer size={14} /> {d.temp}°C</span>
                </div>
              </td>
              <td className="py-4 font-medium text-gray-600">{d.prediction} cas attendus</td>
              <td className="py-4"><button className="text-teal-600 font-semibold hover:underline transform hover:scale-105 transition-transform">Voir détails</button></td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

const RiskMapChart = () => {
    const riskData = [
        { name: 'Dakar', value: 8.7 }, { name: 'Thiès', value: 6.2 }, { name: 'Saint-Louis', value: 3.4 },
        { name: 'Kaolack', value: 8.1 }, { name: 'Fatick', value: 5.8 }, { name: 'Kaffrine', value: 7.2 },
        { name: 'Tambacounda', value: 6.9 }, { name: 'Kédougou', value: 5.1 }, { name: 'Kolda', value: 7.8 },
        { name: 'Ziguinchor', value: 6.5 }, { name: 'Sédhiou', value: 7.1 }, { name: 'Matam', value: 4.2 },
        { name: 'Louga', value: 4.8 }, { name: 'Diourbel', value: 6.7 },
    ];

    const getColor = (value: number) => {
        if (value > 8) return 'bg-red-500';
        if (value > 6) return 'bg-orange-500';
        if (value > 4) return 'bg-yellow-400';
        return 'bg-lime-500';
    }

    return (
        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <BarChartHorizontal className="text-teal-600" />
                    <h2 className="text-xl font-bold text-gray-800">Carte de Risque</h2>
                </div>
            </div>
            <div className="space-y-2">
                {riskData.map(item => (
                    <div key={item.name} className="flex items-center gap-4 text-sm">
                        <span className="w-24 text-gray-600">{item.name}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                            <motion.div 
                                className={`${getColor(item.value)} h-4 rounded-full`} 
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value * 10}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                        <span className="w-8 font-semibold text-gray-800">{item.value}</span>
                    </div>
                ))}
            </div>
             <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                <span>Risque faible</span>
                <div className="flex items-center gap-1">
                    <div className="w-8 h-2 bg-lime-500 rounded-l-full"></div>
                    <div className="w-8 h-2 bg-yellow-400"></div>
                    <div className="w-8 h-2 bg-orange-500"></div>
                    <div className="w-8 h-2 bg-red-500 rounded-r-full"></div>
                </div>
                <span>Risque élevé</span>
            </div>
        </motion.div>
    )
}

const ExplainableAI = () => {
    const factors = [
        { name: 'Précipitations', value: 35, color: 'bg-blue-500', icon: CloudRain },
        { name: 'Température', value: 28, color: 'bg-green-500', icon: Thermometer },
        { name: 'Cas suspects', value: 22, color: 'bg-orange-500', icon: Users },
        { name: 'Densité population', value: 15, color: 'bg-purple-500', icon: Users2 },
    ];

    return (
        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6">
            <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="text-teal-600" />
                <h2 className="text-xl font-bold text-gray-800">IA Explicable</h2>
                <Info size={16} className="text-gray-400" />
            </div>
            <div className="space-y-4">
                {factors.map(factor => (
                    <div key={factor.name}>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <factor.icon size={16} />
                                <span>{factor.name}</span>
                                <Info size={14} className="text-gray-400" />
                            </div>
                            <span className="font-semibold">{factor.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div 
                                className={`${factor.color} h-2 rounded-full`} 
                                initial={{ width: 0 }}
                                animate={{ width: `${factor.value}%` }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 bg-teal-50 p-4 rounded-lg flex items-start gap-3">
                <Lightbulb size={20} className="text-teal-600 mt-1" />
                <div>
                    <h4 className="font-semibold text-gray-800">Recommandation IA</h4>
                    <p className="text-sm text-gray-600">Surveiller particulièrement les zones avec fortes précipitations et température élevée.</p>
                </div>
            </div>
        </motion.div>
    )
}

const AgentReports = () => {
  const reports = [
    { district: 'Dakar', date: '22 Déc 2024', summary: "Activité anormale des moustiques détectée près des zones inondées. Recommandation : renforcer la surveillance et la distribution de moustiquaires." },
    { district: 'Thiès', date: '21 Déc 2024', summary: "Augmentation des cas suspects signalés par les postes de santé. L'agent IA suggère une campagne de sensibilisation ciblée." },
    { district: 'Kaolack', date: '20 Déc 2024', summary: "Les données climatiques indiquent un risque élevé pour les 2 prochaines semaines. Stocks d'antipaludiques à vérifier." },
  ];

  return (
    <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="text-teal-600" />
        <h2 className="text-xl font-bold text-gray-800">Rapport des agents IA</h2>
      </div>
      <div className="space-y-4">
        {reports.map((report, index) => (
          <motion.div 
            key={index}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-gray-700">{report.district}</h4>
              <span className="text-xs text-gray-500">{report.date}</span>
            </div>
            <p className="text-sm text-gray-600">{report.summary}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const PredictionPage = () => {
  return (
    <motion.div 
      className="p-6 bg-gray-50 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Header />
      <Filters />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PredictionsTable />
          <AgentReports />
        </div>
        <div>
          <RiskMapChart />
          <ExplainableAI />
        </div>
      </div>
    </motion.div>
  );
};

export default PredictionPage;
