import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    
    <div className="booking-container">
      <div className="left-section">
        <h2>Online Booking</h2>
        <p>Online booking simplifies the way we access services and make reservations or purchases over the internet. It has revolutionized how we interact with various industries, allowing us to effortlessly book flights, hotels, event tickets, restaurant tables, healthcare appointments, and more. This convenience empowers users to browse options, compare prices, and secure reservations or purchases at their convenience, often from the comfort of their homes. The efficiency, ease of access, and instantaneous confirmations provided by online booking systems have significantly transformed how we plan, schedule, and engage with a myriad of services in our daily lives.</p>
        <a href="#" className="read-more">
          Read More
        </a>
      </div>
     
    <div className="navigation-links">
      
        <Link to="/flight" className="booking-link">
          <b>Flight</b>
        </Link>
        <Link to="/train" className="booking-link">
          <b>Train</b>

        </Link>
      </div>

      <div className="right-section">
        <div className="transparent-box">
          <h2>Your Details</h2>
          <form className="form-input">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" placeholder="Your Name" className="form-input" style={{ width: '700px' }} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Email" className="form-input" />

            <label htmlFor="datetime">Date and Time:</label>
            <input type="datetime-local" id="datetime" placeholder="Date and Time" className="form-input" />

            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" placeholder="Destination" className="form-input" style={{ width: '700px' }} />

            <label htmlFor="requests">Special Requests:</label>
            <textarea id="requests" placeholder="Special Requests" className="form-input"></textarea>

            <div className="submit">
              <button type="submit">Submit</button>
            </div>
            <Link to="/payment" className="payment-link">
          Go to Payment
        </Link>
          </form>
         
        </div>
      </div>
    </div>
    
  );
};

export default Booking;
