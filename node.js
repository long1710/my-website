var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));
app.get('/', function (req, res) {
  //res.sendFile(__dirname + '/website/test.html')
  res.sendFile(__dirname + '/website/myFrontPage2.html')
})

app.listen(3000);
