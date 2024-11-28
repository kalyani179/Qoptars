import React from 'react'
import Navbar from './Navbar'
import RevolutionizingSection from './RevolutionizingSection'
import MissionVision from './MissionVision'
import Solutions from './Solutions'
import IndustriesSection from './IndustriesSection'
import WhyChooseUs from './WhyChooseUs'
import ClientSuccessStories from './ClientSuccessStories'
import OurClients from './OurClients'
import OurJourney from './OurJourney'
import Footer from './Footer'
import InTheNewsSection from './InTheNewsSection'

const Home = () => {
    return (
        <div>
            <Navbar />
            <RevolutionizingSection />
            <MissionVision />
            <Solutions />
            <IndustriesSection />
            <WhyChooseUs />
            <ClientSuccessStories />
            <OurClients />
            {/* <OurJourney /> */}
            <InTheNewsSection />
            <Footer />
        </div>
    )
}

export default Home