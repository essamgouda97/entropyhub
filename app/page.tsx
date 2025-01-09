import ParticlesBackround from '@/components/ParticlesBackground'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import React from 'react'

const Home = () => {
  return (
    <>
    <ParticlesBackround />
    <Hero />
    <Services/>
    <Contact/>
    </>
  )
}

export default Home