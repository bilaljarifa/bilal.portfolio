export const academicProjects = {
  'student-manager': {
    en: {
      title: 'Student Manager',
      description: 'A school management project that covers student records, attendance, grades, and academic reporting.',
      brief: 'I built Student Manager to bring daily school administration into one place. The live demo shows my PHP/MySQL School Portal, where teachers record grades, administrators review them, and students access their published report cards. The GitHub link opens the JavaScript implementation.',
      imageAlt: 'School Portal demo sign-in screen',
      briefPoints: [
        ['JavaScript, Express, and MongoDB', 'Built a browser interface in vanilla JavaScript and a REST API with Node.js and Express. Used MongoDB and Mongoose to store student records.'],
        ['Role-based workflows', 'In the PHP portal, built separate views for teachers, administrators, and students. Teachers submit a gradebook, administrators can return it for revision or publish it, and students see only their own published results.'],
        ['MySQL and grading rules', 'Modeled academic years, terms, enrollments, subjects, and assessments. Implemented weighted grades with rules for missing and excused marks.'],
        ['Attendance and reporting', 'Built attendance entry from dated class rosters and printable term report cards.'],
      ],
    },
    fr: {
      title: 'Student Manager',
      description: 'Un projet de gestion scolaire pour suivre les dossiers des élèves, les présences, les notes et les bulletins.',
      brief: 'J’ai créé Student Manager pour centraliser la gestion scolaire au quotidien. La démo montre mon portail en PHP et MySQL, où les enseignants saisissent les notes, l’administration les valide et les élèves consultent leurs bulletins publiés. Le lien GitHub ouvre la version JavaScript.',
      imageAlt: 'Écran de connexion à la démo de School Portal',
      briefPoints: [
        ['JavaScript, Express et MongoDB', 'J’ai créé une interface en JavaScript natif et une API REST avec Node.js et Express. J’ai utilisé MongoDB et Mongoose pour stocker les dossiers des élèves.'],
        ['Parcours par rôle', 'Dans le portail PHP, j’ai créé des vues pour les enseignants, l’administration et les élèves. Les enseignants soumettent les carnets de notes, l’administration peut les renvoyer pour correction ou les publier, et les élèves voient uniquement leurs résultats publiés.'],
        ['MySQL et calcul des notes', 'J’ai modélisé les années scolaires, périodes, inscriptions, matières et évaluations. J’ai développé le calcul des notes pondérées et les règles applicables aux évaluations manquantes et dispensées.'],
        ['Présences et bulletins', 'J’ai développé la saisie des présences à partir des listes de classe à une date donnée et les bulletins imprimables par période.'],
      ],
    },
  },
  'doctoral-portal': {
    en: {
      title: 'Plateforme Doctorale',
      description: 'A Laravel portal for managing doctoral profiles, research outputs, and annual re-enrollment.',
      brief: 'I built Plateforme Doctorale to give doctoral students one place to maintain their thesis records, track publications and conference presentations, and complete annual re-enrollment.',
      imageAlt: 'Plateforme Doctorale Google sign-in screen',
      briefPoints: [
        ['Laravel and MySQL', 'Used Eloquent models and database migrations to connect doctoral profiles, thesis topics, supervisors, publications, and re-enrollment records.'],
        ['Authentication and record access', 'Integrated Google sign-in with Laravel Socialite and scoped research records and receipt downloads to the signed-in student.'],
        ['Livewire and data validation', 'Built reactive forms for profile and thesis updates and searchable PowerGrid tables for articles and conference communications. Used Laravel validation when saving records.'],
        ['Re-enrollment and document generation', 'Built the annual workflow for reporting thesis progress, uploading an activity report, and generating a PDF receipt with DomPDF.'],
      ],
    },
    fr: {
      title: 'Plateforme Doctorale',
      description: 'Un portail Laravel pour gérer les profils doctorants, les publications et la réinscription annuelle.',
      brief: 'J’ai créé la Plateforme Doctorale pour permettre aux doctorants de tenir à jour leur dossier de thèse, de suivre leurs publications et communications, et de se réinscrire chaque année depuis un même portail.',
      imageAlt: 'Écran de connexion Google de la Plateforme Doctorale',
      briefPoints: [
        ['Laravel et MySQL', 'J’ai utilisé les modèles Eloquent et les migrations pour relier les profils, sujets de thèse, encadrants, publications et dossiers de réinscription.'],
        ['Authentification et accès aux dossiers', 'J’ai intégré la connexion Google avec Laravel Socialite et limité l’accès aux données de recherche et aux reçus au doctorant connecté.'],
        ['Livewire et validation', 'J’ai développé des formulaires réactifs pour le profil et la thèse, et des tableaux PowerGrid avec recherche pour les articles et communications. Les données sont validées avec Laravel à l’enregistrement.'],
        ['Réinscription et génération de documents', 'J’ai développé le parcours annuel pour déclarer l’avancement de la thèse, déposer un rapport d’activité et générer un reçu PDF avec DomPDF.'],
      ],
    },
  },
};
