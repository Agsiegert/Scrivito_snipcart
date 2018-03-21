import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('SnipcartButtonWidget', {
  title: 'Snipcart item',
  attributes: {
    productId: {
      title: 'ID',
      description: "Id of product",
    },
    name: {
      title: 'Name',
      description: "Name of product.",
    },
    price: {
      title: 'Price',
      description: "Price of product.",
    },
    weight: {
      title: 'Weight',
      description: "Weight of product fo shipping.",
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
    'weight',
    'description',
    'buttonText',
  ],
});
