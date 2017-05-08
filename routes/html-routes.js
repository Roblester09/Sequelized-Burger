// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const Burger = require("../models/index");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get('/', function(req, res) {
        res.render("index", {});
    });

    // blog route loads index.html
    app.get("/burgers", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

};