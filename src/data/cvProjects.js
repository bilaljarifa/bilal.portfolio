export const cvProjects = {
  optiport: {
    link: 'https://github.com/bilaljarifa/otiport',
    stack: ['TypeScript', 'React', 'Python', 'FastAPI'],
    en: {
      title: 'OPTIPORT',
      description: 'My 2026 final-year project for ETF portfolio analysis, forecasting, and trading simulation.',
      brief: 'I built OPTIPORT, a 2026 final-year project for analyzing and managing ETF portfolios. A React and TypeScript interface connects to a Python backend built with FastAPI.',
      briefPoints: [
        ['Forecasting and news analysis', 'Implemented LSTM models for 22-day return forecasts and FinBERT to analyze sentiment in financial news.'],
        ['Portfolio optimization and risk', 'Integrated mean–variance portfolio optimization with MPT and SLSQP, with risk measures including VaR, CVaR, and beta.'],
        ['Strategy evaluation', 'Built paper trading and walk-forward backtesting to test portfolio strategies.'],
      ],
    },
    fr: {
      title: 'OPTIPORT',
      description: 'Mon projet de fin d’études 2026 consacré à l’analyse de portefeuilles ETF, à la prévision et au trading simulé.',
      brief: 'J’ai développé OPTIPORT, un projet de fin d’études 2026 pour analyser et gérer des portefeuilles ETF. Une interface React et TypeScript est reliée à un backend Python avec FastAPI.',
      briefPoints: [
        ['Prévision et analyse de l’actualité', 'J’ai implémenté des modèles LSTM pour les prévisions de rendement à 22 jours et utilisé FinBERT pour analyser le sentiment des actualités financières.'],
        ['Optimisation et mesure des risques', 'J’ai intégré l’optimisation moyenne-variance avec MPT et SLSQP et les mesures de risque VaR, CVaR et bêta.'],
        ['Évaluation des stratégies', 'J’ai développé le trading simulé et le backtesting walk-forward pour évaluer les stratégies de portefeuille.'],
      ],
    },
  },
  transmanage: {
    link: 'https://github.com/bilaljarifa/TransManage',
    stack: ['PHP', 'Laravel'],
    en: {
      title: 'TRANSMANAGE',
      description: 'A Laravel logistics application for managing vehicles, users, and operations.',
      brief: 'I built TRANSMANAGE, a logistics management application for tracking trucks, statuses, users, and operations.',
      briefPoints: [
        ['Authentication and operations', 'Implemented sign-in, roles, and activity tracking for logistics workflows.'],
        ['Excel and PDF workflows', 'Added Excel import and export and PDF report generation.'],
        ['REST API and dashboard', 'Designed a REST API and integrated a dashboard for operational data and statistics.'],
      ],
    },
    fr: {
      title: 'TRANSMANAGE',
      description: 'Une application de gestion logistique Laravel pour suivre les véhicules, les utilisateurs et les opérations.',
      brief: 'J’ai développé TRANSMANAGE, une application de gestion logistique pour suivre les camions, les statuts, les utilisateurs et les opérations.',
      briefPoints: [
        ['Authentification et opérations', 'J’ai implémenté l’authentification, les rôles et le suivi des activités pour les processus logistiques.'],
        ['Échanges Excel et rapports PDF', 'J’ai ajouté l’import et l’export Excel ainsi que la génération de rapports PDF.'],
        ['API REST et tableau de bord', 'J’ai conçu une API REST et intégré un tableau de bord pour suivre les données et les statistiques opérationnelles.'],
      ],
    },
  },
};
