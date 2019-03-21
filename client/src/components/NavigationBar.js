import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Navbar, Icon } from "react-bulma-components/full";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class NavigationBar extends Component {
  render() {
    return (
        
      <nav className="navbar is-dark">
                <div className="container">
                  <div className="navbar-brand">
                    {/* <a className="navbar-item ">
                      <img id="hoplon" className="has-background-grey-lighter" src="../images/hoplon.png" alt="logo" disabled></img>
                    </a> */}
                    <a className="navbar-item" href="/">
                      {/* <span className="content is-bold is-size-3 has-text-white has-text-weight-normal is-family-monospace">ARES</span> */}
                      <h1 id="ares-title">&#x2731; ARES</h1>
                    </a>
                    <span id="navbar-burger" className="navbar-burger burger" data-target="navbarMenuHeroA">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                      <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                          Tech
                        </a>
                        <div className="navbar-dropdown">
                          <a id="ares-dropdown" className="navbar-item" href="https://www.asterisk.org/" target="_blank">
                            <span className="about-dropdown">Asterisk</span>
                          </a>
                          <a id="ares-dropdown1" className="navbar-item" href="https://www.digium.com/" target="_blank">
                            <span className="about-dropdown">Digium</span>
                          </a>
                          <a id="ares-dropdown2" className="navbar-item" href="https://sipjs.com/" target="_blank">
                            <span className="about-dropdown">SIP.js</span>
                          </a>
                        </div>
                      </div>
                      <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                          Docs
                        </a>
                        <div className="navbar-dropdown">
                          <a id="ares-dropdown3" className="navbar-item" href="https://docs.google.com/presentation/d/e/2PACX-1vSOn87XvB17HwHwxIx2CKL7JzXozGXXqtbXNM-YTdrL9uuy0RUnKlKhWuS9S9PGi9Bnh4Lo3D7NPtz3/pub?start=false&loop=true&delayms=500" target="_blank">
                            <span className="about-dropdown">Slides</span>
                          </a>
                          <a id="ares-dropdown4" className="navbar-item" href="https://en.wikipedia.org/wiki/Session_Initiation_Protocol" target="_blank">
                            <span className="about-dropdown">SIP (Wikipedia)</span>
                          </a>
                          <a id="ares-dropdown5" className="navbar-item" href="https://www.ietf.org/rfc/rfc3261.txt" target="_blank">
                            <span className="about-dropdown">SIP (RFC)</span>
                          </a>
                        </div>
                      </div>
                      <span className="navbar-item">
                      <Link to="/"><a className="button is-rounded is-info">
                          <span id="home-icon" className="icon">
                           <i className="fab fa-github"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></i>  
                          </span>
                          <span id="home-shortcut">Home</span>
                        </a></Link> 
                      </span>
                      <span className="navbar-item">
                        <a className="button is-rounded" href="https://github.com/aikengx/ares-client" target="_blank">
                          <span className="icon">
                            <i className="fab fa-github"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></i>
                          </span>
                          <span>GitHub</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </nav>

    );
  }
}