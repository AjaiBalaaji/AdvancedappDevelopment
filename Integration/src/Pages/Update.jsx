import './Update.css';
import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import Select from 'react-select';

function Update({id1}) {
    // const navigate=useNavigate();
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive((prev) => !prev);
    };
    const [eventtype, setEventtype] = useState("");
    const [description, setDescription] = useState("");
    const [eventpackage, setEpackage] = useState("");
    const [participantcount, setCount] = useState("");
    const [charge, setCharge] = useState("");

    const handleEventtype = (event) => {
        setEventtype(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handlePackage = (event) => {
        setEpackage(event.target.value);
    }

    const handleCount = (event) => {
        setCount(event.target.value);
    }
    const handleCharge = (event) => {
        setCharge(event.target.value);
    }


    useEffect(() => {
        axios
          .get(`http://localhost:8080/addevent/${id1}`)
          .then((response) => {
            const eventData = response.data;
            if (eventData) {
                const {
                        eventtype,
                        description,
                        eventpackage,
                        participantcount,
                        charge
                    } = eventData;
                    setEventtype(eventtype);
                    setDescription(description);
                    setEpackage(eventpackage);
                    setCount(participantcount);
                    setCharge(charge);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }, [id1]);
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
            eventtype:eventtype,
            description:description,
            eventpackage:eventpackage,
            participantcount:participantcount,
            charge:charge
        };
        try {
            await axios.put(`http://localhost:8080/addevent/${id1}`,data);
            setIsActive((prev) => !prev);
            setTimeout(() => {
                alert("Updated Successfully!");
            }, 400);
            console.log(data);
            setTimeout(() => {
                window.location.href = "/AdminviewEvents";
            }, 1000);
        } 
        catch (error) {
          console.log(error);
          alert("Updating Failed...Please Try Again!!!");
        }
      };

    return (
        <div>
            <div className="modal-containeru">
                <div className="modal-contentu">
                    <div className="evnt-create-boxu">
                        <div className=''>
                            <a href="All"><img className="eb-imgu" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a>
                            <h1 className='eb-h1u'>Update your Event:</h1><br></br>
                            <form className='event-detailsu' onSubmit={handleSubmit}>
                                <div className="evetu">
                                <div className='event-itemsu'>
                                    <label className='eb-labelu'>Event Type</label>
                                    <input className="eb-inputu" type="text" value={eventtype} onChange={handleEventtype} placeholder="Enter event type"/>
                                    <label className='eb-labelu'>Event Description</label>
                                    <input className="eb-inputu" type="text"  value={description} onChange={handleDescription} placeholder="Enter event Description"  required/>
                                    <label className='eb-labelu'>Charges</label>
                                    <input className="eb-inputu" type="text" value={charge}  onChange={handleCharge} placeholder="Enter the charges"  required/>
                                </div>
                                <div  className='event-itemsu'>
                                <label className='eb-labelu'>Event Package</label>
                                    <input className="eb-inputu" type="text" value={eventpackage} onChange={handlePackage} placeholder="Enter package" required />
                                    <label className='eb-labelu'>Participants Count</label>
                                    <input className="eb-inputu" type="text" value={participantcount} onChange={handleCount} placeholder="Enter the count"  required/>
                                </div>
                                </div>
                                <div  className='event-itemsu'>
                                    <div className={`wrapperu ${isActive? 'active' : ''}`}>
                                        <button className={`custom-buttonu ${isActive ? 'is_active' : ''}`} onClick={handleButtonClick}>
                                            <span>Update</span>
                                            <div className="success">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
                                                    <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update;