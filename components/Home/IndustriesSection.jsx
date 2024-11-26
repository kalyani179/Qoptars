"use client"
import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const IndustriesSection = () => {
    const industries = [
        {
            icon: '/Home/Industries/infrastructure.svg', // Path to your SVG in the `public` folder
            title: 'Infrastructure',
            description: 'Automated inspection and monitoring of critical infrastructure.',
        },
        {
            icon: '/Home/Industries/manufacturing.svg',
            title: 'Manufacturing',
            description: 'Enhanced facility surveillance and inventory management.',
        },
        {
            icon: '/Home/Industries/agriculture.svg',
            title: 'Agriculture',
            description: 'Precision farming and crop health monitoring solutions.',
        },
        {
            icon: '/Home/Industries/security.svg',
            title: 'Security',
            description: 'Advanced surveillance and perimeter monitoring.',
        },
        {
            icon: '/Home/Industries/construction.svg',
            title: 'Construction',
            description: 'Site monitoring and progress tracking automation.',
        },
        {
            icon: '/Home/Industries/media.svg',
            title: 'Media',
            description: 'Autonomous aerial photography and cinematography.',
        },
    ];

    return (
        <div className="bg-white p-20">
            <div className="container mx-auto text-center mb-12">
                <h2 className="heading">Transforming Industries with AI-Driven Drone Solution</h2>
                <p className="caption max-w-4xl">
                    From defense and security to agriculture and environmental conservation, Qoptars’ autonomous drones and AI analytics deliver essential insights tailored to industry-specific needs. Our technology is transforming.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                    <Fade key={index} triggerOnce={true}>
                    <div
                        className="p-6 border rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        {/* Replace with Image component for SVG or other images */}
                        <div className="mb-4">
                            <Image
                                src={industry.icon}
                                alt={`${industry.title} Icon`}
                                width={40} // Adjust size as needed
                                height={40} // Adjust size as needed
                                className="rounded"
                            />
                        </div>
                        <h3 className="title">{industry.title}</h3>
                        <p className="description">{industry.description}</p>
                    </div>
                    </Fade>
                ))}
            </div>
            <div className="center mt-10">
                <button className="btn-black">See Our Industry Solutions →</button>
            </div>
        </div>
    );
};

export default IndustriesSection;
