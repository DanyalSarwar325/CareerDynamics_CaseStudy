
import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const Navbar = ({ setQuery}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/Logo.png" alt="LocalVibe Logo" className="h-6 w-6" />
          <span className="text-xl font-bold text-gray-900">
            <span className="text-pink-600">Local</span>Vibe
          </span>
        </div>

        {/*  Desktop Navigation  */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 items-center">
          <a href="/" className="font-bold border-b-2 border-transparent hover:border-pink-500 transition duration-300">Home</a>
          <a href="/events" className="font-bold border-b-2 border-transparent hover:border-pink-500 transition duration-300 ">Events</a>
          <a href="#" className="font-bold border-b-2 border-transparent hover:border-pink-500 transition duration-300 ">Contact</a>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:block relative w-64">
          <input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search..."
            className="w-full px-4 py-2 pr-10 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <FiSearch className="absolute right-3 top-2.5 text-pink-500" />
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-xl">
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-3 space-y-3 text-sm font-medium text-gray-800">
          <a href="/" className="block">Home</a>
          <a href="#events" className="block">Events</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}

     
{!mobileMenuOpen && (
  <div className="md:hidden mt-4 flex justify-end">
    <div className="relative w-64">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 pr-10 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <FiSearch className="absolute right-3 top-2.5 text-pink-500" />
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
