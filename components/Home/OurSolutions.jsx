"use client"
import React from 'react'
import { Slide, Zoom,Fade } from "react-awesome-reveal";

const OurSolutions = () => {
    const solutions = [
        {
            title: "Autonomous Drones",
            description: "Equipped with cutting-edge sensors and edge computing, our drones provide unparalleled data accuracy and operate without the need for manual intervention.",
            imageUrl: "/images/home/OurSolutions/drone.jpg", // Replace with your actual image path
        },
        {
            title: "AI-Powered Analytics Software",
            description: "Real-time processing and predictive analytics for fast, actionable insights.",
            imageUrl: "/images/home/OurSolutions/drone.jpg", // Replace with your actual image path
        },
        {
            title: "Docking Station",
            description: "Enables fully autonomous flights, automatic charging, and remote operation support.",
            imageUrl: "/images/home/OurSolutions/drone.jpg", // Replace with your actual image path
        },
        {
            title: "Fleet Management Software",
            description: "Efficiently manage large-scale drone operations from any location.",
            imageUrl: "/images/home/OurSolutions/drone.jpg", // Replace with your actual image path
        },
    ];

    return (
        <div className="flex flex-col pb-20">
        <div className="bg-black pt-20">
        <Zoom duration={1000}>
            <h1 className="heading">Our Solutions</h1>
        </Zoom>
        <Slide direction="up">
            <p className="tagline mx-20">Explore our end-to-end ecosystem designed to overcome the limitations of traditional drone operations and bring advanced intelligence to your fingertips:</p>
        </Slide>    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center my-10 px-10">
    {solutions.map((solution, index) => (
        <div key={index} className="border border-primary rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-[8px_8px_16px_rgba(44,172,196,0.5)]">
        <Fade duration={1000}>
            <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-32 object-cover rounded-t-xl mb-4"
            />
            <div className="p-5">
                <h3 className="text-md font-semibold text-primary mb-2">
                    {solution.title}
                </h3>
                <p className="text-white text-sm">
                    {solution.description}
                </p>
            </div>
            </Fade>
        </div>
            ))}
        </div>
        <Fade duration={3000}>
            <div className="center mt-12">
                <button className="btn">
                    Discover Our Solutions
                </button>
            </div>
        </Fade>
        </div>
        </div>
    )
}

export default OurSolutions;