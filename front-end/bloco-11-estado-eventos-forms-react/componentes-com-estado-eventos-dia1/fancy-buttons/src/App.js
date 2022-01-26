import './App.css';
import React, { Component } from 'react';

const handleClick1 = () => { console.log('Primeiro botao'); }
const handleClick2 = () => { console.log('Segundo botao'); }
const handleClick3 = () => { console.log('Terceiro botao'); }

class App extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    console.log(this);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Handleclick dentro da funcao</button>
        <button onClick={handleClick1}>HandleClick 1</button>
        <button onClick={handleClick2}>HandleClick 2</button>
        <button onClick={handleClick3}>HandleClick 3</button>
      </div>
    )
  }
}

export default App;
