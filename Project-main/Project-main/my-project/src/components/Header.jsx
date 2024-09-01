import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AgriConnect</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/marketplace" className="hover:text-green-200">Marketplace</Link></li>
            <li><Link to="/contracts" className="hover:text-green-200">Contracts</Link></li>
            <li><Link to="/about" className="hover:text-green-200">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
