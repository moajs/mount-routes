var express = require('express');

//configure routes

var router = express.Router();

router.route('/movies')
    .get(function get_all_movies(req,res){
        
    })

    .post(function(req,res){
      
    });

router.route('/movies/:id')
    .put(function(req,res){
       
    })

    .get(function(req,res){
         
    })

    .delete(function(req,res){
       
    });

module.exports=router;
