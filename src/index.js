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

update();

  
function update () {
  ReactDOM.render(<Counter 
    counter={ store.getState() }
    inc={ inc }
    dec={ dec }
    rnd={ () => { 
      const value = Math.floor( Math.random() * 10 ) + 1;
      console.log('Random: ' + value)
      rnd(value);
    } }
    />,
    document.getElementById('root'));
}





