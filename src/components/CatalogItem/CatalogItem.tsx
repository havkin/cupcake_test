import React from 'react';
import { CatalogItemProps } from '../types';
import './CatalogItem.css';

const CatalogItem: React.FC<CatalogItemProps> = ({item, onClick}) => {
   return (
      <div className="product-item" onClick={onClick}>
         <img 
            src={item.image}
            alt="product image"
         />
         <div className="product-item_desc">
            <p>${ item.price }</p>
            <h3>{ item.title }</h3>
         </div>
      </div>
   );
};

export default CatalogItem; 