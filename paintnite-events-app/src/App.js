import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import EventCard from './EventCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a>Events</a>
        </div>
        <p className="">
          Search Filters:
          SORT ASCENDING
          SORT DESCENDING
          <div className="events-wrapper">
          <EventCard/>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
