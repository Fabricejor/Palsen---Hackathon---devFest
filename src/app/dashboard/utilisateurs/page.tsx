"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Plus, MoreHorizontal, CheckCircle2, XCircle, UserPlus, ShieldAlert, Check, UserCog, Clock, Search, Calendar, Users, Shield, Lock, FileClock, Cog, Save, HelpCircle, Info } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const UsersTable = () => {
    const users = [
        { name: 'Amadou Diallo', email: 'amadou.diallo@gov.sn', role: 'Administrateur', lastLogin: 'il y a 2 heures', status: 'Actif', avatar: 'AM' },
        { name: 'Fatou Sall', email: 'fatou.sall@gov.sn', role: 'Gestionnaire', lastLogin: 'Hier à 14:30', status: 'Actif', avatar: 'FS' },
        { name: 'Ousmane Ndiaye', email: 'ousmane.ndiaye@gov.sn', role: 'Utilisateur', lastLogin: 'il y a 3 jours', status: 'Inactif', avatar: 'ON' },
    ];

    const getRoleColor = (role: string) => {
        if (role === 'Administrateur') return 'bg-yellow-100 text-yellow-700';
        if (role === 'Gestionnaire') return 'bg-blue-100 text-blue-700';
        return 'bg-gray-100 text-gray-700';
    };

    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">Utilisateurs</h3>
                    <p className="text-sm text-gray-500">Gestion des comptes utilisateurs (24)</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 text-sm border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50">
                        <Filter size={14} /> <span>Filtrer</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-teal-700">
                        <Plus size={16} /> <span>Ajouter utilisateur</span>
                    </button>
                </div>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b-2 border-gray-200 text-sm text-gray-600">
                        <th className="py-3 px-4 font-semibold">Nom</th>
                        <th className="py-3 px-4 font-semibold">Email</th>
                        <th className="py-3 px-4 font-semibold">Rôle</th>
                        <th className="py-3 px-4 font-semibold">Dernière connexion</th>
                        <th className="py-3 px-4 font-semibold">Statut</th>
                        <th className="py-3 px-4 font-semibold"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {users.map(u => (
                        <tr key={u.email}>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full font-bold text-gray-600 text-sm">{u.avatar}</div>
                                    <span className="font-semibold text-gray-800">{u.name}</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{u.email}</td>
                            <td className="py-3 px-4"><span className={`px-3 py-1 text-xs font-bold rounded-full ${getRoleColor(u.role)}`}>{u.role}</span></td>
                            <td className="py-3 px-4 text-gray-600">{u.lastLogin}</td>
                            <td className="py-3 px-4">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${u.status === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{u.status}</span>
                            </td>
                            <td className="py-3 px-4"><button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

const RoleCard = ({ role, users, description, permissions, highlight }: any) => (
    <div className={`p-5 rounded-xl border-2 ${highlight ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white'}`}>
        <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-lg text-gray-800">{role}</h4>
            <span className={`px-3 py-1 text-xs font-bold rounded-full ${highlight ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{users} utilisateurs</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
            {permissions.map((p: any) => (
                <div key={p.name} className="flex items-center gap-2 text-sm">
                    {p.enabled ? <CheckCircle2 size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />}
                    <span className="text-gray-700">{p.name}</span>
                </div>
            ))}
        </div>
        <button className={`mt-4 w-full py-2 rounded-lg font-semibold border-2 ${highlight ? 'bg-white border-teal-600 text-teal-600 hover:bg-teal-100' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
            Modifier
        </button>
    </div>
);

const RolesPermissions = () => {
    const roles = [
        { role: 'Administrateur', users: 8, description: 'Accès complet à toutes les fonctionnalités', permissions: [{ name: 'Gestion utilisateurs', enabled: true }, { name: 'Configuration système', enabled: true }, { name: 'Tous les rapports', enabled: true }], highlight: true },
        { role: 'Gestionnaire', users: 12, description: 'Gestion des données et rapports', permissions: [{ name: 'Consultation données', enabled: true }, { name: 'Génération rapports', enabled: true }, { name: 'Configuration système', enabled: false }], highlight: false },
        { role: 'Utilisateur', users: 4, description: 'Consultation des données uniquement', permissions: [{ name: 'Consultation limitée', enabled: true }, { name: 'Modification données', enabled: false }, { name: 'Génération rapports', enabled: false }], highlight: false },
    ];
    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Rôles et Permissions</h3>
                 <button className="flex items-center gap-2 text-sm bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-teal-700">
                    <Plus size={16} /> <span>Nouveau rôle</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roles.map(r => <RoleCard key={r.role} {...r} />)}
            </div>
        </motion.div>
    );
};

const ActivityLogs = () => {
    const logs = [
        { icon: UserPlus, iconColor: 'text-green-500 bg-green-100', title: 'Nouvel utilisateur créé', details: 'Amadou Diallo a créé un compte pour Fatou Sall', ip: '192.168.1.100 • Dakar, Sénégal', time: 'il y a 2 heures' },
        { icon: ShieldAlert, iconColor: 'text-yellow-500 bg-yellow-100', title: 'Connexion échouée', details: 'Tentative de connexion échouée pour ousmane.ndiaye@gov.sn', ip: '41.82.15.23 • Thiès, Sénégal', time: 'il y a 4 heures' },
        { icon: Check, iconColor: 'text-green-500 bg-green-100', title: 'Modification des permissions', details: 'Amadou Diallo a modifié les permissions du rôle Gestionnaire', ip: '192.168.1.100 • Dakar, Sénégal', time: 'Hier à 16h20' },
        { icon: ShieldAlert, iconColor: 'text-red-500 bg-red-100', title: 'Tentative d\'accès non autorisé', details: 'Tentative d\'accès à la section administration par un utilisateur non autorisé', ip: '197.149.72.15 • Localisation inconnue', time: 'il y a 2 jours' },
    ];
    return (
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Logs d'activité</h3>
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="mm/dd/yyyy" className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 w-32" />
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Rechercher..." className="pl-9 pr-3 py-1.5 w-full text-sm border border-gray-300 rounded-lg" />
                    </div>
                    <Calendar size={18} className="text-gray-500" />
                </div>
            </div>
             <div className="space-y-4">
                {logs.map((log, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 border-b border-gray-100">
                        <div className={`p-2 rounded-full ${log.iconColor}`}>
                            <log.icon size={20} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-800">{log.title}</p>
                                <p className="text-xs text-gray-500">{log.time}</p>
                            </div>
                            <p className="text-sm text-gray-600">{log.details}</p>
                            <p className="text-xs text-gray-400 mt-1">IP: {log.ip}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                 <button className="text-sm text-gray-700 font-semibold border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                    Charger plus d'activités
                </button>
            </div>
        </motion.div>
    );
};


const AdminPage = () => (
    <motion.div 
      className="p-6 bg-gray-50 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
        <motion.div variants={itemVariants}>
            <h1 className="text-3xl font-bold text-gray-800">Administration & Sécurité</h1>
            <p className="text-gray-500 mt-1">Gestion des utilisateurs, rôles et contrôle d'accès RBAC</p>
        </motion.div>
        
        <div className="mt-6">
            <UsersTable />
            <RolesPermissions />
            <ActivityLogs />
        </div>
    </motion.div>
);

export default AdminPage;
