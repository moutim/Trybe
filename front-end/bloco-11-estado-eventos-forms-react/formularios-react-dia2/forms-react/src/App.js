import React, { Component } from "react";
import Input from "./Componentes/Input";

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
    const { nome, email, mensagem } = this.state;
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
            <Input value={nome} type={'text'} handleChange={this.handleChange} name={'nome'}/>
          </fieldset>

          <fieldset>
            <legend>Insira seu email</legend>
            <Input value={email} type={'text'} handleChange={this.handleChange} name={'email'}/>
          </fieldset>

          <fieldset>
            <legend>Insira uma mensagem</legend>
            <Input value={mensagem} type={'text'} handleChange={this.handleChange} name={'mensagem'}/>
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
