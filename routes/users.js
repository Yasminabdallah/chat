var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list/:userid', function(req, res, next) {
 
  var id = req.params.userid

  res.send(id);
});

module.exports = router;
