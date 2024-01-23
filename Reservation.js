
/*import React from 'react';

const Reservation = () => {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
    color: 'lime',
    fontSize: '40px',
  };

  const formContainerStyle = {
    maxWidth: '490px',
    margin: '0 auto',
  };

  const formGroupStyle = {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box', // Include padding and border in the width
  };

  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };
  const countries = [
    'Select Country',
    'United States',
    'Canada',
    'United Kingdom',
    // Add more countries as needed
  ];

  return (
    <div>
      <h2 style={titleStyle}>Reservation Details</h2>
      <div style={formContainerStyle}>
        <form>
          <div style={formGroupStyle}>
            <div style={flexContainerStyle}>
              <div style={{ marginRight: '10px', width: '49%' }}>
                <label htmlFor="firstName" style={labelStyle}>
                  First Name
                </label>
                <input type="text" id="firstName" name="firstName" style={inputStyle} required />
              </div>
              <div style={{ width: '49%' }}>
                <label htmlFor="lastName" style={labelStyle}>
                  Last Name
                </label>
                <input type="text" id="lastName" name="lastName" style={inputStyle} required />
              </div>
            </div>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input type="email" id="email" name="email" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="phone" style={labelStyle}>
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="address" style={labelStyle}>
              Address
            </label>
            <input type="text" id="address" name="address" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="city" style={labelStyle}>
              City
            </label>
            <input type="text" id="city" name="city" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="state" style={labelStyle}>
              State/Province
            </label>
            <input type="text" id="state" name="state" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="postal" style={labelStyle}>
              Postal/Zip Code
            </label>
            <input type="text" id="postal" name="postal" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
        <label htmlFor="country" style={labelStyle}>
          Country
        </label>
        <select id="country" name="country" style={inputStyle} required>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
          
        </form>
      </div>
    </div>
  );
};

export default Reservation;*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Reservation = () => {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
    color: 'lime',
    fontSize: '40px',
  };

  const formContainerStyle = {
    maxWidth: '490px',
    margin: '0 auto',
  };

  const formGroupStyle = {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  };

  const selectContainerStyle = {
    position: 'relative',
    width: '100%',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    right: '8px',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  };

  const countries = [
    'Select Country',
    'United States',
    'Canada',
    'United Kingdom',
    // Add more countries as needed
  ];

  return (
    <div>
      <h2 style={titleStyle}>Reservation Details</h2>
      <div style={formContainerStyle}>
        <form>
          <div style={formGroupStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ marginRight: '10px', width: '49%' }}>
                <label htmlFor="firstName" style={labelStyle}>
                  First Name
                </label>
                <input type="text" id="firstName" name="firstName" style={inputStyle} required />
              </div>
              <div style={{ width: '49%' }}>
                <label htmlFor="lastName" style={labelStyle}>
                  Last Name
                </label>
                <input type="text" id="lastName" name="lastName" style={inputStyle} required />
              </div>
            </div>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input type="email" id="email" name="email" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="phone" style={labelStyle}>
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="address" style={labelStyle}>
              Address
            </label>
            <input type="text" id="address" name="address" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="city" style={labelStyle}>
              City
            </label>
            <input type="text" id="city" name="city" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="state" style={labelStyle}>
              State/Province
            </label>
            <input type="text" id="state" name="state" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="postal" style={labelStyle}>
              Postal/Zip Code
            </label>
            <input type="text" id="postal" name="postal" style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="country" style={labelStyle}>
              Country
            </label>
            <div style={selectContainerStyle}>
              <select id="country" name="country" style={inputStyle} required>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon icon={faChevronDown} style={iconStyle} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
