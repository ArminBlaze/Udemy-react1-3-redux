import React from 'react';

const Counter = () => {
  return (
    <React.Fragment> 
      <h2>0</h2>
      <button className="btn btn-primary btn-lg">-</button>
      <button className="btn btn-primary btn-lg">+</button>
      <button className="btn btn-primary btn-lg">Random</button>
    </React.Fragment>
  )
}

export default Counter;