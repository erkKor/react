import React from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/Showcase'
import ShowcaseCardBigSmall from '../components/ShowcaseCardBigSmall'
import FeaturedProducts from '../components/FeaturedProducts'
import ShowcaseCardDouble from '../components/ShowcaseCardDouble'
import OurSpeciality from '../components/OurSpeciality'
import BigSquareWCardsLeft from '../components/BigSquareWCardsLeft'
import BigSquareWCardsRight from '../components/BigSquareWCardsRight'
import SaleBanner from '../components/SaleBanner'
import TrippleColumnProducts from '../components/TrippleColumnProducts'
import InfoIcons from '../components/InfoIcons'
import Footer from '../components/Footer'

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