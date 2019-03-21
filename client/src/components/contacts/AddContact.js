import React, { Component } from 'react';
import { Button, Form } from "react-bulma-components/full";
import axios from 'axios';


export default class AddContact extends Component {


  handleFormSubmit = (event) => {
    //console.log(event.target.question.value);
    event.preventDefault();
    let route = event.target.question.value
    let name = event.target.name.value;
    let lname = event.target.lname.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let address = event.target.address.value;
    let image = event.target.image.value;
    axios.post(`http://localhost:5000/api/${route}`, { name, lname, email, phone, address, image })
    .then((responseFromApi) => {
      console.log(responseFromApi);
      if ( route === "contact") {
        alert("Contact created successfully");
        this.props.getAllContacts()
      } else {
        alert("Task created successfully");
        this.props.getAllTasks()
      }
      
    })
    .catch((err) => {
      console.log(err) 
    })
  }


  render() {
    return (

      <div>
        <form onSubmit={this.handleFormSubmit}>
        <div class="field">
          <label class="label is-pulled-left">First Name</label>
          <div class="control">
            <input name="name" class="input" type="text" placeholder="Enter first name..." required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">Last Name</label>
          <div class="control">
            <input name="lname" class="input" type="text" placeholder="Enter last name..." required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">email</label>
          <div class="control">
            <input name="email" class="input" type="email" placeholder="Enter email..." required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">Phone</label>
          <div class="control">
            <input name="phone" class="input" type="text" placeholder="Enter phone..." required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">Image URL</label>
          <div class="control">
            <input name="image" class="input" type="url" placeholder="Enter image URL..." required></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <textarea name="address" class="textarea" placeholder="Enter physical address" required></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" value="contact"></input>
              &nbsp;Contact
            </label>
            <label class="radio">
              <input type="radio" name="question" value="task"></input>
              &nbsp;Task
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
        </form>
      </div>

    );

  }
 
}
