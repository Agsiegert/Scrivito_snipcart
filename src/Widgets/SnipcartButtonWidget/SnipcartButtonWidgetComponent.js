import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('SnipcartButtonWidget', ({ widget }) => {
  const pid = widget.get('productId');
  const name = widget.get('name');
  const price = widget.get('price');
  const weight = widget.get('weight');
  const description = widget.get('description');
  const buttonText = widget.get('buttonText');

  if (!pid) {
    return (
      <InPlaceEditingPlaceholder>
        Provide the product details in the widget properties.
      </InPlaceEditingPlaceholder>
      );
  }

  return (
    <button
      className="snipcart-add-item"
      data-item-id={ pid }
      data-item-name={ name }
      data-item-price={ price }
      data-item-weight={ weight }
      data-item-url="/"
      data-item-description={ description }>
     { buttonText }
    </button>
  );
});
