import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Showcase from '../components/Showcase'
import ShowcaseCardBigSmall from '../components/ShowcaseCardBigSmall'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import ShowcaseCardDouble from '../components/sections/ShowcaseCardDouble'
import OurSpeciality from '../components/sections/OurSpeciality'
import BigSquareWCardsLeft from '../components/sections/BigSquareWCardsLeft'
import BigSquareWCardsRight from '../components/sections/BigSquareWCardsRight'
import SaleBanner from '../components/sections/SaleBanner'
import TrippleColumnProducts from '../components/TrippleColumnProducts'
import InfoIcons from '../components/InfoIcons'
import Footer from '../components/Footer'

const HomeView = () => {

    
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img : "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
  ])
  const [cardProducts, setCardProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img : "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price:"€35.00", rating: 4, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  
  ])


  return (
    <>
      <Navbar headerType="header-gray"/>
      <Showcase />
      <ShowcaseCardBigSmall />
      <FeaturedProducts products={featuredProducts}/> 
      <ShowcaseCardDouble />
       <OurSpeciality />
      <BigSquareWCardsLeft products={cardProducts}/>
      <BigSquareWCardsRight products={cardProducts}/>
       {/*<SaleBanner />
      <TrippleColumnProducts />
      <InfoIcons />
      <Footer /> */}
    </>
  )
}

export default HomeView