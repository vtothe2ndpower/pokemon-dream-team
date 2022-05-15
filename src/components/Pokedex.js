import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		return (
			<div className='Pokedex'>
				<h2>{this.props.gen}</h2>
				<h4>Total Experience: {this.props.exp}</h4>
				<div className='Pokedex-cards'>
					{this.props.pokemon.map((p) => (
						<Pokecard
							exp={p.base_experience}
							id={p.id}
							key={p.id}
							name={p.name}
							type={p.type}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;