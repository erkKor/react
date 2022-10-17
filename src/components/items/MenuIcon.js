import React from 'react'
import { NavLink } from 'react-router-dom'


const MenuIcon = ({link, icon, badge, badgeNumber}) => {
  return (
    <NavLink className="icon-link" to={link} end>
        <i className={icon}></i>
        <span className={badge}>{badgeNumber}</span>
    </NavLink>
  )
}

export default MenuIcon