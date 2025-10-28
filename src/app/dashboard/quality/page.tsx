"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, RefreshCw, ChevronDown, Clock, AlertTriangle, ChevronsRight, ChevronsLeft, MinusCircle, TrendingDown, Wand2, UserPlus } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Header = () => (
  <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Qualité des Données</h1>
      <p className="text-gray-500 mt-1">Suivi de la qualité et complétude des données DHIS2</p>
    </div>
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
        <Download size={16} />
        <span>Exporter</span>
      </button>
      <button className="flex items-center gap-2 bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-teal-700 transition-colors">
        <RefreshCw size={16} />
        <span>Actualiser</span>
      </button>
    </div>
  </motion.div>
);

const GaugeChart = ({ value, color } : { value: number, color: string }) => {
    const radius = 40;
    const circumference = Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex flex-col items-center">
            <svg width="120" height="70" viewBox="0 0 100 55">
                <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                />
                <motion.path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    stroke={color}
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </svg>
            <div className="absolute bottom-0 flex justify-between w-[90px] text-xs text-gray-500">
                <span>0</span>
                <span>100</span>
            </div>
        </div>
    );
};

const DistrictQualityScores = () => {
    const districts = [
        { name: 'Dakar', score: 92, status: 'Excellent', color: '#10B981' },
        { name: 'Thiès', score: 75, status: 'Attention', color: '#6366F1' },
        { name: 'Saint-Louis', score: 88, status: 'Bon', color: '#10B981' },
        { name: 'Kaolack', score: 45, status: 'Critique', color: '#F59E0B' },
    ];
    
    const getStatusColor = (status: string) => {
        if (status === 'Excellent' || status === 'Bon') return 'text-teal-600';
        if (status === 'Attention') return 'text-indigo-600';
        if (status === 'Critique') return 'text-yellow-600';
        return 'text-gray-600';
    }

    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Score de Qualité par District</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                {districts.map(d => (
                    <div key={d.name} className="flex flex-col items-center">
                        <GaugeChart value={d.score} color={d.color} />
                        <h4 className="font-bold text-gray-700 mt-2">{d.name}</h4>
                        <p className={`text-sm font-semibold ${getStatusColor(d.status)}`}>{d.status}</p>
                    </div>
                ))}
                </div>
        </motion.div>
    );
}

const Filters = () => (
    <motion.div variants={itemVariants} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Région', 'Période', 'Source', 'Gravité'].map(label => (
                <div key={label}>
                    <label className="text-sm font-medium text-gray-600">{label}</label>
                     <div className="relative mt-1">
                        <select className="appearance-none w-full text-sm border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500">
                            <option>Toutes les {label.toLowerCase()}</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const QualityScore = () => {
    const scores = [
        { label: 'Complétude', value: 87, color: 'bg-teal-500' },
        { label: 'Cohérence', value: 72, color: 'bg-yellow-500' },
        { label: 'Exactitude', value: 91, color: 'bg-teal-500' },
    ];
    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Score Global de Qualité</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>Dernière mise à jour: il y a 2h</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {scores.map(score => (
                    <div key={score.label}>
                        <div className="flex justify-between items-end mb-1">
                            <span className="text-sm font-medium text-gray-600">{score.label}</span>
                            <span className={`text-2xl font-bold ${score.color.replace('bg-', 'text-')}`}>{score.value}%</span>
                    </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                           <motion.div 
                                className={`${score.color} h-2 rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${score.value}%` }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                           />
                    </div>
                    </div>
                ))}
                </div>
        </motion.div>
    );
};

const AnomaliesTable = () => {
    const anomalies = [
        { type: 'Valeur aberrante', icon: AlertTriangle, district: 'Dakar Centre', gravity: 'Critique', status: 'En attente', action: 'Corriger' },
        { type: 'Données manquantes', icon: MinusCircle, district: 'Thiès Nord', gravity: 'Élevée', status: 'Corrigé', action: 'Validé' },
        { type: 'Incohérence temporelle', icon: TrendingDown, district: 'Saint-Louis', gravity: 'Moyenne', status: 'Assigné', action: 'Voir' },
    ];

    const getGravityColor = (g: string) => {
      if (g === 'Critique') return 'bg-red-100 text-red-700';
      if (g === 'Élevée') return 'bg-yellow-100 text-yellow-700';
      return 'bg-blue-100 text-blue-700';
    }

    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Anomalies Détectées</h3>
                <span className="px-3 py-1 text-sm font-bold rounded-full bg-red-100 text-red-700">24 anomalies</span>
            </div>
                    <table className="w-full text-left">
                        <thead>
                     <tr className="border-b-2 border-gray-200 bg-gray-50 text-sm text-gray-600">
                        <th className="py-3 px-4 font-semibold">Type</th>
                        <th className="py-3 px-4 font-semibold">District</th>
                        <th className="py-3 px-4 font-semibold">Gravité</th>
                        <th className="py-3 px-4 font-semibold">Statut</th>
                        <th className="py-3 px-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                    {anomalies.map((a, i) => (
                        <tr key={i}>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                    <a.icon size={16} className={getGravityColor(a.gravity).split(' ')[1]} />
                                    <span className="font-medium text-gray-700">{a.type}</span>
                                        </div>
                                    </td>
                            <td className="py-3 px-4 text-gray-600">{a.district}</td>
                            <td className="py-3 px-4"><span className={`px-3 py-1 text-xs font-bold rounded-full ${getGravityColor(a.gravity)}`}>{a.gravity}</span></td>
                            <td className="py-3 px-4 text-gray-600">{a.status}</td>
                            <td className="py-3 px-4"><button className="text-teal-600 font-semibold hover:underline">{a.action}</button></td>
                        </tr>
                            ))}
                        </tbody>
                    </table>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <p>Affichage 1-3 sur 24</p>
                <div className="flex items-center gap-2">
                    <button className="p-1.5 border rounded-md hover:bg-gray-100"><ChevronsLeft size={16} /></button>
                    <button className="p-1.5 border rounded-md hover:bg-gray-100"><ChevronsRight size={16} /></button>
                    </div>
                </div>
             <div className="flex items-center gap-3 mt-6">
                <button className="flex items-center gap-2 bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-teal-700 transition-colors">
                    <Wand2 size={16} />
                    <span>Corriger Anomalies</span>
                </button>
                <button className="flex items-center gap-2 bg-yellow-500 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-yellow-600 transition-colors">
                    <UserPlus size={16} />
                    <span>Assigner Tâche</span>
                </button>
            </div>
        </motion.div>
    );
};

const ComparativeAnalysisChart = () => {
    const data = [
      { subject: 'Complétude', A: 87, B: 90, fullMark: 100 },
      { subject: 'Cohérence', A: 72, B: 80, fullMark: 100 },
      { subject: 'Exactitude', A: 91, B: 95, fullMark: 100 },
      { subject: 'Ponctualité', A: 75, B: 85, fullMark: 100 },
      { subject: 'Validité', A: 80, B: 88, fullMark: 100 },
    ];

    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Analyse Comparative</h3>
             <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <Radar name="Actuel" dataKey="A" stroke="#14B8A6" fill="#14B8A6" fillOpacity={0.6} />
                    <Radar name="Objectif" dataKey="B" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.4} />
                    <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} />
                </RadarChart>
            </ResponsiveContainer>
            </motion.div>
    );
};


const QualityPage = () => {
  return (
    <motion.div 
      className="p-6 bg-gray-50 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Header />
      <DistrictQualityScores />
      <Filters />
      <QualityScore />
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <AnomaliesTable />
            <ComparativeAnalysisChart />
       </div>
        </motion.div>
    );
};

export default QualityPage;
