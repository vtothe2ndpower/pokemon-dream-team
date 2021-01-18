import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Pokemon Dream Team</h1>
          <img className="Home-img" src="https://decider.com/wp-content/uploads/2016/07/pokemon-feature.jpg?quality=80&strip=all&w=978" alt="" />
          <h3>I loved playing pokemon as a kid - though I stopped following the series closely after the Hoenn region (Generation 3)</h3>
          <h3>Check out my ideal pokemon teams I'd play with as a kid for each generation!</h3>
          <h3>Construct your own random team with my Random Party Maker page!</h3>
        </Message>
{/* 
        <Link to='/gen1'>KANTO</Link>
          <Link to='/gen2'>JOHTO</Link>
          <Link to='/gen3'>HOENN</Link>
          <Link to='/gen-mixed'>MIXED</Link> */}
        
      </div>
    )
  }
}

export default Home;