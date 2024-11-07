import React from 'react'

const InTheNewsSection = () => {
     // Array of image sources and alt texts for each news logo
    const newsLogos = [
        { src: "/images/InTheNews/TimesOfIndia.png", alt: "TimesOfIndia" },
        { src: "/images/InTheNews/ET.png", alt: "ET" },
        { src: "/images/InTheNews/INC42.png", alt: "INC42" },
        { src: "/images/InTheNews/dailyhunt.png", alt: "dailyhunt" }
    ];
    return (
        <div className="pb-32">
            <h1 className="heading">In The News</h1>
            <p className="tagline text-xl">Limelight we obviously expected and loved</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-10 md:px-20">
                {newsLogos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="p-7 bg-white/5 rounded-lg flex justify-center items-center shadow-md hover:shadow-lg transition-shadow"
                    >
                        <img src={logo.src} alt={logo.alt} className="h-12 md:h-20 object-contain bg-transparent" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InTheNewsSection;