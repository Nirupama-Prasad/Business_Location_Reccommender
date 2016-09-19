var ejs= require('ejs');
var mysql = require('mysql');

function getConnection(){
	

	var connection = mysql.createConnection({
	  host     : 'aa49674un645fx.crz3tnz6b23d.us-west-1.rds.amazonaws.com',
	  user     : 'cmpe272',
	  password : 'cmpe27211',
	  port 	   : '3306',
	  database : 'ebdb',
	});
    return connection;
}


function fetchData(callback,sqlQuery){
    
    console.log("\nSQL Query::"+sqlQuery);
    
    var connection=getConnection();
    
    connection.query(sqlQuery, function(err, rows, fields) {
        if(err){
            console.log("ERROR: " + err.message +  console.log( err.stack ));
        }
        else 
        {    // return err or result
            callback(err, rows);
        }
    });
    console.log("\nConnection closed..");
    connection.end();
}    

exports.fetchData=fetchData;