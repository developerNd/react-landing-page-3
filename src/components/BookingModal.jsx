import React, { useState } from 'react';

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage('Thank you! We will get back to you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setStatusMessage('');
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .booking-modal * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(42, 41, 41, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          overflow-y: auto;
        }
        
        .modal-container {
          background: white;
          border-radius: 1rem;
          max-width: 920px;
          width: 100%;
          max-height: 80vh;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: grid;
          grid-template-columns: 1fr;
          margin: auto;
        }
        
        @media (min-width: 768px) {
          .modal-container {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: white;
          border: none;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background-color 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        
        .modal-close:hover {
          background-color: #f3f4f6;
        }
        
        .modal-image {
          position: relative;
          min-height: 350px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .modal-form-section {
          padding: 2rem;
          background: white;
          overflow-y: auto;
          max-height: 85vh;
        }
        
        .custom-input, .custom-txtarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          margin-bottom: 0.8rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background-color: #fff;
        }
        
        .custom-input:focus, .custom-txtarea:focus {
          outline: none;
          border-color: #000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }
        
        .custom-txtarea {
          min-height: 100px;
          resize: none;
          font-family: inherit;
        }
        
        /* Prevent zoom on mobile inputs */
        @media screen and (max-width: 767px) {
          .custom-input, .custom-txtarea {
            font-size: 16px;
          }
        }
        
        .submit-btn {
          width: 100%;
          padding: 0.875rem 1.5rem;
          background-color: #000;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 400;
          font-size: 15px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .submit-btn:hover {
          background-color: #1f2937;
        }
        
        .submit-btn:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
        }
        
        .spinner {
          text-align: center;
          padding: 1rem;
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .status-message {
          text-align: center;
          padding: 0.75rem;
          margin-top: 1rem;
          border-radius: 0.5rem;
          background-color: #d1fae5;
          color: #065f46;
          font-size: 0.875rem;
        }
        
        @media (max-width: 767px) {
          .modal-overlay {
            align-items: flex-start;
            padding: 1rem;
          }
          
          .modal-container {
            max-height: none;
            min-height: auto;
            border-radius: 1rem;
            overflow-y: visible;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          
          .modal-image {
            min-height: 200px;
          }
          
          .modal-form-section {
            padding: 1.5rem;
            max-height: none;
            overflow-y: visible;
          }
          
          .modal-close {
            top: 0.75rem;
            right: 0.75rem;
            width: 2rem;
            height: 2rem;
          }
          
          .modal-close svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>

      <div className="booking-modal">
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close" onClick={onClose} type="button">
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.625 19.4375L0 1.8125L1.82813 0L19.4531 17.625L17.625 19.4375ZM1.82813 19.4375L0 17.625L17.625 0L19.4531 1.8125L1.82813 19.4375Z" fill="black"></path>
              </svg>
            </button>

            {/* Left Side - Image */}
            <div className="modal-image">
              <img 
                src="/assets/images/Group-16.png" 
                alt="Customer service representative" 
              />
            </div>

            {/* Right Side - Form */}
            <div className="modal-form-section">
              <h2 
                style={{
                  fontSize: 'clamp(1.45rem, 4vw, 2.22rem)',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  lineHeight: '1.2'
                }}
              >
                Let's have a conversation today!
              </h2>
              
              <p 
                style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  color: 'rgb(25, 25, 25)',
                  marginBottom: '1.2rem',
                  fontWeight: '500'
                }}
              >
                Fill out the form below and we will get back to you as soon as possible.
              </p>

              {!isSubmitting && !statusMessage && (
                <form onSubmit={handleSubmit}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="custom-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    required
                  />
                  
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="custom-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email id..."
                    required
                  />
                  
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="custom-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number..."
                    required
                  />
                  
                  <textarea
                    id="message"
                    name="message"
                    className="custom-input custom-txtarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your requirement..."
                    required
                  ></textarea>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </form>
              )}

              {isSubmitting && (
                <div className="spinner">Submitting...</div>
              )}

              {statusMessage && (
                <div className="status-message">{statusMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingModal;