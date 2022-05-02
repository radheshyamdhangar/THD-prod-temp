import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { ProductPreview } from './components/ProductPreview/ProductPreview';
import { getProducts } from './api';

function App() {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  // Get all the products list from api
  const getAllProductList = () => {        
    getProducts().then((res) => {        
      setData(res);
      // console.log(res,' ++++ products List')
      }).catch(
        // console.log(' ++++ Error the get products');
      );
  }

// Get the selected ID from the prod list
function getSelectedHandler(id){
  if (id) {
    const prodItem = data?.products?.find(element => element.id === id);   
    setSelectedProduct(prodItem);
  }
}

  useEffect(() => {
    getAllProductList();        
  }, [])


  return (
    <div className="App">
      <Header text={data?.headerText} />
      <ProductGrid products={data?.products} getSelectedHandler={getSelectedHandler}/>
      <ProductPreview key={selectedProduct?.description} product={selectedProduct} />
    </div>
  );
}

export default App; 
