import React, { Component } from "react";
import Input from "./Componentes/Input";
import arrayEstados from './data';

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
        <fieldset>
          <legend>Dados pessoais: </legend>
          <Input label="Nome" maxlength="40" type="text" name="nome"/> <br></br>
          <Input label="Email" maxlength="50" type="text" name="email"/> <br></br>
          <Input label="CPF" maxlength="11" type="text" name="cpf"/> <br></br>
          <Input label="Endereco" maxlength="200" type="text" name="endereco"/> <br></br>
          <Input label="Cidade" maxlength="28" type="text" name="cidade"/> <br></br>
          <select>
            <option>Escolha um estado</option>
            
          </select>
        </fieldset>
        
      </div>
    )
  }
}

export default App;
