var models  = require('../models');
var express = require('express');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  
    models.User.findAll({
      include: [ models.Message ]
    }).then(function(users) {
      console.log(users)
      res.render('index', {
        title: 'Sequelize: Express Example',
        users: users
      });
    });
  
});

module.exports = router;
