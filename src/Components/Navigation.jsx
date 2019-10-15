import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import '../style.css'
import Logo from '../img/logo-white.png';

export default function Navigation() {
  return(
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Brand href="#home">
        <img src={Logo} alt={"logo"} style={{height: '3em'}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      <div>
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
