var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

var port = process.env.PORT || 3000;
// simple get request returning html.
app.get("/hello", function(req, res){
    res.send('<html><head><head><body>Hello From Node!</body></html>');
});

// simple get request returning JSON object.
app.get("/api", function(req, res) {
    res.json({firstname: "John", lastname: "Joe"});
});

// simple get request retriving id from the url and returning JSON object.
app.get("/person/:id", function(req, res) {
    res.json({id: req.params.id});
});

// simple post request.
app.post("/api", jsonParser, function(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    console.log(firstname);
    console.log(lastname)

    const fullname = firstname + " " + lastname;

    res.json({name: fullname});

});



app.listen(port);
