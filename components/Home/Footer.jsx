import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    // Array of social icons and links
    const socialLinks = [
        { icon: <FaTwitter />, link: "#", label: "Twitter" },
        { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
        { icon: <FaGithub />, link: "#", label: "GitHub" },
        { icon: <FaEnvelope />, link: "#", label: "Email" },
    ];

    return (
        <footer className="bg-neutral-100 md:p-10">
            <div className="container mx-auto px-6">
                {/* Responsive Grid Layout */}
                <div className="flex flex-col sm:space-y-5 md:flex-row justify-between">
                <div className="flex sm:flex-col sm:space-y-5 justify-around md:space-x-20">
                    {/* Coptars Section */}
                    <div>
                        <h3 className="font-bold mb-2 text-lg">Coptars</h3>
                        <p className="text-neutral-500 w-72 sm:w-80">
                            Revolutionizing industries with AI-powered drone solutions.
                        </p>
                    </div>

                    {/* Solutions Section */}
                    <div>
                        <h3 className="font-bold mb-2">Solutions</h3>
                        <ul>
                            <li className="text-neutral-500 mb-1">AI Autonomous Drone</li>
                            <li className="text-neutral-500 mb-1">AI Analytics Software</li>
                            <li className="text-neutral-500 mb-1">AI Docking Station</li>
                            <li className="text-neutral-500 mb-1">Fleet Management</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="md:px-10">
                        <h3 className="font-bold mb-2">Company</h3>
                        <ul>
                            <li className="text-neutral-500 mb-1">About Us</li>
                            <li className="text-neutral-500 mb-1">Careers</li>
                            <li className="text-neutral-500 mb-1">Contact</li>
                            <li className="text-neutral-500 mb-1">Blog</li>
                        </ul>
                    </div>
                </div>
                    {/* Connect Section */}
                    <div>
                        <h3 className="font-bold mb-5">Connect</h3>
                        <ul className="flex space-x-8">
                            {socialLinks.map((social, index) => (
                                <li key={index}>
                                    <a
                                        href={social.link}
                                        aria-label={social.label}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 text-center text-neutral-500 text-sm">
                    © 2024 Coptars. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
