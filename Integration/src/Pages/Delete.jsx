import './Delete.css';
// import { useState } from 'react';
// import logo10 from '../Assets/Logo2.jpg'
// import {Link} from 'react-router-dom'
import axios from 'axios';
// import { useNavigate } from "react-router-dom";



function Delete({Eventtype, Id}) {

    // const navigate = useNavigate();

// Replace window.location.href with:
// navigate("/AdminviewEvents");


    const handleButtonClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/addevent/${Id}`);
            window.location.href = "/AdminviewEvents";
            // navigate("/AdminviewEvents");
            alert("Event Deleted Successfully!");
        } catch (error) {
            alert("Failed to Delete Event!");
            console.error(error);
        }
    };


    return (
        <div>
            <div className="Deletecontainer">
                <div className="Deletecontent">
                <div className="Deleteeventcreatebox">
                    <div className=''>
                        <a href="/AdminviewEvents"><img className="DeleteImage" src="https://cdn-icons-png.flaticon.com/512/8367/8367508.png"></img></a>
                        <h1 className='DeleteTitle'>Delete Confirmation</h1>
                        {/* <img src='https://www.shutterstock.com/shutterstock/photos/1813772690/display_1500/stock-photo-calendar-or-date-remove-sign-icon-or-logo-cancel-the-calendar-concept-event-calendar-remove-1813772690.jpg'/> */}
                            <div className="DeleteMessage">
                                <h3 className="DeleteMessage1">Do you want to delete&nbsp;' {Eventtype} ' Added by You?&nbsp;</h3>
                            </div>
                            <br></br>
                            <a href="/AdminviewEvents"><button className="DeleteCancel">Cancel</button></a><button onClick={handleButtonClick} className="DeleteButton">Delete</button>

                            </div>
                            
                    </div>
                </div>
                </div>
            </div>
    )
}
export default Delete;