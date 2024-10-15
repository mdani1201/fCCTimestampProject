// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
const { format } = require("express/lib/response");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/api", (req, res) => {
  res.json({ message: `${new Date().toString()}` });
});

app.get("/api/:date", (req, res) => {
  date = req.params.date;
  var dateValue = new Date(date);
  var dateString = new Date(date).toString();
  var unixStamp = Math.floor(dateValue / 1000);
  var utcStamp = new Date(date * 1000).toUTCString();
  
    if (dateString) {
    res.json({ unix: unixStamp, utc: dateString });
  } else {
    res.json({ unix: date, utc: utcStamp });
  }});

  

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
