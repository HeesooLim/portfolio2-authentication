/*
  Author: Heesoo Lim
  studentID: 301061152
  Date: October 05, 2020
  File Name: users.js
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
