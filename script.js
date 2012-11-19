var express = require('express');

var app = express.createServer();


app.set('view engine', 'ejs');

// home Route
app.get('/', function(req, res){
  res.render('index', {
      title: 'Home'
  });
});

app.on('listening',function(){
    console.log('ok, server is running');
});
 
app.listen(3000);