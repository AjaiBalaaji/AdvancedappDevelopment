import React from 'react'
import './MyBookings.css'
import NavbarUser from '../Components/NavbarUser'

const MyBookings = () => {
  return (
    <div className='MyBookings'>
        <NavbarUser/>
        <div className="MyBookingsEvent">
      <div className="table77">
      
      <div className="EventBookingtable">
      <div className="grid-container">
  <div className="grid-item">Student Name: Ajai</div>
  <div className="grid-item">Student phone: 9955435272</div>
  <div className="grid-item">Student phone: 9955435272</div>
  <div className="grid-item">Student phone: 9955435272</div>
  <div className="grid-item">Student phone: 9955435272</div>
  </div>
  <div className="grid-item3"><button className='CancelBooking'>cancel-Booking</button></div>
  <div className="grid-item3"><button className='Bookotherevent'>book another event</button></div>
</div>
      </div>
    </div>
    </div>
  )
}

export default MyBookings