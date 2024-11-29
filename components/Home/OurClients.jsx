"use client";

import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide, Zoom } from "react-awesome-reveal";

// Dynamically import react-slick to avoid SSR issues with Next.js
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const OurClients = () => {
  // Settings for the carousel with auto-scrolling enabled
  const settings = {
    infinite: true, // Infinite scrolling
    speed: 1000, // Transition speed
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    dots: false, // Disable the dots navigation
    arrows: true, // Enable the previous/next arrows
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Time in milliseconds before the next slide appears
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides for medium-sized screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide for mobile screens
        },
      },
    ],
  };

  // List of client logos
  const clientLogos = [
    { id: 1, src: "/Home/OurClients/client.png", alt: "Client Logo 1" },
    { id: 2, src: "/Home/OurClients/client.png", alt: "Client Logo 2" },
    { id: 3, src: "/Home/OurClients/client.png", alt: "Client Logo 3" },
    { id: 4, src: "/Home/OurClients/client.png", alt: "Client Logo 4" },
    { id: 5, src: "/Home/OurClients/client.png", alt: "Client Logo 5" },
    { id: 6, src: "/Home/OurClients/client.png", alt: "Client Logo 6" },
  ];

  return (
    <div className="p-6 md:p-20 bg-neutral-100 text-center">
    <Zoom triggerOnce={true}>
      <h2 className="heading">Our Clients</h2>
    </Zoom>
    <Slide direction='up' duration={1000} triggerOnce={true}>
      <p className="caption">
        Trusted by leading organizations across industries
      </p>
      </Slide>
      {/* Carousel */}
      <Slider {...settings}>
        {clientLogos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center pt-11 px-20">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={120}
              className="transform hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;
