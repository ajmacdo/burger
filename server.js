// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// ===============================
var express = require("express");
var mysql = require("mysql");
// Sets up the Express App
// =================
var app = express();
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

var routes = require("./controllers/burgers_controller.js")
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
