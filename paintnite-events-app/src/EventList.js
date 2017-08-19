import React from 'react';

import EventCard from './EventCard';

import PropTypes from 'prop-types';

const EventList = (props) => {  

  const data = props.data.edges;
  
  let events = Object.values(data).map((event, i) =>

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
    />

  );

  return (
    <div className="EventList">

      {events}

    </div>
  );

}

EventList.propTypes = {
  data: PropTypes.object.isRequired
};

export default EventList;