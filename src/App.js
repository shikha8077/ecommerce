import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ProductContextProvider from './Global/ProductContext';
import Products from './Components/Products';

const App = () => {
  return (
    <>

    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>

      <ProductContextProvider>
        <Products/>
      </ProductContextProvider>
    </div>
    </>
  )
}

export default App
