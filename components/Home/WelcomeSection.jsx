"use client";
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

const WelcomeSection = () => {
  return (
    <div className="flex justify-around bg-neutral-100 py-6 items-center">
      <div className="">
        <img src="/images/home/MissionAndVision/drone.png" alt="" />
      </div>
      <div className="">
        <div className="center flex-col sm:gap-2 md:mt-9 sm:mt-6">
          <Zoom duration={2000} triggerOnce={true}>
            <h1
              className="heading mb-3"
            >
              About Us
            </h1>
          </Zoom>
            <div
              className="text-base mt-3 sm:text-xs md:text-lg px-5 sm:px-4 opacity-80 overflow-hidden h-64 w-[500px] sm:h-48 auto-scroll-container"
            >
              <div className="auto-scroll-content">
                <p>
                  Qoptars, a premier drone manufacturing company based in
                  Hyderabad, India, is funded and mentored by various IITs and
                  IIMs. Qoptars is an innovative drone technology company focused
                  on revolutionizing surveillance, inspection, security, and urban
                  mobility through cutting-edge autonomous drone systems. With a
                  complete ecosystem of drone, AI/ML-driven cloud platform, and
                  advanced fleet management software, Qoptars delivers end-to-end
                  solutions for diverse industries, including Public Safety,
                  Industrial Inspections, Energy & Utilities, Environmental
                  Conservation, and smart cities.
                </p>
                <br />
                <p>
                  Our autonomous drones are equipped with high-definition sensors
                  and real-time data transmission capabilities, offering real-time
                  analysis and actionable insights. From traffic flow analysis to
                  predictive analytics, Qoptars leverages the power of AI to
                  create smarter, safer, and more efficient systems.
                </p>
                <br />
                <p>
                  Qoptars promotes Made in India, Promotes Atma Nirbhar Bharat,
                  and increases India&apos;s manufacturing and product
                  capabilities.
                </p>
                <br />
                <p>
                  Qoptars is the forefront of India&apos;s drone revolution. With
                  a foundation rooted in innovation and a commitment to
                  excellence, we are shaping the future of aerial technology.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
