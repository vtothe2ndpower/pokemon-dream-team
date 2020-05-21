import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component{
  static defaultProps = {
    pokemon : [
      // Generation 1
      {id: 3, name: 'Venusaur', type: 'Grass/Poison', base_experience: 525},
      {id: 65, name: 'Alakazam', type: 'Psychic', base_experience: 500},
      {id: 130, name: 'Gyardos', type: 'Water/Flying', base_experience: 540},
      {id: 149, name: 'Dragonite', type: 'Dragon/Flying', base_experience: 600},
      {id: 143, name: 'Snorlax', type: 'Normal', base_experience: 540},
      {id: 131, name: 'Lapras', type: 'Water/Ice', base_experience: 535},
      // Generation 2
      // {id: 181, name: 'Ampharos', type: 'Electric', base_experience: 510},
      // {id: 208, name: 'Steelix', type: 'Steel/Ground', base_experience: 510},
      // {id: 229, name: 'Houndoom', type: 'Dark/Fire', base_experience: 500},
      // {id: 230, name: 'Kingdra', type: 'Water/Dragon', base_experience: 540},
      // {id: 248, name: 'Tyranitar', type: 'Rock/Dark', base_experience: 600},
      // {id: 160, name: 'Feraligatr', type: 'Water', base_experience: 530}
      // Generation 3
      {id: 254, name: 'Sceptile', type: 'Grass', base_experience: 530},
      {id: 282, name: 'Gardevoir', type: 'Psychic/Fairy', base_experience: 518},
      {id: 306, name: 'Aggron', type: 'Steel/Rock', base_experience: 530},
      {id: 310, name: 'Manectric', type: 'Electric', base_experience: 475},
      {id: 330, name: 'Flygon', type: 'Ground/Dragon', base_experience: 520},
      {id: 350, name: 'Milotic', type: 'Water', base_experience: 540}
    ]
  };
  render(){
    let hand1 = [];
    let hand2 = [ ...this.props.pokemon ];
    while(hand1.length < hand2.length){
      let index = 0;
      let pokemon = hand2.splice(index, 1)[0];
      hand1.push(pokemon);
      index += 1;
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return(
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner ={exp1 > exp2}/>
        <Pokedex pokemon={hand2} exp={exp2} isWinner ={exp1 < exp2}/>
      </div>
    );
  }
}

export default Pokegame;