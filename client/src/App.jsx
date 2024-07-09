import { useEffect, useState } from "react";
import Allproducts from "./components/Allproducts";
import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <div className="bg-orange-400">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/allProducts" element={<Allproducts />} />
            {/* You can add more routes here as needed */}
          </Routes>
          <Footer />
        </Router>
        </div>
      );
}

export default App
 