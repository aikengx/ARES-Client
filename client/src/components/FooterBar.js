import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Icon, Footer } from "react-bulma-components/full";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebook, faLinkedin, faSlack  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class FooterBar extends Component {


  datetime = () => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dt = new Date();
    return dt.toLocaleDateString('en-US', options);
  }


  render() {
    return (
      
            <footer>
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
            </footer>
              
          
    );
  }
}