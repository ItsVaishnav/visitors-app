import { useRef, useState } from "react";
import InputBar from "../Components/InputBar";
import { CgProfile } from "react-icons/cg";

export default function VisitorPage() {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState([]);
  const currentUser = useRef("");

  const HandleOnClick = () => {
    console.log("clicked");
    setUsers([...users, currentUser.current.value]);
    setCurrent(currentUser.current.value);
  };
  return (
    <>
      <div className="border container my-4">
          <label htmlFor="" className="mx-5 mt-5"> <CgProfile /> Enter Your Name</label>
        <div className="container px-5 py-3 d-flex justify-content-between ">
          <InputBar re={currentUser} />
          <button
            className="btn btn-outline-primary m-3"
            onClick={HandleOnClick}
          >
            Check Me
          </button>
        </div>
        <div className="container px-5 ">
          <h1>Welcome : {current}</h1>
          <ul className="list-group my-5">
            {users.map((ele) => (
              <li className="list-group-item">{ele}</li>
            ))}
          </ul>
          <h3>Event : {current}</h3>
          <h3>Organizer : {current}</h3>
        </div>
        
      </div>
    </>
  );
}
