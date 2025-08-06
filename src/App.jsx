import VisitorPage from "./pages/VisitorPage";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventPage from "./pages/EventPage";
import { BsArrowLeftSquare } from "react-icons/bs";
import MyProvider from "./Context/MyProvider";
import New from "./pages/New";

function App() {
  return (
    <>
      <MyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<New />}></Route>
            <Route path="/event" element={<EventPage></EventPage>}></Route>
          </Routes>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end pb-5 container">
            <Link to="/">
              <button class="btn btn-primary" type="button">
                <BsArrowLeftSquare /> Visitor Page
              </button>
            </Link>
            <Link to="/event">
              <button class="btn btn-primary" type="button">
                Event Page <FaArrowRightToBracket />
              </button>
            </Link>
          </div>
        </Router>
      </MyProvider>
    </>
  );
}

export default App;
