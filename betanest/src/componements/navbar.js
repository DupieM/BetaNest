import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import navbarBackground from './navbar_bg.png';
import logo from './logo.png'

function BasicNavbar() {
  return (
    <Navbar
      variant="dark"
      className="navbar"
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <Container className="navbar-container">

        <Navbar.Brand as={Link} to="/" style={{ marginLeft: "20px" }}>
          <img src={logo} alt="Logo" style={{ width: '70%', marginTop: '-20px' }} />
        </Navbar.Brand>

        <h3 className="brandname"><Link to="/"><span>BETANEST</span></Link></h3>

        <div className="navbar-links">
          <Link to="/pricing"><span>Pricing</span></Link>
          <Link to="/developer"><span>Developers</span></Link>
          <Link to="/tester"><span>Testers</span></Link>
        </div>

        <p style={{color: '#7EC385', marginRight: '20px'}}>Register</p>

      </Container>
    </Navbar>
  )
}

export default BasicNavbar;