"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faIndustry, faBolt, faLeaf, faCity } from '@fortawesome/free-solid-svg-icons';
import { Slide, Zoom,Fade } from "react-awesome-reveal";

const IndustrySolutionsSection = () => {
    const industries = [
        { name: "Public Safety", icon: faShieldAlt },
        { name: "Industrial Inspections", icon: faIndustry },
        { name: "Energy & Utilities", icon: faBolt },
        { name: "Environmental Conservation", icon: faLeaf },
        { name: "Smart Cities", icon: faCity },
    ];

    return (
        <div className="flex flex-col pb-20">
        <div className="bg-black pt-20">
            <Zoom triggerOnce={true}>
                <h1 className="heading">Transforming Industries with AI-Drone Solution</h1>
            </Zoom>  
        </div>
        <div className="bg-black">
            <Slide direction='up' duration={1000} triggerOnce={true}>
                <p className="tagline">
                    From defense and security to agriculture and environmental conservation, Qoptars’ autonomous drones and AI analytics deliver essential insights tailored to industry-specific needs. Our technology is transforming:
                </p>
            </Slide>
            </div>
            <div className="flex flex-wrap justify-around pt-5">
                {industries.map((industry, index) => (
                    <Zoom key={index} duration={2000} triggerOnce={true}>
                        <div className="p-6 rounded-md center flex-col m-2 space-y-3 border border-primary hover:bg-primary/60 w-44">
                            <FontAwesomeIcon icon={industry.icon} className="mb-2 h-10 w-10 bg-transparent" />
                            <h2 className="font-medium text-center bg-transparent">{industry.name}</h2>
                        </div>
                    </Zoom>
                ))}
            </div>
            <Fade duration={3000} triggerOnce={true}>
            <div className="text-center my-12">
                <button className="btn text-white px-6 py-2">
                    See Our Industry Solutions
                </button>
            </div>
            </Fade>
        </div>
    );
};

export default IndustrySolutionsSection;
