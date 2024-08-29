import React from 'react'
import Hero from './Hero'
import Services from './Services'
import RecentWorks from './RecentWorks'

const Home:React.FC = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <RecentWorks/>
    </>
  )
}

export default Home