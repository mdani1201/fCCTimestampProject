// index.js
// where your node app starts

// init project
var express = require("express");
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
const { format } = require("express/lib/response");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
// so that your API is remotely testable by FCC
var cors = require("cors");
const { format } = require("express/lib/response");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
  res.json({ greeting: "hello API" });
});

app.get("/api", (req, res) => {
  date = new Date();
  var utcStamp = new Date(date).toUTCString();
  var unixStamp = Math.floor(date);
  res.json({ unix: unixStamp, utc: utcStamp });
});

app.get(
  "/api/:date",
  (req, res, next) => {
    date = req.params.date;
    var dateValue = Number(date);
    var utcStamp = new Date(dateValue).toUTCString();


    if (!isNaN(dateValue)) {
      res.json({ unix: dateValue, utc: utcStamp });
    } else {
      next();
    }
  },
  (req, res) => {
    date = req.params.date;
    var dateValue = new Date(date);
    var utcStamp = new Date(date).toUTCString();
    var unixStamp = Math.floor(dateValue);
    if (!dateValue.getTime()) {
      res.send({ error: "Invalid Date" });
    } else {
      res.json({ unix: unixStamp, utc: utcStamp });
    }
  }
);




// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
  console.log("Your app is listening on port " + listener.address().port);
});
