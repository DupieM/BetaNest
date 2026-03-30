import React from 'react';

function LoginPage() {
  return (
    <div className="App">
      <p>
        Login Page bb
      </p>

      <div className="form-group">
        <label className="labels">Full Name</label> <br />
        <input
          type="text"
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
        Login
      </button>


    </div>
  );
}

export default LoginPage;