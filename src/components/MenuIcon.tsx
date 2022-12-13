import React from 'react'
import { NavLink } from 'react-router-dom'

export interface IMenuIcon {
  link: string
  icon: string
  quantity?: number
  hideOnMobile?: boolean
}

const MenuIcon: React.FC<IMenuIcon> = ({link,icon, quantity, hideOnMobile }) => {
  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "hidden" : ""}`} to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>

    </NavLink>
  )
}

export default MenuIcon