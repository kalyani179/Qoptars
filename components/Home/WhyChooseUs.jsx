"use client"
import React from 'react';
import Image from 'next/image';
import { Zoom } from 'react-awesome-reveal';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '/Home/WhyChooseUs/reliability.svg', 
            title: 'Cost-Effective Operations',
            description: 'Streamlined workflow, reduced operational costs.',
        },
        {
            icon: '/Home/WhyChooseUs/ai-technology.svg',
            title: 'Autonomous Performance',
            description: 'No pilot needed for fast, accurate results'
        },
        {
            icon: '/Home/WhyChooseUs/security.svg',
            title: 'Enhanced Safety',
            description: 'Navigation and obstacle avoidance in challenging environments.',
        },
        {
            icon: '/Home/WhyChooseUs/support.svg',
            title: 'Real-Time Data',
            description: 'AI-powered insights delivered in moments.',
        },
    ];

    return (
        <div className="bg-neutral-100 p-20">
            <div className="container mx-auto text-center mb-12">
                <h2 className="heading">Why Choose Qoptars?</h2>
                <p className="caption">
                Our advanced drone ecosystem is designed with a singular purpose: to make aerial intelligence accessible, reliable, and effective for any mission. We bring you.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center rounded-lg"
                    >
                        <Zoom triggerOnce={true}>
                        <div className="mb-4">
                            <Image
                                src={reason.icon}
                                alt={`${reason.title} Icon`}
                                width={48} 
                                height={48} 
                                className="rounded"
                            />
                        </div>
                        <h3 className="title">{reason.title}</h3>
                        <p className="description">{reason.description}</p>
                        </Zoom>
                    </div>
                ))}
            </div>
            <div className="center mt-10">
                <button className="btn-black">Learn About Our Unique Approach →</button>
            </div>
        </div>
    );
};

export default WhyChooseUs;

