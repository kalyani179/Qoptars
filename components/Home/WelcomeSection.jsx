"use client"
import Navbar from '@/common/Navbar';
import React from 'react'
import { Slide, Zoom,Fade } from "react-awesome-reveal";

const WelcomeSection = () => {
    return (
        <div className="bg-black/70">
            <div className="w-full max-h-screen object-cover">
                <img src="/images/home/background.png" alt="background" />
            </div>
        <div className="absolute inset-0 bg-black/60 max-h-screenx">
            <Navbar />
            <div className="center flex-col sm:gap-2 md:mt-9 sm:mt-6">
                <Zoom duration={2000} triggerOnce={true}>
                    <h1 className={`text-2xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold mt-5 md:mt-24 lg:mt-28 xl:mt-36 tracking-wider text-center`}>
                        Welcome to <span className="text-2xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold ml-2 text-primary tracking-wide">Qoptars</span>
                    </h1>
                </Zoom>
                <Slide direction='up' duration={2000} triggerOnce={true}>
                    <p className={`text-base sm:text-sm mt-3 sm:text-xs md:text-lg lg:text-xl font-semibold tracking-widest uppercase text-center opacity-80`}>
                    Redefining Aerial Intelligence and Autonomous Drones with AI.
                    </p>
                </Slide>
                <Fade delay={1000} triggerOnce={true}>
                    <button className="btn lg:px-5 sm:text-sm rounded-md mt-14 tracking-wide">
                    Learn More About Our Technology
                    </button>
                </Fade>
            </div>
        </div>
        </div>
    )
}

export default WelcomeSection;