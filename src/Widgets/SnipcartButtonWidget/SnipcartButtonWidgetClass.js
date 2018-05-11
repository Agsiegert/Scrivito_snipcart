import * as Scrivito from 'scrivito';

const SnipcartButtonWidget = Scrivito.provideWidgetClass('SnipcartButtonWidget', {
  attributes: {
  	image: 'reference',
    id: 'string',
    name: 'string',
    price: 'string',
    url: 'string',
    weight: 'string',
    description: 'string',
    buttonText: 'string',
  },
});

export default SnipcartButtonWidget;
