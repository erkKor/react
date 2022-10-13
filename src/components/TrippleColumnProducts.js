import React from 'react'
import SmallCard from './items/SmallCard'

const TrippleColumnProducts = () => {
  return (
    <section className="three-row-products">
        <div className="container">
            <div className="product-column">
                <h3>Latest Product</h3>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
            <div className="product-column">
                <h3>Best Selling Product</h3>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
            <div className="product-column">
                <h3>Top Reacted Product</h3>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </div>
    </section>
  )
}

export default TrippleColumnProducts