"use client";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-3 sm:px-4">
                {/* Logo */}
                <div className="flex items-center space-x-2 text-xl font-bold">
                     {/* Logo */}
                    <a href="/" className="">
                        <img src="/images/logo/logo.png" alt="Logo" className="w-32"/>
                    </a>
                </div>

                {/* Navigation Links for Medium and Larger Screens */}
                <div className="hidden md:flex justify-center items-center space-x-8">
                    <ul className="hidden md:flex space-x-10">
                        <li className="nav-link"><a href="/">Home</a></li>
                        <li className="nav-link"><a href="/about">About Us</a></li>
                        <li className="nav-link"><a href="/ai-ecosystem">Ai Ecosystem</a></li>
                        <li className="nav-link"><a href="/products">Products</a></li>
                        <li className="nav-link"><a href="/news">News</a></li>
                    </ul>
                    <button className="hidden md:block bg-white text-black py-2 px-6 rounded-lg shadow hover:bg-white/80">
                        Contact us
                    </button>
                </div>

                {/* Hamburger Menu for Small Screens */}
                <div
                    className="md:hidden cursor-pointer relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6 text-black z-50"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6 text-white"
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
                    )}
                </div>
            </nav>

            {/* Sidebar Menu for Small Screens */}
            <div
                className={`fixed z-40 top-0 right-0 h-full bg-white shadow-md w-2/4 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col items-center space-y-10 py-20">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/about" className="nav-link">About Us</a>
                    <a href="/ai-ecosystem" className="nav-link">AI Ecosystem</a>
                    <a href="/news" className="nav-link">News</a>
                    <a href="/products" className="nav-link">Products</a>
                    <a href="/news" className="nav-link">News</a>
                    <a href="/contact-us" className="block py-2 px-4 text-white bg-black text-center rounded-full my-2 mx-4 hover:bg-gray-200">Contact Us</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
