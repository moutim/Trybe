import React, { Component } from "react";

class App extends Component {
  constructor(){
    super();
    this.state = {
      nome: '',
      email: '',
      mensagem: '',
      option: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({[name]: value})
  }
  
  render(){
    return(
      <div>
        <h1>Testes com forms React</h1>
        <form>
          <select onChange={this.handleChange} name="option">
            <option>Selecione</option>
            <option value="UM">Um</option>
            <option value="DOIS">Dois</option>
            <option value="TRES">Tres</option>
          </select>
          <label>
            Insira seu nome
            <input value={this.state.name} type="text" onChange={this.handleChange} name="nome"></input>
          </label>
          <label>
            Insira seu email
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          </label>
          <label>
            Insira uma mensagem
            <textarea name="mensagem" value={this.state.mensagem} onChange={this.handleChange}></textarea>
          </label>
        </form>
      </div>
    )
  }
}

export default App;
