import React, { useState } from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 text-2xl font-bold text-white">
          <FaHeartbeat className="text-red-300" />
          <span className="tracking-wider">Medicare</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="text-gray-200 hover:text-white hover:underline transition duration-300 ease-in-out cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-200 hover:text-white hover:underline transition duration-300 ease-in-out cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-200 hover:text-white hover:underline transition duration-300 ease-in-out cursor-pointer">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? (
              <span className="text-3xl font-bold">&times;</span> /* Close Icon */
            ) : (
              <span className="text-3xl font-bold">&#9776;</span> /* Hamburger Icon */
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 text-lg bg-purple-600 text-gray-200 py-6 shadow-lg">
          <li className="hover:text-white hover:underline transition duration-300 ease-in-out cursor-pointer">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
          </li>
          <li className="hover:text-white hover:underline transition duration-300 ease-in-out cursor-pointer">
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          </li>
          <li className="hover:text-white hover:underline transition duration-300 ease-in-out cursor-pointer">
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>Signup</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
