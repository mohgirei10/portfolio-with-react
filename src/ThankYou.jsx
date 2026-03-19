import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="w3-black" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      transition: 'background-color 0.4s ease' 
    }}>
      <div className="w3-container w3-center w3-animate-zoom" style={{ maxWidth: '600px' }}>
        {/* Success Icon */}
        <i className="fa fa-check-circle w3-text-amber" style={{ fontSize: '90px' }}></i>
        
        {/* Main Message */}
        <h1 className="w3-jumbo w3-text-light-grey">Got it!</h1>
        <p className="w3-text-grey w3-large">
          Thanks for reaching out, Adamu. Your message has been sent successfully. 
          I will review it and get back to you as soon as possible.
        </p>
        
        <br />

        {/* Navigation Button */}
        <Link 
          to="/" 
          className="w3-button w3-amber w3-padding-large w3-round-large w3-hover-light-grey"
          style={{ textDecoration: 'none', fontWeight: 'bold' }}
        >
          <i className="fa fa-arrow-left"></i> BACK TO PORTFOLIO
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;