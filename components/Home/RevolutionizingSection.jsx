"use client"
import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const RevolutionizingSection = () => {
    return (
        <div className="bg-neutral-100 py-5">
            <div className="sm:p-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-8">
                <Zoom triggerOnce={true}>
                    <h1 className="text-4xl md:text-6xl sm:leading-10 font-bold sm:font-extrabold text-gray-900 bg-gradient-to-r from-[#171717] to-[#2563EB] bg-clip-text text-transparent">
                            Welcome to Qoptars
                    </h1>
                </Zoom>
                <Slide direction='down' duration={1000} triggerOnce={true}>
                    <p className="text-neutral-500 text-3xl sm:text-lg">
                        Redefining Aerial Intelligence and Autonomous Drones with AI.
                    </p>
                </Slide>
                    <div>
                    <Fade triggerOnce={true}>
                        <button className="btn-black">
                            Learn More About Our Technology →
                        </button>
                    </Fade>
                    </div>
                </div>

                {/* Gradient Circle */}
                <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
                    <div
                        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, #3B82F633 20%, #A855F733 20%)',
                            filter: 'blur(64px)',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default RevolutionizingSection;

