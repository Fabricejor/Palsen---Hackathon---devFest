"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, RefreshCw, AlertTriangle, Info, Bell, Phone, MessageSquare, CheckCircle, XCircle, Clock, Users, BarChart2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Header = () => (
    <motion.div variants={itemVariants} className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Alertes et Notifications</h1>
    </motion.div>
);

const Filters = () => (
    <motion.div variants={itemVariants} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
                <div>
                    <label className="text-sm font-medium text-gray-600">Type</label>
                    <div className="relative mt-1">
                        <select className="appearance-none w-48 text-sm border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500">
                            <option>Tous les types</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                 <div>
                    <label className="text-sm font-medium text-gray-600">Période</label>
                    <div className="relative mt-1">
                        <select className="appearance-none w-48 text-sm border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500">
                            <option>Dernières 24h</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-600">Statut</label>
                    <div className="relative mt-1">
                        <select className="appearance-none w-48 text-sm border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500">
                            <option>Tous les statuts</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-600">Recherche</label>
                    <div className="relative mt-1">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Rechercher..." className="pl-9 pr-3 py-2 w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                </div>
            </div>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600">
                <RefreshCw size={14} />
                <span>Réinitialiser</span>
            </button>
        </div>
    </motion.div>
);

const AlertCard = ({ alert }: any) => {
    const colors: { [key: string]: string } = {
        Critique: 'border-red-500',
        Moyen: 'border-yellow-500',
        Info: 'border-blue-500',
    };
    return (
        <motion.div variants={itemVariants} className={`bg-white p-5 rounded-xl border-l-4 ${colors[alert.level]} shadow-sm hover:shadow-lg transition-shadow`}>
            <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${colors[alert.level].replace('border-','bg-').replace('-500','-100')}`}>
                        <alert.icon size={20} className={colors[alert.level].replace('border-','text-').replace('-500','-600')} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">{alert.title}</h3>
                        <p className="text-sm text-gray-500">{alert.subtitle}</p>
                        <p className="text-sm text-gray-700 mt-2">{alert.description}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-500">{alert.time}</p>
                    <span className={`mt-2 inline-block px-3 py-1 text-xs font-bold rounded-full ${colors[alert.level].replace('border-','bg-').replace('-500','-100')} ${colors[alert.level].replace('border-','text-').replace('-500','-700')}`}>{alert.level}</span>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={16} />
                    <span>{alert.recipients} destinataires</span>
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{alert.confirmed}% confirmé</span>
                </div>
                <div className="flex items-center gap-2">
                    {alert.actions.map((action:string) => (
                         <button key={action} className={`px-4 py-1.5 text-sm font-semibold rounded-lg ${action === 'Renvoyer' || action === 'Détails' ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{action}</button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const timelineEvents = [
        {
            icon: Phone,
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'Appel vocal',
            time: '14:32',
            details: [
                '1,247 tentatives',
                '<span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 892 réussis</span>',
                '<span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> 355 échecs</span>'
            ]
        },
        {
            icon: MessageSquare,
            iconBg: 'bg-yellow-100',
            iconColor: 'text-yellow-600',
            title: 'SMS (Fallback)',
            time: '14:35',
            details: [
                '355 envois de rattrapage',
                '<span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 298 délivrés</span>',
                '<span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg> 57 en attente</span>'
            ]
        },
        {
            icon: CheckCircle,
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            title: 'Confirmations',
            time: '14:45',
            details: [
                '1,110 confirmations reçues',
                '<span class="text-green-600 font-semibold">89% taux de confirmation</span>'
            ]
        }
    ];

    return (
        <motion.div variants={itemVariants} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-800">Timeline des envois</h3>
            <p className="text-sm text-gray-500 mb-6">Épidémie de paludisme - Zone Nord</p>
            <div className="relative pl-6">
                <div className="absolute left-9 top-3 bottom-3 w-0.5 bg-gray-200"></div>
                {timelineEvents.map((event, index) => (
                    <motion.div 
                        key={index}
                        className="relative flex items-start gap-6 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className={`z-10 flex items-center justify-center w-8 h-8 rounded-full ${event.iconBg}`}>
                            <event.icon size={16} className={event.iconColor} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-gray-700">{event.title}</h4>
                                <span className="text-xs text-gray-500">{event.time}</span>
                            </div>
                            <div className="text-sm text-gray-600 mt-1 space-y-1">
                                {event.details.map((detail, i) => (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: detail }}></p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Performance = () => (
    <motion.div variants={itemVariants} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mt-6">
        <h3 className="font-bold text-gray-800 mb-4">Performance par canal</h3>
        <div className="space-y-3">
             <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 font-medium text-gray-700"><Phone size={16} /> Vocal</div>
                <span className="font-bold text-gray-800">71.5%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 font-medium text-gray-700"><MessageSquare size={16} /> SMS</div>
                <span className="font-bold text-gray-800">83.9%</span>
            </div>
        </div>
    </motion.div>
);

const AlertsReactivity = () => {
    const data = [
        { name: 'Confirmations < 2h', value: 87 },
        { name: 'Confirmations 2h-4h', value: 10 },
        { name: 'Confirmations > 4h', value: 3 },
    ];
    const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

    return (
        <motion.div variants={itemVariants} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mt-6">
            <h3 className="font-bold text-gray-800 mb-4">Réactivité des alertes</h3>
            <div className="h-40 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={60}
                            innerRadius={45}
                            fill="#8884d8"
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold text-gray-800">92%</span>
                    <span className="text-sm text-gray-500">Résolution</span>
                </div>
            </div>
            <div className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">Confirmations inférieure à 2h</span>
                    <span className="font-bold text-teal-600">87%</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Temps moyen de réponse</span>
                    <span className="font-bold text-gray-800">1h 23min</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Taux de résolution</span>
                    <span className="font-bold text-gray-800">92%</span>
                </div>
            </div>
        </motion.div>
    );
};

const AlertsPage = () => {
    const alerts = [
        { title: 'Épidémie de paludisme - Zone Nord', subtitle: 'Région de Saint-Louis', description: 'Augmentation de 45% des cas de paludisme dans la région. Action immédiate requise.', level: 'Critique', time: '14:32', recipients: 1247, confirmed: 89, icon: AlertTriangle, actions: ['Renvoyer', 'Escalader'] },
        { title: 'Stock médicaments faible', subtitle: 'Centre de santé de Tambacounda', description: 'Stock d\'artémisinine en dessous du seuil critique (15% restant).', level: 'Moyen', time: '12:15', recipients: 45, confirmed: 95, icon: Bell, actions: ['Renvoyer', 'Annuler'] },
        { title: 'Campagne de prévention', subtitle: 'Région de Dakar', description: 'Lancement de la campagne de distribution de moustiquaires.', level: 'Info', time: '10:45', recipients: 2340, confirmed: 76, icon: Info, actions: ['Détails'] },
    ];

  return (
    <motion.div 
      className="p-6 bg-gray-50 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <Filters />
            <div className="space-y-4">
                {alerts.map((alert, i) => <AlertCard key={i} alert={alert} />)}
            </div>
        </div>
        <div>
            <Timeline />
            <Performance />
            <AlertsReactivity />
        </div>
      </div>
    </motion.div>
  );
};

export default AlertsPage;
