import React, { Component } from 'react';
import './App.css';
import JobOpenings from './components/JobOpenings';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <JobOpenings />

      </div>
    );
  }
}

export default App;
