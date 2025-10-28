"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Download, TestTube2, Pill, BedDouble, Truck, Search, Plus, Filter, ArrowUpDown, History } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
      <h1 className="text-3xl font-bold text-gray-800">Module Logistique</h1>
      <p className="text-gray-500 mt-1">Gestion et prédiction des stocks d'intrants antipaludiques</p>
    </div>
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 bg-yellow-500 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-yellow-600 transition-colors">
        <AlertTriangle size={16} />
        <span>Générer alerte</span>
      </button>
      <button className="flex items-center gap-2 bg-gray-800 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-gray-900 transition-colors">
        <TrendingUp size={16} />
        <span>Prévoir besoins</span>
      </button>
      <button className="flex items-center gap-2 bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-teal-700 transition-colors">
        <Download size={16} />
        <span>Exporter CSV</span>
      </button>
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, value, title, subtitle, status, statusColor }: any) => (
  <motion.div variants={itemVariants} className={`bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow`}>
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-lg ${statusColor.bg}`}>
        <Icon size={24} className={statusColor.icon} />
      </div>
      <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColor.tag}`}>{status}</span>
    </div>
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mt-4">{value}</h2>
      <p className="text-sm font-semibold text-gray-600">{title}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  </motion.div>
);

const StocksTable = () => {
    const districts = [
        { name: 'Dakar', tdr: 92, act: 78, mii: 45, status: 'MOYEN' },
        { name: 'Thiès', tdr: 88, act: 35, mii: 12, status: 'CRITIQUE' },
        { name: 'Kaolack', tdr: 95, act: 82, mii: 67, status: 'BON' },
        { name: 'Kolda', tdr: 42, act: 8, mii: 5, status: 'CRITIQUE' },
        { name: 'Tambacounda', tdr: 76, act: 28, mii: 38, status: 'MOYEN' },
    ];
    
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'BON': return 'bg-green-100 text-green-700';
            case 'MOYEN': return 'bg-yellow-100 text-yellow-700';
            case 'CRITIQUE': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getDotColor = (value: number) => {
        if (value > 75) return 'text-green-500';
        if (value > 40) return 'text-yellow-500';
        return 'text-red-500';
    }

    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Stocks par district</h3>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Rechercher..." className="pl-9 pr-3 py-2 w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Tous les produits</option>
                    </select>
                </div>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-200 text-sm text-gray-500">
                        <th className="py-3 font-medium">District</th>
                        <th className="py-3 font-medium">TDR</th>
                        <th className="py-3 font-medium">ACT</th>
                        <th className="py-3 font-medium">MII</th>
                        <th className="py-3 font-medium">État global</th>
                        <th className="py-3 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {districts.map(d => (
                        <tr key={d.name} className="border-b border-gray-100">
                            <td className="py-4 font-semibold text-gray-700">{d.name}</td>
                            <td className={`py-4 font-medium ${getDotColor(d.tdr)}`}><span className="mr-2">●</span>{d.tdr}%</td>
                            <td className={`py-4 font-medium ${getDotColor(d.act)}`}><span className="mr-2">●</span>{d.act}%</td>
                            <td className={`py-4 font-medium ${getDotColor(d.mii)}`}><span className="mr-2">●</span>{d.mii}%</td>
                            <td className="py-4"><span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(d.status)}`}>{d.status}</span></td>
                            <td className="py-4"><button className="text-teal-600 font-semibold hover:underline">Détails</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    )
};

const ConsumptionChart = () => {
    const data = [
      { name: 'Jan', TDR: 2400, ACT: 1800, MII: 800 },
      { name: 'Fév', TDR: 2200, ACT: 1600, MII: 900 },
      { name: 'Mar', TDR: 2800, ACT: 2000, MII: 1100 },
      { name: 'Avr', TDR: 3200, ACT: 2400, MII: 1200 },
      { name: 'Mai', TDR: 2900, ACT: 2200, MII: 1000 },
      { name: 'Juin', TDR: 3100, ACT: 2300, MII: 1100 },
    ];
  
    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tendance de consommation</h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis label={{ value: 'Unités consommées', angle: -90, position: 'insideLeft', fontSize: 12 }} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} />
                    <Line type="monotone" dataKey="TDR" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="ACT" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="MII" stroke="#EF4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

const GestionLogistiqueTable = () => {
    const products = [
        { name: 'Paracétamol 500mg', sku: 'PAR-500-001', stock: 2450, stockMax: 3000, consumption: 820, rupture: 3.2, district: 'Dakar Centre', region: 'Région Dakar' },
        { name: 'Amoxicilline 250mg', sku: 'AMO-250-002', stock: 580, stockMax: 2000, consumption: 290, rupture: 2.0, district: 'Thiès Nord', region: 'Région Thiès' },
        { name: 'Aspirine 100mg', sku: 'ASP-100-003', stock: 120, stockMax: 1000, consumption: 180, rupture: 0.7, district: 'Saint-Louis', region: 'Région Saint-Louis' },
    ];

    const getStockColor = (stock: number, max: number) => {
        const percentage = (stock / max) * 100;
        if (percentage > 50) return 'bg-teal-500';
        if (percentage > 20) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const getRuptureColor = (months: number) => {
        if (months > 3) return 'bg-green-100 text-green-700';
        if (months > 1) return 'bg-yellow-100 text-yellow-700';
        return 'bg-red-100 text-red-700';
    };

    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Gestion Logistique</h2>
                <button className="flex items-center gap-2 bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-teal-700 transition-colors">
                    <Plus size={16} />
                    <span>Nouvelle entrée</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div>
                    <label className="text-sm font-medium text-gray-600">Produit</label>
                    <select className="mt-1 w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Tous les produits</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-600">Région</label>
                    <select className="mt-1 w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Toutes les régions</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-600">Statut</label>
                    <select className="mt-1 w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Tous les statuts</option>
                    </select>
                </div>
                <button className="self-end flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-teal-700 transition-colors">
                    <Filter size={16} />
                    <span>Filtrer</span>
                </button>
            </div>

            <table className="w-full text-left">
                 <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50 text-sm text-gray-600">
                        <th className="py-3 px-4 font-semibold flex items-center gap-1">Produit <ArrowUpDown size={14} /></th>
                        <th className="py-3 px-4 font-semibold flex items-center gap-1">Stock actuel <ArrowUpDown size={14} /></th>
                        <th className="py-3 px-4 font-semibold flex items-center gap-1">Consommation mensuelle <ArrowUpDown size={14} /></th>
                        <th className="py-3 px-4 font-semibold flex items-center gap-1">Prévision rupture <ArrowUpDown size={14} /></th>
                        <th className="py-3 px-4 font-semibold">District</th>
                        <th className="py-3 px-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {products.map(p => (
                        <tr key={p.sku}>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-teal-50 rounded-lg"><Pill size={20} className="text-teal-600" /></div>
                                    <div>
                                        <div className="font-semibold text-gray-800">{p.name}</div>
                                        <div className="text-xs text-gray-500">SKU: {p.sku}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <div className="font-semibold text-gray-800">{p.stock.toLocaleString()} unités</div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                    <div className={`${getStockColor(p.stock, p.stockMax)} h-1.5 rounded-full`} style={{ width: `${(p.stock/p.stockMax)*100}%`}}></div>
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <div className="font-medium text-gray-700">{p.consumption} unités</div>
                                <div className="text-xs text-gray-500">Moyenne 3 mois</div>
                            </td>
                            <td className="py-3 px-4">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${getRuptureColor(p.rupture)}`}>{p.rupture} mois</span>
                            </td>
                            <td className="py-3 px-4">
                                <div className="font-medium text-gray-700">{p.district}</div>
                                <div className="text-xs text-gray-500">{p.region}</div>
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <button className="text-yellow-500 hover:text-yellow-600"><AlertTriangle size={18} /></button>
                                    <button className="text-gray-400 hover:text-gray-600"><History size={18} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <p>Affichage de 1 à 10 sur 247 entrées</p>
                <div className="flex items-center gap-1">
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">Précédent</button>
                    <button className="px-3 py-1 border border-teal-600 bg-teal-600 text-white rounded-md">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">2</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">3</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">Suivant</button>
                </div>
            </div>
        </motion.div>
    );
};

const LogistiquePage = () => {
  const stats = [
    { icon: TestTube2, value: '85%', title: 'TDR disponibles', subtitle: '12 mois de stock', status: 'OK', statusColor: { bg: 'bg-green-50', icon: 'text-green-600', tag: 'bg-green-100 text-green-700' } },
    { icon: Pill, value: '25%', title: 'ACT disponibles', subtitle: '2.5 mois de stock', status: 'CRITIQUE', statusColor: { bg: 'bg-yellow-50', icon: 'text-yellow-600', tag: 'bg-yellow-100 text-yellow-700' } },
    { icon: BedDouble, value: '8%', title: 'MII disponibles', subtitle: '0.8 mois de stock', status: 'RUPTURE', statusColor: { bg: 'bg-red-50', icon: 'text-red-600', tag: 'bg-red-100 text-red-700' } },
    { icon: Truck, value: '5', title: 'Livraisons prévues', subtitle: '7 prochains jours', status: 'EN COURS', statusColor: { bg: 'bg-blue-50', icon: 'text-blue-600', tag: 'bg-blue-100 text-blue-700' } },
  ];

  return (
    <motion.div 
      className="p-6 bg-gray-50 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => <StatCard key={index} {...stat} />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <StocksTable />
        </div>
        <div>
            <ConsumptionChart />
        </div>
      </div>
      <GestionLogistiqueTable />
    </motion.div>
  );
};

export default LogistiquePage;
