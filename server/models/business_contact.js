/*
  Author: Heesoo Lim
  studentID: 301061152
  Date: October 21, 2020
  File Name: business_contact.js
*/

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contact_name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);