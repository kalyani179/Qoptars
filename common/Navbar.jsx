"use client";

import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
        <div className="container ml-auto sm:px-4 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <a href="/" className="md:-ml-28">
                <img src="/images/logo/logo.png" alt="Logo" className="w-32"/>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:mr-10 space-x-14 items-center">
                <a href="/" className="navbar-route">Home</a>
                <a href="/about" className="navbar-route">About Us</a>
                <a href="/ai-ecosystem" className="navbar-route">AI Ecosystem</a>
                <a href="/products" className="navbar-route">Products</a>
                <a href="/news" className="navbar-route">News</a>
                <a href="/contact-us">
                <div>
                    <button className="btn">Contact Us</button>
                </div>
                </a>
            </div>


            {/* Mobile Menu Button */}
            <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
            >
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
                </svg>
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden pt-10 flex flex-col space-y-10 absolute right-0 h-screen bg-black z-50">
            <a href="/" className="navbar-sm-route">Home</a>
            <a href="/about" className="navbar-sm-route">About Us</a>
            <a href="/ai-ecosystem" className="navbar-sm-route">AI Ecosystem</a>
            <a href="/news" className="navbar-sm-route">News</a>
            <a href="/products" className="navbar-sm-route">Products</a>
            <a href="/news" className="navbar-sm-route">News</a>
            <a href="/contact-us" className="block py-2 px-4 text-gray-800 bg-white font-semibold text-center rounded-full my-2 mx-4 hover:bg-gray-200">Contact Us</a>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
