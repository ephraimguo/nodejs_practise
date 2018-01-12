var http = require('http');
var url = require('url');
var Fn_router = require('./2fn_router');// 文件名会是一个方法名


var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    if(res.url!= 'favicon.ico'){  // 做一个if判断防止，二次提交的bug
        var pathName = url.parse(req.url).pathname;  // req.url可以拿到地址栏里面的地址，
        pathName = pathName.replace(/\//, '');
        console.log(pathName);

        Fn_router[pathName](req, res);

        res.end('now the req ends');
    }

});

server.listen(8080);
console.log('server running at localhost:8080');