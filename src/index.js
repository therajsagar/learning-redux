import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import myApp from './reducers';
import './index.css';

let store = createStore(myApp);

function render() {
  ReactDOM.render(
    'HELLO'
  );
}
store.subscribe(render);
render();
