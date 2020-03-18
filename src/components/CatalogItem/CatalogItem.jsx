import React from 'react';
import './CatalogItem.css';

const CatalogItem = props => {
   return (
      <div className="product-item" onClick={props.onClick}>
         <img 
            src={props.item.image}
            alt="product image"
         />
         <div className="product-item_desc">
            <p>${ props.item.price }</p>
            <h3>{ props.item.title }</h3>
         </div>
      </div>
   );
};

export default CatalogItem; 