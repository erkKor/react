import React from 'react'

const Card = () => {
  return (
    <div className="card">
        <ul className="card-menu">
            <li><a href=""><i className="fa-light fa-heart"></i></a></li>
            <li><a href=""><i className="fa-light  fa-code-compare rotate-icon"></i></a></li>
            <li><a href=""><i className="fa-light fa-bag-shopping"></i></a></li>
        </ul>
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

export default Card