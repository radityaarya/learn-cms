"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var datesSchema = new Schema({
  letter    : String,
  frequency : Number
},
{
  timestamps : true
})

var Dates = mongoose.model('Dates', datesSchema)

module.exports = Dates;
