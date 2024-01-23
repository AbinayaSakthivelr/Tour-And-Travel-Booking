import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const footerStyle = {
    display: 'flex',
    color: 'white',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: '20px',
    width: '100%', // Set the footer to 100% width
    boxSizing: 'border-box',
  };

  const sectionStyle = {
    width: '100%',
    display: 'flex',
    color: 'white',
    marginLeft: '300px',
    // Added flex display
    justifyContent: 'space-between',
    fontSize: '20px',
    // Spacing between elements in the section
  };
  const contactSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '200px',
  };
  const iconStyle = {
    color: 'green',
    border: '1px solid green',
    borderRadius: '5px',
    padding: '10px', // Increase padding for larger icons
    margin: '5px',
    cursor: 'pointer', // Add cursor pointer for better UX
    fontSize: '24px',
    marginRight:'20px' // Set the desired font size for the icons
  };
  const iconAndTextContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  const iconTextStyle = {
    color: 'white',
    marginLeft: '10px',
    marginTop: '20px',
    fontSize: '18px',
  };
  const linkStyle = {
    // Set the color to white
    textDecoration: 'none', // Remove underline
    marginRight: '170px', 
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
     
    cursor: 'pointer',// Add some spacing between links
  };
 
  const travellerStyle = {
    color: 'white',
    marginLeft: '0', // Set margin-left to zero for Traveller section
    marginTop: '20px', // Adjust the margin-top for Traveller section
  };

  const travellerErStyle = {
    color: 'green',
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <div className="traveller" style={travellerStyle}>
          <h3>
            Travell<span style={travellerErStyle}>er</span>
          </h3>
          <ul>
            <li>About Travel</li>
            <li>Services</li>
            <li>Destination Services</li>
            <li>Travel Guides</li>
          </ul>
        </div>
        <div className="follow_header">
          <h3>Follow Us</h3>
          <div style={{ display: 'flex'}}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" style={iconStyle}></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" style={iconStyle}></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" style={iconStyle}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={iconStyle}></i>
            </a>
          </div>
        </div>
        <div style={linkStyle}>
        <h3 style={{ marginRight: '140px',fontWeight:'bold' }}>Our Services</h3>
      <Link to="/about_us" style={linkStyle}>About Us</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/packages" style={linkStyle}>Packages</Link>
      <Link to="/destination" style={linkStyle}>Destination</Link>
      <Link to="/booking" style={linkStyle}>Booking</Link>
      <Link to="/travelguide" style={linkStyle}>Travel Guides</Link>
        </div>
      </div>
      <div style={contactSectionStyle}>
        <div>
        <h3 style={{ marginLeft: '45px',fontWeight:'bold' }}>Contact Us</h3>
          <div>
            <div style={iconAndTextContainerStyle}>
              <i className="fas fa-map-marker-alt" style={iconStyle}></i>
              <p style={iconTextStyle}>123 Street, New York, USA</p>
            </div>
            <div style={iconAndTextContainerStyle}>
              <i className="fas fa-mobile-alt" style={iconStyle}></i>
              <p style={iconTextStyle}>+1 123 456 7890</p>
            </div>
            <div style={iconAndTextContainerStyle}>
              <i className="far fa-envelope" style={iconStyle}></i>
              <p style={iconTextStyle}>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
