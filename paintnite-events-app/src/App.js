import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import EventList from './EventList';
import SampleData from './data/sample-data.json';

let data = SampleData.data.eventSearch;

class App extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
 
    };

    this.sortEeventAscending = this.sortEeventAscending.bind(this);
    this.sortEeventDescending = this.sortEeventDescending.bind(this);
  }

  sortEeventAscending(){

  }

  sortEeventDescending(){
    
  }

  render() {
    return (
      <div className="App">

        <div className="header-wrapper">
        
          <div className="logo-header">
            
            <div className="logo-wrapper">

              <img src={logo} className="App-logo" alt="logo" />
           
            </div>

            <div className="menu-wrapper">
              
              <a>Events</a>
         
            </div>
          
          </div>

          <div className="filters-wrapper">
            
            <div className="filters">
              
              <p>Search Filters:</p>
              
              <button onClick={this.sortEeventAscending} className="green">SORT ASCENDING</button>
              
              <button onClick={this.sortEeventDescending}>SORT DESCENDING</button>
           
            </div>
         
          </div>

        </div>

        <EventList data={data}/>
 
      </div>
    );
  }
}

export default App;
