var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var url = require('url');
var mongodb = require('mongodb');
var monk = require('monk');
var mysql =  require('./db');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
//var db = monk('mongodb://cmpe272:cmpe27211@ds053190.mongolab.com:53190/cmpe272');
/* GET home page. */


router.get('/', function(req, res) 
		{
	res.render('index');
		});

router.get('/generate', function(req, res) 
	{
		var zip = req.param('zipcode');
		if(zip)
			{
		console.log(zip);
		 var query = "SELECT zipcode,`"+zip+"` FROM mapdata";
		 mysql.fetchData(function(err,data){
			  
				
			 var array = [];
			 if(err)console.log(err);
			 
			 else
			{
				// console.log(data.length); 
			  check = data.length;
			//console.log(data[0][10308]); 
			//console.log(data[1][10308]); 
			 console.log(data.length);
			 var array1=[];
			 for(var i=0;i<data.length;i++)
			{
			
				//array1.push(data[i][10001],data[i][10308],data[i][11208],data[i][11211],data[i][11207],data[i][10314],data[i][11377],data[i][11230],data[i][10002],data[i][11203],data[i][11212],data[i][10029],data[i][10469],data[i][11375],data[i][10472],data[i][11215],data[i][11210],data[i][11434],data[i][10312],data[i][11225],data[i][10473],data[i][10306],data[i][10003],data[i][11216],data[i][10461],data[i][11201],data[i][10011],data[i][10028],data[i][11374],data[i][10465],data[i][10021],data[i][10305],data[i][11217],data[i][11412],data[i][11379],data[i][11378],data[i][11222],data[i][10014],data[i][10309],data[i][11433],data[i][10022],data[i][10012],data[i][10471],data[i][10001],data[i][11411],data[i][10038],data[i][10474],data[i][10007],data[i][10005],data[i][10006],data[i][10004],data[i][11430]);
				array1.push(data[i][zip]);
				 //array.push(array1);
				 console.log(data[i][zip]);
			}
			 
				
			 res.render('graph', { title: 'Express',"count":array1,"zip":zip});
			}
		 },query);
	
			}
		else
			{
		  var query = "SELECT * FROM mapdata";
		  mysql.fetchData(function(err,data){
			  
				
				 var array = [];
				 if(err)console.log(err);
				 
				 else
				{
					// console.log(data.length); 
				  check = data.length;
				console.log(data[0]); 
				console.log(data)
				 for(var i=0;i<data.length;i++)
				{
					 var array1=[];
					array1.push(data[i][10308],data[i][11208],data[i][11211],data[i][11207],data[i][10314],data[i][11377],data[i][11230],data[i][10002],data[i][11203],data[i][11212],data[i][10029],data[i][10469],data[i][11375],data[i][10472],data[i][11215],data[i][11210],data[i][11434],data[i][10312],data[i][11225],data[i][10473],data[i][10306],data[i][10003],data[i][11216],data[i][10461],data[i][11201],data[i][10011],data[i][10028],data[i][11374],data[i][10465],data[i][10021],data[i][10305],data[i][11217],data[i][11412],data[i][11379],data[i][11378],data[i][11222],data[i][10014],data[i][10309],data[i][11433]);
					 array.push(array1);
				}
				 
					 console.log(array);
				 res.render('graph', { title: 'Express',"count":array,"zip":1});
				}
			 },query);			
			}
		  });


router.get('/businessvibes', function(req, res) {


var parts=url.parse(req.url,true);
var temp=parts.query.a;
var zipapi = req.param('zipcode');
var data;
//res.render('car', {  });
console.log(zipapi);
//var db=MongoClient.connect("mongodb://cmpe272:cmpe27211@ds053190.mongolab.com:53190/cmpe272");
//, {native_parser:true}, function(err, db) {
    //assert.equal(null, err);

    db.collection('customercollection').find({_id:zipapi},function(e, documents){
      
    	data = documents;
     // db.close();
    });
    res.send(JSON.stringify(data));
});




module.exports = router;
