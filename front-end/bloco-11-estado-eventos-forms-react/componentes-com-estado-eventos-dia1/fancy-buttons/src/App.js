import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      numeroDeCliques: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.contaCliques = this.contaCliques.bind(this);
  }
  
  handleClick(){
    console.log(this);
  }

  contaCliques() {
    ((this.state.numeroDeCliques % 2) === 0) ? console.log('verde - par') : console.log('azul - impar');;
    this.setState((cliquesAntigo) => ({numeroDeCliques: cliquesAntigo.numeroDeCliques + 1}));
  } 

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Handleclick dentro da funcao</button>
        <button onClick={() => {
          ((this.state.numeroDeCliques % 2) === 0) ? console.log('verde - par') : console.log('azul - impar');;
          this.setState((cliquesAntigo) => ({numeroDeCliques: cliquesAntigo.numeroDeCliques + 1}));
        }} >Quantas vezes cliquei?{this.state.numeroDeCliques} </button>
      </div>
    )
  }
}

export default App;
