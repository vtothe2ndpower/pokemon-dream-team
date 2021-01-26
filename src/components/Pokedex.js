import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		return (
			<div className="Pokedex">
				<h2>{this.props.gen}</h2>
				<h4>Total Experience: {this.props.exp}</h4>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p) => (
						<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
