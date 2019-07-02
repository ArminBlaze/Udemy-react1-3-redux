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
    case 'RND':
      return state + action.value;
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

function rnd (value) {
  return {
    type: 'RND',
    value
  }
}

function inc () {
  return {type: 'INC'}
}

//другой вариант - через стрелки. Но его нужно объявить до использования.
// const inc = () => ({type: 'INC'});

function dec () {
  return {type: 'DEC'}
}