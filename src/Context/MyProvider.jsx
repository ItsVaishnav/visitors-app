import { useState } from 'react';
import EventContext from './EventContext';

const MyProvider = ({ children }) => {
  const [organizerName, setOrganizerName] = useState("Guest");
  const [eventName, setEventName] = useState("Guest");

  return (
    <EventContext.Provider value={{ organizerName, setOrganizerName ,eventName, setEventName }}>
      {children}
    </EventContext.Provider>
  );
};

export default MyProvider;
