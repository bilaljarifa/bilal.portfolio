export const chatWithMeProject = {
  en: {
    title: 'ChatWithMe',
    brief: 'ChatWithMe is a real-time messaging app for direct and group conversations. Users can find people with shared interests, send friend requests, and see who is online.',
    briefPoints: [
      ['Live conversations', 'Socket.IO carries messages, typing indicators, and online status updates. The chat interface also supports replies and reactions.'],
      ['Accounts and groups', 'The Express API handles authentication and stores users, friend lists, groups, and messages in MongoDB.'],
      ['Interface customization', 'The React interface uses Tailwind CSS and DaisyUI and lets users switch themes.'],
    ],
  },
  fr: {
    title: 'ChatWithMe',
    brief: 'ChatWithMe est une application de messagerie en temps réel pour les conversations privées et de groupe. Les utilisateurs peuvent trouver des personnes qui partagent leurs centres d’intérêt, envoyer des demandes d’amitié et voir qui est en ligne.',
    briefPoints: [
      ['Conversations en direct', 'Socket.IO transmet les messages, les indicateurs de saisie et le statut de connexion. La messagerie permet aussi de répondre aux messages et d’y réagir.'],
      ['Comptes et groupes', 'L’API Express gère l’authentification et stocke les utilisateurs, les listes d’amis, les groupes et les messages dans MongoDB.'],
      ['Personnalisation de l’interface', 'L’interface React utilise Tailwind CSS et DaisyUI et permet aux utilisateurs de changer de thème.'],
    ],
  },
};
