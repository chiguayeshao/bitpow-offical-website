import React from 'react'
import Navbar from '../navbar/Navbar'
import Headers from '../headers/Headers'
import Features from '../features/Features'
import HowItWorks from '../howItWorks/HowItWorks'
import Footers from '../footer/Footers'

const Home = () => {
    return (
        <>
            <Navbar />
            <Headers />
            <Features />
            <HowItWorks />
            <Footers />
        </>
    )
}

export default Home