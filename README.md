# 🦟 PalSense AI

**PalSense** est une plateforme intelligente de surveillance et de prévention du paludisme au Sénégal, propulsée par l'intelligence artificielle.

## 📋 Table des matières

- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Structure des routes](#structure-des-routes)
- [Architecture des layouts](#architecture-des-layouts)
- [Fonctionnalités par page](#fonctionnalités-par-page)
- [Scripts disponibles](#scripts-disponibles)

---

## 🎯 À propos

PalSense est une application web moderne qui offre :
- 📊 Surveillance en temps réel des cas de paludisme
- 🤖 Prédictions basées sur l'IA
- 🗺️ Cartographie interactive du Sénégal
- 📦 Gestion logistique des ressources médicales
- 🔔 Système d'alertes pour les zones à risque
- 👥 Gestion des utilisateurs et permissions

---

## 🛠️ Technologies utilisées

### Framework & Core
- **Next.js 16.0.0** - Framework React avec App Router
- **React 19.2.0** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS 4** - Framework CSS

### Visualisation & Cartographie
- **Recharts** - Graphiques et visualisations de données
- **React Leaflet** - Cartes interactives
- **Leaflet** - Bibliothèque de cartographie

### Animations & 3D
- **Framer Motion** - Animations fluides
- **Three.js** - Graphiques 3D
- **React Three Fiber** - Three.js pour React
- **React Spring** - Animations physiques

### Autres
- **Axios** - Requêtes HTTP
- **Lucide React** - Icônes modernes
- **React Icons** - Bibliothèque d'icônes

---

## 🚀 Installation

### Prérequis
- Node.js 20+ 
- npm, yarn, pnpm ou bun

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone <votre-repo-url>
cd palsen_ai

# 2. Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install

# 3. Lancer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev

# 4. Ouvrir l'application
# Accéder à http://localhost:3000
```

---

## 🗺️ Structure des routes

### Vue d'ensemble des URLs

| Route | URL | Layout | Description |
|-------|-----|--------|-------------|
| **Page d'accueil** | `/` | Main Layout | Page d'accueil publique avec navbar et footer |
| **Connexion** | `/login` | Root Layout | Page de connexion utilisateur |
| **Dashboard principal** | `/dashboard` | Dashboard Layout | Vue d'ensemble avec statistiques |
| **Alertes** | `/dashboard/alerts` | Dashboard Layout | Gestion des alertes et notifications |
| **Logistique** | `/dashboard/logistique` | Dashboard Layout | Gestion des stocks et équipements |
| **Prédictions** | `/dashboard/prediction` | Dashboard Layout | Modèles de prédiction IA |
| **Qualité** | `/dashboard/quality` | Dashboard Layout | Contrôle qualité des données |
| **Utilisateurs** | `/dashboard/utilisateurs` | Dashboard Layout | Gestion des utilisateurs |

---

## 📁 Architecture des layouts

L'application utilise une architecture de layouts imbriqués pour organiser l'interface utilisateur :

### 1. **Root Layout** (`src/app/layout.tsx`)
```
├── html
│   ├── head (metadata, fonts)
│   └── body
│       └── {children}
```
- **Scope** : Toute l'application
- **Responsabilités** :
  - Configuration HTML de base
  - Police Inter
  - Styles globaux
  - Métadonnées par défaut

### 2. **Main Layout** (`src/app/(main)/layout.tsx`)
```
└── {children}
```
- **Routes concernées** : `/`
- **Responsabilités** :
  - Layout minimal pour la page d'accueil
  - Le contenu de la page gère sa propre navbar et footer
- **Note** : Le dossier `(main)` est un groupe de routes qui n'affecte pas l'URL

### 3. **Dashboard Layout** (`src/app/dashboard/layout.tsx`)
```
├── div.flex (container principal)
│   ├── Sidebar (navigation latérale)
│   └── main (contenu principal)
│       └── {children}
```
- **Routes concernées** : `/dashboard/*`
- **Responsabilités** :
  - Sidebar persistante avec navigation
  - Zone de contenu principale
  - Scroll indépendant
  - Pas de navbar ni footer

---

## 📄 Fonctionnalités par page

### 🏠 Page d'accueil (`/`)
**Fichier** : `src/app/(main)/page.tsx`

**Composants** :
- ✅ Navbar responsive avec menu mobile
- ✅ Section Hero avec CTA
- ✅ Section "À propos" avec cartes de fonctionnalités
- ✅ Section "Fonctionnalités principales"
- ✅ Formulaire de contact
- ✅ Footer complet

**Navigation** :
- Liens vers login
- Navigation smooth scroll (sections #about, #features, #contact)

---

### 🔐 Page de connexion (`/login`)
**Fichier** : `src/app/login/page.tsx`

**Fonctionnalités** :
- Formulaire de connexion sécurisé
- Validation des identifiants
- Redirection vers le dashboard après authentification

---

### 📊 Dashboard Principal (`/dashboard`)
**Fichier** : `src/app/dashboard/page.tsx`

**Composants principaux** :
- 📈 Statistiques clés (cartes de stats)
- 🗺️ Carte interactive du Sénégal
- 📊 Graphiques de tendances
- 🔔 Alertes récentes
- 📋 Activités récentes

**Navigation** :
- Sidebar avec accès rapide à toutes les sections

---

### 🔔 Alertes (`/dashboard/alerts`)
**Fichier** : `src/app/dashboard/alerts/page.tsx`

**Fonctionnalités** :
- Liste des alertes actives
- Filtrage par priorité (haute, moyenne, basse)
- Filtrage par type
- Historique des alertes
- Détails par alerte

---

### 📦 Logistique (`/dashboard/logistique`)
**Fichier** : `src/app/dashboard/logistique/page.tsx`

**Fonctionnalités** :
- Gestion des stocks de médicaments
- Suivi des équipements médicaux
- Niveaux d'inventaire
- Alertes de stock faible
- Distribution par région

---

### 🔮 Prédictions (`/dashboard/prediction`)
**Fichier** : `src/app/dashboard/prediction/page.tsx`

**Fonctionnalités** :
- Modèles de prédiction IA
- Prévisions épidémiologiques
- Analyse de tendances
- Zones à risque
- Recommandations automatisées

---

### ✅ Qualité (`/dashboard/quality`)
**Fichier** : `src/app/dashboard/quality/page.tsx`

**Fonctionnalités** :
- Contrôle qualité des données
- Validation des saisies
- Détection d'anomalies
- Rapports de qualité
- Métriques de fiabilité

---

### 👥 Utilisateurs (`/dashboard/utilisateurs`)
**Fichier** : `src/app/dashboard/utilisateurs/page.tsx`

**Fonctionnalités** :
- Liste des utilisateurs
- Gestion des rôles et permissions
- Ajout/modification/suppression d'utilisateurs
- Historique des actions
- Contrôle d'accès

---

## 🎨 Organisation des composants

```
src/
├── app/                          # Pages et routes (App Router)
│   ├── (main)/                   # Groupe de routes pour l'accueil
│   │   ├── layout.tsx           # Layout minimal
│   │   └── page.tsx             # Page d'accueil
│   ├── dashboard/               # Routes du dashboard
│   │   ├── layout.tsx           # Layout avec sidebar
│   │   ├── sidebar.tsx          # Composant sidebar
│   │   ├── page.tsx             # Dashboard principal
│   │   ├── alerts/              # Module alertes
│   │   ├── logistique/          # Module logistique
│   │   ├── prediction/          # Module prédictions
│   │   ├── quality/             # Module qualité
│   │   └── utilisateurs/        # Module utilisateurs
│   ├── login/                   # Route de connexion
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Styles globaux
├── components/                   # Composants réutilisables
│   ├── dashboard/               # Composants spécifiques au dashboard
│   │   └── SenegalMap.tsx       # Carte du Sénégal
│   └── ui/                      # Composants UI génériques
│       ├── background-wave.tsx  # Animations de fond
│       ├── cards/               # Cartes (statsCard, etc.)
│       └── graph/               # Composants de graphiques
├── hooks/                        # Custom React hooks
├── lib/                          # Utilitaires et helpers
├── providers/                    # Context providers
├── services/                     # Services API
├── types/                        # Définitions TypeScript
└── utils/                        # Fonctions utilitaires
```

---

## 📜 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de dev sur http://localhost:3000

# Production
npm run build        # Crée un build optimisé
npm run start        # Lance le serveur de production

# Qualité de code
npm run lint         # Exécute ESLint
```

---

## 🔐 Authentification et Permissions

### Rôles utilisateurs
1. **Administrateur** - Accès complet à toutes les fonctionnalités
2. **Gestionnaire** - Accès aux données et gestion logistique
3. **Analyste** - Accès en lecture et génération de rapports
4. **Utilisateur** - Accès limité en lecture seule

### Pages protégées
Toutes les routes sous `/dashboard/*` nécessitent une authentification.

---

## 🗂️ Convention de nommage

### Fichiers
- **Pages** : `page.tsx` (convention Next.js App Router)
- **Layouts** : `layout.tsx`
- **Composants** : `PascalCase.tsx` (ex: `SenegalMap.tsx`)

### Routes
- Routes publiques : `/`, `/login`
- Routes protégées : `/dashboard/*`
- Groupes de routes : `(nom)` - n'affecte pas l'URL

---

## 🎯 Prochaines étapes

### Fonctionnalités à venir
- [ ] Intégration API backend
- [ ] Authentification OAuth
- [ ] Mode hors ligne (PWA)
- [ ] Notifications push
- [ ] Export de données (PDF, Excel)
- [ ] Dashboard mobile responsive amélioré
- [ ] Multilingue (Français, Wolof, Anglais)
- [ ] Tests unitaires et d'intégration

---

## 📞 Support & Contact

Pour toute question ou problème :
- **Email** : contact@palsense.sn
- **Téléphone** : +221 XX XXX XX XX
- **Localisation** : Dakar, Sénégal

---

## 📄 Licence

Ce projet est sous licence propriétaire. Tous droits réservés © 2024 PalSense.

---

## 🙏 Remerciements

Développé avec passion pour contribuer à la lutte contre le paludisme au Sénégal.

**Ensemble pour un Sénégal sans paludisme !** 🦟❌
