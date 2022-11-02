import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import ProductDetails from '../components/ProductDetails'
import SizeButton from '../components/items/SizeButton'
import Carousel from '../components/Carousel'
import SaleText from '../components/items/SaleText'


const ProductsView = () => {
  return (
  <>
    <Navbar headerType="header-light"/>
    <SaleText />
    <Breadcrumb />
    <ProductDetails />
    <Carousel />
    <Footer />
    
  </>
  )
}

export default ProductsView