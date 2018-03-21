import * as Scrivito from 'scrivito';

const SnipcartButtonWidget = Scrivito.provideWidgetClass('SnipcartButtonWidget', {
  attributes: {
    productId: 'string',
    name: 'string',
    price: 'string',
    weight: 'string',
    description: 'string',
    buttonText: 'string',
  },
});

export default SnipcartButtonWidget;
