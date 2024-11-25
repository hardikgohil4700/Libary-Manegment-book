import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-red-800 text-white p-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link to="/">Library Management System</Link>
        </h1>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`flex-col lg:flex lg:flex-row lg:space-x-4 ${isOpen ? 'flex' : 'hidden'} lg:block`}>
          <li>
            <Link to="/" className="block px-2 py-1 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/view-books-data" className="block px-2 py-1 hover:underline">View Data</Link>
          </li>
          <li>
            <Link to="/view-details" className="block px-2 py-1 hover:underline">View Details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
