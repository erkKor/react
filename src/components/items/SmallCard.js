import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const SmallCard = ({product}) => {
  return (
    <div className="small-card">
        <div className="card-background">
        <NavLink to={`/products/${product.articleNumber}`}>
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
export default SmallCard