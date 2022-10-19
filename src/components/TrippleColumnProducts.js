import React from 'react'
import SmallCard from './items/SmallCard'

const TrippleColumnProducts = ({productsOne, productsTwo, productsThree}) => {
  return (
    <section className="three-row-products">
        <div className="container">
            <div className="product-column">
                <h3>Latest Product</h3>
                {
                  productsOne.map(productOne => <SmallCard key={productOne.id} product={productOne} />)
                }
            </div>
            <div className="product-column">
                <h3>Best Selling Product</h3>
                {
                  productsTwo.map(productTwo => <SmallCard key={productTwo.id} product={productTwo} />)
                }
            </div>
            <div className="product-column">
                <h3>Top Reacted Product</h3>
                {
                  productsThree.map(productThree => <SmallCard key={productThree.id} product={productThree} />)
                }
            </div>
        </div>
    </section>
  )
}

export default TrippleColumnProducts