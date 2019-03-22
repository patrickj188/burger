// let orm = require("../config/orm.js");

// let burger = {
//     all: function (cb) {
//         orm.all("burgers", (res) => {
//             cb(res);
//         });
//     },
//     insertOne:(cols, vals, cb)=> {
//         orm.insertOne("burgers", cols, vals, (res) =>{
//             cb(res);
//         });
//     },
  
//     updateOne: (objColVals, condition, cb) => {
//         orm.updateOne("burgers", objColVals, condition, (res) => {
//             cb(res);
//         });
//     }
// };
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },

//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;



// var orm = require("../config/orm.js");

// var burger = {
// 	//calls orm for selectAll, adding burgers into the mysql command
// 	all: function(cb){
// 		orm.all("burgers", function(res){
// 			cb(res);
// 		});
// 	},
// 	//calls orm for insertOne, adding values into the call, then callback
// 	add: function(val, cb){
// 		orm.insertOne("burgers", ["burger_name", "devoured"], [val, '0'], function(res){
// 		cb(res);
// 		});
// 	},
// 	//calls orm for updateOne, adding values into the call, then callback
// 	update: function(id, cb){
// 		orm.update('burgers','devoured','1', 'id', id,function(res){
// 			cb(res);
// 		});
// 	}
// }//end of burger object

// module.exports = burger;

let orm = require('../config/orm.js');

let burger = {
  selectAll: (cb) =>{
    orm.selectAll('burgers',(res) =>{
      cb(res);
    });
  },

  insertOne: (cols, vals, cb) =>{
    orm.insertOne('burgers', cols, vals, (res) =>{
      cb(res);
    });
  },

  updateOne: (objColVals, condition, cb) =>{
    orm.updateOne('burgers', objColVals, condition, (res) =>{
      cb(res);
    });
  }
};

module.exports = burger;

