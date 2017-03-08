// dependencies
var express = require("express");
var mysql = require("mysql");
// create the express app
var app = express();
//create a port # for the NODE server to run on!!!
var PORT = 3000;
//make a connection to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "newgirl"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// create the routes
//id
app.get("/newgirl", function(req, res) {
    connection.query(" SELECT * FROM characters order by id", function(err, result) {
        var html = "<h1> Characters by ID </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID:" + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + " </li>";
            html += "<p> Coolness Points: " + result[i].coolness_points + " </p>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }
        html += "</ul>";
        res.send(html);
    });
});

//coolness_points
app.get("/newgirl/coolness", function(req, res) {
    connection.query(" SELECT * FROM characters order by coolness_points DESC", function(err, result) {
        var html = "<h1> Characters by Coolness </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID:" + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + " </li>";
            html += "<p> Coolness Points: " + result[i].coolness_points + " </p>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }
        html += "</ul>";
        res.send(html);
    });
});

//attitude
app.get("/attitude/:att", function(req, res) {
    connection.query(" SELECT * FROM characters WHERE attitude = ?", [req.params.att], function(err, result) {
        var html = "<h1> Characters with an Attitude of " + req.params.att + "</h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID:" + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + " </li>";
            html += "<p> Coolness Points: " + result[i].coolness_points + " </p>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }
        html += "</ul>";
        res.send(html);
    });
});

app.listen(3000);