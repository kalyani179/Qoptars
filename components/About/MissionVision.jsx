"use client"
import React from 'react';
import Image from 'next/image'; 
import { Slide } from 'react-awesome-reveal';

const MissionVision = () => {
    const items = [
        {
            icon: '/Home/MissionVision/mission.svg', 
            title: 'Our Mission',
            description:
                'At Qoptars, we are revolutionizing industries through autonomous drone technology and AI-driven analytics. Our mission is to empower organizations across diverse sectors with precise, real-time data to drive efficient, safe, and effective decision-making.',
        },
        {
            icon: '/Home/MissionVision/vision.svg', 
            title: 'Our Vision',
            description:
                'We envision a future where drones and AI seamlessly integrate into daily operations, transforming industries with reliable, autonomous technology. By advancing aerial intelligence, Qoptars strives to create a safer, more responsive world for businesses and communities.'
        },
    ];

    return (
        <div className="bg-neutral-100 p-20 sm:p-10">
            <div className="mx-auto flex sm:flex-col gap-10">
            {items.map((item, index) => (
                <Slide
                    direction={index % 2 === 0 ? "left" : "right"}
                    triggerOnce={true}
                    key={index} 
                >
                    <div
                        className="bg-white flex flex-col items-start p-6 border rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <div className="relative w-12 h-12 mb-4">
                            <Image
                                src={item.icon}
                                alt={`${item.title} Icon`}
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 tracking-wide">{item.title}</h3>
                        <p className="text-neutral-500">{item.description}</p>
                    </div>
                </Slide>
            ))}
            </div>
        </div>
    );
};

export default MissionVision;


