import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Card = ({product}) => {
  
    const addToWishlist = (e) =>{
        console.log("added to wishlist")
    }
    const addToCompare = (e) =>{
        console.log("added to compare")
    }
    const addToCart = (e) =>{
        console.log("added to cart")
    }
  
  
    return (
    <div className="card">
        <ul className="card-menu">
            <li><button onClick={addToWishlist}><i className="fa-light fa-heart"></i></button></li>
            <li><button onClick={addToCompare}><i className="fa-light  fa-code-compare rotate-icon"></i></button></li>
            <li><button onClick={addToCart}><i className="fa-light fa-bag-shopping"></i></button></li>
        </ul>
        <div className="card-background">
        <img src={product.img} />
        <NavLink to="/products">
            <Button to="/products" theme='button-theme' themeBorder='button-theme-border' btnText="SHOP NOW"/>
        </NavLink>
        </div>
        <div className="card-body">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <div className="card-prices"> 
                <div className="original-price"></div>
                <div className="discount-price">{product.price}</div>
            </div>
        </div>
    </div>
  )
}

export default Card