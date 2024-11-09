"use client"
import Image from 'next/image';
import React from 'react'
import { Slide, Zoom,Fade } from "react-awesome-reveal";

const InTheNewsSection = () => {
     // Array of image sources and alt texts for each news logo
    const newsLogos = [
        { src: "/images/home/InTheNews/TimesOfIndia.png", alt: "TimesOfIndia" },
        { src: "/images/home/InTheNews/ET.png", alt: "ET" },
        { src: "/images/home/InTheNews/INC42.png", alt: "INC42" },
        { src: "/images/home/InTheNews/dailyhunt.png", alt: "dailyhunt" }
    ];
    return (
        <div className="pb-32">
            <Zoom duration={1000} triggerOnce={true}>
                <h1 className="heading">In The News</h1>
            </Zoom>
            <Slide direction='up' duration={1000} triggerOnce={true}>
                <p className="tagline">Limelight we obviously expected and loved</p>
            </Slide>
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-10 px-10 pt-10 md:px-20">
                {newsLogos.map((logo, index) => (
                    <Fade key={index} duration={2000} triggerOnce={true}>
                    <div  className="p-7 bg-white/10 rounded-lg flex justify-center items-center shadow-md hover:shadow-lg transition-shadow">
                        <img src={logo.src} alt={logo.alt} className="h-12 md:h-20 object-contain bg-transparent" />
                    </div>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default InTheNewsSection;