import React from 'react';
import { voteLambo, voteFerrari, voteMaserati, votePorsche } from './actions';
import './App.css';

export default ({store}) =>   {
 

  const handleVoteLambo = () => {
    store.dispatch(voteLambo());
  }

  const handleVoteFerrari = () => {
    store.dispatch(voteFerrari());
  }

  const handleVoteMaserati = () => {
    store.dispatch(voteMaserati());
  }

  const handleVotePorsche = () => {
    store.dispatch(votePorsche());
  }

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
              <img src="lambo.png" height="150" alt="Angular"  onClick={handleVoteLambo} className='logo'></img>
              <img src="ferrari.png" height="150" alt="Angular"  onClick={handleVoteFerrari} className='logo'></img>
              <img src="porsche.png" height="150" alt="Angular"  onClick={handleVotePorsche} className='logo'></img>
              <img src="maserati.png" height="150" alt="Angular"  onClick={handleVoteMaserati} className='logo'></img>
          </div>
          <br/>
          <hr style={{height:'2.5px', borderColor:'red'}} />
        </div>
      </div>
    );
  }
