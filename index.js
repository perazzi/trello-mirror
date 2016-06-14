var express = require('express');
var app = express();


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({  
  extended: true
})); 



app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.post('/card/change',function(req,res){
	console.log(req.body)
})

app.get('/card/change',function(req,res){
	res.status(200).end()
})


var port = 8000;
app.listen(port, function () {
  console.log('Example app listening on port: '+port);
});
