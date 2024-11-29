"use client";
import React from "react";
import Image from "next/image";

const teamMembers = [
    {
        name: "Manash",
        role: "CEO, Co-Founder",
        education: "B.tech from CIT, PGCP from IIT Guwahati.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
    {
        name: "Pritam",
        role: "CTO, Co-Founder",
        education: "B.tech from CIT. Shaping technology at Qoptars.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
    {
        name: "Rohan",
        role: "Product Manager",
        education: "B.Tech from CIT. Revolutionizing technology at Qoptars.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
    {
        name: "Ashwin Nandapurkar",
        role: "VP of Business",
        education: "Decades of expertise in startups in India & overseas. IIT Hyderabad.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
    {
        name: "Koichi Masuda",
        role: "GM for Japan Business",
        education: "Ex. Google, Ex. Podium.",
        image: "/images/home/ourSolutions/images.jpg", // Replace with actual image path
    },
];

const OurTeam = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto center flex-col text-center">
                <h2 className="heading mb-12">Our Team</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 text-center">
                            {/* Team Member Image using Next.js Image component */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={300} // 32 * 4 (w-32 in Tailwind)
                                height={300} // 32 * 4 (h-32 in Tailwind)
                                className="object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-medium">{member.name}</h3>
                            <p className="font-normal">{member.role}</p>
                            <p className="text-gray-500 text-sm mt-2 font-light">{member.education}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
