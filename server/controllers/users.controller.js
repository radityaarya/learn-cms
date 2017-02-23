const user = require('../models/users.model')
const hash = require('password-hash');
const jwt  = require('jsonwebtoken');

module.exports = {

  // GET all users
  getAllUser : (req, res) => {
    user.find( {}, {__v : false, password: false}, (err, data) =>{
      res.send(data)
    })
  },

  // CREATE a user
  createUser : (req, res) => {
    user.findOne( {username : req.body.username}, (err, data) =>{
      // FIND if username already taken or not
      // if username available, then ..
      if(data) res.json({err: "Username already taken!"})
      else{
        let newUser = user({
          username : req.body.username,
          password : hash.generate(req.body.password)
        })
        newUser.save((err,create) =>{
          res.json({
            username : create.username,
            password : 'XXXXXXXXXXXX'
          })
        })
      }
    })
  },

  // LOGIN a user
  login : (req, res, next) => {
    user.findOne( { username: req.body.username } )
    .then( (login) => {
      if(!login){
        // console.log(login);
        res.json({err: "invalid username and password! match"})
      }
      else if( hash.verify(req.body.password,login.password) ){
        // console.log(login);
        let token = jwt.sign( {username: login.username}, process.env.SECRET, {expiresIn : 600*600});
        res.json( {
          username : login.username,
          password : 'XXXXXXXXXXXX',
          token    : token
        } );
      }
      else
          res.json({err: 'invalid username and password! match'})
    })
  },

  // login : (req, res, next) => {
  // var token = jwt.sign({
  //     username: req.body.username}, 'lol');
  // res.send({
  //   token: token
  //   })
  // },

  // UPDATE a user
  updateUser : (req,res) => {
    user.findOneAndUpdate({_id: req.params.id},{
        username  : req.body.username,
        password  : hash.generate(req.body.password),
        updatedAt : new Date()
      }, { new : true }, (err, data) => {
    res.json({
      message : "User (below) has been updated",
      username : data.username,
      password : 'XXXXXXXXXXXX'})
    })
  },

  // DELETE a user
  deleteUser : (req, res) => {
    user.findOneAndRemove( {_id: req.params.id} ).then( (data) =>{
      res.json({message : "User has been removed"})
    })
  },

  // VERIFY a user
  verify: (req, res, next) => {
    if(req.headers.token == 'null')
        res.json({err: "you don't have acces"})
    else{
        if (jwt.verify(req.headers.token, process.env.SECRET))
            next()
        else
            res.json({err: 'expired token'})
    }
  }

  // VERIFY a user
  // verifyUser : (req, res, next) => {
  //   let decode = jwt.verify(req.header('token'), process.env.SECRET)
  //   // console.log(decode);
  //   if (decode)
  //       next()
  //   else {
  //       res.json({
  //         message : "you must login to access this page"
  //       })
  //   }
  // }
}
