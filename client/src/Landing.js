import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
// import { Button, Section, Hero, Column, Container, Navbar } from "react-bulma-components/full";
// import './App.css';
import { faAt, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram, faTwitter, faFacebook, faSlack } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Landing extends Component {


  componentDidMount() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString('en-US', options);
  }


  render() {
    return (
      <div className="Landing">

        <section className="hero is-dark is-fullheight is-bold">
      {/* Hero head: will stick at the top */}
            <div className="hero-head">
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
                          <a id="ares-dropdown6" className="navbar-item" href="https://134.209.126.100:8089/ws" target="_blank">
                            <span className="about-dropdown">WebRTC Cert</span>
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
                      <Link to="/agent"><a className="button is-rounded is-info">
                          <span className="icon">
                           <i className="fab fa-github"><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></i> 
                          </span>
                          <span>Agent</span>
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
            </div>

            {/* <!-- Hero content: will be in the middle --> */}
            <div className="hero-body">
              <div className="container has-text-centered">
                <div id="ares-overlay" className="is-overlay">
                  <div><h1 className="title is-size-1 is-bold">&#x2731; REALTIME ENTERPRISE SOLUTION</h1></div>
                </div>
                <video id="ares-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                  {/* <source src="./videos/Using a Landline Telephone.mp4" type="video/mp4"></source> */}
                  <source src="../videos/Using a Landline Telephone.mp4"></source>
                </video>

              </div>
            </div>

            {/* <!-- Hero footer: will stick at the bottom --> */}
            <div className="hero-foot">

              <div className="columns">
                <div className="column has-text-centered">
                  <div>
                    <i className="fab fa-instagram fa-lg"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></i>
                    &nbsp;
                    <i className="fab fa-twitter fa-lg"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></i>
                    &nbsp;
                    <i className="fab fa-facebook fa-lg"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i>
                    &nbsp;
                    <a href="https://www.linkedin.com/in/aikengx" target="_blank"><i className="fab fa-linkedin fa-lg"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i></a>
                    &nbsp;
                    <i className="fab fa-slack fa-lg"><FontAwesomeIcon icon={faSlack}></FontAwesomeIcon></i>
                    &nbsp;
                    <a href="mailto:aikengx@gmail.com"><i className="fab fa-linkedin fa-lg"><FontAwesomeIcon icon={faAt}></FontAwesomeIcon></i></a>
                  </div>
                </div>
                <div className="column has-text-centered">
                  <p>
                    The <a href="https://www.asterisk.org/" target="_blank"><strong>'Asterisk'</strong></a> name and logos are trademarks owned by <a href="https://www.digium.com/" target="_blank"><strong>Digium, Inc</strong></a>. <a href="https://www.asterisk.org/"><em>Asterisk</em></a> is distributed under the <a href="https://www.gnu.org/licenses/gpl-2.0.html" target="_blank"><em>GNU General Public License version 2</em></a>.
                  </p>
                </div>
                <div className="column has-text-centered">
                  <span id="datetime"></span>
                </div>
              </div>
            </div>

              </section>

      
      </div>

   
    );
  }
}

export default Landing;
