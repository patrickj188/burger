let mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'reap7b74wa9dwg3n',
    password: 'rtnstkun1ggb5zt5',
    database: 'q8x7rbdt2fa9hup2'
  });
}

  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  module.exports = connection;
