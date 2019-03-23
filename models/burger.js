let orm = require('../config/orm.js');

let burger = {
  selectAll: (cb) =>{
    orm.selectAll('burgers',(res) =>{
      cb(res);
    });
  },

  addBurger: ( vals, cb) =>{
    orm.addBurger( vals, (res) =>{
      cb(res);
    });
  },

  updateBurger: (id, cb) =>{
    orm.updateBurger(id, (res) =>{
      cb(res);
    });
  }
};

module.exports = burger;

