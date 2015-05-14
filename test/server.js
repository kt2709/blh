var express = require('express');
var mongojs = require('mongojs');
var bodyparser = require('body-parser');
var db = mongojs('userprofile',['users']);
var app = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());


app.listen(7000);
console.log("server running on port 7000");
