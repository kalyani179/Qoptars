import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const Solutions = () => {
    const solutions = [
        {
            icon: '/home/Solutions/ai-autonomous-drive.svg', // Path to the SVG in the `public` folder
            title: 'AI Autonomous Drone',
            description:
                'Advanced drones equipped with AI for autonomous navigation, obstacle avoidance, and intelligent decision-making.',
        },
        {
            icon: '/home/Solutions/ai-analytics-software.svg',
            title: 'AI Analytics Software',
            description:
                'Powerful analytics platform that processes drone data to deliver actionable insights and intelligent reporting.',
        },
        {
            icon: '/home/Solutions/ai-docking-station.svg',
            title: 'AI Docking Station',
            description:
                'Smart docking stations enabling autonomous charging, maintenance, and mission deployment capabilities.',
        },
        {
            icon: '/home/Solutions/ai-fleet-management.svg',
            title: 'AI Fleet Management',
            description:
                'Comprehensive fleet management solution for coordinating multiple drones and optimizing operations.',
        },
    ];

    return (
        <div className="bg-neutral-100 p-20">
            <div className="mx-auto text-center mb-12">
                <h2 className="heading">Our Solutions</h2>
                <p className="caption">
                    Discover our comprehensive suite of AI-powered drone solutions designed to transform your operations and deliver exceptional results.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className="bg-white flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        {/* Use Next.js Image component */}
                        <div className="w-16 h-16 mb-4 relative">
                            <Image
                                src={solution.icon} // Path to the icon
                                alt={`${solution.title} Icon`} // Accessibility text
                                layout="fill" // Ensures the image fills its container
                                objectFit="contain" // Maintains aspect ratio
                                priority // Loads images faster
                            />
                        </div>
                        <h3 className="text-xl font-semibold tracking-wide mb-4">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solutions;

