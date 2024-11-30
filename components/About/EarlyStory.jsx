"use client";
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

const EarlyStory = () => {
  return (
    <div className="bg-white px-5 sm:px-2 py-20 sm:py-5">
      <Zoom duration={2000} triggerOnce={true}>
        <h1
          className={`heading text-center`}
        >
          Our Early Story
        </h1>
      </Zoom>
      <Slide direction="up" duration={1000} triggerOnce={true}>
        <div
          className="text-base sm:text-sm md:text-lg px-20 p-5 mt-7 text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <p>
            Qoptars was founded in 2020, by its founders from their college
            hostel room. Qoptars was born purely out of a shared passion for
            advancing drone technology in India. Over the next years, they
            developed the first product with nothing but a hunger to solve
            problems and a little bit of pocket money! Some of their batchmates
            joined them in their initiative and later became the founding
            members of the company.
          </p>
          <p>
            The small team of 4 people started offering their aerial services to
            bigger organizations to identify gaps in the world. Over the past
            three years, they have served more than 500 people with their
            drones. Today, Qoptars stands as a company that is dedicated to
            creating the most efficient and intelligent drones, driven by a
            vision to empower Indias future with cutting-edge AI-powered UAV
            solutions.
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default EarlyStory;
