import { createContext, useContext, useState } from "react";

const TrailContext = createContext();

export function TrailProvider({ children }) {
  const [data, setData] = useState("");

  return (
    <TrailContext.Provider value={{ data, setData }}>
      {children}
    </TrailContext.Provider>
  );
}

export function useTrailContext() {
  return useContext(TrailContext);
}
