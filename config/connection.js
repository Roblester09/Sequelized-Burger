"use strict";

// Set up MySQL connection
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 8080,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("LET'S EAT!!!! Connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;