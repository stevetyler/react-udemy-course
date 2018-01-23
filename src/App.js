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
  switchNameHandler = () => {
    //console.log('was clicked');
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>My hobby is playing the piano</Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
