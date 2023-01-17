import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductsContextProvider from './Global/ProductsContext'
import Products from './components/Products';
import Cart from './components/Cart';
import CartContextProvider from './Global/CartContext';

function App() {
  return (
    <div>
      <ProductsContextProvider>
      <CartContextProvider>
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path ='cart/*' element={<Cart />}/>
        </Routes>
      </Router>
      </CartContextProvider>
      </ProductsContextProvider>
      
    </div>
  );
}

export default App;
