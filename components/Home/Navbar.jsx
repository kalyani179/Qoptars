"use client";
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-3">
                {/* Logo */}
                <div className="text-xl font-bold">
                    Coptars
                </div>

                <div className="hidden md:flex justify-center items-center space-x-8">
                    {/* Navigation Links for Medium and Larger Screens */}
                    <ul className="hidden md:flex space-x-10">
                        <li className="nav-link">Solutions</li>
                        <li className="nav-link">Industries</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Contact</li>
                    </ul>

                    {/* Get Started Button for Medium and Larger Screens */}
                    <button className="hidden md:block bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800">
                        Get Started
                    </button>
                </div>
                {/* Hamburger Menu for Small Screens */}
                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </nav>

            {/* Dropdown Menu for Small Screens */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                            Solutions
                        </li>
                        <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                            Industries
                        </li>
                        <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                            About
                        </li>
                        <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                            Contact
                        </li>
                        <button className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800">
                            Get Started
                        </button>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
