"use client";
import React from 'react';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const WhyChooseUs = () => {
    // Content array for Why Choose Us section
    const reasons = [
        {
            icon: '/Home/Solutions/ai-autonomous-drive.svg', // Placeholder icon
            title: 'AI-First Approach',
            description:
                'We are proud to be an AI-first drone company, pioneering the integration of artificial intelligence at the edge of our systems. This ensures that our drones are not just drones, but intelligent aerial platforms capable of making real-time decisions for safer and smarter operations.',
        },
        {
            icon: '/Home/Solutions/ai-analytics-software.svg', // Placeholder icon
            title: 'Industry Expertise',
            description:
                'With years of experience and expertise in drone manufacturing, our team brings unparalleled knowledge and insights to the table. We understand the unique needs of different sectors, from surveillance to consumer applications to defense, and tailor our solutions accordingly.',
        },
        {
            icon: '/Home/Solutions/ai-docking-station.svg', // Placeholder icon
            title: 'Innovation',
            description:
                'Innovation is at the core of everything we do. From advanced flight algorithms to state-of-the-art sensors, we are constantly pushing the boundaries of what\'s possible in aerial technology. When you choose Qoptars, you\'re choosing innovation that sets you apart.',
        },
    ];

    return (
        <div className="p-20 sm:p-10">
            {/* Why Choose Us Title */}
            <div className="mx-auto text-center mb-12">
                <Zoom duration={1000} triggerOnce={true}>
                    <h2 className="heading">Why Choose Us</h2>
                </Zoom>
            </div>

            {/* Main Content (mapped from the 'reasons' array) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="bg-white flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <Zoom triggerOnce={true}>
                            <div className="w-16 h-16 mb-4 relative">
                                <Image
                                    src={reason.icon}
                                    alt={`${reason.title} Icon`}
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                            <h3 className="title text-xl font-semibold">{reason.title}</h3>
                            <p className="description text-base sm:text-sm mt-3 opacity-80">{reason.description}</p>
                        </Zoom>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WhyChooseUs;
