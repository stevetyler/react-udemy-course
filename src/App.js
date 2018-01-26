import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Steve', age: 43},
      { name: 'Rachel', age: 41},
      { name: 'Viv', age: 37}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 43},
        { name: 'Rachel', age: 31},
        { name: 'Viv', age: 47}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button onClick={() => this.switchNameHandler('Stephen')}>Switch Name</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age} />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'Vivien')}
          >My hobby is racing</Person>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
         />
      </div>
    );
  }
}

export default App;
