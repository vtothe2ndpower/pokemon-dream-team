import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Random.css';

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
      pokemon: new Array(6)
      // pokemon: [
      //   { id: 181, name: 'Ampharos', type: 'Electric', base_experience: 510 },
      //   { id: 208, name: 'Steelix', type: 'Steel/Ground', base_experience: 510 },
      //   { id: 229, name: 'Houndoom', type: 'Dark/Fire', base_experience: 500 },
      //   { id: 230, name: 'Kingdra', type: 'Water/Dragon', base_experience: 540 },
      //   { id: 248, name: 'Tyranitar', type: 'Rock/Dark', base_experience: 600 },
      //   { id: 160, name: 'Feraligatr', type: 'Water', base_experience: 530 }
      // ]
    };

    this.getRandomInt = this.getRandomInt.bind(this);
    this.generateArray = this.generateArray.bind(this);
    this.generateTeam = this.generateTeam.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min) + 1; 
  }

  generateArray(arr) {
    const [min, max] = arr;
    let partyArr = [];
    for(let i = 0; i < 6; i++) {
      partyArr.push(this.getRandomInt(min, max));
    }
    return partyArr;
  }

  generateTeam() {
    const { gen } = this.state;
    if (gen === '') return alert('Please enter a generation!');

    // console.log('Generate Team Button Clicked!');
    // console.log(this.props[gen]);
    console.log(this.generateArray(this.props[gen]));
    const partyArr = this.generateArray(this.props[gen]);

    console.log()

    // Time to make a request
    // partyArr.forEach(id => (
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({
    //       pokemon: ...this.state.pokemon, { id, name: type: base_experience}
    //     });
    //   })
    // ));

    // id (comes from array)
    // name (Set first letter capital)
    // base_exp - check that these are accurate
    // types (get - if more than 1 seperate with a / )

    // Add Up EXP
    // let hand = [ ...this.state.pokemon ];
		// let exp = hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  }

  handleClick(e) {
    this.setState({ gen: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.generateTeam();
  }


  render() {
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

          <button>Generate Random Team</button>
        </form>

        <h2>{this.state.gen}</h2>
				<h4>Total Experience: {this.state.exp}</h4>
				<div className="Random-cards">
					{this.state.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
        </div>

      </div>
    )
  }
}

export default Random;