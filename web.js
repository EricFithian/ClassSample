var express = require('express');
var app = express();

var samples = "";

for(let i = 0; i < 20; i++) {
  samples += "This is example number " + i + " in our index! :)" + <br>;
}

app.get('/', function (req, res) {
  res.send(samples);
});

app.listen(process.env.PORT || 3000);
