import React from 'react'
import Footer from '../components/Footer'
import Heroimgae from '../components/HeroImage'
import TrainingSection from "../components/Training";
import Navbar from '../components/Navbar'

const Training = () => {
  return (
    <div>
        <Navbar />
        <Heroimgae heading='TRAINING.'text='Pre-Flight & in-Flight Training' />
        <TrainingSection />
        <Footer />
    </div>
  )
}

export default Training