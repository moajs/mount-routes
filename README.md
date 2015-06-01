# mount-routes

mount-routes = auto mount express routes with routes_folder_path

## Install

    npm install --save mount-routes

## Usages


```
var express = require('express')
var app = express()

var mount = require('mount-routes');

// simple
// mount(app);

// with path
mount(app,'routes2');

// start server
app.listen(23018)
```
