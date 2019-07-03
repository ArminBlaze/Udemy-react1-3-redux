import React from 'react';

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

export default Counter;