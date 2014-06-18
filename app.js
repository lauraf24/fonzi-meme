var express = require("express");
var ejs = require("ejs");
var app = express();

app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);

app.get('/', function(req, res){
		console.log("req params", req.query);
  res.render('index.ejs',
      {
            top: req.query.top,
            bottom: req.query.bottom
      });
});

app.listen(3000);
console.log("Your app is running on Port 3000!");

