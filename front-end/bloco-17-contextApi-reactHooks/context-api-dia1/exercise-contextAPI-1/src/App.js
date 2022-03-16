import React, { Component } from 'react'
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';


export class App extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  moveCar = (color, side) => {
    this.setState((prevState) => ({cars: {...prevState.cars, [color]: side }}));
  }
  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
      </MyContext.Provider>
    )
  }
}

export default App
