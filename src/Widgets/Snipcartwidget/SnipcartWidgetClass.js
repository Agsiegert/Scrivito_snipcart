import * as Scrivito from 'scrivito';

const SnipcartButtonWidget = Scrivito.provideWidgetClass('SnipcartButtonWidget', {
  attributes: {
    image: 'reference',
    productId: 'string',
    name: 'string',
    price: 'string',
    url: 'string',
    description: 'string',
    buttonText: 'string',
  },
});

export default SnipcartButtonWidget;
