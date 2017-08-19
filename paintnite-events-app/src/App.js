import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import EventCard from './EventCard';
import SampleData from './data/sample-data.json';
import _ from 'lodash';

let dataRaw = SampleData.data.eventSearch.edges;
let data= dataRaw;

class App extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      data: {data},
      defaultSortIndexes: [],
      orderDir:''
    };

    this.sortEevent = this.sortEevent.bind(this);
  }

  sortEevent(e, type){

    if (type === 'asc'){
      this.setState({ orderDir:'asc'});
    }else{
      this.setState({ orderDir:'desc'});

    }
  }

  render() {
    
    let filteredEvents = this.state.data.data;
    let orderDir = this.state.orderDir;

    filteredEvents = _.orderBy(filteredEvents, (event)=>{
      return new Date(event.node.start);
    }, orderDir);//order by

    let events = filteredEvents.map((event, i) =>
    <EventCard
      key={i}
      name={event.node.title}
      image={event.node.painting.images[0].thumb_url}
      venue={event.node.venue.name}
      tickets={event.node.tickets_available}
      distance={event.distance}
      date={event.node.start}
      firstName={event.node.artist.first_name}
      lastName={event.node.artist.last_name} 
      artistImage={event.node.artist.images[0].thumb_url}
    />

  );//map

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
              
              <button onClick={(e) => this.sortEevent(e, 'asc')} className="green">SORT ASCENDING</button>
              
              <button onClick={(e) => this.sortEevent(e, 'desc')}>SORT DESCENDING</button>
           
            </div>
         
          </div>

        </div>

        <div className="EventList">

          {events}

        </div>
 
      </div>
    );
  }
}

export default App;
