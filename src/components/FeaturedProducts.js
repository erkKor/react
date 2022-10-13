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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts