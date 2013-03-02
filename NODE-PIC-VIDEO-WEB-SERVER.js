var connect = require('connect'),
http = require('http'),
_dirname = '/home/karthic/Videos';
http.createServer(connect()
.use(connect.logger())
.use(connect.static(_dirname ), {redirect: true})
).listen(8124);

