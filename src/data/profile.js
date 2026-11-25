export const profileContact = {
  name: 'Bilal Jarifa',
  email: 'bilaljarifa01@gmail.com',
  phone: '+212 6 69 51 26 81',
  phoneHref: 'tel:+212669512681',
  github: 'https://github.com/bilaljarifa',
  linkedin: 'https://www.linkedin.com/in/bilal-jarifa-dev',
};

export const profileCopy = {
  en: {
    title: 'Bilal Jarifa | Full Stack Developer',
    country: 'Morocco',
    intro: 'I build full-stack web applications with PHP, JavaScript, and Python. My background includes computer engineering at UIR, freelance development, and internships in academic and business software.',
    about: {
      heading: 'About Me',
      summary: 'I’m Bilal Jarifa, a full-stack developer with a computer engineering background from Université Internationale de Rabat (UIR). I’ve built web applications through freelance work and internships, from requirements and database integration to implementation.',
      work: 'At Université Ibn Tofaïl, I worked on a bilingual academic portal. At DreamWeb, I helped build a web application for managing telephone lines and user records.',
      languages: 'Spoken languages',
      proficiency: ['Native', 'Professional proficiency', 'Professional proficiency'],
      experienceLink: 'View experience and education',
    },
    experience: { heading: 'Experience and Education', work: 'Professional experience', education: 'Education', stack: 'Technologies used' },
    skills: {
      heading: 'Skills',
      filter: 'Filter skills',
      categories: {
        languages: 'Programming languages',
        web: 'Web and frameworks',
        databases: 'Databases',
        tools: 'DevOps and tools',
        methods: 'Methods and collaboration',
      },
      names: {},
    },
    contact: {
      heading: 'Contact',
      intro: 'Get in touch about a development role or a project.',
      email: 'Email',
      phone: 'Phone',
      name: 'Your name',
      emailAddress: 'Your email',
      message: 'Message',
      send: 'Open email draft',
      draft: 'Review and send the draft in your email app.',
      subject: 'Portfolio inquiry from',
    },
    languages: ['Arabic', 'French', 'English'],
  },
  fr: {
    title: 'Bilal Jarifa | Développeur full stack',
    country: 'Maroc',
    intro: 'Je développe des applications web full stack en PHP, JavaScript et Python. Mon parcours associe une formation en génie informatique à l’UIR, des projets freelance et des stages de développement web.',
    about: {
      heading: 'À propos de moi',
      summary: 'Je suis Bilal Jarifa, développeur full stack formé en génie informatique à l’Université Internationale de Rabat (UIR). J’ai développé des applications web en freelance et en stage, de l’analyse des besoins et de l’intégration des bases de données à la mise en œuvre.',
      work: 'À l’Université Ibn Tofaïl, j’ai travaillé sur un portail académique bilingue. Chez DreamWeb, j’ai participé au développement d’une application de gestion des lignes téléphoniques et des utilisateurs.',
      languages: 'Langues parlées',
      proficiency: ['Langue maternelle', 'Maîtrise professionnelle', 'Maîtrise professionnelle'],
      experienceLink: 'Voir mon expérience et ma formation',
    },
    experience: { heading: 'Expérience et formation', work: 'Expérience professionnelle', education: 'Formation', stack: 'Technologies utilisées' },
    skills: {
      heading: 'Compétences',
      filter: 'Filtrer les compétences',
      categories: {
        languages: 'Langages de programmation',
        web: 'Web et frameworks',
        databases: 'Bases de données',
        tools: 'DevOps et outils',
        methods: 'Méthodes et collaboration',
      },
      names: {
        'REST APIs': 'API REST',
        'Independent work': 'Autonomie',
        'Problem solving': 'Résolution de problèmes',
        Teamwork: 'Travail d’équipe',
      },
    },
    contact: {
      heading: 'Contact',
      intro: 'Contactez-moi au sujet d’un poste en développement ou d’un projet.',
      email: 'E-mail',
      phone: 'Téléphone',
      name: 'Votre nom',
      emailAddress: 'Votre e-mail',
      message: 'Message',
      send: 'Ouvrir le brouillon',
      draft: 'Vérifiez et envoyez le brouillon dans votre application de messagerie.',
      subject: 'Contact via le portfolio de la part de',
    },
    languages: ['Arabe', 'Français', 'Anglais'],
  },
};

export const professionalExperience = [
  {
    id: 'ibn-tofail',
    organization: 'Université Ibn Tofaïl',
    place: { en: 'Kénitra, Morocco', fr: 'Kénitra, Maroc' },
    period: { en: 'October–December 2025', fr: 'Octobre–décembre 2025' },
    title: { en: 'Full-stack Development Intern', fr: 'Stagiaire en développement full stack' },
    summary: {
      en: 'Developed a bilingual French and English web portal for academic workflows. Implemented authentication, record management, and PDF generation.',
      fr: 'Développement d’un portail web en français et en anglais pour les processus académiques. Mise en place de l’authentification, de la gestion des dossiers et de la génération de PDF.',
    },
    stack: ['PHP', 'JavaScript', 'Laravel', 'Livewire', 'MySQL'],
  },
  {
    id: 'freelance',
    period: { en: '2023–2025', fr: '2023–2025' },
    title: { en: 'Freelance Full Stack Developer', fr: 'Développeur full stack freelance' },
    summary: {
      en: 'Independently designed and built websites and applications from requirements to implementation. Integrated databases, improved performance and code quality, and managed deadlines.',
      fr: 'Conception et développement autonome de sites et d’applications, de l’analyse des besoins à la mise en œuvre. Intégration de bases de données, amélioration des performances et de la qualité du code, et suivi des délais.',
    },
    stack: ['PHP', 'JavaScript', 'Python'],
  },
  {
    id: 'dreamweb',
    organization: 'DreamWeb (OFPPT)',
    place: { en: 'Fès, Morocco', fr: 'Fès, Maroc' },
    period: { en: 'April 2023 (1 month)', fr: 'Avril 2023 (1 mois)' },
    title: { en: 'Final-year Project Intern', fr: 'Stage de projet de fin d’études' },
    summary: {
      en: 'Developed a telephony management application with Laravel, PHP, and MySQL. Implemented create, read, update, and delete operations for telephone lines, users, and related records.',
      fr: 'Développement d’une application de gestion de téléphonie avec Laravel, PHP et MySQL. Implémentation des opérations CRUD pour les lignes téléphoniques, les utilisateurs et les données associées.',
    },
    stack: ['PHP', 'Laravel', 'MySQL'],
  },
];

export const education = [
  {
    id: 'uir',
    organization: 'Université Internationale de Rabat (UIR)',
    place: { en: 'Rabat, Morocco', fr: 'Rabat, Maroc' },
    period: { en: '2025–2026', fr: '2025–2026' },
    title: {
      en: 'Professional Bachelor’s in Computer Engineering',
      fr: 'Licence Professionnelle en Génie Informatique',
    },
  },
  {
    id: 'ista',
    organization: 'ISTA Ifrane',
    place: { en: 'Ifrane, Morocco', fr: 'Ifrane, Maroc' },
    period: { en: '2021–2023', fr: '2021–2023' },
    title: {
      en: 'Specialized Technician in Software Development (OFPPT, Bac+2)',
      fr: 'Technicien Spécialisé en Développement Informatique (OFPPT, Bac+2)',
    },
  },
];
