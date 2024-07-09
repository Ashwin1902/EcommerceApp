import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyStore</Link>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );

}

export default Header