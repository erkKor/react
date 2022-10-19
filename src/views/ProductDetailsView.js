import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsView = () => {
    const params = useParams()

  return (
    <>
        <h1>{params.id}</h1>
    </>
  )
}

export default ProductDetailsView