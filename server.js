//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname, 'views/Welcome.html'));
});
app.get('/Twilight', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Twilight.html'));
});
app.get('/Newmoon', function(req, res){
  res.sendFile(path.join(__dirname, 'views/NewMoon.html'));
  });
app.get('/Eclipse', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Eclipse.html'));
  });
app.get('/BDP1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/BDP1.html'));
  });
app.get('/BDP2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/BDP2.html'));
  });
app.get('*', function(req, res){ 
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});