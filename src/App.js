import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
        <br/>
          <h2>What is your favorite front-end framework in 2017?</h2>
          <br/>
          <hr />
          <br/>
          <div className="row">
              <img src="angular_logo.png" height="96" alt="Angular" style={{marginRight: '100px'}} onClick={this.handleVoteAngular}></img>
              <img src="react_logo.png" height="96" alt="Angular" style={{marginRight: '100px'}} onClick={this.handleVoteReact}></img>
              <img src="vuejs_logo.png" height="96" alt="Angular" onClick={this.handleVoteVuejs}></img>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

export default App;