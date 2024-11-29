import React from 'react'
import Navbar from '../Home/Navbar'
import OurJourney from '../Home/OurJourney'
import Footer from '../Home/Footer'
import OurTeam from './OurTeam'
import Advisors from './Advisors'
import MissionVision from '../Home/MissionVision'

const About = () => {
    return (
        <div>
            <Navbar />
            <MissionVision />
            <OurJourney />
            <OurTeam />
            <Advisors />
            <Footer />
        </div>
    )
}

export default About