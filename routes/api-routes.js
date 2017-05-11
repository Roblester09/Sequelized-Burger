// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //Get route for getting all of the burgers
    app.get("/index", function(req, res) {
        db.Burger.findAll({})
            .then(function(data) {
                //console.log(data);
                const hbsObject = {
                    foobar: data
                };
                //console.log(hbsObject);
                res.render("index", hbsObject);
            });
    });

    //POST route for saving a new burger
    app.post("/index", function(req, res) {
        //console.log(req.body);
        db.Burger.create({
            burger_name: req.body.name,
        }).then(function() {
            //console.log(dbBurger);
            res.redirect("/index");
            //res.json(dbBurger);
        });
    });

    //PUT route for updating burgers
    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/index");
        });
    });

    //DELETE route for deleting burgers
    app.delete("/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/index");
        });
    });
};