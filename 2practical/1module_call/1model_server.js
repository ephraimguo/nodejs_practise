var http = require('http');
var User = require('./1User'); //直接将类名引入，不需要.js，但是需要./声明是在本地文件夹中
var Tech = require('./1teacher'); //导入Teacher类

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    if(res.url!= 'favicon.ico'){
        user = new User(10010, 'Yanyu', 27);
        user.enter();

        tech = new Tech(30030, 'Php', 45);
        tech.enter();
        tech.teach();

        res.end('now the req ends');
    }

});

server.listen(8080);
console.log('server running at lo calhost:8080');