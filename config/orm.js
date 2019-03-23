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
    

	addBurger: (vals, cb) =>{
        console.log("hey there")
        let queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
		connection.query(queryString, vals, (err, result) =>{
			if (err) {
				throw err;
			}
    		cb(result);
    	});
	},

	updateBurger: (id, cb) =>{
		let queryString = "UPDATE  burgers SET devoured = true WHERE id = " + id
		connection.query(queryString, (err, result) =>{
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;