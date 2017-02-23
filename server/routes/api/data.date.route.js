var express = require('express');
var router  = express.Router();
var dateCtrl = require('../../controllers/data.date.controller.js')
var usersCtrl = require('../../controllers/users.controller.js')

router.get('/', usersCtrl.verify, dateCtrl.getAllDate)
router.post('/', usersCtrl.verify, dateCtrl.createDate)
router.put('/:id', usersCtrl.verify, dateCtrl.updateDate)
router.delete('/:id', usersCtrl.verify, dateCtrl.deleteDate)
router.get('/search', usersCtrl.verify, dateCtrl.searchDate)


module.exports = router;
