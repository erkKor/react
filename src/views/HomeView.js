import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/sections/Showcase'
import ShowcaseCardBigSmall from '../components/sections/ShowcaseCardBigSmall'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import ShowcaseCardDouble from '../components/sections/ShowcaseCardDouble'
import OurSpeciality from '../components/sections/OurSpeciality'
import BigSquareWCards from '../components/sections/BigSquareWCards'
import SaleBanner from '../components/sections/SaleBanner'
import TrippleColumnProducts from '../components/TrippleColumnProducts'
import InfoIcons from '../components/InfoIcons'
import Footer from '../components/Footer'
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

  return (
    <>
      <Navbar headerType="header-gray"/>
      <Showcase />
      <ShowcaseCardBigSmall />
      <FeaturedProducts title="Featured Products" items={featured}/> 
      <ShowcaseCardDouble />
      <OurSpeciality />
      <BigSquareWCards items={square} id="bigSquareLeft" offer="2 FOR USD $29"/> 
      <BigSquareWCards items={square} id="bigSquareRight" offer="2 FOR USD $49"/> 
      <SaleBanner />
      <TrippleColumnProducts items={tripple}/>
      <InfoIcons />
      <Footer />
    </>
  )
}

export default HomeView