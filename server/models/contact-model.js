const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const contactSchema = new Schema({
  name: String,
  lname: String,
  email: String,
  phone: String,
  address: String,
  image: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;