import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/">
            Pokémon Dream Team
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/gen1">
            1st Generation
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/gen2">
            2nd Generation
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/gen3">
            3rd Generation
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/gen-mixed">
            Mixed Generations (1-3)
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/random-team">
            Random Party Maker
        </NavLink>
      </div>
    )
  }
}

export default Navbar;
