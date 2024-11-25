import React from 'react';

const RevolutionizingSection = () => {
    return (
        <div className="bg-neutral-100 py-5">
            <div className="sm:p-10 container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-6xl sm:leading-10 font-bold sm:font-extrabold text-gray-900 bg-gradient-to-r from-[#171717] to-[#2563EB] bg-clip-text text-transparent">
                        Revolutionizing Industries with AI-Powered Drones
                    </h1>
                    <p className="text-neutral-500 text-xl sm:text-lg leading-7">
                        Transform your operations with our autonomous drone solutions. Experience the future of aerial intelligence and automation.
                    </p>
                    <div className="space-y-4">
                        <button className="bg-black text-white py-3 px-9 rounded-lg shadow hover:bg-gray-800 transition w-full md:w-auto">
                            Get Started →
                        </button>
                        <button className="bg-white text-black border border-gray-300 py-3 px-9 rounded-lg shadow hover:bg-gray-100 transition w-full md:w-auto">
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Gradient Circle */}
                <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
                    <div
                        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, #3B82F633 20%, #A855F733 20%)',
                            filter: 'blur(64px)',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default RevolutionizingSection;

