import React from 'react';

const EventCard =(props)=> {

    return (
      <div className="EventCard col-md-4">
       <div className="event-wrapper">
    
        date{props.date}
        
        <img src={props.image}/>
        distance{props.distance}
        tickets{props.tickets}
        name{props.name}<br/>
        venue{props.venue}<br/>
        <img className="avatar" src={props.artistImage}/>
       
    {props.firstName}
    {props.lastName}
      </div>
      </div>
    );
}

export default EventCard;