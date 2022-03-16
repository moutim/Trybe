import React, { Component } from 'react'
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';
import TrafficSignal from './TrafficSignal';


export class App extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: {
      color: 'red'
    }
  }

  moveCar = (color, side) => {
    this.setState((prevState) => ({cars: {...prevState.cars, [color]: side }}));
  }

  changeSignal = (color) => {
    this.setState({ signal: { color: color }})
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
      signal: this.state.signal
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    )
  }
}

export default App
