import React from 'react';


const EventCard =(props)=> {

    return (
      <div className="EventCard col-md-4">
       
       <div className="event-wrapper">
        
        <div className="date">
         
         date{props.date}
        
        </div>
        
        <img alt="event" src={props.image} className="event-image"/>
        
        <div className="col-md-6">
         
          <img alt="distance" className="icon" src={require('./img/map.png')}/>
        
          {Number(Math.round(props.distance+'e1')+'e-1')}
        
        </div>
        
        <div className="col-md-6">
          
          <img alt="ticket" className="icon" src={require('./img/ticket.png')}/>
          
          {props.tickets}
        
        </div>

        <div className="event-details">
          
           <h3>{props.name}</h3>
          
          {props.venue}<br/>
          <img alt="artist" className="avatar" src={props.artistImage}/>
         
          <span>{props.firstName}  {props.lastName}</span>
         
        
        </div>
      
       </div>
      
      </div>
    );
}

export default EventCard;