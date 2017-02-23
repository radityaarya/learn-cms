const data = require('../models/data.model')
module.exports = {

    // GET all data
    getAllData: (req, res) => {
        data.find({}, {
            __v: false
        }, (err, data) => {
            res.send(data)
        })
    },

    // CREATE a data
    createData: (req, res) => {
      let newData = data({
          letter: req.body.letter,
          frequency: req.body.frequency
      })
      newData.save((err, create) => {
          res.json({
            letter: create.letter,
            frequency: create.frequency
          })
      })
    },

    searchData : (req, res) =>{
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

    // UPDATE a data
    updateData: (req, res) => {
        data.findOneAndUpdate({
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

    // DELETE a data
    deleteData: (req, res) => {
        data.findOneAndRemove({
            _id: req.params.id
        }).then((data) => {
            res.json({
                message: "The post has been removed",
                data: data
            })
        })
    }
}
