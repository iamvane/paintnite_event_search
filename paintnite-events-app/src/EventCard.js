import React from 'react';

const EventCard =(props)=> {

    return (
      <div className="EventCard">
       
    
        date{props.date}
        name{props.name}<br/>
        <img src={props.image}/>
        distance{props.distance}
        venue{props.venue}<br/>
        tickets{props.tickets}
    {props.image}
    {props.firstName}
    {props.lastName}
      </div>
    );
}

export default EventCard;