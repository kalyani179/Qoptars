import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '/Home/WhyChooseUs/reliability.svg', // Path to your SVG in the `public` folder
            title: 'Proven Reliability',
            description: '99.9% mission success rate with redundant systems and fail-safes.',
        },
        {
            icon: '/Home/WhyChooseUs/ai-technology.svg',
            title: 'Advanced AI Technology',
            description: 'State-of-the-art artificial intelligence for autonomous operations.',
        },
        {
            icon: '/Home/WhyChooseUs/security.svg',
            title: 'Enterprise Security',
            description: 'Military-grade encryption and secure data handling protocols.',
        },
        {
            icon: '/Home/WhyChooseUs/support.svg',
            title: 'Dedicated Support',
            description: '24/7 expert technical support and comprehensive training.',
        },
    ];

    return (
        <div className="bg-neutral-100 p-20">
            <div className="container mx-auto text-center mb-12">
                <h2 className="heading">Why Choose Coptars?</h2>
                <p className="caption">
                    We combine cutting-edge technology with unmatched expertise to deliver superior drone solutions that drive real business value.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center rounded-lg"
                    >
                        {/* Use Image for SVG or other image icons */}
                        <div className="mb-4">
                            <Image
                                src={reason.icon}
                                alt={`${reason.title} Icon`}
                                width={48} // Adjust the size as needed
                                height={48} // Adjust the size as needed
                                className="rounded"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                        <p className="text-neutral-500">{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;

