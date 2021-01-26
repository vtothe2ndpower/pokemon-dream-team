import React, { Component } from 'react';
import Message from './Message';
import './Home.css';
import ash from '../ash.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1 className="Home-h1">Pokemon Dream Team</h1>
          <img className="Home-img" src={ash} alt="ash from pokemon" />
          <h3>I loved playing pokemon as a kid - though I stopped following the series closely after the Hoenn region (Generation 3)</h3>
          <h3>Check out my ideal pokemon teams I'd play with as a kid for each generation!</h3>
          <h3>Construct your own random team with my Random Party Maker page!</h3>
        </Message>     
      </div>
    )
  }
}

export default Home;