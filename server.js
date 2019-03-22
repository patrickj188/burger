let express = require('express')
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

let PORT = process.env.port || 3005;

let app = express();


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(methodOverride("_method"));


let exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


let routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});