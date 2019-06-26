// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';


const reducer = (state = 0, action = {}) => {

  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
const counter = document.getElementById('counter');

store.subscribe(update);

document
  .getElementById('increment')
  .addEventListener('click', () => { 
    store.dispatch({type: 'INC'})
  });

document
  .getElementById('decrement')
  .addEventListener('click', () => { 
    store.dispatch({type: 'DEC'})
  });
  
  
function update () {
  console.log( store.getState() );
  counter.innerHTML = store.getState()
}