import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment, decrement } from './redux/action'


class App extends Component {
  render(){
    return (
      <div>
      <div>halo</div>
      <button onClick={this.props.increment}>+</button>
      <span>{this.props.hitung}</span>
      <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  return {
    hitung: state.reducerGue.count
  }
}

export default connect(mapStateToProps, { increment, decrement })(App);
