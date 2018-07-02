import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    fetch('http://localhost:5000/transactions/2')
      .then(response => response.json())
      .then((responseJson) => {

        this.setState({
          name: responseJson.name,
          amount: responseJson.amount,
        });

      })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.name ? this.state.name : ""}
          {this.state.amount ? this.state.amount : ""}
        </p>
      </div>
    );
  }
}

export default App;
