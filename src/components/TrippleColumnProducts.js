import React from 'react'
import SmallCard from './items/SmallCard'

const TrippleColumnProducts = ({productsOne, productsTwo, productsThree}) => {
  return (
    <section className="three-row-products">
        <div className="container">
            <div className="product-column">
                <h2>Latest Product</h2>
                {
                  productsOne.map(productOne => <SmallCard key={productOne.id} product={productOne} />)
                }
            </div>
            <div className="product-column">
                <h2>Best Selling Product</h2>
                {
                  productsTwo.map(productTwo => <SmallCard key={productTwo.id} product={productTwo} />)
                }
            </div>
            <div className="product-column">
                <h2>Top Reacted Product</h2>
                {
                  productsThree.map(productThree => <SmallCard key={productThree.id} product={productThree} />)
                }
            </div>
        </div>
    </section>
  )
}

export default TrippleColumnProducts