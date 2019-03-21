const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/contact-model');

const router  = express.Router();
//
// POST route => to create a new contact
router.post('/contact', (req, res, next)=>{
  
  Contact.create({
      name: req.body.name,
      lname: req.body.lname,  
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      image: req.body.image,
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
})

// GET route => to get all the contacts
router.get('/contacts', (req, res, next) => {
  Contact.find()
    .then(allTheContacts => {
      res.json(allTheContacts);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a specific contact
router.get('/contact/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
                                   
  Contact.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific contact
router.put('/contact/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Contact.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Contact with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific contact
router.delete('/contact/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Contact.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Contact with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})


module.exports = router;