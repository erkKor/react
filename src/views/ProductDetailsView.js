import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsView = () => {
    const { id, name } = useParams()
    console.log(useParams)
  return (
    <>
        <h1>{id}</h1>
        <p></p>
    </>
  )
}

export default ProductDetailsView