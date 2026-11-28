const images = import.meta.glob('../assets/projects/optiport-*.{jpg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
});

const sections = [
  {
    id: 'overview',
    title: { en: 'Getting started', fr: 'Prise en main' },
    screens: [
      ['landing', 'Landing page', 'Introduces ETF research, forecasting, optimization, and simulated trading. The SPY chart shows a dated historical snapshot.', 'Page d’accueil', 'Présente l’analyse des ETF, la prévision, l’optimisation et la simulation de transactions. Le graphique de SPY affiche un aperçu historique daté.'],
      ['login', 'Sign in', 'Returning users sign in to access their own paper-trading account and saved research.', 'Connexion', 'Les utilisateurs se connectent pour retrouver leur compte de simulation et leurs recherches.'],
      ['register', 'Create an account', 'New users create their own workspace with $250,000 in simulated starting cash.', 'Créer un compte', 'Chaque nouveau compte dispose de 250 000 $ de liquidités initiales simulées.'],
      ['dashboard', 'Dashboard', 'The starting dashboard shows simulated cash, buying power, portfolio performance, and shortcuts to trading and analytics.', 'Tableau de bord', 'Le tableau de bord affiche les liquidités simulées, le pouvoir d’achat, la performance et les raccourcis vers la simulation et les analyses.'],
    ],
  },
  {
    id: 'markets',
    title: { en: 'Markets and ETF research', fr: 'Marchés et analyse des ETF' },
    screens: [
      ['markets', 'Market charts', 'Explore SPY price and volume over different time ranges, save ETFs to a watchlist, or open their research and trading views.', 'Graphiques des marchés', 'Consultez le cours et le volume de SPY sur plusieurs périodes, ajoutez des ETF à la liste de suivi ou ouvrez leur fiche d’analyse.'],
      ['heatmap', 'Market heatmap', 'Compare the direction and size of daily moves across the ETF universe. Select a tile to open its chart.', 'Carte des variations', 'Comparez le sens et l’ampleur des variations quotidiennes des ETF. Chaque case ouvre le graphique correspondant.'],
      ['screener', 'ETF screener', 'Scan ETF quotes and available forecasting indicators in one table to find a fund to research.', 'Sélection des ETF', 'Parcourez les cotations et les indicateurs de prévision disponibles dans un même tableau pour repérer un fonds à analyser.'],
      ['watchlist', 'Watchlist and alerts', 'Keep selected ETFs together and set price thresholds. The demo shows an alert for SPY above $270.', 'Liste de suivi et alertes', 'Regroupez les ETF sélectionnés et définissez des seuils. La démo affiche une alerte lorsque SPY dépasse 270 $.'],
      ['research', 'ETF overview', 'The PSI research page brings together the latest price, daily change, volume, and trading shortcuts for the selected fund.', 'Vue d’ensemble d’un ETF', 'La fiche PSI regroupe le cours, la variation quotidienne, le volume et les raccourcis de transaction du fonds sélectionné.'],
      ['research-chart', 'ETF price history', 'Review the selected fund’s candlesticks and volume on its dedicated research page.', 'Historique du cours d’un ETF', 'Consultez le graphique en chandeliers et les volumes du fonds sur sa fiche d’analyse.'],
      ['research-about', 'About the ETF', 'The About tab describes the selected ETF, its sector, and the data available for research.', 'À propos de l’ETF', 'L’onglet À propos présente le fonds, son secteur et les données disponibles pour l’analyse.'],
      ['research-risk', 'ETF risk overview', 'The research page directs users to the Risk Center for measures calculated from their own portfolio holdings.', 'Risque depuis la fiche ETF', 'La fiche renvoie au centre de risque pour les mesures calculées à partir des positions du portefeuille.'],
    ],
  },
  {
    id: 'trading',
    title: { en: 'Paper trading and reporting', fr: 'Simulation et rapports' },
    screens: [
      ['trading', 'Order ticket', 'Prepare a simulated buy or sell order by choosing a quantity and order type. This example sets a $190 limit for five shares of QQQ.', 'Formulaire d’ordre', 'Préparez un achat ou une vente simulée en choisissant la quantité et le type d’ordre. L’exemple fixe un cours limite de 190 $ pour cinq parts de QQQ.'],
      ['portfolio', 'Portfolio holdings', 'Review allocation, cash, open positions, and how each holding contributed to the demo portfolio’s return.', 'Positions du portefeuille', 'Consultez l’allocation, les liquidités, les positions ouvertes et leur contribution au rendement du portefeuille de démonstration.'],
      ['orders', 'Order history', 'See filled and open simulated orders, including the example QQQ limit order.', 'Historique des ordres', 'Consultez les ordres simulés exécutés et ouverts, dont l’ordre à cours limité sur QQQ.'],
      ['transactions', 'Transaction ledger', 'Review the simulated cash deposit and trades with their quantities, execution prices, and cash movements.', 'Journal des transactions', 'Consultez le dépôt simulé et les transactions avec leurs quantités, prix d’exécution et mouvements de liquidités.'],
      ['report', 'Portfolio report', 'Brings holdings, performance, risk, benchmark comparison, and recent transactions into a printable report.', 'Rapport de portefeuille', 'Réunit les positions, la performance, le risque, la comparaison à un indice et les transactions récentes dans un rapport imprimable.'],
      ['report-performance', 'Performance and benchmark', 'Shows the replay account’s equity curve, portfolio risk metrics, and SPY benchmark figures in the printable report.', 'Performance et indice de référence', 'Affiche dans le rapport imprimable la courbe de valeur du compte simulé, les mesures de risque et les chiffres de l’indice SPY.'],
    ],
  },
  {
    id: 'risk-news',
    title: { en: 'Risk, news, and the assistant', fr: 'Risque, actualités et assistant' },
    screens: [
      ['risk', 'Portfolio risk', 'Uses the historical replay and sample holdings to show volatility, Sharpe ratio, drawdown, beta, 95% Value at Risk, and risk contributions.', 'Risque du portefeuille', 'Utilise les cours historiques et des positions de démonstration pour afficher la volatilité, le ratio de Sharpe, la baisse maximale, le bêta, la VaR à 95 % et les contributions au risque.'],
      ['risk-method', 'Risk methodology', 'Explains how fixed portfolio weights, historical returns, and a benchmark are used to estimate correlations, beta, and downside risk.', 'Méthodologie du risque', 'Explique comment les pondérations fixes, les rendements historiques et un indice de référence servent à estimer les corrélations, le bêta et le risque de perte.'],
      ['scenario', 'Price-shock scenario', 'Applies a hypothetical 10% fall in PSI and compares the resulting portfolio value, allocation, and risk with the starting portfolio.', 'Scénario de choc de prix', 'Applique une baisse hypothétique de 10 % sur PSI et compare la valeur, l’allocation et le risque obtenus au portefeuille de départ.'],
      ['news', 'News Impact Analytics', 'The sentiment workflow scores clearly labeled sample headlines and summarizes tone, coverage, and estimated market impact.', 'Analyse d’impact des actualités', 'Le module attribue des scores à des titres d’exemple clairement signalés et résume le sentiment, le volume de couverture et l’impact estimé.'],
      ['news-impact', 'Market impact and ranked headlines', 'Shows the recency-weighted impact score and ranks the example headlines by their individual impact.', 'Impact et classement des actualités', 'Affiche le score d’impact pondéré selon la récence et classe les titres d’exemple selon leur impact individuel.'],
      ['research-news', 'News by ETF', 'Shows sample headlines for PSI alongside individual sentiment and impact ratings on its research page.', 'Actualités par ETF', 'Affiche sur la fiche PSI des titres d’exemple accompagnés de leurs scores de sentiment et d’impact.'],
      ['news-method', 'News methodology', 'Describes how sentiment, recency, and impact are combined and why price correlation needs matching observations.', 'Méthodologie des actualités', 'Décrit la combinaison du sentiment, de la récence et de l’impact, ainsi que la nécessité de disposer de dates communes pour calculer une corrélation avec les cours.'],
      ['assistant', 'AI Assistant', 'An explicitly labeled example conversation shows how the chat can present the replay account’s value and holdings. The reply is illustrative.', 'Assistant IA', 'Une conversation d’exemple signale comment le chat peut présenter la valeur et les positions du compte de démonstration. La réponse est illustrative.'],
    ],
  },
  {
    id: 'methods',
    title: { en: 'Forecasting and methods', fr: 'Prévisions et méthodes' },
    screens: [
      ['forecast', '22-day ETF forecast', 'Shows the baseline forecast and bounded news adjustment as distinct inputs. The local replay uses a historical fallback because trained LSTM files are unavailable.', 'Prévision d’ETF à 22 jours', 'Présente la prévision de base et l’ajustement borné lié aux actualités. La démo utilise un calcul historique de secours en l’absence des fichiers LSTM entraînés.'],
      ['optimizer', 'Portfolio optimizer', 'Computes allocations, volatility, and an efficient frontier from archived ETF prices. The calculation uses historical returns as a fallback for unavailable LSTM files.', 'Optimisation de portefeuille', 'Calcule les allocations, la volatilité et une frontière efficiente à partir de cours archivés. Les rendements historiques remplacent les prévisions LSTM indisponibles dans la démo.'],
      ['optimizer-method', 'Optimization methodology', 'Shows the efficient frontier and explains how expected returns, historical covariance, and a chosen strategy determine the allocation.', 'Méthodologie de l’optimisation', 'Montre la frontière efficiente et explique le rôle des rendements attendus, de la covariance historique et de la stratégie choisie dans l’allocation.'],
      ['smart-invest', 'Smart Invest', 'Guides users through a simulated allocation based on their risk profile, investment horizon, and budget.', 'Smart Invest', 'Propose une allocation simulée à partir du profil de risque, de l’horizon et du montant d’investissement.'],
      ['evaluation', 'LSTM evaluation', 'Documents the chronological train, validation, and test split. Test scores require the trained models and scalers, which are absent from this local demo.', 'Évaluation LSTM', 'Décrit la répartition chronologique entre entraînement, validation et test. Les scores nécessitent les modèles entraînés et leurs paramètres de mise à l’échelle, absents de cette démo.'],
      ['comparison', 'Forecast model comparison', 'Benchmarks last-value, moving-average, and linear-regression forecasts on the same archived PSI test period using error and directional accuracy.', 'Comparaison des modèles', 'Compare la dernière valeur, la moyenne mobile et la régression linéaire sur la même période de test de PSI, selon l’erreur et la précision directionnelle.'],
      ['regime', 'Market regime', 'Classifies the archived SPY history using a 63-day trend and 21-day realized volatility against fixed thresholds.', 'Régime de marché', 'Classe le régime de SPY à partir de l’historique archivé, d’une tendance sur 63 jours et de la volatilité réalisée sur 21 jours comparées à des seuils fixes.'],
      ['backtest', 'Walk-forward backtest', 'Shows the ETF, historical window, capital, strategy, and benchmark controls. The simulation rebalances every 22 trading days and needs the trained LSTM files to produce results.', 'Test rétrospectif progressif', 'Montre les réglages des ETF, de la période, du capital, de la stratégie et de l’indice de référence. Le rééquilibrage intervient tous les 22 jours de bourse et les résultats nécessitent les fichiers LSTM entraînés.'],
    ],
  },
  {
    id: 'account',
    title: { en: 'Accounts and administration', fr: 'Comptes et administration' },
    screens: [
      ['profile', 'Profile', 'Manage display information and review account role and a summary of the simulated portfolio.', 'Profil', 'Gérez les informations affichées et consultez le rôle du compte ainsi qu’un résumé du portefeuille simulé.'],
      ['settings', 'Settings', 'Switch the interface theme and review the reset controls for the simulated trading account.', 'Paramètres', 'Changez le thème de l’interface et consultez les options de réinitialisation du compte de simulation.'],
      ['pricing', 'Plans and pricing', 'Compares the Free, Pro, and Premium plans and the features included with each tier.', 'Offres et tarifs', 'Compare les offres Free, Pro et Premium ainsi que les fonctionnalités incluses dans chacune.'],
      ['billing', 'Billing', 'Shows the current plan, subscription status, and management controls in demo mode.', 'Facturation', 'Affiche l’offre actuelle, le statut de l’abonnement et les options de gestion en mode démo.'],
      ['checkout', 'Demo checkout', 'Shows the subscription form in test-payment mode using the app’s demonstration card option.', 'Paiement de démonstration', 'Présente le formulaire d’abonnement en mode de paiement test avec l’option de carte de démonstration.'],
      ['administration', 'Administration', 'Shows user and account counts, simulated order totals, and role management with demo accounts.', 'Administration', 'Présente le nombre d’utilisateurs et de comptes, les totaux d’ordres simulés et la gestion des rôles sur des comptes de démonstration.'],
    ],
  },
];

export function optiportGallery(language) {
  return sections.map(({ id, title, screens }) => ({
    id: `optiport-${id}`,
    title: title[language],
    layout: 'compactScreenshots',
    items: screens.map(([slug, enCaption, enDescription, frCaption, frDescription]) => {
      const path = `../assets/projects/optiport-${slug}`;
      const image = images[`${path}.webp`] ?? images[`${path}.jpg`];
      return {
        image,
        caption: language === 'fr' ? frCaption : enCaption,
        description: language === 'fr' ? frDescription : enDescription,
      };
    }),
  }));
}
