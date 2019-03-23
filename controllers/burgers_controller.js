let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');

router.get('/', (req, res) =>{
  burger.selectAll((data) => {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});



router.post('/burgers', (req, res) =>{
  console.log(req.body);
  burger.addBurger(req.body.name, (data) => {
    res.redirect('/');
  });
});

router.put('/burger/:id',(req, res) => {
  burger.updateBurger(req.params.id, (data) => {
    res.redirect('/');
  });
});
module.exports = router;
