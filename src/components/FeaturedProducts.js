import React from 'react'
import Card from './items/Card'

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
        <div className="container">
            <div className="section-title">
                <h3>Featured Products</h3>
            </div>
            <div className="card-grid">
                <Card orgPrice='€40.00' discPrice='€30.00'/>
                <Card discPrice='€30.00'/>
                <Card discPrice='€30.00'/>
                <Card discPrice='€30.00'/>
                <Card discPrice='€30.00'/>
                <Card orgPrice='€40.00' discPrice='€30.00'/>
                <Card discPrice='€30.00'/>
                <Card discPrice='€30.00'/>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts