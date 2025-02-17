// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
const timeFormatter = require("./utils/timeFormatter");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// Endpoint for Timestamp Microservice
app.get("/api", function (req, res) {
	res.json({
		unix: new Date().getTime(),
		utc: new Date().toUTCString(),
	});
});

app.get("/api/:time", function (req, res) {
	const time = req.params.time;
	const timeObject = timeFormatter(time);
	res.json(timeObject);
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
	res.json({ greeting: "hello API" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
