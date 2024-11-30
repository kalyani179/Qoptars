"use client";
import React from 'react';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const OurProducts = () => {
    // Content for the product categories
    const products = [
        {
            icon: '/Home/Industries/infrastructure.svg', // Placeholder icon for Surveillance/Inspection
            title: 'Surveillance/Inspection',
            description:
                'Our surveillance drones offer unparalleled capabilities for monitoring and security applications, providing real-time intelligence and situational awareness.',
        },
        {
            icon: '/Home/Industries/infrastructure.svg', // Placeholder icon for Consumer
            title: 'Consumer',
            description:
                'Experience the thrill of flight with our consumer drones, packed with advanced features for photography, videography, and recreational use.',
        },
        {
            icon: '/Home/Industries/security.svg', // Placeholder icon for Defense
            title: 'Defense',
            description:
                'For defence and military applications, our drones deliver unmatched performance, reliability, and mission adaptability, ensuring mission success in even the most challenging environments.',
        },
    ];

    return (
        <div className="bg-neutral-100 p-20">
            {/* Section Header */}
            <div className="container mx-auto text-center mb-12">
                <Zoom triggerOnce={true}>
                    <h2 className="heading">Our Products</h2>
                </Zoom>
                <Slide direction="up" duration={1000} triggerOnce={true}>
                    <p className="caption mx-auto">
                        Explore our range of drone solutions, designed to meet the diverse needs of our customers across three key categories:
                    </p>
                </Slide>
            </div>
            <div className="center sm:flex-col justify-around space-x-10">
                {products.map((product, index) => (
                    <Fade key={index} triggerOnce={true}>
                        <div className="p-6 border bg-white rounded-lg shadow-md hover:shadow-lg transition">
                            {/* Replace with Image component for SVG or other images */}
                            <div className="mb-4">
                                <Image
                                    src={product.icon}
                                    alt={`${product.title} Icon`}
                                    width={40} 
                                    height={40} 
                                    className="rounded"
                                />
                            </div>
                            <h3 className="title text-xl font-semibold">{product.title}</h3>
                            <p className="description text-base opacity-80">{product.description}</p>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default OurProducts;