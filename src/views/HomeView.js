import React from 'react'
import BigSquareWCardsLeft from '../components/BigSquareWCardsLeft'
import BigSquareWCardsRight from '../components/BigSquareWCardsRight'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import InfoIcons from '../components/InfoIcons'
import Navbar from '../components/Navbar'
import OurSpeciality from '../components/OurSpeciality'
import SaleBanner from '../components/SaleBanner'
import Showcase from '../components/Showcase'
import ShowcaseCardBigSmall from '../components/ShowcaseCardBigSmall'
import ShowcaseCardDouble from '../components/ShowcaseCardDouble'
import TrippleColumnProducts from '../components/TrippleColumnProducts'

const HomeView = () => {
  return (
    <>
      <Navbar headerType="header-gray"/>
      <Showcase />
      <ShowcaseCardBigSmall />
      <FeaturedProducts />
      <ShowcaseCardDouble />
      <OurSpeciality />
      <BigSquareWCardsLeft />
      <BigSquareWCardsRight />
      <SaleBanner />
      <TrippleColumnProducts />
      <InfoIcons />
      <Footer />
    </>
  )
}

export default HomeView