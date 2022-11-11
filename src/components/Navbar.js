import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import MenuIcon from './items/MenuIcon'

const Navbar = ({headerType}) => {
    const [showMenu, setShowMenu] = useState(false)
    const {cartQuantity} = useShoppingCart()
    const ref = useRef(null);

    useEffect (() => {
        if (cartQuantity === 0){
            const hide = ref.current
            hide.className = "hidden-badge"
        } else if (cartQuantity !== 0){
            const hide = ref.current
            hide.className = "badge"
        }
    })

    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    }
    

  return (
    <header className={headerType}>
        <nav className="_container">
            <div className="brand">
            <NavLink to="/" end>Fixxo.</NavLink>
            </div>
            <div className={`menu-categories ${showMenu ? "d-grid": ""}`}>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/categories" end>Categories</NavLink>
                <NavLink to="/products" end>Products</NavLink>
                <NavLink to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="icon-links">
                <MenuIcon link="/search" icon="fa-light fa-magnifying-glass"/>
                <MenuIcon hideOnMobile={true} link="/compare" icon="fa-light  fa-code-compare rotate-icon rotate-icon"/>
                <MenuIcon hideOnMobile={true} link="/wishlist" icon="fa-light fa-heart" badge="badge" badgeNumber="1"/>
                <button className="icon-link btn-icon-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                    <i className="fa-light fa-bag-shopping"></i>
                    <span ref={ref} className="badge">{cartQuantity}</span>
                </button>
                <button onClick={toggleMenu} id="hamburgerMenu" className="icon-link btn-icon-link">
                    <i className="fa-light fa-bars-staggered"></i>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar