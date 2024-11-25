"use client";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-3 sm:px-4">
                {/* Logo */}
                <div className="flex items-center space-x-2 text-xl font-bold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Component 1">
                            <path
                                id="Vector"
                                d="M10.827 16.379C9.77918 16.9085 8.60047 17.1234 7.43317 16.9978C6.26586 16.8722 5.15987 16.4114 4.24867 15.6711C3.33747 14.9308 2.66003 13.9425 2.2981 12.8257C1.93617 11.7088 1.90524 10.5111 2.20903 9.377L7.62103 10.827C7.0915 9.77915 6.87658 8.60044 7.00219 7.43314C7.1278 6.26583 7.58859 5.15984 8.32892 4.24864C9.06926 3.33744 10.0575 2.66 11.1744 2.29807C12.2912 1.93614 13.489 1.90521 14.623 2.209L13.173 7.621C14.2209 7.09147 15.3996 6.87655 16.5669 7.00216C17.7342 7.12777 18.8402 7.58856 19.7514 8.32889C20.6626 9.06923 21.34 10.0575 21.702 11.1743C22.0639 12.2912 22.0948 13.4889 21.791 14.623L16.379 13.173C16.9085 14.2208 17.1235 15.3996 16.9979 16.5669C16.8722 17.7342 16.4115 18.8402 15.6711 19.7514C14.9308 20.6626 13.9426 21.34 12.8257 21.7019C11.7088 22.0638 10.5111 22.0948 9.37703 21.791L10.827 16.379Z"
                                stroke="#0A0A0A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                id="Vector_2"
                                d="M12 12V12.01"
                                stroke="#0A0A0A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                    <p>Coptars</p>
                </div>

                {/* Navigation Links for Medium and Larger Screens */}
                <div className="hidden md:flex justify-center items-center space-x-8">
                    <ul className="hidden md:flex space-x-10">
                        <li className="nav-link">Solutions</li>
                        <li className="nav-link">Industries</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Contact</li>
                    </ul>
                    <button className="hidden md:block bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800">
                        Get Started
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
                    <button className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800">
                        Get Started
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
