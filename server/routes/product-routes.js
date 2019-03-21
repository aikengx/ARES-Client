const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product-model');
//
const router  = express.Router();
//
// POST route => to create a new product
router.post('/product', (req, res, next)=>{
  
  Product.create({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
})

// GET route => to get all the tasks
router.get('/products', (req, res, next) => {
  Product.find()
    .then(allTheProducts => {
      res.json(allTheProducts);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a specific task
router.get('/product/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
                                   
  Product.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific task
router.put('/product/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Contact with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific contact
router.delete('/product/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Product.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Contact with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})


module.exports = router;