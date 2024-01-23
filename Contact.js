import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Contact = () => {
  return (
    <div className="background2">
      <div className="contact-page">
        <header className="main-header">Contact</header>
        <div className="header-contact">For general inquiries:</div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your message"></textarea>
            <br />
            <button
              type="button"
              onClick={() => console.log('Sending message')}
              style={{ marginLeft: '200px',borderRadius:'14px' }} // Adjust the margin-left here
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
