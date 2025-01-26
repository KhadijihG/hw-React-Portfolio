import React from 'react'
import './style.css'
import { NavLink } from "react-router";
export const Navbar = () => {
  return (
    <header>
      <div>Khadijih Garcia</div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/portfolio" end>
          Portfolio
        </NavLink>
      </nav>
    </header>
  )
}
