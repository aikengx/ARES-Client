import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Icon, Footer } from "react-bulma-components/full";
// import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
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
      <footer class="footer">
        <div class="columns">
          <div class="column has-text-centered">
            <div>
              <i><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></i>
              <i><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></i>
              <i><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i>
              <a href="https://www.linkedin.com/in/aikengx" target="_blank"><i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i></a>
              <i><FontAwesomeIcon icon={faSlack}></FontAwesomeIcon></i>
            </div>
          </div>
          <div class="column has-text-centered">
            <p>
              The <a href="https://www.asterisk.org/" target="_blank"><strong>'Asterisk'</strong></a> name and logos are trademarks owned by <a href="https://www.digium.com/" target="_blank"><strong>Digium, Inc</strong></a>. <a href="https://www.asterisk.org/"><em>Asterisk</em></a> is distributed under the <a href="https://www.gnu.org/licenses/gpl-2.0.html" target="_blank"><em>GNU General Public License version 2</em></a>.
            </p>
          </div>
          <div class="column has-text-centered">
            <span id="datetime">{this.datetime()}</span>
          </div>
        </div>
        <div class="content has-text-centered">
        </div>
      </footer>
    );
  }
}