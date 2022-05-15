import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className='Navbar'>

				<NavLink
					activeClassName='Navbar-active'
					exact
					to='/'
				>
					Pokémon Dream Team
				</NavLink>

				<NavLink
					activeClassName='Navbar-active'
					exact
					to='/gen1'
				>
					1st Generation
				</NavLink>

				<NavLink
					activeClassName='Navbar-active'
					exact
					to='/gen2'
				>
					2nd Generation
				</NavLink>

				<NavLink
					activeClassName='Navbar-active'
					exact
					to='/gen3'
				>
					3rd Generation
				</NavLink>

				<NavLink
					activeClassName='Navbar-active'
					exact
					to='/gen-mixed'
				>
					Mixed Generations (1-3)
				</NavLink>

				<NavLink
					activeClassName='Navbar-active'
					exact
					to='/random-team'
				>
					Random Party Maker
				</NavLink>

			</div>
		);
	}
}

export default Navbar;