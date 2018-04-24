var express = require('express');
var body-parser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 5000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
	{
		routeName: "meganshaw" 
		name: "Megan Shaw"
		phoneNumber: 4408765432,
		email: "megan@megan.com",	
		uniqueID: 
	
	},

];