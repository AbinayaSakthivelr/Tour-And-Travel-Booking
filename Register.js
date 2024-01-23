import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>Name</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Email</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Address</label>
        <input className="registerInput" type="password" placeholder="Enter your Address..." />
        <label>Date of Birth</label>
        <input className="registerInput" type="password" placeholder="Enter your dob..." />
        <label>Phone Number</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Country</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>City</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Postal Code</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Occupation</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Security Question</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Security Answer</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Preferred Language</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Other Details</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>

      <Link to="/login" className="goBackLink">
        <button className="goBackButton">
          Go back to Login
        </button>
      </Link>
    </div>
  );
}
