import React, { Component } from 'react'
import { fetchAPI } from './service'

class App extends Component {
  state = {
    dog: {}
  }
  async componentDidMount() {
    const dog = await fetchAPI();
    console.log(dog);
    this.setState({ dog })
  }

  render() {
    const { dog: { message, status } } = this.state;
    return (
      <div>
        <img src={ message } alt={ message } />
        <p>{`Status: ${status}`}</p>
      </div>
    )
  }
}

export default App