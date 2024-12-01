"use client"
import React from 'react';
import Image from 'next/image'; 
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Solutions = () => {
    const solutions = [
        {
            icon: '/Home/Solutions/ai-autonomous-drive.svg', 
            title: 'Autonomous Drones',
            description:
                'Equipped with cutting-edge sensors and edge computing, Our drones provide unparalleled data accuracy and operate without the need for manual intervention.',
        },
        {
            icon: '/Home/Solutions/ai-analytics-software.svg',
            title: 'AI Analytics Software',
            description:
                'Real-time processing and predictive analytics for fast, actionable insights.',
        },
        {
            icon: '/Home/Solutions/ai-docking-station.svg',
            title: 'AI Docking Station',
            description:
                'Enables fully autonomous flights, automatic charging, and remote operation support.',
        },
        {
            icon: '/Home/Solutions/ai-fleet-management.svg',
            title: 'AI Fleet Management',
            description:
                'Efficiently manage large-scale drone operations from any location.'
        },
    ];

    return (
        <div className="bg-neutral-100 p-20 sm:p-10">
            <div className="mx-auto text-center mb-12">
            <Zoom duration={1000} triggerOnce={true}>
                <h2 className="heading">Our Solutions</h2>
            </Zoom>
            <Slide direction="up" triggerOnce={true}>
                <p className="caption">
                Explore our end-to-end ecosystem designed to overcome the limitations of traditional drone operations and bring advanced intelligence to your fingertips.
                </p>
            </Slide>    
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((solution, index) => (
                    <div key={index}
                        className="bg-white flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition"
                    >
                    <Zoom triggerOnce={true}>
                        <div className="w-16 h-16 mb-4 relative">
                            <Image
                                src={solution.icon}
                                alt={`${solution.title} Icon`} 
                                layout="fill" 
                                objectFit="contain" 
                                priority 
                            />
                        </div>
                        <h3 className="title">{solution.title}</h3>
                        <p className="description">{solution.description}</p>
                        </Zoom>
                    </div>
                ))}
            </div>
            <Fade duration={3000} triggerOnce={true}>
            <div className="center mt-10">
                <button className="btn-black ">Discover Our Solutions →</button>
            </div>
            </Fade>
        </div>
    );
};

export default Solutions;

