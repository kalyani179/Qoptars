"use client";
import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

const milestones = [
    { year: "2020", title: "Founded Qoptars", description: "Built First Prototype and started working with initial users." },
    { year: "2021", title: "Pilot tested with 10+ Users & Organisations", description: "Got incubated by IIT Hyderabad. The company HQ moved to Hyderabad." },
    { year: "2022", title: "Built the first MVP", description: "Tested our MVP with several clients. We received valuable feedback that helped us refine our product to better suit the market." },
    { year: "2023", title: "Launched AirFPV", description: "A consumer category of Drones for Aerial Videography & Photography." },
    { year: "2023", title: "Launched Vayu", description: "A surveillance drone for various aerial survey & inspection applications." },
    { year: "2023", title: "Served 500+ People", description: "Expanded services to cater to a larger audience with innovative drone solutions." },
    { year: "2024", title: "Built first SWAP-optimised AI on the edge drone", description: "A drone that can fly indoors without pilot support, automatically avoid obstacles, and perform edge AI computing." },
];

const OurJourney = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null); // Reference to the OurJourney component

    useEffect(() => {
        // Intersection Observer to check when the component comes into view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set visibility to true when in view
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observe the component
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Clean up observer
            }
        };
    }, []);

    return (
        <section className="bg-white p-20 sm:px-0">
            <div  ref={sectionRef} className="container mx-auto px-6 text-center">
                <h2 className={`heading ${isVisible ? "fade-in" : "opacity-0"}`}>
                    Our Journey
                </h2>
                <p className={`caption ${isVisible ? "fade-in" : "opacity-0"} delay-200`}>
                    Milestones that mark our path of innovation and growth
                </p>
                <Fade triggerOnce={true}>
                <div className="relative mt-20">
                    {/* Animated Vertical Line */}
                    <div
                        className={`absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2 ${
                            isVisible ? "line-grow" : "line-hidden"
                        }`}
                    ></div>

                    {/* Milestones */}
                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-start text-left lg:flex-row lg:items-center ${
                                    isVisible ? `milestone-appear delay-${index * 1}` : "opacity-0"
                                }`}
                                style={{
                                    transitionDelay: `${index * 1}s`, // Sync with the line and marker appearance
                                }}
                            >
                                {/* Milestone Marker */}
                                <div
                                    className={`absolute left-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2 ${
                                        isVisible ? "marker-fade-in" : "marker-hidden"
                                    }`}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Component 1">
                                            <path
                                                id="Vector"
                                                d="M5.33334 1.3335V4.00016"
                                                stroke="#FAFAFA"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                id="Vector_2"
                                                d="M10.6667 1.3335V4.00016"
                                                stroke="#FAFAFA"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                id="Vector_3"
                                                d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                                                stroke="#FAFAFA"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                id="Vector_4"
                                                d="M2 6.6665H14"
                                                stroke="#FAFAFA"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </div>

                                {/* Milestone Content */}
                                <div
                                    className={`bg-white p-6 shadow-md rounded-md sm:-mt-20 w-5/12 ${
                                        index % 2 === 0 ? "ml-auto mr-0" : "ml-0 mr-auto"
                                    }`}
                                >
                                    <h3 className="text-lg sm:text-base font-semibold">{milestone.year}</h3>
                                    <h4 className="text-md sm:text-sm font-bold mt-2">{milestone.title}</h4>
                                    <p className="sm:text-xs text-gray-600 mt-1">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    );
};

export default OurJourney;
