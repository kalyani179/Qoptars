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
                        <li className="nav-link">Home</li>
                        <li className="nav-link"><a href="/about">About Us</a></li>
                        <li className="nav-link">Ai Ecosystem</li>
                        <li className="nav-link">Products</li>
                        <li className="nav-link">News</li>
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
                            className="w-6 h-6 text-black"
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
                            className="w-6 h-6 text-black"
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
                className={`fixed top-0 right-0 h-full bg-white shadow-md w-2/4 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col items-center space-y-10 py-20">
                    <li className="navlink">
                        Solutions
                    </li>
                    <li className="navlink">
                        Industries
                    </li>
                    <li className="navlink">
                        About
                    </li>
                    <li className="navlink">
                        Contact
                    </li>
                    <button className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-white/80">
                        Get Started
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
