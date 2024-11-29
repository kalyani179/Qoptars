"use client";
import React from "react";
import Image from "next/image";

const advisors = [
    {
        name: "Tushar Sahu",
        role: "Technical Advisor at Qoptars",
        education: "Director of Engineering at Google, Ex. CIO at Fitbit. Indian School of Business.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
    {
        name: "Dr. Saroj Kumar",
        role: "AI Advisor at Qoptars",
        education: "Sr. Data Scientist at DCS. IIT Mandi.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
    {
        name: "Dr. Medalson Ronghang",
        role: "Strategic Advisor at Qoptars",
        education: "Academician & Innovation Ambassador. IIT Roorkee.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
];

const Advisors = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="heading mb-12">Our Advisors</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {advisors.map((advisor, index) => (
                        <div key={index} className="flex flex-col items-center space-y-3 text-center">
                            {/* Advisor Image using Next.js Image component */}
                            <Image
                                src={advisor.image}
                                alt={advisor.name}
                                width={200} // 32 * 4 (w-32 in Tailwind)
                                height={200} // 32 * 4 (h-32 in Tailwind)
                                className="object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-medium">{advisor.name}</h3>
                            <p className="font-normal">{advisor.role}</p>
                            <p className="text-gray-500 text-sm mt-2 font-light">{advisor.education}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advisors;
