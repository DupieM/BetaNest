import React from 'react';
import './auth.css';
import img from '../../assets/login.png'

function LoginPage() {
  return (
    <div className="login-container">

      <img src={img} alt="Login" className="login-image"/>

      <div className="form-container">
        <h2 className="Heading">Login</h2>

        <form>
          <div className="form-group">
            <input
              className="bottom-line-input"
              type="text"
              placeholder="Full Name"
              required
            />

            <br />
            <br />

            <input
              className="bottom-line-input"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>

          <br />
          <br />

          <h5 className="">Don’t have an account? <a href="/signup"><p>Register</p></a></h5>

        </form>
      </div>

    </div>
  );
}

export default LoginPage;