import React from 'react'
import Feature from '../components/feature section/Feature'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero section/Hero'
import MakeMoney from '../components/make money/MakeMoney'
import NavBar from '../components/navbar/NavBar'

const LandingPage = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Feature />
    <MakeMoney />
    <Footer />
    </>
  )
}

export default LandingPage