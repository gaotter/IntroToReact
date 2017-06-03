import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './componants/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {/* I'm a compnant. I can get data using my properties also called props. I have on propery called 'text'*/}
          <Hello text='World' />
        </p>
      </div>
    );
  }
}

export default App;
