import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


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

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, actions)(Counter);