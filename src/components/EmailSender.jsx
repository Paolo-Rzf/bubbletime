import React, { useState } from 'react';
import "css/EmailSender.css"

const EmailSender = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target);
    setEmail(event.target.value);
    setErrorMessage('');
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setErrorMessage('Veuillez saisir une adresse e-mail valide.');
    } else {
      window.open(`mailto:${email}`, '_blank');
      setEmail('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      validateEmail()
    }
  };

  return (
    <div className="email-input-container py-5 m-0 w-full relative max-w-md mx-0">
      <div className='relative'>
        <input
          type="email"
          placeholder="Emails"
          value={email}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`${errorMessage ? 'error' : ''} px-5 py-3 rounded-full text-xl m-0`}
        />
        <button className="arrow-button absolute top-[50%] translate-y-[-50%] translate-x-[-100%] btn p-2 w-16 h-16 rounded-full" onClick={validateEmail}>
          <img src="icons/arrow.svg" />
        </button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default EmailSender;