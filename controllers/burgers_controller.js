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

router.post("/burgers",(req, res) =>{
  console.log(req.body);
  burger.addBurger(
      req.body.burger_name,
      () => {
          res.redirect("/");
      });
});

// router.post('/burgers', (req, res) =>{
//   burger.addBurger([
//     'burger_name'
//   ], [
//     req.body.burger_name
//   ], (data) => {
//     res.redirect('/');
//   });
// });

router.put('/burgers/:id',(req, res) => {
  var condition = 'id = ' + req.params.id;
  burger.updateBurger({
    devoured: true
  }, condition, (data) => {
    res.redirect('/');
  });
});
module.exports = router;
