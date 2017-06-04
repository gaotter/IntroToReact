import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './componants/Hello';
import InputPanel from './componants/InputPanel';

class App extends Component {
  constructor(props) {
    super(props);
    // state of an componant is the values that the componant handles.
    this.state = {
      helloValue: ''
    };
  }

  updateHelloValue(value) {
    // the state of an componant can only be replaced not changed. 
    // set state help me make sure the state is new. Most of the time.
    this.setState(prevState => ({ helloValue: value }));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {/* I'm a compnant. I can get data using my properties also called props. I have on propery called 'text'*/}
          <Hello text={this.state.helloValue} />
          {/* I'm a componant. I can get 'at button text' that is used as my button text, and a call back function that I
              can send you my text value to. */}
          <InputPanel buttonText="update hello text" valueUpdated={txt => this.updateHelloValue(txt)} />
        </div>
      </div>
    );
  }
}

export default App;
