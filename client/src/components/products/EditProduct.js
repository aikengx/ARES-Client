import React, { Component } from 'react';
import { Button, Form } from "react-bulma-components/full";
import axios from 'axios';;


export default class EditProduct extends Component {
  

  state = {
    product: {},
    name: "",
    image: "",
    description: "",
  }


  componentDidMount() {

    axios.get(`https://ares-webrtc.herokuapp.com/api/product/${this.props.productId}`)
      .then(responseFromApi => {
        console.log(responseFromApi.data)
        this.setState({
          product: responseFromApi.data
        })
      })
      .catch(err => {
        console.log(err)
      })

  }  


  handleFormSubmit = (event) => {
    //console.log(event.target.question.value);
    event.preventDefault();
    let name = event.target.name.value;
    let image = event.target.image.value;
    let description = event.target.description.value;
    axios.put(`https://ares-webrtc.herokuapp.com/api/product/${this.props.productId}`, { name, image, description })
      .then((responseFromApi) => {
        console.log(responseFromApi);
          alert("Product updated successfully");
          this.props.getProduct(this.props.productId)
      })
      .catch((err) => {
        console.log(err) 
      })    
    
  }


  handleChangeName = (event) => {  
    this.setState({
      name: event.target.value
    })
  }


  handleChangeImage = (event) => {  
    this.setState({
      image: event.target.value
    })
  }


  handleChangeDescription = (event) => {  
    this.setState({
      description: event.target.value
    })
  }

  render() {
    
    return (

      <div>
      <form onSubmit={this.handleFormSubmit}>
      <div class="field">
        <label class="label is-pulled-left">Name</label>
        <div class="control">
          <input name="name" class="input" type="text" placeholder="Enter product name" defaultValue={this.state.product.name} onChange={e => this.handleChangeName(e)}  required></input>
        </div>
      </div>

      <div class="field">
        <label class="label is-pulled-left">Image</label>
        <div class="control">
          <input name="image" class="input" type="url" placeholder="Enter product image URL..." defaultValue={this.state.product.image} onChange={e => this.handleChangeImage(e)} required></input>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input name="description" class="textarea" placeholder="Enter product description" defaultValue={this.state.product.description} onChange={e => this.handleChangeDescription(e)} required></input>
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