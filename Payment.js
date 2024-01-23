import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log('Next button clicked!');
    navigate('/fourthpage');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }} className="payment-container">
      <h1 style={{ color: '#050505' }}>Payment Method</h1>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #ffffff',
          borderRadius: '8px',
          padding: '20px',
          margin: '20px auto',
          maxWidth: '400px',
        }}
        className="payment-card"
      >
        <div style={{ marginRight: '20px' }} className="payment-logo">
          <img src="https://www.arribatrends.com/wp-content/uploads/2020/09/Paytm.jpg" alt="PaytmLogo" style={{ width: '50px' }} />
        </div>

        <h2 style={{ color: '#333' }}>Paytm</h2>
        <a href="https://play.google.com/store/apps/details?id=net.one97.paytm" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '8px', transition: 'color 0.3s' }}>
          Go to Paytm
        </a>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #ffffff',
          borderRadius: '8px',
          padding: '20px',
          margin: '20px auto',
          maxWidth: '400px',
        }}
        className="payment-card"
      >
        <div style={{ marginRight: '20px' }} className="payment-logo">
          <img src="https://i.pinimg.com/736x/60/5a/bd/605abdb7af3405c6b20a426b1e128322.jpg" alt="GooglePayLogo" style={{ width: '50px' }} />
        </div>

        <h2 style={{ color: '#333' }}>GooglePay</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'none', marginLeft: '8px', transition: 'color 0.3s' }}
        >
          Go to Google Pay
        </a>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #ffffff',
          borderRadius: '8px',
          padding: '20px',
          margin: '20px auto',
          maxWidth: '400px',
        }}
        className="payment-card"
      >
        <div style={{ marginRight: '20px' }} className="payment-logo">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" alt="PhonePeLogo" style={{ width: '50px' }} />
        </div>

        <h2 style={{ color: '#333' }}>PhonePe</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.phonepe.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'none', marginLeft: '8px', transition: 'color 0.3s' }}
        >
          Go to PhonePe
        </a>
      </div>

      <div>
        <button
          className="next-button"
          onClick={handleNext}
          style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', borderRadius: '5px', marginTop: '10px', transition: 'background-color 0.3s' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Payment;
