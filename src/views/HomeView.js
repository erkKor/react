import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/sections/Showcase'
import ShowcaseCardBigSmall from '../components/sections/ShowcaseCardBigSmall'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import ShowcaseCardDouble from '../components/sections/ShowcaseCardDouble'
import OurSpeciality from '../components/sections/OurSpeciality'
import BigSquareWCardsLeft from '../components/sections/BigSquareWCardsLeft'
import BigSquareWCardsRight from '../components/sections/BigSquareWCardsRight'
import SaleBanner from '../components/sections/SaleBanner'
import TrippleColumnProducts from '../components/TrippleColumnProducts'
import InfoIcons from '../components/InfoIcons'
import Footer from '../components/Footer'
import { FeaturedContext, SquareContext, TrippleContext } from '../contexts/contexts'
import { useProductContext } from '../contexts/ProductContext'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const {featured, getFeaturedProducts} = useProductContext()
  const {square, getSquareProducts} = useProductContext()
  const {tripple, getTrippleProducts} = useProductContext()

  useEffect(() => {
    getFeaturedProducts(8)
    getSquareProducts(4)
    getTrippleProducts(3)
  }, [])



  // const featured = useContext(FeaturedContext)
  // const square = useContext(SquareContext)
  // const tripple = useContext(TrippleContext)

  

  return (
    <>
      <Navbar headerType="header-gray"/>
      <Showcase />
      <ShowcaseCardBigSmall />
      <FeaturedProducts title="Featured Products" items={featured}/> 
      <ShowcaseCardDouble />
      <OurSpeciality />
      <BigSquareWCardsLeft items={square}/>
      <BigSquareWCardsRight items={square}/> 
      <SaleBanner />
      <TrippleColumnProducts items={tripple}/>
      <InfoIcons />
      <Footer />
    </>
  )
}

export default HomeView