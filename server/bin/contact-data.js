const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
//
//require('dotenv').config();
//
const mongoose = require('mongoose');
const Contact = require('../models/contact-model');
//
const dbName = process.env.MONGODB_DB;
const dbUser = process.env.MONGODB_USER;
const dbPass = process.env.MONGODB_PASS;
const dbUrl = process.env.MONGODB_URL;
//
//mongoose.connect(`mongodb://${dbUrl}/${dbName}`, {useNewUrlParser: true});
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbUrl}/${dbName}?retryWrites=true`, { useNewUrlParser: true });
//
Contact.collection.drop();
//
const contacts = [
  {
    name: "Eric",
    lname: "Cartman",
    email: "ecartman@sp-elementary.edu",
    phone: "XXX6368447",
    address: "28201 E. Bonanza St., South Park, CO ",
    image: "https://vignette.wikia.nocookie.net/southpark/images/c/c4/Eric-cartman.png",
  },
  {
    name: "Stan",
    lname: "Marsh",
    email: "smarsh@sp-elementary.edu",
    phone: "XXX7038112",
    address: "2001 E. Bonanza St. South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/a/a0/Hemp-stan.png",
  },
  {
    name: "Kyle",
    lname: "Broflovski",
    email: "kbroflovski@sp-elementary.edu",
    phone: "XXX8991166",
    address: "1002 Avenue de los Mexicanos, South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png",
  },
  {
    name: "Kenny",
    lname: "McCormick",
    email: "kmccormick@sp-elementary.edu",
    phone: "XXX7427947",
    address: "635 Avenue de Los Mexicanos, South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png",
  },
  {
    name: "Clyde",
    lname: "Donovan",
    email: "cdonovan@sp-elementary.edu",
    phone: "XXX5207986",
    address: "2210 Avenue de Los Mexicanos, South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/9/9e/Clyde_d.png",
  },
  {
    name: "Bebe",
    lname: "Stevens",
    email: "bstevens@sp-elementary.edu",
    phone: "XXX7022239",
    address: "2010 Avenue de Los Mexicanos, South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/2/2b/2-436.png",
  },
  {
    name: "Leopold",
    lname: "Stotch",
    email: "lstotch@sp-elementary.edu",
    phone: "XXX1411944",
    address: "1020 Avenue de Los Mexicanos, South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/0/06/ButtersStotch.png",
  },
  {
    name: "Wendy",
    lname: "Testaburger",
    email: "wtestaburger@sp-elementary.edu",
    phone: "XXX8169828",
    address: "28201 Avenue de Los Mexicanos, South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/9/9e/Wendyy.png", 
  },
  {
    name: "Craig",
    lname: "Tucker",
    email: "ctucker@sp-elementary.edu",
    phone: "XXX8169828",
    address: "1010 Avenue de Los Mexicanos, South Park, CO", 
    image: "https://vignette.wikia.nocookie.net/southpark/images/c/c2/Craig-tucker.png",
  },
  {
    name: "Heidi",
    lname: "Turner",
    email: "hturner@sp-elementary.edu",
    phone: "XXX1415807",
    address: "14865 Avenue de Los Mexicanos, South Park, CO",
    image: "https://vignette.wikia.nocookie.net/southpark/images/b/b8/HeidiTurnerHat.png", 
  },
  {
    name: "Tweek",
    lname: "Tweak",
    email: "ttweak@sp-elementary.edu",
    phone: "XXX5941851",
    address: "17091 Avenue de Los Mexicanos, South Park, CO", 
    image: "https://vignette.wikia.nocookie.net/southpark/images/9/9d/Tweek_pic.png",
  },
  {
    name: "Jimmy",
    lname: "Valmer",
    email: "jvalmer@sp-elementary.edu",
    phone: "XXX1823231",
    address: "1331 Avenue de Los Mexicanos, South Park, CO", 
    image: "https://vignette.wikia.nocookie.net/southpark/images/6/63/Jimmy_valmer_here.png",
  }
];
//
Contact.create(contacts, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Created ${contacts.length} contacts`)
  mongoose.connection.close();
});