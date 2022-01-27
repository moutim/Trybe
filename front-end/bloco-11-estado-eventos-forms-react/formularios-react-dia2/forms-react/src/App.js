import React, { Component } from "react";

class App extends Component {
  constructor(){
    super();
    this.state = {
      nome: '',
      email: '',
      mensagem: '',
      option: '',
      vaiComparecer: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }){
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
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

          <fieldset>
            <legend>Insira seu nome</legend>
            <input value={this.state.name} type="text" onChange={this.handleChange} name="nome"></input>
          </fieldset>

          <fieldset>
            <legend>Insira seu email</legend>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          </fieldset>

          <fieldset>
            <legend>Insira uma mensagem</legend>
            <textarea name="mensagem" value={this.state.mensagem} onChange={this.handleChange}></textarea>
          </fieldset>

          <fieldset>
            <legend>Vai comparecer?</legend>
            <input type="checkbox" name="vaiComparecer" value={this.state.vaiComparecer} onChange={this.handleChange}></input>
          </fieldset>

        </form>
      </div>
    )
  }
}

export default App;
