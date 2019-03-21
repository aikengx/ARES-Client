const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
//
const mongoose = require('mongoose');
const Task = require('../models/task-model');
//
const dbName = process.env.MONGODB_DB;
const dbUser = process.env.MONGODB_USER;
const dbPass = process.env.MONGODB_PASS;
const dbUrl = process.env.MONGODB_URL;
//
//mongoose.connect(`mongodb://${dbUrl}/${dbName}`, {useNewUrlParser: true});
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbUrl}/${dbName}?retryWrites=true`, { useNewUrlParser: true });
//
Task.collection.drop();
//
const tasks = [
  {
    name: "Token",
    lname: "Black",
    email: "tblack@sp-elementary-edu",
    phone: "XXX5440420",
    image: "https://vignette.wikia.nocookie.net/southpark/images/d/d3/Token_Black2.png"
  },
  {
    name: "Henrietta",
    lname: "Biggle",
    email: "hbiggle@sp-elementary-edu",
    phone: "XXX8609182",
    image: "https://vignette.wikia.nocookie.net/southpark/images/6/6d/Henrietta-biggle.png",
  },
  {
    name: "Annie",
    lname: "Knitts",
    email: "aknitts@sp-elementary-edu",
    phone: "XXX3067192",
    image: "https://vignette.wikia.nocookie.net/southpark/images/0/01/Annie.png",
  }
];
//
Task.create(tasks, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Created ${tasks.length} tasks`)
  mongoose.connection.close();
});