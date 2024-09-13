import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search'
import { Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="left">
           <div className="navlogo">
        <NavLink to="/"><img src="./amazon_PNG25.png" alt="" /></NavLink>
          </div>
           <div className="nav_searchbaar">
          <input type="text" />
          <div className="search_icon" id="search">
          <SearchIcon/>
          </div>
           </div>
          </div>
          <div className="right">
           <div className="nav_btn">
            <NavLink to="/register">signin</NavLink>
           </div>
           <div className="cart_btn">
           <Badge badgeContent={4} color="primary">
           <ShoppingCartIcon id="icon"/>
            </Badge>
            <p>Cart</p>
           </div>
           <Avatar className='avatar'/>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
