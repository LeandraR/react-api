import React, { Component } from 'react';
import './App.css';
import API from './components/API';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <API />
        </header>
      </div>
    );
  }
}

export default App;
