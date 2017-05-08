// dependency declarations
const express = require('express');
const bodyParser = require('body-parser');

//app initialization
const app = express();
const PORT = process.env.PORT || 8080;

//Requiring our models for syncing
const db = require("./models");

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static(__dirname + "/public"));

//Configure Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//Start server listening
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function(){
        console.log(`App listening on PORT ${PORT}`);
    });
});
