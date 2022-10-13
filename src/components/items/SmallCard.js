import React from 'react'

const SmallCard = () => {
  return (
    <div className="small-card">
        <div className="card-background">
            <button className="button-theme">Quick view
                <div className="button-theme-border"></div>
            </button>
        </div>
        <div className="card-body">
            <p>Category</p>
            <h3>Modern Black Blouse</h3>
            <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <div className="card-prices"> 
                <div className="original-price"></div>
                <div className="discount-price">$30.00</div>
            </div>
        </div>
    </div>
  )
}

export default SmallCard