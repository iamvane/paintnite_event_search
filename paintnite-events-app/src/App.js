import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import EventList from './EventList';
import SampleData from './data/sample-data.json';

let data = SampleData.data.eventSearch;

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
        </p> 
          <EventList data={data}/>

       
      </div>
    );
  }
}

export default App;
