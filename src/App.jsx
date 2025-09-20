

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';




function App() {
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />   {/* ✅ cart route */}
      </Routes>
    </Router>
    
  );
}

export default App;




