import React from 'react';
import moment from 'moment';




const EventCard =(props)=> {

  
  const dateMonth= moment(props.date).format('MMMM DD'); // August 19th 2017, 10:56:24 am
  const dayTime= moment(props.date).format('ddd, h:mm a'); // August 19th 2017, 10:56:24 am

  const headerStyle = {
    backgroundImage: 'url(' + props.image + ')', 
    height: '280px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '10px 10px 0px 0px',
    position: 'relative',
    backgroundPosition: 'center'
  };

    return (
      <div className="EventCard col-md-4">
       
       <div className="event-wrapper">
        
        <div className="event-header" style={headerStyle}>
          
          <div className="date">
           
           <span className="date-month">{dateMonth}</span>
           <span className="color-grey">{dayTime}</span>
          
          </div>
          
          <div className="event-meta">
          
            <div className="col-md-6">
             
              <img alt="distance" className="icon" src={require('./img/map.png')}/>
            
              <span>{Number(Math.round(props.distance+'e1')+'e-1')} MI</span>

            </div>
            
            <div className="col-md-6">
              
              <img alt="ticket" className="icon" src={require('./img/ticket.png')}/>
              
              <span>{props.tickets} TIX</span>
            
            </div>

          </div>
       
        </div>

        <div className="event-details">
          
           <h4>{props.name}</h4>
          
          <p className="color-grey">{props.venue}</p>
          <img alt="artist" className="avatar" src={props.artistImage}/>
         
          <span>{props.firstName}  {props.lastName}</span>
         
        </div>
      
       </div>
      
      </div>
    );
}

export default EventCard;