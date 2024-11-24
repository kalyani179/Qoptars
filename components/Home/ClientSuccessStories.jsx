import React from "react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Chen",
        title: "Operations Director, BuildTech Construction",
        quote: "Coptars has revolutionized our site monitoring capabilities. The autonomous drones have increased our efficiency by 40% while improving safety standards.",
        image: "/Home/ClientSuccessStories/sarah.png", // Path to Sarah's image
    },
    {
        name: "Michael Rodriguez",
        title: "Chief Security Officer, SecurePort Facilities",
        quote: "The AI-powered security solutions from Coptars have transformed our perimeter monitoring. We've seen a 60% reduction in security incidents.",
        image: "/Home/ClientSuccessStories/michael.png", // Path to Michael's image
    },
    {
        name: "Emily Thompson",
        title: "Agricultural Director, GreenFields Farming",
        quote: "Using Coptars' drone solutions for crop monitoring has helped us optimize irrigation and reduce water usage by 30%. The ROI has been remarkable.",
        image: "/Home/ClientSuccessStories/emily.png", // Path to Emily's image
    },
];

const ClientSuccessStories = () => {
    return (
        <div className="text-center p-20">
            <h2 className="heading">Client Success Stories</h2>
            <p className="caption">
                Discover how our clients are achieving remarkable results with Coptars AI-powered drone solutions.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg border transition-shadow"
                    >
                        {/* Row layout for image and name/title */}
                        <div className="flex mb-4">
                            <div className="w-16 h-16">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className="ml-4 text-left">
                                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                                <p className="text-gray-500 text-sm">{testimonial.title}</p>
                            </div>
                        </div>
                        <blockquote className="text-neutral-500 text-left">{`"${testimonial.quote}"`}</blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientSuccessStories;

