import EventContext from "./Context/EventContext";
import VisitorPage from "./pages/VisitorPage";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventPage from "./pages/EventPage";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useState } from "react";


function App() {
  const [event , setEvent] = useState('');
  const [org , setOrg] = useState('');
  return (
    <>
      <EventContext.Provider value={{event,org}}>
      <Router>
        <Routes>
          <Route path="/" element={<VisitorPage />}></Route>
          <Route path="/event" element={<EventPage setEvent={setEvent} setOrg={setOrg}></EventPage>}></Route>
        </Routes>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end pb-5 container">
          <Link to="/">
            <button class="btn btn-primary" type="button">
            <BsArrowLeftSquare />  Visitor Page
            </button>
          </Link>
          <Link to="/event">
            <button class="btn btn-primary" type="button">
              Event Page <FaArrowRightToBracket />
            </button>
          </Link>
        </div>
      </Router>
      </EventContext.Provider>
    </>
  );
}

export default App;
