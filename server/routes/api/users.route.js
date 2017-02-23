var express = require('express');
var router  = express.Router();
var controller = require('../../controllers/users.controller.js');

router.get('/', controller.verify, controller.getAllUser)
router.post('/register', controller.createUser)
router.post('/login', controller.login)
router.put('/:id', controller.verify, controller.updateUser)
router.delete('/:id', controller.verify, controller.deleteUser)


module.exports = router;
