import React from 'react';

export default ({store}) => {
  function porschePercent() {
    if (store.getState().porsche) {
      return (store.getState().porsche / Object.values(store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }

  function lamboPercent() {
    if (store.getState().lambo) {
      return (store.getState().lambo / Object.values(store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }

  function ferrariPercent() {
    if (store.getState().ferrari) {
      return (store.getState().ferrari / Object.values(store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }


  function maseratiPercent() {
    if (store.getState().maserati) {
      return (store.getState().maserati / Object.values(store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }

    return (
      <>
        <h2 style={{marginLeft:'15%', textDecoration:'underline'}}> Poll Results:</h2>
        <div style={{textAlign:'center'}}>
          <h3>LAMBHO  :  {lamboPercent().toFixed(2) + '%'}</h3>
          <h3>FERRARI  :  {ferrariPercent().toFixed(2) + '%'}</h3>
          <h3>PORSCHE  :  {porschePercent().toFixed(2) + '%'}</h3>
          <h3>MASERATI  :  {maseratiPercent().toFixed(2) + '%'}</h3>
        </div>
        <br/>
        <hr style={{height:'2.5px', borderColor:'red'}} />
      </>
    )
  }
