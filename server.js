// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var ua=request.headers["user-agent"];
  response.send({"ipaddress":request.headers["x-forwarded-for"].toString().split(",")[0],"language":request.headers["accept-language"].split(",")[0],"software":ua.substring(ua.indexOf("(")+1,ua.indexOf(")"))});
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
