// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';
import reducer from 'reducer';
import { inc, dec, rnd} from 'actions';

const store = createStore(reducer);
const { dispatch } = store;
const counter = document.getElementById('counter');

const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch( creator(...args) );
}

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);

store.subscribe(update);

document
  .getElementById('increment')
  .addEventListener('click', incDispatch);

document
  .getElementById('decrement')
  .addEventListener('click', decDispatch);

document
  .getElementById('random')
  .addEventListener('click', () => { 
    const value = Math.floor( Math.random() * 10 ) + 1;
    console.log('Random: ' + value)
    rndDispatch(value);
  });
  
  
function update () {
  console.log( store.getState() );
  counter.innerHTML = store.getState()
}

