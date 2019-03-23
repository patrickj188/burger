let connection = require ('./connection.js');


let orm = {
	selectAll:(tableInput, cb) =>{
		let queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, (err, result) =>{
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	addBurger: (table, cols, vals, cb) =>{
        let queryString = "INSERT INTO" + table;
		connection.query(queryString, vals, (err, result) =>{
			if (err) {
				throw err;
			}
    		cb(result);
    	});
	},

	updateBurger: (table, objColVals, condition, cb) =>{
		let queryString = "UPDATE " + table;
		connection.query(queryString, (err, result) =>{
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;