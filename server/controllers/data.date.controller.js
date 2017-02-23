const dates = require('../models/data.date.model')
module.exports = {

  getAllDate : (req, res) =>{
    dates.find({}, {
      _v: false
    }, (err, data) => {
      res.send(data)
    })
  },

  createDate : (req, res) => {
    let newDates = dates({
      letter    : req.body.letter,
      frequency : req.body.frequency
    })
  newDate.save( (err, data) => {
    res.json({
      letter : data.letter,
      frequency : data.frequency
      })
    })
  },

  searchDate : (req, res) =>{
    if (req.query.letter == '' && req.query.freq == '') {
      data.find({}, (err, data) =>{
        res.json(data)
      })
    }
    else if (req.query.freq == '') {
      data.find(
        {letter: req.query.letter}
      , (err, data) =>{
        res.json(data)
      })
    }
    else if (req.query.letter == '') {
      data.find(
        {frequency: req.query.freq}
      , (err, data) =>{
        res.json(data)
      })
    }
    else {
      data.find({
        $and: [{letter: req.query.letter},{frequency: req.query.freq}]
      }, (err, data) =>{
        res.json(data)
      })
    }
  },

  updateDate: (req, res) => {
      dates.findOneAndUpdate({
          _id: req.params.id
      }, {
        letter: req.body.letter,
        frequency: req.body.frequency
      }, {  new: true },

      (err, data) => {
          res.json({
              message: "The post has been updated",
              data: data
          })
      })
  },

  deleteDate: (req, res) => {
      dates.findOneAndRemove({
          _id: req.params.id
      }).then((data) => {
          res.json({
              message: "The post has been removed",
              data: data
          })
      })
  }

}
