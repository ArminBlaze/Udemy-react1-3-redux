// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));


const initialState = 0;

const reducer = (state = 0, action = {}) => {

  if(action.type === 'INC') {
    return state + 1;
  }

  return state;
}

let newState = reducer(undefined, {});
// let newState = reducer(initialState, {type: 'INC'});

console.log(newState);