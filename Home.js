import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa'; 


function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const transparentBoxStyles = {
    marginRight:'800px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 60px)', // Adjust 60px according to your navigation height
  };
  const travellerBoxStyles = {
    border: '2px solid #00FF00', // Green color for the border
    padding: '5px 10px',
    borderRadius: '5px',
  };
  const boxContentStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark black color with higher opacity
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '700px',
    margin: '0 auto',
    border: '2px solid #00FF00', // Green color for the initial border
    animation: 'glowBorder 1.5s ease-in-out infinite', // Apply the animation
  };

  const glowBorder = `
  @keyframes glowBorder {
    0% {
      border-color: #00FF00; /* Start color - green */
      box-shadow: 0 0 10px #00FF00; /* Start glowing effect */
    }
    100% {
      border-color: #00FF00; /* End color - green */
      box-shadow: 0 0 10px #00FF00; /* Keep glowing effect continuously */
    }
  }
`;

  const headingStyles = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight:'bold',
  };
  const paragraphStyles = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '30px',
    textAlign: 'center',
    color:'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
   // Adjust the top padding to accommodate the border-top
    // Green color for the border-top
  };
  const buttonStyles = {
    display: 'inline-block',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'Lime',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };
 

  const handleHover = {
    backgroundColor: '#0056b3',
  };
  const travellerStyle = {

   
    marginLeft: '20px', // Adjust the margin-left as needed
    position: 'absolute',
    left: '90px',
    fontSize:'46px',
   marginBottom:'13px',
    height:'63px',

     // This value determines the distance from the left margin
  };
  const greenText = {
    color: 'white',
  };
  
  const greenEr = {
    color: '#00FF00', // Green color
  };
  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-items nav-box">
        <style>{glowBorder}</style>
        <div className="traveller-style" style={travellerStyle}>
          <span style={greenText}>Travell</span>
          <span style={greenEr}>er</span>
        </div>
          <Link to="/about_us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
          
          {/* Add more links as needed */}
          {/* ... */}
          <div className="dropdown-container">
            <div className="dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
              <button className="dropbtn">

                Pages <FaAngleDown />
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/destination">Destination</Link>
                  <Link to="/booking">Booking</Link>
                  <Link to="/travelguide">TravelGuide</Link>
                 
                </div>
              )}
            </div>
          </div>
        </div>
        <Link to="/login" className="get-started-button">
          Get Started
        </Link>
      </nav>

      <div style={transparentBoxStyles}>
        <div style={boxContentStyles}>
          <h2 style={headingStyles}>Explore the World With Us</h2>
          <p style={paragraphStyles}>
          "Welcome to our world of endless exploration and unforgettable journeys! At [TRAVELLER], we believe in turning dreams into reality. From breathtaking landscapes to cultural marvels, our curated tours promise an immersive experience. 
          </p>
          <Link to="/about_us" style={{ ...buttonStyles, ...(showDropdown && handleHover) }}>
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
