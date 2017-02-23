var express = require('express');
var router  = express.Router();
var dataCtrl = require('../../controllers/data.controller.js')
var usersCtrl = require('../../controllers/users.controller.js')

router.get('/', usersCtrl.verify, dataCtrl.getAllData)
router.post('/', usersCtrl.verify, dataCtrl.createData)
router.put('/:id', usersCtrl.verify, dataCtrl.updateData)
router.delete('/:id', usersCtrl.verify, dataCtrl.deleteData)
router.get('/search', usersCtrl.verify, dataCtrl.searchData)


module.exports = router;
