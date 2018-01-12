var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    if(res.url!= 'favicon.ico'){
        console.log('accessed');
        res.write('the backend works now' +
            '<h1>this is a title</h1>' +
            '<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labo</p>');

    }
    res.end('now the req ends');
});

server.listen(8080);
console.log('server running at localhost:8080');