const express = require('express');
const mongoose = require('mongoose');
const Task = require('../models/task-model');
//
const router  = express.Router();
//
// POST route => to create a new task
router.post('/task', (req, res, next)=>{
  
  Task.create({
      name: req.body.name,
      lname: req.body.lname,  
      email: req.body.email,
      phone: req.body.phone,
      image: req.body.image,
      products: []
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
})

// GET route => to get all the tasks
router.get('/tasks', (req, res, next) => {
  Task.find()
    .then(allTheTasks => {
      res.json(allTheTasks);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a specific task
router.get('/task/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
                                   
  Task.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific task
router.put('/task/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Task.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Contact with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific contact
router.delete('/task/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Task.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Contact with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})


module.exports = router;