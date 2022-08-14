import React from 'react'
import Brands from './Brands'
import Footer from './Footer'
import Home from './Home'
import Panel from './Panel'
import Production from './Production'
import SliderPage from './SliderPage'

function HomePage() {
  return (
    <div>
      <Home />
      <Panel />
      <SliderPage />
      <Production />
      <Footer />
    </div>
  )
}

export default HomePage
