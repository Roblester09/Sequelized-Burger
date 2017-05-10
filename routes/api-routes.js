// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //Get route fro getting all of the burgers
    app.get("/", function(req, res) {
        db.Burger.findAll({})
            .then(function(data) {
                res.render("index", { Burger: data });
            });
    });

    //POST route for saving a new burger
    app.post("/index", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_type,
        }).then(function(dbBurger) {
            res.redirect("/");
        });
    });

    //app.post('/index', function(req, res) {
    //    db.Burger.create({
    //        burger_name: req.body.burger_name
    //    }).then(function (results) {
    //        res.redirect('/index');
    //    });
    //});

    //DELETE route for deleting burgers
    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    //PUT route for updating burgers
    app.put("/api/burgers", function(req, res) {
        db.Burger.update({
            burger_name: req.body.burger_name
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });
};