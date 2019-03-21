import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Navbar, Icon, Panel, Column, Card } from "react-bulma-components/full";
import { faUser, faTasks, faCookieBite, faReply, faEdit, faTrashAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import AddContact from '../contacts/AddContact';
import EditContact from '../contacts/EditContact';
import AddTask from '../tasks/AddTask';
import EditTask from '../tasks/EditTask';
import AddProduct from '../products/AddProduct';
import EditProduct from '../products/EditProduct';


export default class Dashboard extends Component {

  state = {
    contacts: [],
    tasks: [],
    products: [],
    items: [],
    contactVisible: false,
    taskVisible: false,
    productVisible: false,
    boxVisible: false,
    cardVisible: false,
    addcontactVisible: false,
    editcontactVisible: false,
    addproductVisible: false,
    editproductVisible: false,
    addtaskVisible: false,
    edittaskVisible: false,
    contact: "",
    product: "",
    selected: "",
  }


  componentDidMount() {
    this.getAllContacts();
    this.getAllTasks();
    this.getAllProducts();
  }


  getAllContacts = () =>{
    console.log('get all the contacts', process.env)
    axios.get(`https://ares-webrtc.herokuapp.com/api/contacts`)
    .then(responseFromApi => {
      this.setState({
        contacts: responseFromApi.data,
        contactVisible: !this.contactVisible,
        askVisible: false,
        productVisible: false,
        boxVisible: false,
        addcontactVisible: false,
        editcontactVisible: false,
        addproductVisible: false,
        editproductVisible: false,
        addtaskVisible: false,
        edittaskVisible: false,
        selected: "contact"
      })
    })
  }


  getAllTasks = () =>{
    axios.get(`https://ares-webrtc.herokuapp.com/api/tasks`)
    .then(responseFromApi => {
      this.setState({
        tasks: responseFromApi.data,
        taskVisible: !this.taskVisible,
        contactVisible: false,
        productVisible: false,
        boxVisible: false,
        cardVisible: false,
        addcontactVisible: false,
        editcontactVisible: false,
        addproductVisible: false,
        editproductVisible: false,
        addtaskVisible: false,
        edittaskVisible: false,
        selected: "task",
      })
    })
  }


  getAllProducts = () => {
    axios.get(`https://ares-webrtc.herokuapp.com/api/products`)
    .then(responseFromApi => {
      this.setState({
        products: responseFromApi.data,
        taskVisible: false,
        contactVisible: false,
        productVisible: !this.productVisible,
        boxVisible: false,
        cardVisible: false,
        addcontactVisible: false,
        editcontactVisible: false,
        addproductVisible: false,
        editproductVisible: false,
        addtaskVisible: false,
        edittaskVisible: false,
        selected: "product",
      })
    })
  }


  getContact = (endpoint, id) => {
    //console.log(id);
    axios.get(`https://ares-webrtc.herokuapp.com/api/${endpoint}/${id}`)
    .then(responseFromApi => {
      this.setState({
        contact: responseFromApi.data,
        boxVisible: !this.boxVisible,
        taskVisible: false,
        contactVisible: false,
        productVisible: false,
        cardVisible: false,
        addcontactVisible: false,
        editcontactVisible: false,
        addproductVisible: false,
        editproductVisible: false,
        addtaskVisible: false,
        edittaskVisible: false,
        selected: endpoint,
      })
    })
  }


  getProduct = (id) => {
    // console.log(id);
    axios.get(`https://ares-webrtc.herokuapp.com/api/product/${id}`)
    .then(responseFromApi => {
      this.setState({
        product: responseFromApi.data,
        cardVisible: !this.cardVisible, 
        boxVisible: false,
        taskVisible: false,
        contactVisible: false,
        productVisible: false,
        addcontactVisible: false,
        editcontactVisible: false,
        addproductVisible: false,
        editproductVisible: false,
        addtaskVisible: false,
        edittaskVisible: false,
        selected: "product",
      })
    })
  }


  deleteContact = (selected, id) => {
    //console.log(id);
    let endpoint = selected
    axios.delete(`https://ares-webrtc.herokuapp.com/api/${endpoint}/${id}`)
    .then( responseFromApi =>{
        console.log(responseFromApi)
        if (selected === "contact") {
          alert(`Contact succesfully removed`)
          {this.getAllContacts()}
        } else {
        alert(`Entry succesfully removed`)
        {this.getAllTasks()}
        }
    })
    .catch((err)=>{
        console.log(err)
        alert(err)
    })
  }


  deleteProduct = (id) => {
    // console.log(id);
    axios.delete(`https://ares-webrtc.herokuapp.com/api/product/${id}`)
    .then( responseFromApi => {
        console.log(responseFromApi)
        alert(`Product succesfully removed`)
        {this.getAllProducts()}
    })
    .catch((err)=>{
        console.log(err)
        alert(err)
    })
  }


  goBack = () => {
    // console.log(this.state.selected)
    if (this.state.selected !== "task") {
      return (<i aria-hidden="true"><FontAwesomeIcon icon={faEdit} onClick={this.getAllContacts}/></i>)
    } else {
      return (<i aria-hidden="true"><FontAwesomeIcon icon={faEdit} onClick={this.getAllTasks}/></i>)
    }
  }


  createContact = () => {
    // console.log("Create Contact!");
    this.setState({
      cardVisible: false, 
      boxVisible: false,
      taskVisible: false,
      contactVisible: false,
      productVisible: false,
      addcontactVisible: true,
      editcontactVisible: false,
      addproductVisible: false,
      editproductVisible: false,
      addtaskVisible: false,
      edittaskVisible: false,
    })
  }  


  editContact = (id) => {
    // console.log(id);
    this.setState({
      cardVisible: false, 
      boxVisible: false,
      taskVisible: false,
      contactVisible: false,
      productVisible: false,
      addcontactVisible: false,
      editcontactVisible: true,
      addproductVisible: false,
      editproductVisible: false,
      addtaskVisible: false,
      edittaskVisible: false,
    })
  } 


  createTask = () => {
    // console.log("Create Task!");
    this.setState({
      cardVisible: false, 
      boxVisible: false,
      taskVisible: false,
      contactVisible: false,
      productVisible: false,
      addcontactVisible: false,
      editcontactVisible: false,
      addproductVisible: false,
      editproductVisible: false,
      addtaskVisible: true,
      edittaskVisible: false,
    })
  } 


  editTask = (id) => {
    // console.log(id);
    this.setState({
      cardVisible: false, 
      boxVisible: false,
      taskVisible: false,
      contactVisible: false,
      productVisible: false,
      addcontactVisible: false,
      editcontactVisible: false,
      addproductVisible: false,
      editproductVisible: false,
      addtaskVisible: false,
      edittaskVisible: true,
    })
  } 


  createProduct = () => {
    // console.log("Create Product!");
    this.setState({
      cardVisible: false, 
      boxVisible: false,
      taskVisible: false,
      contactVisible: false,
      productVisible: false,
      addcontactVisible: false,
      editcontactVisible: false,
      addproductVisible: true,
      editproductVisible: false,
      addtaskVisible: false,
      edittaskVisible: false,
    })
  } 


  editProduct = (id) => {
    // console.log(id);
    this.setState({
      cardVisible: false, 
      boxVisible: false,
      taskVisible: false,
      contactVisible: false,
      productVisible: false,
      addcontactVisible: false,
      editcontactVisible: false,
      addproductVisible: false,
      editproductVisible: true,
      addtaskVisible: false,
      edittaskVisible: false,
    })
  } 


  render() {

    return (

      <nav className="panel">
        <p className="panel-heading">
          Agent Dashboard
        </p>
        <div className="panel-block">
        </div>
        <p className="panel-tabs">
          <a><FontAwesomeIcon icon={faPlusCircle} onClick={this.createContact}/></a>
          <a name="contacts" onClick={this.getAllContacts}>Contacts</a>
          <a><FontAwesomeIcon icon={faPlusCircle} onClick={this.createTask}/></a>
          <a name="tasks" onClick={this.getAllTasks}>Tasks</a>
          <a><FontAwesomeIcon icon={faPlusCircle} onClick={this.createProduct}/></a>
          <a name="products" onClick={this.getAllProducts}>Products</a>
        </p>
   

  { this.state.contactVisible 
  ? 
    this.state.contacts.map((contact, i) => {
    return (
      <div key={i}>
            <a className="panel-block" onClick={() => this.getContact("contact", contact._id)}>
            <span className="panel-icon">
            <i aria-hidden="true"><FontAwesomeIcon icon={faUser}/></i>
            </span>
            {/* <Link to={`/contact/${contact._id}`}>
                {contact.name} {contact.lname} - {contact.phone}
            </Link> */}
            {contact.name} {contact.lname} - {contact.phone}
            </a>
      </div>
  
      
    )})
  :
    <div></div>
  }


  { this.state.taskVisible
  ?
    this.state.tasks.map((task, i) => {
      return (
        <div key={i}>
        <a class="panel-block" onClick={() => this.getContact("task", task._id)}>
        <span class="panel-icon">
        <i aria-hidden="true"><FontAwesomeIcon icon={faTasks}/></i>
        </span>
        {/* <Link to={`/tasks/${task._id}`}>
            {task.name} {task.lname} - {task.phone}
          </Link> */}
          {task.name} {task.lname} - {task.phone}
        </a>
        </div>
    )})
  :
    <div></div>
  }


  { this.state.productVisible
  ?
    this.state.products.map((product, i) => {
      return (
        <div key={i}>
        <a class="panel-block" onClick={() => this.getProduct(product._id)}>
        <span class="panel-icon">
        <i aria-hidden="true"><FontAwesomeIcon icon={faCookieBite}/></i>
        </span>
        {/* <Link to={`/product/${product._id}`}>
            {product.name}
          </Link> */}
          {product.name}
        </a>
        </div>
    )})
  :
    <div></div>
  }    


{ this.state.boxVisible
  ?
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={this.state.contact.image} alt="Image"></img>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{this.state.contact.name} {this.state.contact.lname}</strong> <small>{this.state.contact.email}</small>
            <br></br>
            ({this.state.contact.phone})
            <br></br>
            <hr/>
            {this.state.contact.address}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" aria-label="reply">
              <span className="icon is-small">
                <i aria-hidden="true"><FontAwesomeIcon icon={faReply} onClick={this.getAllContacts}/></i>
              </span>
            </a>
            <a className="level-item" aria-label="retweet">
              <span className="icon is-small">
                {/* {this.goBack()} */}
                <i aria-hidden="true"><FontAwesomeIcon icon={faEdit} onClick={() => this.editContact(this.state.contact._id)}/></i>
              </span>
            </a>
            <a className="level-item" aria-label="like">
              <span className="icon is-small">
                <i aria-hidden="true"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.deleteContact(this.state.selected, this.state.contact._id)}/></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
  :
    <div></div>
  } 


  { this.state.cardVisible
   ?
   <div className="card">
    <div className="card-image">
      <figure className="image is-3by2">
        <img src={this.state.product.image} alt="Placeholder image"></img>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{this.state.product.name}</p>
        </div>
      </div>
      <div className="content">
        {this.state.product.description}
        <br></br>
      </div>
    </div>
    <footer className="card-footer">
      <a className="card-footer-item" onClick={() => this.editProduct(this.state.product._id)}>Edit</a>
      <a className="card-footer-item" onClick={() => this.deleteProduct(this.state.product._id)}>Delete</a>
    </footer>
  </div>
   :
     <div></div> 
  }


  { this.state.addcontactVisible 
  ?
  <AddContact getAllContacts = {this.getAllContacts}/>
  :
  <div></div>
  }


  { this.state.editcontactVisible 
  ?
  <EditContact contactId = {this.state.contact._id} getContact = {this.getContact} selectionId = {this.state.selected}/>
  :
  <div></div>
  }


  { this.state.addtaskVisible 
  ?
  <AddContact getAllTasks = {this.getAllTasks}/>
  :
  <div></div>
  }


  { this.state.edittaskVisible 
  ?
  <EditTask taskId = {this.state.contact._id}/>
  :
  <div></div>
  }


  { this.state.addproductVisible 
  ?
  <AddProduct getAllProducts = {this.getAllProducts}/>
  :
  <div></div>
  }


  { this.state.editproductVisible 
  ?
  <EditProduct productId = {this.state.product._id} getProduct = {this.getProduct}/>
  :
  <div></div>
  }


  </nav>

    );

  }

}
