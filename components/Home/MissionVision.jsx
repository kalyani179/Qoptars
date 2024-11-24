import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const MissionVision = () => {
    const items = [
        {
            icon: '/home/MissionVision/mission.svg', // Path to your SVG in the `public` folder
            title: 'Our Mission',
            description:
                'To revolutionize industries through cutting-edge autonomous drone technology and AI-powered solutions, making aerial operations safer, more efficient, and environmentally sustainable.',
        },
        {
            icon: '/home/MissionVision/vision.svg', // Path to your SVG in the `public` folder
            title: 'Our Vision',
            description:
                'To be the global leader in autonomous drone solutions, driving innovation and digital transformation across industries while setting new standards for aerial intelligence and automation.',
        },
    ];

    return (
        <div className="bg-white p-20">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start p-6 border rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        {/* Use Next.js Image component */}
                        <div className="relative w-12 h-12 mb-4">
                            <Image
                                src={item.icon} // Path to your SVG file
                                alt={`${item.title} Icon`} // Accessibility text
                                layout="fill" // Ensures the image fills its container
                                objectFit="contain" // Maintains aspect ratio
                                priority // Improves loading speed
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-neutral-500">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissionVision;


