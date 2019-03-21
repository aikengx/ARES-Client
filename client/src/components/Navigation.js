import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Button, Nav, NavDropdown} from 'react-bootstrap';
import { faUserCircle, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navigation extends Component {
  render() {
    return(

      <div className="">
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">WebRTC CALL CENTER CLIENT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <NavDropdown title="Tech" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Docs" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link><Link to="/agent"><span><FontAwesomeIcon icon={faHeadset}/></span><span className="small"></span></Link></Nav.Link>
              <Nav.Link href="#"><span><FontAwesomeIcon icon={faUserCircle}/></span><span className="small"></span></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <span><FontAwesomeIcon icon={faGithub}/></span><span className="small"></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
      
    );
  }
}