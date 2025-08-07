import { useState } from "react";
import EventContext from "./EventContext";

const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
  const [current, setCurrent] = useState([]);
  const [count,setCount] = useState(0);

  return (
    <EventContext.Provider
      value={{ data, setData, users, setUsers, current, setCurrent,count,setCount }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default MyProvider;
