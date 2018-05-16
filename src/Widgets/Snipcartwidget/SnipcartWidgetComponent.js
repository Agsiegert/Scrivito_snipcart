import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('SnipcartButtonWidget', ({ widget }) => {
  const pid = widget.id('productId');
  const name = widget.get('name');
  const price = widget.get('price');
  const url = widget.get('url');
  const description = widget.get('description');
  const buttonText = widget.get('buttonText');

  return (
    <div className="card" style={{ width: 18 + 'rem' }}>
      <Scrivito.ImageTag content={ widget } attribute='image' className='"card-img-top"'/>
      <div className="card-body">
        <Scrivito.ContentTag className="h5" tag="h5" content={ widget } attribute="name" className="card-title"/>
        <Scrivito.ContentTag tag="p" content={ widget } attribute="description" className="card-text"/>
        <button
          className="snipcart-add-item"
          data-item-id={ pid }
          data-item-name={ name }
          data-item-price={ price }
          data-item-url={ url }
          data-item-description={ description }>
         { buttonText }
        </button>
      </div>
    </div>
    
  );
});
