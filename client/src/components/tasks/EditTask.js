import React, { Component } from 'react';
import { Button, Form } from "react-bulma-components/full";
import axios from 'axios';


export default class EditContact extends Component {
  

  state = {
    task: {},
    name: "",
    lname: "",
    email: "",
    phone: "",
    image: "",
    address: "",
  }


  componentDidMount() {
      console.log(this.props.taskId)
      axios.get(`http://localhost:5000/api/task/${this.props.taskId}`)
      .then(responseFromApi => {
        console.log(responseFromApi.data)
        this.setState({
          task: responseFromApi.data
        })
      })
      .catch(err => {
        console.log(err)
      })

  }


  handleChangeName = (event) => {  
    this.setState({
      name: event.target.value
    })
  }


  handleChangeLname = (event) => {  
    this.setState({
      lname: event.target.value
    })
  }


  handleChangeEmail = (event) => {  
    this.setState({
      email: event.target.value
    })
  }
  
  
  handleChangePhone = (event) => {  
    this.setState({
      phone: event.target.value
    })
  }


  handleChangeImage = (event) => {  
    this.setState({
      image: event.target.value
    })
  }


  handleChangeAddress = (event) => {  
    this.setState({
      address: event.target.value
    })
  }

  
  handleFormSubmit = (event) => {
    //console.log(event.target.question.value);
    event.preventDefault();
    let name = event.target.name.value;
    let lname = event.target.lname.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let address = event.target.address.value;
    let image = event.target.image.value;
    axios.put(`http://localhost:5000/api/contact/${this.props.taskId}`, { name, lname, email, phone, address, image })
    .then((responseFromApi) => {
      console.log(responseFromApi);
        alert("Task updated successfully");
        // this.props.getContact("task", this.props.contactId)
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
            <input name="name" class="input" type="text" placeholder="Enter first name..." defaultValue={this.state.contact.name} onChange={e => this.handleChangeName(e)} required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">Last Name</label>
          <div class="control">
            <input name="lname" class="input" type="text" placeholder="Enter last name..." defaultValue={this.state.contact.lname} onChange={e => this.handleChangeLname(e)} required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">email</label>
          <div class="control">
            <input name="email" class="input" type="email" placeholder="Enter email..." defaultValue={this.state.contact.email} onChange={e => this.handleChangeEmail(e)} required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">Phone</label>
          <div class="control">
            <input name="phone" class="input" type="text" placeholder="Enter phone..." defaultValue={this.state.contact.phone} onChange={e => this.handleChangePhone(e)} required></input>
          </div>
        </div>

        <div class="field">
          <label class="label is-pulled-left">Image URL</label>
          <div class="control">
            <input name="image" class="input" type="url" placeholder="Enter image URL..." defaultValue={this.state.contact.image} onChange={e => this.handleChangeImage(e)} required></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <input name="address" class="textarea" defaultValue={this.state.contact.address} onChange={e => this.handleChangeAddress(e)} required></input>
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