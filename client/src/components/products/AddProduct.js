import React, { Component } from 'react';
import { Button, Form } from "react-bulma-components/full";
import axios from 'axios';


export default class AddProduct extends Component {
 

  handleFormSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let image = event.target.image.value; 
    let description = event.target.description.value;
    axios.post("https://ares-webrtc.herokuapp.com/api/product", { name, image, description })
    .then((responseFromApi) => {
      console.log(responseFromApi);
      alert("Product created successfully");
      this.props.getAllProducts()
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
        <label class="label is-pulled-left">Name</label>
        <div class="control">
          <input name="name" class="input" type="text" placeholder="Enter product name" required></input>
        </div>
      </div>

      <div class="field">
        <label class="label is-pulled-left">Image</label>
        <div class="control">
          <input name="image" class="input" type="url" placeholder="Enter product image URL..." required></input>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea name="description" class="textarea" placeholder="Enter product description" required></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          {/* <input class="button" type="submit" value="submit">Submit</input> */}
          <button class="button is-link" action="submit">Submit</button>
        </div>
      </div>
      </form>
    </div>

    );
    
  }

}