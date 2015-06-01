// for test
var express = require('express')
var app = express()


var mount = require('./index');


// mount(app);


mount(app,'routes2');
// console.log();


//
// // mount(app) ;
// // app.get('/', function (req, res) {
// //   res.send('Hello World')
// // })
//
app.listen(23018)

