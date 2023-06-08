import React from 'react'
import Hero from './HeroSection/Hero'
import Exclusive from './ExclusiveSection/Exclusive'
import Recent from './RecentSection/Recent'
import Recom from './RecomSection/Recom'
import Season from './SeasonSection/Season'
import Series from './SeriesSection/Series'
import Coming from './ComingSoon/Coming'

import Navbar from '../Navigation/Navbar'



const Home = () => {
  return (
    <>
       <Navbar/>
       <Hero /> 
       <Exclusive />
       <Recent />
       <Recom />
       <Season />
       <Series />
       <Coming />
    </>
  )
}

export default Home
