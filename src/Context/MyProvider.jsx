import { useState } from "react";
import EventContext from "./EventContext";

const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
  const [current, setCurrent] = useState([]);

  return (
    <EventContext.Provider
      value={{ data, setData, users, setUsers, current, setCurrent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default MyProvider;
