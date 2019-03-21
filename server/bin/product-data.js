const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
//require('dotenv').config();
//
const mongoose = require('mongoose');
const Product = require('../models/product-model');
//
const dbName = process.env.MONGODB_DB;
const dbUser = process.env.MONGODB_USER;
const dbPass = process.env.MONGODB_PASS;
const dbUrl = process.env.MONGODB_URL;
//
//mongoose.connect(`mongodb://${dbUrl}/${dbName}`, {useNewUrlParser: true});
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbUrl}/${dbName}?retryWrites=true`, { useNewUrlParser: true });
//
Product.collection.drop();
//
const products = [
  {
    name: "Cheesy Poofs",
    description: "Cheese-Flavored Snacks",
    image: "https://vignette.wikia.nocookie.net/southpark/images/3/38/CheesyPoofs.png",
  },
  {
    name: "Snacky Cakes",
    description: "Pastry",
    image: "https://vignette.wikia.nocookie.net/southpark/images/c/cc/SnackyCakesLogo.png"
  },
  {
    name: "Coo-Coo Chips",
    description: "Potato Chips",
    image: "https://vignette.wikia.nocookie.net/southpark/images/4/4c/Coo-coo_chips.png"
  }
];
//
Product.create(products, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Created ${products.length} products`)
  mongoose.connection.close();
});