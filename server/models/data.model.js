"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var dataSchema = new Schema({
  letter     : String,
  frequency  : Number
},
{
  timestamps : true
})

var Data = mongoose.model('Data', dataSchema)

module.exports = Data;
