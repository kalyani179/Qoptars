"use client"
import React from 'react';
import { FiCpu, FiActivity } from 'react-icons/fi';  // For "Autonomous Performance" and "Real-Time Data"
import { AiOutlineDollarCircle } from 'react-icons/ai'; // For "Cost-Effective Operations"
import { MdOutlineSecurity } from 'react-icons/md'; // For "Enhanced Safety"
import { Slide, Zoom,Fade } from "react-awesome-reveal";

const WhyChooseSection = () => {
    // Array of features with icons to map through
    const features = [
        { 
            icon: <FiCpu size={60} className="text-blue-500" />, 
            title: "Autonomous Performance", 
            description: "No pilot needed for fast, accurate results." 
        },
        { 
            icon: <FiActivity size={60} className="text-blue-500" />, 
            title: "Real-Time Data", 
            description: "AI-powered insights delivered in moments." 
        },
        { 
            icon: <AiOutlineDollarCircle size={60} className="text-blue-500" />, 
            title: "Cost-Effective Operations", 
            description: "Streamlined workflow, reduced operational costs." 
        },
        { 
            icon: <MdOutlineSecurity size={60} className="text-blue-500" />, 
            title: "Enhanced Safety", 
            description: "Navigation and obstacle avoidance in challenging environments." 
        },
    ];
    return (
        <div className="pb-20">
            <Zoom duration={1000}>
                <h1 className="heading">Why Choose Qoptars ?</h1>
            </Zoom>
            <Slide direction='up' duration={1000}>
                <p className="tagline px-60">Our advanced drone ecosystem is designed with a singular purpose which is to make aerial intelligence accessible, reliable, and effective for any mission. We bring you:</p>
            </Slide>
            {/* Grid for features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 px-20">
                    {features.map((feature, index) => (
                        <Slide key={index} direction={`${index%2==0 ? 'left' : 'right'}`}>
                        <div className="p-6 rounded-xl shadow-md center flex-col space-y-2 border border-primary transform transition-transform hover:scale-105 duration-300 hover:shadow-md hover:shadow-primary">
                            <div className="mb-5 p-4 border border-white rounded-full">{feature.icon}</div>
                            <h3 className="font-semibold text-xl text-primary">{feature.title}</h3>
                            <p className="">{feature.description}</p>
                        </div>
                        </Slide>
                    ))}
                </div>

        </div>
    )
}

export default WhyChooseSection;