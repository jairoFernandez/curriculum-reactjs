import React, { Component } from 'react';
import './App.css';
import { Curriculum } from "./components/Curriculum";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Curriculum />
      </div> 
    );
  }
}

export default App;
