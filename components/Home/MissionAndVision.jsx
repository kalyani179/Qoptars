"use client"
import React from 'react'
import { Slide, Zoom,Fade } from "react-awesome-reveal";

const MissionAndVision = () => {
    return (
        <div className="flex flex-col pb-20">
        <div className="bg-black pt-20 grid grid-cols-2 items-center">
            <div className="pl-32">
                <img src="/images/home/MissionAndVision/drone.png" alt="drone" />
            </div>
            <div className="flex flex-col">
                <div className="center flex-col">
                    <Zoom duration={1000}>
                        <h1 className="heading text-4xl tracking-wide">Our Vision</h1>
                    </Zoom>
                        <div className="h-1 w-32 bg-white my-2"></div>
                    <Fade duration={2000}>
                        <p className="tagline">We envision a future where drones and AI seamlessly integrate into daily operations, transforming industries with reliable, autonomous technology. By advancing aerial intelligence, Qoptars strives to create a safer, more responsive world for businesses and communities.</p>
                    </Fade>
                </div>
                <div className="center flex-col">
                    <Zoom duration={1000}>
                        <h1 className="heading text-4xl tracking-wide">Our Mission</h1>
                    </Zoom>
                        <div className="h-1 w-32 bg-white my-2"></div>
                    <Fade duration={2000}>
                        <p className="tagline">At Qoptars, we are revolutionizing industries through autonomous drone technology and AI-driven analytics. Our mission is to empower organizations across diverse sectors with precise, real-time data to drive efficient, safe, and effective decision-making.</p>
                    </Fade>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MissionAndVision;