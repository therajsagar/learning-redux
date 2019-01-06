import React, { Component } from 'react';
import { voteLambo, voteFerrari, voteMaserati, votePorsche } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteLambo = () => {
    this.store.dispatch(voteLambo());
  }

  handleVoteFerrari = () => {
    this.store.dispatch(voteFerrari());
  }

  handleVoteMaserati = () => {
    this.store.dispatch(voteMaserati());
  }

  handleVotePorsche = () => {
    this.store.dispatch(votePorsche());
  }

  render() {
    return (
      <div>
        <hr style={{height:'2.5px', borderColor:'red'}} />
        <div style={{'textAlign': 'center'}}>
        <br/>
          <h1 style={{color:'darkblue'}}>What's your favorite SuperCar Brand?</h1>
          <br/>
          <hr style={{height:'2.5px', borderColor:'red'}} />
          <br/>
          <div>
              <img src="lambo.png" height="150" alt="Angular"  onClick={this.handleVoteLambo}></img>
              <img src="ferrari.png" height="150" alt="Angular"  onClick={this.handleVoteFerrari}></img>
              <img src="porsche.png" height="150" alt="Angular"  onClick={this.handleVotePorsche}></img>
              <img src="maserati.png" height="150" alt="Angular"  onClick={this.handleVoteMaserati}></img>
          </div>
          <br/>
          <hr style={{height:'2.5px', borderColor:'red'}} />
        </div>
      </div>
    );
  }
}

export default App;