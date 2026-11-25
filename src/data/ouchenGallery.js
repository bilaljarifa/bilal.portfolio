import collectionAmbree from '../assets/projects/ouchen-store.jpg';
import collectionFlorale from '../assets/projects/ouchen/collection-florale.jpg';
import collectionFraiche from '../assets/projects/ouchen/collection-fraiche.jpg';
import oudMystique from '../assets/projects/ouchen/oud-mystique.jpg';
import roseSauvage from '../assets/projects/ouchen/rose-sauvage.jpg';
import nuitEtoilee from '../assets/projects/ouchen/nuit-etoilee.jpg';
import fleurOranger from '../assets/projects/ouchen/fleur-oranger.jpg';
import cuirRoyal from '../assets/projects/ouchen/cuir-royal.jpg';
import jasminEternel from '../assets/projects/ouchen/jasmin-eternel.jpg';
import boisSacre from '../assets/projects/ouchen/bois-sacre.jpg';
import veloursNacre from '../assets/projects/ouchen/velours-nacre.jpg';
import santalImperial from '../assets/projects/ouchen/santal-imperial.jpg';
import irisSatin from '../assets/projects/ouchen/iris-satin.jpg';
import neroliDore from '../assets/projects/ouchen/neroli-dore.jpg';

const campaignCaptions = {
  en: ['Amber campaign', 'Floral campaign', 'Fresh fragrance campaign'],
  fr: ['Campagne ambrée', 'Campagne florale', 'Campagne des parfums frais'],
};

const catalogPictures = [
  { image: oudMystique, caption: 'Oud Mystique' },
  { image: roseSauvage, caption: 'Rose Sauvage' },
  { image: nuitEtoilee, caption: 'Nuit Étoilée' },
  { image: fleurOranger, caption: 'Fleur d’Oranger' },
  { image: cuirRoyal, caption: 'Cuir Royal' },
  { image: jasminEternel, caption: 'Jasmin Éternel' },
  { image: boisSacre, caption: 'Bois Sacré' },
  { image: veloursNacre, caption: 'Velours Nacré' },
  { image: santalImperial, caption: 'Santal Impérial' },
  { image: irisSatin, caption: 'Iris Satin' },
  { image: neroliDore, caption: 'Néroli Doré' },
];

export function ouchenGallery(language) {
  return [
    {
      title: language === 'fr' ? 'Visuels de campagne' : 'Campaign photography',
      layout: 'campaigns',
      items: [collectionAmbree, collectionFlorale, collectionFraiche].map((image, index) => ({
        image,
        caption: campaignCaptions[language][index],
      })),
    },
    {
      title: language === 'fr' ? 'Photographies du catalogue' : 'Product photography',
      layout: 'products',
      items: catalogPictures,
    },
  ];
}
