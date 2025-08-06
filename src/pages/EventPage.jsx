import { useContext, useRef } from "react";
import InputBar from "../Components/InputBar";
import { CgProfile } from "react-icons/cg";
import EventContext from "../Context/EventContext";
import { useTrailContext } from "../Context/TrailContext";

export default function EventPage() {
  const { organizerName, setOrganizerName, eventName, setEventName } =
    useContext(EventContext);

  const currentEvent = useRef("");
  const currentOrg = useRef("");

  const HandleOnClick = () => {
    setOrganizerName(currentOrg.current.value);
    setEventName(currentEvent.current.value);
    console.log(currentOrg.current.value);
    console.log(currentEvent.current.value);
  };

  const { data, setData } = useTrailContext();
  console.log(data);

  return (
    <>
      <div className="border container my-4">
        <label htmlFor="" className="mx-5 mt-5">
          <CgProfile /> Organizer Name
        </label>
        <div className="container px-5 py-3 d-flex justify-content-between ">
          <InputBar re={currentOrg} />
        </div>
        <label htmlFor="" className="mx-5 mt-5">
          <CgProfile /> Event Name :
        </label>
        <div className="container px-5 py-3 d-flex justify-content-between ">
          <InputBar re={currentEvent} />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-5 container">
          <button
            className="btn btn-primary"
            type="button"
            onClick={HandleOnClick}
          >
            Save Event Information
          </button>
        </div>
        <div className="container px-5 ">
          <h3>Organizer : {organizerName}</h3>
          <h3>Event : {eventName}</h3>
        </div>
      </div>
    </>
  );
}
