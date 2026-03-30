import React from 'react';

function SignupPage() {
  return (
    <div className="App">
      <p>
        Signup Page
      </p>

      <div className="form-group">
        <label className="labels">Full Name</label> <br />
        <input
          type="text"
          required
        />

        <br />

        <label className="labels-two">Email</label> <br />
        <input
          type="email"
          required
        />

        <br />

        <label className="labels">Password</label> <br />
        <input
          type="password"
          required
        />
      </div>

      <br />

      <button type="submit" className="submit-button">
        Sign Up
      </button>

      

    </div>
  );
}

export default SignupPage;