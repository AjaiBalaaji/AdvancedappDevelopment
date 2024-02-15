import { useEffect,useState} from 'react';
import Update from '../Pages/Update';
// import Navbar from '../Components/Navbar';
import axios from 'axios';
import NavbarU from '../Components/NavbarU'
import Delete from '../Pages/Delete';
import './AdminviewEvents.css';

function AdminviewEvents() {

  const[open1,setOpen] = useState('');
  const[open2,setOpen1] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [eventtype, setEventType] = useState('');
  const [Id, setEventId] = useState('');

  
  // const handleOpen = (Eventtype) => {
  //     setOpen(true);
  //     setEventName(Eventtype);
  // }
//   const handleOpen = (eventType, Id) => {
//     setOpen(true); 
//     setOpen1(false); 
//     setEventType(eventType);
//     setEventId(Id); 
// };
  const handleOpen1 = (eventType,Id) => {
    setOpen1(true);
    setEventType(eventType);
    setEventId(Id);
}
const [id1, setId1] = useState('');
  const handleOpen = (id1) => {
      setOpen(true);
      setId1(id1);

  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
        try {
          const response = await axios.get("http://localhost:8080/addevent/showallevents", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, // Adjust as necessary
            },
          });
          setData(response.data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };
      fetchEvents();
}, []);
useEffect(() => {
  const bodyStyle=document.body.style;
  bodyStyle.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/03/05/62/88/1000_F_305628877_FBgLZGK6Y94xPaED6rZbA9mKCxUHbNBg.jpg')"; 
  bodyStyle.backgroundSize = 'cover';
  bodyStyle.backgroundRepeat = 'no-repeat';
  bodyStyle.backgroundAttachment = 'fixed';
  bodyStyle.backgroundPosition = 'center center';
  return () => {
      document.body.style.backgroundImage = ""; 
  };
}, []);

const filteredEvents = data.filter(event =>
    event.eventtype && event.eventtype.toLowerCase().includes(searchTerm.toLowerCase())
  );
  


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handlesearchSubmit = (e) => {
    e.preventDefault();
    
    console.log('Search term submitted:', searchTerm);
  };

    return (
        <div className="AdminviewEvents">
        <NavbarU/>
        <div className="container">
        <div className='be-h1'>
        </div>
          <form className="search-form" onSubmit={handlesearchSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>

      {filteredEvents.length === 0 && (
      <div className="Noevents">
        <img className="No-eventsImage" src="https://cdn.dribbble.com/users/1001474/screenshots/10994640/media/d056a15cc227ae9f15b8cb2cfbf4da9a.png"></img>
        {/* <h3>Oops! No Upcoming Events for Now...</h3> */}
        {/* <p>Watch this space for upcoming events!</p> */}
      </div>
        )}
      
        <br></br><br></br>
        

        <div className=''>
        {filteredEvents.map(event => (
          <div key={event.eventxid}>
            <div className="Eventsavailable">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://birthdaywisheszone.com/wp-content/uploads/2020/01/fc98a72dd575583ebc02c666ff75a58e.jpeg" alt="" />
                <div className='Event-Info'>
                <p className="font-italic"><b>{event.eventtype}</b></p>
                <p className="font-italic"><b></b>{event.description}</p>
                <p className="font-italic"><b>Event Package:</b>{event.eventpackage}</p>
                <p className="font-italic"><b>Participants Count:</b>{event.participantcount}</p>
                <p className="font-italic"><b>Charges:</b>{event.charge}</p>
                </div>
                <div className="butt">
                <button className='UpdateButton' onClick={() => handleOpen(event.eventid)}>UPDATE</button>
                <button className='button-2'onClick={() => handleOpen1(event.eventtype,event.eventid)}>DELETE</button>
                </div>
                </div>
       </div>
       ))}
        {open2 && (<Delete Eventtype={eventtype} Id={Id}/>)} 
        {open1 && (<Update id1={id1} />)} 
        
            

        
        </div>
          
        </div>
      </div>
      

        
  )
}

export default AdminviewEvents;