import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      user: [],
    }
  }

  async componentDidMount() {
    this.setState({loading:true}, async () => {
      const result = await fetch('https://api.randomuser.me/');
      const data = await result.json();
      console.log(data.results);
      this.setState({loading: false});
      this.setState({user: data.results});
    })
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.medium,
    };
  }


  render() {
    const { loading, user } = this.state;
    return (
      <div>
        <h1>Random User</h1>
        { loading ? <div>Carregando...</div> :
        <div>
          {user.map((item, index) => {
            return <Person key={ index } person={this.getUserElements(item)}/>
          })}
        </div> }
      </div>
    ) 
  }
}

export default App;
