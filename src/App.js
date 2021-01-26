import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import Random from './components/Random';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
	static defaultProps = {
		// Generation 1
		gen1: [
			{ id: 3, name: 'Venusaur', type: 'Grass/Poison', base_experience: 236 },
			{ id: 65, name: 'Alakazam', type: 'Psychic', base_experience: 225 },
			{ id: 130, name: 'Gyardos', type: 'Water/Flying', base_experience: 189 },
			{ id: 149, name: 'Dragonite', type: 'Dragon/Flying', base_experience: 270 },
			{ id: 143, name: 'Snorlax', type: 'Normal', base_experience: 189 },
			{ id: 131, name: 'Lapras', type: 'Water/Ice', base_experience: 187 }
		],
		// Generation 2
		gen2: [
			{ id: 181, name: 'Ampharos', type: 'Electric', base_experience: 230 },
			{ id: 208, name: 'Steelix', type: 'Steel/Ground', base_experience: 179 },
			{ id: 229, name: 'Houndoom', type: 'Dark/Fire', base_experience: 175 },
			{ id: 230, name: 'Kingdra', type: 'Water/Dragon', base_experience: 243 },
			{ id: 248, name: 'Tyranitar', type: 'Rock/Dark', base_experience: 270 },
			{ id: 160, name: 'Feraligatr', type: 'Water', base_experience: 239 }
		],
		// Generation 3
		gen3: [
			{ id: 254, name: 'Sceptile', type: 'Grass', base_experience: 239 },
			{ id: 282, name: 'Gardevoir', type: 'Psychic/Fairy', base_experience: 233 },
			{ id: 306, name: 'Aggron', type: 'Steel/Rock', base_experience: 239 },
			{ id: 310, name: 'Manectric', type: 'Electric', base_experience: 166 },
			{ id: 330, name: 'Flygon', type: 'Ground/Dragon', base_experience: 234 },
			{ id: 350, name: 'Milotic', type: 'Water', base_experience: 189 }
		],
		// Mixed Generations
		mixedGens: [
			{ id: 149, name: 'Dragonite', type: 'Dragon/Flying', base_experience: 270 },
			{ id: 6, name: 'Charizard', type: 'Fire/Flying', base_experience: 240 },
			{ id: 94, name: 'Gengar', type: 'Ghost/Poison', base_experience: 225 },
			{ id: 376, name: 'Metagross', type: 'Steel/Psychic', base_experience: 270 },
			{ id: 9, name: 'Blastoise', type: 'Water', base_experience: 239 },
			{ id: 248, name: 'Tyranitar', type: 'Rock/Dark', base_experience: 270 }
		]
	};

	render() {
		let hand1 = [ ...this.props.gen1 ];
		let hand2 = [ ...this.props.gen2 ];
		let hand3 = [ ...this.props.gen3 ];
		let hand4 = [ ...this.props.mixedGens ];

		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
		let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
		let exp3 = hand3.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
		let exp4 = hand4.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route 
						exact path="/gen1" 
						render={(props) => (
    					<Pokedex pokemon={hand1} exp={exp1} gen="Generation 1" />
  					)} 
					/>
					<Route 
						exact path="/gen2" 
						render={(props) => (
    					<Pokedex pokemon={hand2} exp={exp2} gen="Generation 2" />
  					)} 
					/>
					<Route 
						exact path="/gen3" 
						render={(props) => (
    					<Pokedex pokemon={hand3} exp={exp3} gen="Generation 3" />
  					)} 
					/>
					<Route 
						exact path="/gen-mixed" 
						render={(props) => (
    					<Pokedex pokemon={hand4} exp={exp4} gen="Mixed Generations" />
  					)} 
					/>
					<Route 
						exact path="/random-team" 
						component={Random} 
					/>
          <Route render={() => <NotFound />} />
				</Switch>
			</div>
		);
	}
}

export default App;
