import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import { ProductContext } from '../contexts/contexts'

const CategoriesView = () => {
  const productContext = useContext(ProductContext)

  return (
    <>
    <Navbar headerType="header-light"/>
    <FeaturedProducts title="All Products" items={productContext.all}/> 
      </>
  )
}

export default CategoriesView