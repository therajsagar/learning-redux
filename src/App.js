import React  from 'react';
import { voteAngular, voteReact, voteVue } from './actions'
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props)
        this.store = this.props.store
    }

    handleVoteAngular = () => {
        this.store.dispatch(voteAngular());
      }
      handleVoteReact = () => {
        this.store.dispatch(voteReact());
      }
      handleVoteVuejs = () => {
        this.store.dispatch(voteVue());
      }

      render(){
          return(<h1>hello</h1>)
      }
}


export default App;