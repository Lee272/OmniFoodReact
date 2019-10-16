import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import '../style.css'
import Logo from '../img/logo-white.png';

export default function Navigation() {
  return(
    <Navbar variant="dark" expand="lg" className="main-nav sticky-top">
      <Navbar.Brand href="#home">
        <img src={Logo} alt={"logo"} style={{height: '5em'}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
      <div className="align-content-end">
        {/* <img src={Logo} alt={"logo"} style={{height: '50px'}} /> */}
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <a href="#FoodDelivery">Food delivery</a>
          </li>
          <li className="list-group-item">
            <a href="#How">How It Works</a>
          </li>
          <li className="list-group-item">
            <a href="#Cities">Cities</a>
          </li>
          <li className="list-group-item">
            <a href="#SignUp">Sign Up</a>
          </li>
        </ul>
      </div>
    </Navbar.Collapse>
  </Navbar>
)}
