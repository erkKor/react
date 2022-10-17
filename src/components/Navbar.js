import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from './items/MenuIcon'

const Navbar = ({headerType}) => {
  return (
    <header className={headerType}>
        <nav className="container">
            <div className="brand">
                <button id="" type="button" onclick="slideLeft()" >
                    {/* <i className="fa-light fa-bars"></i> */}
                    <i className="fa-light fa-bars-staggered"></i>
                </button>
                Fixxo.</div>
            <div className="menu-categories">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/categories" end>Categories</NavLink>
                <NavLink to="/products" end>Products</NavLink>
                <NavLink to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="icon-links">
                <MenuIcon link="/search" icon="fa-light fa-magnifying-glass"/>
                <MenuIcon link="/compare" icon="fa-light  fa-code-compare rotate-icon rotate-icon"/>
                <MenuIcon link="/wishlist" icon="fa-light fa-heart"/>
                <MenuIcon link="/shoppingcart" icon="fa-light fa-bag-shopping"/>
                    {/* <a href="/">
                        <i className="fa-light fa-heart"></i>
                        <span className="badge">1</span>
                    </a>
                    <a href="/">
                        <i className="fa-light fa-bag-shopping"></i>
                        <span className="badge">3</span>
                    </a> */}
            </div>
        </nav>
    </header>
  )
}

export default Navbar