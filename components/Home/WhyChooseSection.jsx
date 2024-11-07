import React from 'react';
import { FiCpu, FiActivity } from 'react-icons/fi';  // For "Autonomous Performance" and "Real-Time Data"
import { AiOutlineDollarCircle } from 'react-icons/ai'; // For "Cost-Effective Operations"
import { MdOutlineSecurity } from 'react-icons/md'; // For "Enhanced Safety"

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
        <div>
            <h1 className="heading">Why Choose Qoptars ?</h1>
            <p className="tagline px-60">Our advanced drone ecosystem is designed with a singular purpose which is to make aerial intelligence accessible, reliable, and effective for any mission. We bring you:</p>
            {/* Grid for features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 px-20">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-xl shadow-md center flex-col space-y-2 border border-primary transform transition-transform hover:scale-105 hover:shadow-2xl">
                            <div className="mb-5 p-4 border border-white rounded-full">{feature.icon}</div>
                            <h3 className="font-semibold text-xl text-primary">{feature.title}</h3>
                            <p className="">{feature.description}</p>
                        </div>
                    ))}
                </div>

        </div>
    )
}

export default WhyChooseSection;