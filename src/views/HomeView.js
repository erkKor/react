import React, { useState } from 'react'
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

    
  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img : "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price:"€35.00,", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    // { id: 5, name: "Modern Black Blouse", category: "Fashion", price:"€35.00,", rating: 4 },
    // { id: 6, name: "Modern Black Blouse", category: "Fashion", price:"€35.00,", rating: 4 },
    // { id: 7, name: "Modern Black Blouse", category: "Fashion", price:"€35.00,", rating: 4 },
    // { id: 8, name: "Modern Black Blouse", category: "Fashion", price:"€35.00,", rating: 4 }
  ])


  return (
    <>
      <Navbar headerType="header-gray"/>
      {/* <Showcase />
      <ShowcaseCardBigSmall /> */}
      <FeaturedProducts products={products}/>
      {/* <ShowcaseCardDouble />
      <OurSpeciality />
      <BigSquareWCardsLeft />
      <BigSquareWCardsRight />
      <SaleBanner />
      <TrippleColumnProducts />
      <InfoIcons />
      <Footer /> */}
    </>
  )
}

export default HomeView