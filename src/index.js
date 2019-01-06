import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import Results from './components/results';
import myApp from './reducers';
import './index.css';

let store = createStore(myApp);

function MyApp () {
  ReactDOM.render(
    <div className="container">
      <App store={store} />
      <Results store={store} />
    </div>
    ,
    document.getElementById('root')
  );
}

store.subscribe(MyApp);

MyApp();