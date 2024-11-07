import React from 'react'

const InTheNewsSection = () => {
     // Array of image sources and alt texts for each news logo
    const newsLogos = [
        { src: "/path/to/image1.png", alt: "CNN Logo" },
        { src: "/path/to/image2.png", alt: "Disney Channel Logo" },
        { src: "/path/to/image3.png", alt: "ESPN Logo" },
        { src: "/path/to/image4.png", alt: "Cinemax Logo" }
    ];
    return (
        <div>
            <h1 className="heading pb-10">In The News</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-10 md:px-20">
                {newsLogos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="p-6 bg-white/5 rounded-lg flex justify-center items-center shadow-md hover:shadow-lg transition-shadow"
                    >
                        <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InTheNewsSection;