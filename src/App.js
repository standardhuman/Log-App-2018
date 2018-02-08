import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './SendTweet';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Loginator</h1>
        </header>
        <p className="App-intro">
          <a>Sign Up</a> or <a>Login</a>
        </p>
        <input>User</input>
        <input>Pass</input>
      </div>;
  }
}

export default App;
