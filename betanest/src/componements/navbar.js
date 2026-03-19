import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { Container, Nav, Navbar } from "react-bootstrap";

function BasicNavbar() {
  return (
    <Navbar variant="dark" className="navbar">
      <Container className="navbar-container">
        <div>
          <Navbar.Brand as={Link} to="/" style={{marginLeft: "20px"}}>
            <img alt="Logo" style={{width: '45%'}} />
          </Navbar.Brand>
        </div>


        <div className="navbar-right">
          <Link to="/pricing">
            <h7>Pricing</h7>
          </Link>
        </div>
        <div className="navbar-right2">
          <Link to="/developer">
            <h7>Developers</h7>
          </Link>
        </div>
        <div className="navbar-right3">
          <Link to="/tester">
            <h7>Testers</h7>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default BasicNavbar;