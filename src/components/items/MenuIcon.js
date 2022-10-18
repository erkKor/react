import React from 'react'
import { NavLink } from 'react-router-dom'


const MenuIcon = ({link, icon, badge, badgeNumber, hideOnMobile}) => {
  return (
    <NavLink className={ `icon-link ${hideOnMobile ? "d-none" :""}`} to={link} end>
        <i className={icon}></i>
        <span className={badge}>{badgeNumber}</span>
    </NavLink>
  )
}

export default MenuIcon


//  <NavLink className="icon-link" to={link} end>
// <i className={icon}></i>
// <span className={badge}>{badgeNumber}</span>
// </NavLink>