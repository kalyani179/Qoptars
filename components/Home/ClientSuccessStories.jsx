"use client"
import React from "react";
import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const testimonials = [
    {
        name: "Sarah Chen",
        title: "Operations Director, BuildTech Construction",
        quote: "Coptars has revolutionized our site monitoring capabilities. The autonomous drones have increased our efficiency by 40% while improving safety standards.",
        image: "/Home/ClientSuccessStories/sarah.png", 
    },
    {
        name: "Michael Rodriguez",
        title: "Chief Security Officer, SecurePort Facilities",
        quote: "The AI-powered security solutions from Coptars have transformed our perimeter monitoring. We've seen a 60% reduction in security incidents.",
        image: "/Home/ClientSuccessStories/michael.png", 
    },
    {
        name: "Emily Thompson",
        title: "Agricultural Director, GreenFields Farming",
        quote: "Using Coptars' drone solutions for crop monitoring has helped us optimize irrigation and reduce water usage by 30%. The ROI has been remarkable.",
        image: "/Home/ClientSuccessStories/emily.png", 
    },
];

const ClientSuccessStories = () => {
    return (
        <div className="text-center p-20 sm:p-10">
        <Zoom triggerOnce={true}>
            <h2 className="heading">Client Success Stories</h2>
        </Zoom>
        <Slide direction='up' duration={1000} triggerOnce={true}>
            <p className="caption max-w-3xl">
                Discover how Qoptars is making a real impact across industries. From emergency response to industrial monitoring, our autonomous drones are empowering clients to take timely, effective action.
            </p>
        </Slide>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg border transition-shadow"
                    >
                    <Zoom triggerOnce={true}>
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
                    </Zoom>
                    </div>
                ))}
            </div>
            <Fade duration={3000} triggerOnce={true}>
            <div className="center mt-10">
                <button className="btn-black">Explore Our Case Studies →</button>
            </div>
            </Fade>
        </div>
    );
};

export default ClientSuccessStories;

