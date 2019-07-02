import React from 'react';
import ReactDOM from 'react-dom';
import Counter from 'Counter';

import { createStore, bindActionCreators } from 'redux';
import reducer from 'reducer';
import * as actions from 'actions';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

store.subscribe(update);


// const counter = document.getElementById('counter');

// document
//   .getElementById('increment')
//   .addEventListener('click', inc);

// document
//   .getElementById('decrement')
//   .addEventListener('click', dec);

// document
//   .getElementById('random')
//   .addEventListener('click', () => { 
//     const value = Math.floor( Math.random() * 10 ) + 1;
//     console.log('Random: ' + value)
//     rnd(value);
//   });
  
  
function update () {
  // console.log( store.getState() );
  // counter.innerHTML = store.getState()
}




ReactDOM.render(<Counter />,
  document.getElementById('root'));
