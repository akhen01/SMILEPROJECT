import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import OurServices from '../Components/OurServices'
import Gallery from '../Components/Gallery'
import ContactUs from '../Components/ContactUs'

function Home() {
  return (
    <div className='bg-yellow-100'>
        <div>
            <Hero />
        </div>
        <div>
            <About/>
        </div>
        <div>
            <OurServices/>
        </div>
        <div>
            <Gallery/>
        </div>
        <div>
            <ContactUs/>
        </div>
    </div>
  )
}

export default Home