import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';
import MenuIcon from './MenuIcon';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="__navbar">
        <div className="container">
            <img className="logo" src={Logo} alt="" />
            <div className={`menu-links ${ !showMenu ? "": "d-none" }`}>
              <NavLink className="menu-link" to="/" end>Home</NavLink>
              <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
              <NavLink className="menu-link" to="/products" end>Products</NavLink>
              <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="menu-icons">
              <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
              <MenuIcon hideOnMobile={true} link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" />
              <MenuIcon hideOnMobile={true} quantity={2} link="/wishlist" icon="fa-regular fa-heart" />
              <MenuIcon quantity={3} link="/shoppingcart" icon="fa-regular fa-bag-shopping" />

              <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar