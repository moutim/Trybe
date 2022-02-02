import React, { Component } from 'react';

class Person extends Component {
  render() {
      const {person : { name, email, age, image} } = this.props;
    return (
    <div>
        <p>{`Nome: ${name}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Idade: ${age}`}</p>
        <img src={image} alt={`${name}`} />
    </div>
    );
  }
}

export default Person;
