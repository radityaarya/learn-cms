"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var usersSchema = new Schema({
  username  : String,
  password  : String
},
{
  timestamps : true
})

var Users = mongoose.model('Users', usersSchema)

module.exports = Users;
