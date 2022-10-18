import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from './items/MenuIcon'

const Navbar = ({headerType}) => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    }

  return (
    <header className={headerType}>
        <nav className="container">
            <div className="brand">
                <NavLink>Fixxo.</NavLink>
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
                <MenuIcon link="/shoppingcart" icon="fa-light fa-bag-shopping" badge="badge" badgeNumber="3"/>
                <button onClick={toggleMenu} id="" className="icon-link btn-icon-link">
                    {/* <i className="fa-light fa-bars"></i> */}
                    <i className="fa-light fa-bars-staggered"></i>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar