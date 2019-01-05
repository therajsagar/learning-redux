import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { createStore,combineReducers } from 'redux'

/*
//action creator
const addItem = item => {
  return {
    type: "ADD_ITEM",
    item: item
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    default:
      return state;
  }
};

var store = createStore(reducer);

console.log(store.dispatch(addItem("a")));
console.log(store.getState());
console.log(store.dispatch(addItem("b")));
console.log(store.getState());
console.log(store.dispatch(addItem("c")));
console.log(store.getState());



*/



function App() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }

  const actionCreator1 = (val) => {
    return {
      type: 'ACTION_1',
      val: val 
    }
  }
  
  const actionCreator2 = (name,id) => {
    return {
      type: 'ACTION_2',
      options: {name:name,id:id} 
    }
  }
  
  const actionCreator3 = (letter) => {
    return {
      type: 'ACTION_3',
      letter:letter
    }
  }
  
  
  //reducers
  const options = (state = {name:null,id:null}, action ) => {
    switch(action.type){
      case 'ACTION_2':
        return action.options
      default:
        return state 
    }  
  }
  
  const values = (state = ['a','b','c'], action ) => {
    switch(action.type){
      case 'ACTION_1': 
        return [action.val, ...state]
      case 'ACTION_3': 
        return state.map( (val) => val.toUpperCase())
      default:
        return state
    }  
  }
  
  const reducer = combineReducers({options,values})
  
  //store
  var store = createStore(reducer)


  store.dispatch(actionCreator1('z'))
  store.dispatch(actionCreator2('bob',123))
  store.dispatch(actionCreator3(2))
  store.dispatch(actionCreator1('q'))
  
 console.log(store.getState())

render(<App />, document.getElementById('root'));
