import React, { Component } from 'react'

class Random extends Component {
  static defaultProps = {
    gen1: [1, 151],
    gen2: [152, 251],
    gen3: [252, 386],
    genMixed: [1, 386]
  }
  
  constructor(props) {
    super(props);

    this.state = {


    };
    this.getRandomInt = this.getRandomInt.bind(this);
    this.generateArray = this.generateArray.bind(this);
    this.generateTeam = this.generateTeam.bind(this);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min) + 1; 
  }

  generateArray() {
    let arr = [];

    // Generation 1: 1-151
    // Generation 2: 152-251
    // Generation 3: 252-386
    // Generation 3: 252-386
    // Generation Mixed: 1-386
  }

  generateTeam() {
    console.log('Generate Team Button Clicked!');

  }


  render() {
    return (
      <div className="Pokedex">
        <h2>Generate Your Own Random Pokemon Here</h2>

        {/* Handle state here */}
        <p>Please select your generation:</p>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Generation 1 (Kanto Region)</label><br/>
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Generation 2 (Johto Region)</label><br/>
        <input type="radio" id="other" name="gender" value="other" />
        <label for="other">Generation 3 (Hoenn Region)</label><br/>
        <input type="radio" id="other" name="gender" value="other" />
        <label for="other">Mixed Generations (All Regions)</label><br/>


        <button onClick={this.generateTeam}>Generate Random Team</button>
        
      </div>
    )
  }
}

export default Random;