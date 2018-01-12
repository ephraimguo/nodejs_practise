
//-----------n5_readfile-------------------------

var  http  =  require('http');
var  optfile  =  require('./3file_opt');

http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        // var txt = optfile.readFileSync('./fileToRead/aaaa.html');
        // response.write(txt);

        function recall(data){
            response.write(data);
            response.end('hello,world');//不写则没有http协议尾
        }

        optfile.readFile('./fileToRead/aaaa.html', recall);

        console.log('done');
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');