// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';
import reducer from 'reducer';
import { inc, dec, rnd} from 'actions';

const store = createStore(reducer);
const counter = document.getElementById('counter');

store.subscribe(update);

document
  .getElementById('increment')
  .addEventListener('click', () => { 
    store.dispatch( inc() );
  });

document
  .getElementById('decrement')
  .addEventListener('click', () => { 
    store.dispatch( dec() );
  });

document
  .getElementById('random')
  .addEventListener('click', () => { 
    const value = Math.floor( Math.random() * 10 ) + 1;
    console.log('Random: ' + value)
    store.dispatch( rnd(value) );
  });
  
  
function update () {
  console.log( store.getState() );
  counter.innerHTML = store.getState()
}

