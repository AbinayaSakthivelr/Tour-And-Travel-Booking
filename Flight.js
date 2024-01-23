import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Flight = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobYear, setDobYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      firstName,
      lastName,
      dobMonth,
      dobDay,
      dobYear,
    };
    console.log(bookingDetails);
  };

  // Inline CSS for the "Next" button
  const nextButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
  };
 

  return (
    <div className="flight-booking-container">
      <h2>FLIGHT RESERVATION</h2>
      <form onSubmit={handleSubmit} className="flight-booking-form">
        <h5>Passenger Name</h5>
        <div className="name-container">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div className="name-gap">
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <h6>Date of Birth</h6>
        <div className="dob-container">
          <div className="form-group">
            <label htmlFor="dobMonth">Month:</label>
            <input
              type="text"
              id="dobMonth"
              value={dobMonth}
              onChange={(e) => setDobMonth(e.target.value)}
              placeholder="Month"
              required
            />
          </div>
          <div className="name-gap">
          </div>
          <div className="form-group">
            <label htmlFor="dobDay">Day:</label>
            <input
              type="text"
              id="dobDay"
              value={dobDay}
              onChange={(e) => setDobDay(e.target.value)}
              placeholder="Day"
              required
            />
          </div>
          <div className="name-gap">
          </div>
          <div className="form-group">
            <label htmlFor="dobYear">Year:</label>
            <input
              type="text"
              id="dobYear"
              value={dobYear}
              onChange={(e) => setDobYear(e.target.value)}
              placeholder="Year"
              required
            />
          </div>
        </div>

        {/* Link styled as a button */}
        <Link
          to={{
            pathname: '/reservation',
            state: {
              firstName,
              lastName,
              dobMonth,
              dobDay,
              dobYear,
            },
          }}
          style={nextButtonStyle} // Apply styles to the Link component
        >
          Next
        </Link>
      </form>
    </div>
  );
};

export default Flight;
