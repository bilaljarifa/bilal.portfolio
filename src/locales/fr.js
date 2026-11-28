import { ouchenProject } from '../data/ouchenProject';
import { academicProjects } from '../data/academicProjects';
import { chatWithMeProject } from '../data/chatWithMeProject';
import { optiportGallery } from '../data/optiportGallery';
import { profileCopy } from '../data/profile';
import { cvProjects } from '../data/cvProjects';

export default {
  title: profileCopy.fr.title,
  nav: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    work: 'Projets',
    experience: 'Expérience',
    contact: 'Contact',
    language: 'Langue',
    theme: 'Activer ou désactiver le mode sombre',
    menu: 'Menu de navigation',
    hire: 'Engagez-moi',
    downloadCv: 'Télécharger le CV',
  },
  home: {
    headline: ['DÉVELOPPEUR', 'FULL STACK'],
    description: profileCopy.fr.intro,
    viewWork: 'Voir mes projets',
    downloadCv: 'Télécharger le CV',
    greeting: 'Bonjour, je suis',
    pauseTechnologies: 'Mettre le défilement des technologies en pause',
    playTechnologies: 'Reprendre le défilement des technologies',
  },
  about: profileCopy.fr.about,
  work: {
    heading: 'Projets',
    briefHeading: 'Présentation du projet',
    technologies: 'Technologies utilisées',
    galleryHeading: 'Captures de la démo',
    previewHeading: 'Aperçu du projet',
    backToGallery: 'Retour à la galerie',
    viewDemo: 'Démo en ligne',
    viewSource: 'Voir sur GitHub',
    previousImage: 'Image précédente',
    nextImage: 'Image suivante',
    optiportHeading: 'Visite guidée d’Optiport',
    optiportGallery: optiportGallery('fr'),
    optiportOverview: {
      instructions: 'Sélectionnez une vignette pour agrandir la capture et lire son explication. La visite utilise des comptes simulés, des cours d’ETF archivés jusqu’au 1er avril 2020 et des exemples d’actualités et de conversation.',
      navigationLabel: 'Thèmes de la visite',
      fullImageLabel: 'Ouvrir l’image en taille réelle',
    },
    previews: {
      ouchenStorefront: 'Page d’accueil de la boutique',
      ouchenCatalog: 'Catalogue et filtres',
      chatDirectMessages: 'Conversation privée',
      chatGroup: 'Conversation de groupe',
      chatSignIn: 'Connexion au compte',
      signIn: 'Connexion à la démo',
      gradebook: 'Carnet de notes de l’enseignant',
      review: 'Validation par l’administration',
      report: 'Bulletin de l’élève',
      illustration: 'Illustration du projet',
      doctoralLogin: 'Connexion avec Google',
      doctoralProfile: 'Profil du doctorant',
      doctoralArticles: 'Articles scientifiques',
      doctoralCommunications: 'Communications scientifiques',
      doctoralReenrollment: 'Réinscription annuelle',
      doctoralReceipt: 'Reçu de réinscription',
    },
    projects: {
      'ouchen-store': ouchenProject.fr,
      chatwithme: chatWithMeProject.fr,
      optiport: cvProjects.optiport.fr,
      transmanage: cvProjects.transmanage.fr,
      'student-manager': academicProjects['student-manager'].fr,
      'doctoral-portal': academicProjects['doctoral-portal'].fr,
      'cv-builder': {
        title: 'CV Builder',
        description: 'Une application pour créer et modifier des CV, puis les exporter en PDF pour les partager.',
        brief: 'CV Builder permet de créer, modifier et organiser des CV dans une interface web. Les CV sont stockés dans MySQL et peuvent être exportés en PDF pour être partagés.',
      },
    },
  },
};
