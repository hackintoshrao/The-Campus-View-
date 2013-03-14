express= require('express');
var app = express();

app.get('/names/:name',function(req,res,next) {
	var name = req.params.name;
	switch(name ? name.toLowerCase() : '' ) {
		case 'karthic' : 
		case 'Ganesh' : 
		case 'ashwin' :
			res.send(name+ ' Is my favorite guy ' );
	 		break ;

		default: next();
	}
});

app.get('/names/*',function(req,res) {
	res.send('No names here ' );
	});

app.get('/',function(req,res) {
	res.send('HI!!!!!!!!!!!!!!!!!!! ' );
});

var port= 9000;
app.listen(port);
console.log('Listening on the port ' + port ) ;






