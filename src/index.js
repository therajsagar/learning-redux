import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import Results from './components/results';
import myApp from './reducers';
import './index.css';

let store = createStore(myApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function MyApp () {
  render(
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