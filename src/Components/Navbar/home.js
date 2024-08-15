import React from 'react'
import Navigation from './navigation'
import Bio from '../Bio/bio'
import Education from '../Education/education'
import Skills from '../Skills/skills'
import Certificates from '../Certificates/certificates'
import Projects from '../Projects/projects'
import Footer from '../Footer/footer'

function Home() {
  return (
    <>
    <Navigation/>
    <Bio/>
    <Education/>
    <Skills/>
    <Certificates/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default Home
