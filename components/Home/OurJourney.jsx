import React from 'react';

const milestones = [
    { year: "2020", title: "Company Founded", description: "Coptars was established with a vision to revolutionize drone technology." },
    { year: "2021", title: "First AI Drone Launch", description: "Successfully launched our first autonomous drone with AI capabilities." },
    { year: "2022", title: "Market Expansion", description: "Expanded operations to 10+ countries and secured major enterprise clients." },
    { year: "2023", title: "Innovation Award", description: "Received industry recognition for our AI-powered drone solutions." },
    { year: "2024", title: "Global Growth", description: "Expanding global presence and launching next-gen drone technology." },
];

const OurJourney = () => {
    return (
        <section className="bg-white p-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="heading">Our Journey</h2>
                <p className="caption">
                    Milestones that mark our path of innovation and growth
                </p>

                <div className="relative mt-20">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

                    {/* Milestones */}
                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-start text-left lg:flex-row lg:items-center`}
                            >
                                {/* Milestone Content */}
                                <div
                                    className={`bg-white p-6 shadow-md rounded-md w-full lg:w-5/12 ${
                                        index % 2 === 0 ? "lg:ml-auto lg:mr-0" : "lg:ml-0 lg:mr-auto"
                                    }`}
                                >
                                    <h3 className="text-lg font-semibold">{milestone.year}</h3>
                                    <h4 className="text-md font-bold mt-2">{milestone.title}</h4>
                                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                                </div>

                                {/* Milestone Marker */}
                                <div className="absolute left-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Component 1">
                                    <path id="Vector" d="M5.33334 1.3335V4.00016" stroke="#FAFAFA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="Vector_2" d="M10.6667 1.3335V4.00016" stroke="#FAFAFA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="Vector_3" d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z" stroke="#FAFAFA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="Vector_4" d="M2 6.6665H14" stroke="#FAFAFA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;

