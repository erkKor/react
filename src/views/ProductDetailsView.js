import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import SaleText from '../components/items/SaleText'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'

const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProducts] = useState({})

    useEffect(() => {
        const fetchData = async () =>{
          const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
          setProducts(await result.json())
        }
        fetchData()

    },[])

  return (
    <>
      <Navbar />
      <SaleText />
      <Breadcrumb currentPage="Product details"/>
      <ProductDetails products={product}/>
      <Carousel />
      <Footer />
    </>
  )
}

export default ProductDetailsView