import React from 'react';
import { connect } from 'react-redux';

// const { dispatch } = store;
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

{/* <Counter 
    counter={ store.getState() }
    inc={ inc }
    dec={ dec }
    rnd={ () => { 
      const value = Math.floor( Math.random() * 10 ) + 1;
      console.log('Random: ' + value)
      rnd(value);
    } }
    /> */}


const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <React.Fragment> 
      <h2>{counter}</h2>
      <button onClick={dec} className="btn btn-primary btn-lg">-</button>{' '}
      <button onClick={inc} className="btn btn-primary btn-lg">+</button>{' '}
      <button onClick={rnd} className="btn btn-primary btn-lg">Random</button>{' '}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps)(Counter);