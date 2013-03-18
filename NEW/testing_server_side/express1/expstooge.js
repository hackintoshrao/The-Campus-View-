express= require('express');
var app = express();

app.set('view engine','jade' ) ;
app.set('view options',{layout:true });
app.set('views',__dirname + '/views');

app.get('/names/:name',function(req,res,next) {
	var name = req.params.name;
	switch(name ? name.toLowerCase() : '' ) {
		case 'karthic' : 
		case 'Ganesh' : 
		case 'ashwin' :
			res.render('names',{fav_names : name});
	 		break ;

		default: next();
	}
});

app.get('/names/*',function(req,res) {
	res.render('names',{fav_names:null});
	});

app.get('/',function(req,res) {
	res.render('index');
});

var port= 9000;
app.listen(port);
console.log('Listening on the port ' + port ) ;






