import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faIndustry, faBolt, faLeaf, faCity } from '@fortawesome/free-solid-svg-icons';

const IndustrySolutionsSection = () => {
    const industries = [
        { name: "Public Safety", icon: faShieldAlt },
        { name: "Industrial Inspections", icon: faIndustry },
        { name: "Energy & Utilities", icon: faBolt },
        { name: "Environmental Conservation", icon: faLeaf },
        { name: "Smart Cities", icon: faCity },
    ];

    return (
        <div className="bg-black/60 pt-20 text-white flex flex-col space-y-7">
            <h1 className="heading">Transforming Industries with AI-Driven Drone Solution</h1>
            <p className="tagline">
                From defense and security to agriculture and environmental conservation, Qoptars’ autonomous drones and AI analytics deliver essential insights tailored to industry-specific needs. Our technology is transforming:
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
                {industries.map((industry, index) => (
                    <div key={index} className="bg-white p-6 rounded-md center flex-col m-2 w-40">
                        <FontAwesomeIcon icon={industry.icon} className="text-xl mb-2 h-10 w-10" />
                        <h2 className="font-light">{industry.name}</h2>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold">
                    See Our Industry Solutions
                </button>
            </div>
        </div>
    );
};

export default IndustrySolutionsSection;
