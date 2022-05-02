import React from 'react';

import { Price } from '../Price/Price';
import './ProductPod.scss'

export const ProductPod = ({ product, getSelectedHandler }) => {
  if (!product) return null;

  const selectedHandler = (e) => {  
    console.log(e, '+++++ selected ....');
     return getSelectedHandler(e) ;
  }

  return (
    <article className='product-pod' onClick={()=> selectedHandler(product.id)}>
      {/* TODO: make DRY with a ProductImage component */}
      {product.image && 
        <img
          src={product.image} 
          alt="Home Depot logo"
        />
      }
      {product.brand && 
        <b>
          {product.brand}
        </b>
        }
      {product.description && 
        <span>
          {product.description}
        </span>
      }
      <Price product={product} />
    </article>
  );
};