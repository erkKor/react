import React from 'react'

const ProductDetails = ({orgPrice, discPrice}) => {
  return (
    <section className='product-details'>
        <div className='container'>
            <div className='top-part'>
                <div className='product-image'>
                    <div id="main-image" className='image-squares'></div>
                    <div className='image-squares'></div>
                    <div className='image-squares'></div>
                    <div className='image-squares'></div>
                </div>
                <div className='product-shop-choices'>
                    <h2>Modern Black Blouse</h2>
                    <div className="product-id-brand"> 
                        <p>SKU: 12345670</p>
                        <p>BRAND: The Northland</p>
                    </div>
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="product-prices"> 
                        <div className="original-price">{orgPrice}</div>
                        <div className="discount-price">€35.00</div>
                    </div>
                    <p>
                    Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more) 
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails