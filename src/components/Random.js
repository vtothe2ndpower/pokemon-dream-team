import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Random.css';

const genName = {
  gen1: 'Generation 1',
  gen2: 'Generation 2',
  gen3: 'Generation 3',
  genMixed: 'Mixed Generations'
};

class Random extends Component {
  static defaultProps = {
    gen1: [1, 151], // Generation 1: 1-151
    gen2: [152, 251], // Generation 2: 152-251
    gen3: [252, 386], // Generation 3: 252-386
    genMixed: [1, 386] // Generation Mixed: 1-386
  }
  
  constructor(props) {
    super(props);

    this.state = {
      gen: '',
      exp: 0,
      pokemon: []
    };

    this.capitalizeFirst = this.capitalizeFirst.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.generateArray = this.generateArray.bind(this);
    this.generateTeam = this.generateTeam.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min) + 1; 
  }

  generateArray(arr) {
    const [min, max] = arr;
    let partyArr = []; 
    let randInt;
    while(partyArr.length < 6) {
      randInt = this.getRandomInt(min, max);
      // We don't have multiple of the same pokemon in our party
      if(partyArr.indexOf(randInt) === -1) partyArr.push(randInt);
    }
    return partyArr;
  }

  generateTeam() {
    const { gen } = this.state; // Determines the gen as a string
    if (gen === '') return alert('Please enter a generation!');

    const partyArr = this.generateArray(this.props[gen]); // Makes party for that gen range

    // Time to make a request
    partyArr.forEach(num => (
      fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then(res => res.json())
      .then(data => {
        this.setState(curState => ({
          pokemon: [...this.state.pokemon, { 
            id: num,
            name: this.capitalizeFirst(data.name),
            type: data.types.length > 1 ? `${this.capitalizeFirst(data.types[0].type.name)}/${this.capitalizeFirst(data.types[1].type.name)}` : `${this.capitalizeFirst(data.types[0].type.name)}`,
            base_experience: data.base_experience
          }]
        }));
      })
    ));
    // base_exp - check that these are accurate
  }

  handleClick(e) {
    this.setState({ gen: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ pokemon: [] });
    this.generateTeam();
  }


  render() {
    // Add Up Total Exp
    let hand = [ ...this.state.pokemon ];
    let exp = hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let title = genName[this.state.gen] || '';
    return (
      <div className="Random">
        <h2>Generate Your Own Random Pokemon Here</h2>

        <p>Please select your generation:</p>
        <form onSubmit={this.handleSubmit}>
          <input type="radio" id="gen1" name="generation" value="gen1" onClick={this.handleClick} />
          <label htmlFor="gen1">Generation 1 (Kanto Region)</label><br/>

          <input type="radio" id="gen2" name="generation" value="gen2" onClick={this.handleClick} />
          <label htmlFor="gen2">Generation 2 (Johto Region)</label><br/>

          <input type="radio" id="gen3" name="generation" value="gen3" onClick={this.handleClick} />
          <label htmlFor="gen3">Generation 3 (Hoenn Region)</label><br/>

          <input type="radio" id="genMixed" name="generation" value="genMixed" onClick={this.handleClick} />
          <label htmlFor="genMixed">Mixed Generations (All Regions)</label><br/>

          <button>Generate Team</button>
        </form>

        <Pokedex pokemon={hand} exp={exp} gen={`Random Party - ${title}`} />
      </div>
    )
  }
}

export default Random;


