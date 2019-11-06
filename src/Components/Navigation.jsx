import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../style.css'
import Logo from '../img/logo-white.png';
import User1 from '../img/customer-1.jpg';


export default class Navigation extends React.Component {

state = { userLog: false };

userLogon = () => {
  this.setState({ userLog: !this.state.userLog })
}

  render() {
    console.log(this.state.userLog)
    return(
    <div className="">
      <Navbar fluid={true} variant="dark" expand="lg" className="main-nav m-2 px-4">
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
            <li className="list-group-item mr-2 p-0 flex items-center">
              <img className="hidden w-12 h-12 rounded-full" onTouchMove={this.state.userLogon}
                src={User1} alt="User1" />
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )}
}