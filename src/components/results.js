import React, {Component} from 'react';

class Results extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  porschePercent() {
    if (this.store.getState().porsche) {
      return (this.store.getState().porsche / Object.values(this.store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }

  lamboPercent() {
    if (this.store.getState().lambo) {
      return (this.store.getState().lambo / Object.values(this.store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }

  ferrariPercent() {
    if (this.store.getState().ferrari) {
      return (this.store.getState().ferrari / Object.values(this.store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }


  maseratiPercent() {
    if (this.store.getState().maserati) {
      return (this.store.getState().maserati / Object.values(this.store.getState()).reduce((a,b)=> a+b)) * 100
    } else {
      return 0
    }
  }


  render() {
    return (
      <div>
        <h2 style={{marginLeft:'15%', textDecoration:'underline'}}> Poll Results:</h2>
      <div style={{textAlign:'center'}}>
        
        <h3>LAMBHO  :  {this.lamboPercent().toFixed(2) + '%'}</h3>

        <h3>FERRARI  :  {this.ferrariPercent().toFixed(2) + '%'}</h3>
            
        <h3>PORSCHE  :  {this.porschePercent().toFixed(2) + '%'}</h3>

        <h3>MASERATI  :  {this.maseratiPercent().toFixed(2) + '%'}</h3>

      </div>
  <br/>
  <hr style={{height:'2.5px', borderColor:'red'}} />
      </div>
    )
  }
}

export default Results;