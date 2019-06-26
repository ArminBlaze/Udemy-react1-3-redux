// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';


const reducer = (state = 0, action = {}) => {

  if(action.type === 'INC') {
    return state + 1;
  }

  return state;
}

const store = createStore(reducer);

store.subscribe( () => {
  console.log( store.getState() );
})


store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});