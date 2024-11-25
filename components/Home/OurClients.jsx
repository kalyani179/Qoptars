import React from "react";
import Image from "next/image";

const clientLogos = [
    { id: 1, src: "/Home/OurClients/client.png", alt: "Client Logo 1" },
    { id: 2, src: "/Home/OurClients/client.png", alt: "Client Logo 2" },
    { id: 3, src: "/Home/OurClients/client.png", alt: "Client Logo 3" },
    { id: 4, src: "/Home/OurClients/client.png", alt: "Client Logo 4" },
    { id: 5, src: "/Home/OurClients/client.png", alt: "Client Logo 5" },
    { id: 6, src: "/Home/OurClients/client.png", alt: "Client Logo 6" },
];

const OurClients = () => {
    return (
        <div className="p-6 md:p-20 bg-neutral-100 text-center">
            <h2 className="heading">Our Clients</h2>
            <p className="caption">
                Trusted by leading organizations across industries
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {clientLogos.map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120} // Adjust as needed
                            height={120} // Adjust as needed
                            className="transform hover:scale-110 transition-transform"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurClients;
