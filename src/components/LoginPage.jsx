import React, { useState } from 'react';

function LoginPage({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Add your login logic here
    // For now, simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle successful login
      console.log('Login submitted:', formData);
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    // Add Google sign-in logic here
    console.log('Google sign-in clicked');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .login-page * {
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;
        }
        
        .login-page {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: white;
          z-index: 10000;
          overflow-y: auto;
        }
        
        .login-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 1rem;
        }
        
        .login-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .login-close:hover {
          background-color: #f3f4f6;
        }
        
        .login-logo {
          width: 2.5rem;
          height: 2.5rem;
          background-color: #000;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        
        .login-form-wrapper {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .login-input-wrapper {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .login-input {
          width: 100%;
          padding: 0.625rem 0.75rem 0.625rem 2.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        
        .login-input:focus {
          outline: none;
          border-color: #000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }
        
        .login-input-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          pointer-events: none;
        }
        
        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #6b7280;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .password-toggle:hover {
          color: #374151;
        }
        
        .login-submit-btn {
          width: 100%;
          padding: 0.625rem 1rem;
          background-color: #000;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
          margin-bottom: 0.5rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        
        .login-submit-btn:hover {
          background-color: #1f2937;
        }
        
        .login-submit-btn:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
        }
        
        .forgot-password {
          display: block;
          text-align: center;
          font-size: 0.75rem;
          color: #4b5563;
          cursor: pointer;
          margin: 0 auto 1rem;
          background: none;
          border: none;
          width: 100%;
        }
        
        .forgot-password:hover {
          color: #6366f1;
        }
        
        .divider {
          display: flex;
          align-items: center;
          margin: 1rem 0;
          gap: 1rem;
        }
        
        .divider-line {
          flex: 1;
          height: 1px;
          background-color: #d1d5db;
        }
        
        .divider-text {
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .google-signin-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background-color: white;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        
        .google-signin-btn:hover {
          background-color: #f9fafb;
        }
        
        .signup-link {
          text-align: center;
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 1rem;
        }
        
        .signup-link a {
          color: #6366f1;
          text-decoration: none;
        }
        
        .signup-link a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 640px) {
          .login-form-wrapper {
            padding: 0 1.5rem;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="login-container">
          {/* Close Button */}
          <button className="login-close" onClick={onClose} type="button">
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill="currentColor"/>
            </svg>
          </button>

          <div className="login-form-wrapper">
            {/* Logo */}
            <div className="login-logo">
              <img 
                src="/assets/icons/black_logo.png" 
                alt="CallMira Logo" 
                style={{ width: '1.875rem', height: '1.875rem', borderRadius: '0.375rem' }}
              />
            </div>

            {/* Title */}
            <h2 
              style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '1rem',
                paddingBottom: '1rem',
                color: '#111827'
              }}
            >
              Login
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div style={{ marginBottom: '1rem' }}>
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.25rem'
                  }}
                >
                  Email
                </label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="login-input"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div style={{ marginBottom: '1rem' }}>
                <label 
                  htmlFor="password"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.25rem'
                  }}
                >
                  Password
                </label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="login-input"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-.722-3.25"></path>
                        <path d="M2 8a10.645 10.645 0 0 0 20 0"></path>
                        <path d="m20 15-1.726-2.05"></path>
                        <path d="m4 15 1.726-2.05"></path>
                        <path d="m9 18 .722-3.25"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="login-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>

              {/* Forgot Password */}
              <button 
                type="button"
                className="forgot-password"
              >
                I forgot my password
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>

            {/* Google Sign In */}
            <button 
              type="button"
              className="google-signin-btn"
              onClick={handleGoogleSignIn}
            >
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.2 0 5.8 1.1 7.9 2.9l5.9-5.9C34.1 3 29.4 1 24 1 14.8 1 6.9 6.7 3.5 14.3l6.9 5.4C12 13.5 17.6 9.5 24 9.5z"></path>
                <path fill="#34A853" d="M24 44c6.2 0 11.4-2.1 15.2-5.6l-7.1-5.8c-2.1 1.5-4.9 2.4-8.1 2.4-6.4 0-11.8-4.3-13.7-10.2l-7 5.4C7.1 38.9 14.9 44 24 44z"></path>
                <path fill="#4A90E2" d="M43.6 20.4H24v8.2h11.2c-1.2 3.2-3.5 5.9-6.5 7.7l7.1 5.5c4.1-3.8 6.5-9.4 6.5-15.8 0-1.3-.1-2.6-.3-3.9z"></path>
                <path fill="#FBBC05" d="M10.3 27.6c-.5-1.3-.8-2.7-.8-4.1s.3-2.8.8-4.1l-7-5.4C2.5 17.3 1 20.5 1 24s1.5 6.7 4.3 9.5l7-5.9z"></path>
              </svg>
              <span style={{ color: '#374151' }}>Sign in with Google</span>
            </button>

            {/* Sign Up Link */}
            <p className="signup-link">
              Don't have an account? <a href="#signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;