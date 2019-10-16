var express = require('express');
var path = require('path');
var app = express();
var port = 3000
var bodyParser = require('body-parser');

const arr = ['Every day is a good day', 
'Never view obstacles in your path as the enemy',
 'Fall never sleep','Great hopes make great men. Thomas Fuller',
 'Hard choices, easy life',
 'Play hard live hard',
 'Make a path as you walk ',
 'wake up and move ',
 'Keep up good work',
 'Men must live and create'];


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));




// app.get('/', function (req, res) {
//     res.send('hello world')
//   })

app.listen(port, () =>
   console.log(`Example app listening on port ${port}!`));
  app.post('/', function (req, res) {
    res.send(arr[Math.floor(Math.random()* 10)]);
  })
  