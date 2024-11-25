import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const socialMedia = [
        { name: "Facebook", icon: <FaFacebookF size={20} />, url: "https://facebook.com" },
        { name: "Instagram", icon: <FaInstagram size={20} />, url: "https://instagram.com" },
        { name: "LinkedIn", icon: <FaLinkedinIn size={20} />, url: "https://linkedin.com" },
    ];
    return (
        <footer className="p-10 mx-4 mt-10 border-t border-white">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">
                
                {/* Logo and Description */}
                <div className="w-96 sm:px-5">
                    <a href="/">
                        <img src="/images/logo/logo.png" alt="Logo" className="w-32"/>
                    </a>
                    <p className="mt-6 text-gray-600">
                        Qoptars is a drone manufacturing startup, specialized building UAVs that are efficient & easy to use. Our mission is to provide our customers with the best drone experience.
                    </p>
                </div>

                {/* Sitemap */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-semibold text-gray-700">SITEMAP</h3>
                    <ul className="space-y-1 mt-2 text-gray-600">
                        <li>About us</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                {/* Product */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-semibold text-gray-700">PRODUCT</h3>
                    <ul className="space-y-1 mt-2 text-gray-600">
                        <li>Pricing</li>
                        <li>Features</li>
                        <li>Customers</li>
                        <li>Feedback</li>
                    </ul>
                </div>

                {/* Help */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-semibold text-gray-700">HELP</h3>
                    <ul className="space-y-1 mt-2">
                        <li>Getting started</li>
                        <li>Network status</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-6 lg:mt-0">
                    {socialMedia.map((platform) => (
                        <a 
                            key={platform.name} 
                            href={platform.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white border border-white rounded-full p-1 hover:text-primary"
                            aria-label={platform.name}
                        >
                            {platform.icon}
                        </a>
                    ))}
                </div>
            </div>
            <p className="text-center text-gray-500 mt-12">All Copyrights Reserved © | Qoptars | 2024</p>
        </footer>
    );
};

export default Footer;
