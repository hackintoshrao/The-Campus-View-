var express=require('express');
var http = require('http');
var app = express();
server = http.createServer(app);
var io = require('socket.io').listen(server);
app.set('view engine','jade'); 
app.set('view options', { layout:true } );
app.set('views', __dirname + '/views');
app.get('/chat/?',function(req,res,next) {
	res.render('chat');
});

io.sockets.on('connection',function(socket) {	
	var sendMsg = function( title , text ) { 
	socket.emit('chat' , {
		title: title,
		contents:text 
		});
	};
	setInterval(function() {
			//var time = time + 3;
		sendMsg('RAO Here After' , 'Seconds ' );	
		} , 3000 );
	sendMsg('HI , Rao\'s First Web Sockets and connection Established','You know something ?? This is a enthralling experience ');
	socket.on('chat',function(data) { 
		sendMsg('I received ' + data.text) ;
	});
});

app.get('/?',function(req,res) {
	res.render('index');
});

var port = 9000;
server.listen(port);
console.log('listening on port' + port );

