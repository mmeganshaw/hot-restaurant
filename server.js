var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 5000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
	{
		routeName: "meganshaw" ,
		name: "Megan Shaw",
		phoneNumber: 4408765432,
		email: "megan@megan.com",	
		uniqueID: "mshaw123"
	},
	{
		routeName: "rob" ,
		name: "Robert Relief",
		phoneNumber: 123456,
		email: "rob@rob.com",	
		uniqueID: "robbyfresh"
	},
	{
		routeName: "doug" ,
		name: "Doug Kellerman",
		phoneNumber: 69696996,
		email: "doug@doug.com",	
		uniqueID: "do-the-dougie"
	},
	{
		routeName: "mac" ,
		name: "Mac Hartman",
		phoneNumber: 654321,
		email: "mac@mac.com",	
		uniqueID: "kindbunny"
	}

];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});


app.get("/table", function(req, res){
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(reservations);
});

app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT)
})