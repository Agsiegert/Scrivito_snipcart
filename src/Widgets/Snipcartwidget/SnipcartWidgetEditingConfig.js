import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('SnipcartButtonWidget', {
  title: 'Snipcart item',
  attributes: {
    name: {
      title: 'Name',
      description: "Name of product.",
    },
    price: {
      title: 'Price',
      description: "Price of product.",
    },
    url: {
      title: 'URL',
      description: "URL of product for snipcart to validate.",
    },
    weight: {
      title: 'Weight',
      description: "Weight of product for shipping.",
    },
    description: {
      title: 'Description',
      description: "Description of product.",
    },
    buttonText: {
      title: 'Button Text',
      description: "Text for the buy button.",
    },
  },
  properties: [
    'name',
    'price',
    'url',
    'weight',
    'description',
    'buttonText',
  ],
  initialContent: {
    buttonText: 'Add to cart',
  },
});
