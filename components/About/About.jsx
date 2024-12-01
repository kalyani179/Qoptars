import React from 'react'
import Navbar from '../Home/Navbar'
import OurJourney from './OurJourney'
import Footer from '../Home/Footer'
import OurTeam from './OurTeam'
import Advisors from './Advisors'
import WelcomeSection from './WelcomeSection'
import EarlyStory from './EarlyStory'
import MissionVision from './MissionVision'
import WhyChooseUs from './WhyChooseUs'
import OurProducts from './OurProducts'

const About = () => {
    return (
        <div>
            <Navbar />
            <WelcomeSection />
            <EarlyStory />
            <MissionVision />
            <WhyChooseUs />
            <OurProducts />
            <OurJourney />
            <OurTeam />
            <Advisors />
            <Footer />
        </div>
    )
}

export default About