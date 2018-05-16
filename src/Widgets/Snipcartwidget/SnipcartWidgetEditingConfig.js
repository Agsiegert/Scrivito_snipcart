import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('SnipcartButtonWidget', {
  title: 'Snipcart item',
  attributes: {
    productId: {
      title: 'Product Id',
      description: "Id of product for your store.",
    },
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
    'productId',
    'name',
    'price',
    'url',
    'description',
    'buttonText',
  ],
  initialContent: {
    buttonText: 'Add to cart',
  },
});
