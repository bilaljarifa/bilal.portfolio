import storefront from '../assets/projects/ouchen/storefront.webp';
import catalog from '../assets/projects/ouchen/catalog.webp';

const captions = {
  en: ['Storefront homepage', 'Product catalog and filters'],
  fr: ['Page d’accueil de la boutique', 'Catalogue et filtres'],
};

export function ouchenGallery(language) {
  const [storefrontCaption, catalogCaption] = captions[language];
  return [{
    layout: 'screenshots',
    items: [
      { image: storefront, caption: storefrontCaption },
      { image: catalog, caption: catalogCaption },
    ],
  }];
}
