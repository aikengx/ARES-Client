import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { Column } from "react-bulma-components/full";
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Tab, Tabs } from 'react-bootstrap'
import Phone from './phone/Phone';
import Dashboard from './dashboard/Dashboard';
import NavigationBar from './NavigationBar';
// import FooterBar from './FooterBar';


export default class Agent extends Component {


  render() {
    return(
      <div>
        <NavigationBar />
        <div class="columns">
          <div class="column is-half"><Phone /></div>
          <div class="column"><Dashboard /></div>
        </div>
      
      </div>
      
    );
  }
}