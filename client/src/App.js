import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

// import { Button, Section, Hero, Column, Container, Navbar } from "react-bulma-components/full";

// import { faAt, faHeadset } from "@fortawesome/free-solid-svg-icons";
// import { faGithub, faLinkedin, faInstagram, faTwitter, faFacebook, faSlack } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './App.css';

// import { Button, Navbar, Icon, Hero, Section, Column } from "react-bulma-components/full";
// // import Navigation from './components/Navigation';
// import NavigationBar from './components/NavigationBar'
// // import Footer from './components/Footer';
// import FooterBar from './components/FooterBar';

import Agent from './components/Agent';
import Landing from './Landing';

class App extends Component {


  render() {
    return (
      <div className="App">

      {/* <NavigationBar /> */}
      {/* <FooterBar /> */}

        <Switch>
        <Route exact path="/agent" component={Agent}/>
        <Route exact path="/" component={Landing}/>
        <Route render={() => <h2>404</h2>} />

        </Switch>

        

   </div>
    );
  }
}

export default App;
