import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Button, Nav, NavDropdown} from 'react-bootstrap';
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return(
      <div className="">
      
        <Navbar expand="lg" bg="dark" variant="dark" fixed="bottom">
          <div className=" container text-center">
            <p>
              The <a href="https://www.asterisk.org/" target="_blank"><strong>'Asterisk'</strong></a> name and logos are trademarks owned by <a href="https://www.digium.com/" target="_blank"><strong>Digium, Inc</strong></a>. <a href="https://www.asterisk.org/"><em>Asterisk</em></a> is distributed under the <a href="https://www.gnu.org/licenses/gpl-2.0.html" target="_blank"><em>GNU General Public License version 2</em></a>.
            </p> 
          </div>
        </Navbar>

      </div>
    );
  }
}