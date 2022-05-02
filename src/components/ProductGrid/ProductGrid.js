import React from 'react';
import { ProductPod } from '../ProductPod/ProductPod';
import './ProductGrid.scss';

export const ProductGrid = ({ products, getSelectedHandler }) => {
  if (!products?.length) return null;

  return (
    <article className='product-grid'>
      {/* TODO: Render a ProductPod for each product */}
      { products?.length && products.map((product) =>{
        return (
          <ProductPod product={product} key={product.id} getSelectedHandler={getSelectedHandler}/>
        )
      })}    
     
    </article>
  );
};