// import NavbarU from '../Components/NavbarU';
// // import './Mybooking.css';
// import{ useState, useEffect } from 'react';
// import axios from 'axios';
// // import survey from './cheffinder-logo.png';
// // import {Link} from "react-router-dom"


// function Mybooking() {

//   const [data, setData] = useState([]);
//   const filteredEvents = data;
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/bookevent")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleStatusChange = async (eventId, status) => {
//     console.log("Updating status for event ID:", eventId);
//     console.log("New status:", status);
//     try {
//         await axios.put(`http://localhost:8080/bookevent/update/${eventId}`, status, {
//             headers: {
//                 'Content-Type': 'text/plain'
//             }
//         });
//         window.location.href="/AdminBookings";
//         alert("Booking Status Updated Successfully!");
//         console.log("Booking status updated successfully!");
//     } catch (error) {
//         console.error("Error updating booking status:", error);
//         alert("Updating Booking Status Failed...Please Try Again!");
//     }
// }
//   return (
//     <div className="backq1">
//         <NavbarU/>
//         <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Submission Date</th>
//             <th>Event Date</th>
//             <th>Event Type</th>
//             <th>Head Count</th>
//             <th>Booking Status</th>
//           </tr>
//         </thead>
//         <tbody>
//             {filteredEvents.map(event => (
//             <tr key={event.bookid}>
//               <td>{event.name}</td>
//               <td>{event.submissiondate}</td>
//               <td>{event.eventdate}</td>
//               <td>{event.eventtype}</td>
//               <td>{event.headcount}</td>
//               <td><select
//                       value={event.bookingstatus}
//                       onChange={(e) => {
//                         handleStatusChange(event.bookId, e.target.value);
//                       }}
//                       className={event.bookingstatus.toLowerCase() === 'pending' ? 'pe1' : event.bookingstatus.toLowerCase() === 'confirmed' ? 'con1' : 're1'}
//                     >
//                       <option className="drop" value="Pending">Pending</option>
//                       <option className="drop" value="Confirmed">Confirmed</option>
//                       <option className="drop" value="Rejected">Rejected</option>
//                     </select></td>
//             </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Mybooking;

import NavbarU from '../Components/NavbarU';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminBookings.css'; // Make sure to adjust and include styles for the box layout

function Mybooking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/bookevent")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleStatusChange = async (eventId, status) => {
    console.log("Updating status for event ID:", eventId, "New status:", status);
    try {
      // Note: Sending plain text directly as the request body
      await axios.put(`http://localhost:8080/bookevent/update/${eventId}`, status, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      // Update the local state to reflect the change
      const updatedData = data.map(event => {
        if (event.bookId === eventId) {
          return { ...event, bookingstatus: status };
        }
        return event;
      });
      setData(updatedData);
      alert("Booking Status Updated Successfully!");
    } catch (error) {
      console.error("Error updating booking status:", error);
      alert("Updating Booking Status Failed...Please Try Again!");
    }
  };
      

  return (
    <div className="backq1">
      <NavbarU/>
      <div className="events-container">
        {data.map(event => (
          <div key={event.bookId} className="event-box">
            <h3>{event.name}</h3>
            <p><strong>Submission Date:</strong> {event.submissiondate}</p>
            <p><strong>Event Date:</strong> {event.eventdate}</p>
            <p><strong>Event Type:</strong> {event.eventtype}</p>
            <p><strong>Head Count:</strong> {event.headcount}</p>
            <select
              value={event.bookingstatus}
              onChange={(e) => handleStatusChange(event.bookId, e.target.value)}
              className={`status ${event.bookingstatus.toLowerCase()}`}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mybooking;
