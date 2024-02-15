import  { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarUser from '../Components/NavbarUser'; 
import './MyBookings.css'; 
import DeleteBook from './DeleteBook';

function Userbook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [Id2, setEventId] = useState('');
  const [eventType, setEventType] = useState('');

  const[open7,setOpen1] = useState('');

  const handleOpen1 = (eventType,Id2) => {
    setOpen1(true);
    setEventType(eventType);
    setEventId(Id2);
}

  const Id = localStorage.getItem('user');
  const token = localStorage.getItem('token'); // Assuming there's a token for authentication

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const response = await axios.get(`http://localhost:8080/bookevent/${Id}`, config);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    

    fetchData();
  }, [Id, token]);

  if (loading) {
    return (
      <div className="backq11">
        {/* <Unav /> */}
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="backq11">
        <NavbarUser/>
        <div>Error: {error}</div>
      </div>
    );
  }

  const defaultImageUrl = 'https://as1.ftcdn.net/v2/jpg/01/33/80/08/1000_F_133800814_7NnTuHCKkBnVYG5HwHdmnNYvP8gcAJg8.jpg';

  return (
    <div className="backq11">
      <NavbarUser/>
      {data.length > 0 ? (
        <>
          
          {data.map((event) => (
            <div key={event.bookId} className="MyBookingseventcontainer">
              <img src={defaultImageUrl} alt="Event" className="MyBookingseventcontainerimage" />
              <h2>{event.name}</h2>
              <p>
                <strong>Submission Date:</strong> {event.submissiondate}
              </p>
              <p>
                <strong>Event Date:</strong> {event.eventdate}
              </p>
              <p>
                <strong>Event Type:</strong> {event.eventtype}
              </p>
              <p>
                <strong>Head Count:</strong> {event.headcount}
               
              </p>
              <p>
                Do You want delete your Booking?
                <img onClick={() => handleOpen1(event.eventtype,event.bookId)} className="ve-img211" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
              </p>
              <button
                className={
                  event.bookingstatus.toLowerCase() === 'pending'
                    ? 'pe'
                    : event.bookingstatus.toLowerCase() === 'confirmed'
                    ? 'con1'
                    : 're1'
                }
              >
                {event.bookingstatus}
              </button>
              {open7 && (<DeleteBook eventType={eventType} Id2={Id2}/>)}
            </div>
          ))}
        </>
      ) : (
        <div>No events found</div>
      )}
    </div>
  );
}

export default Userbook;
