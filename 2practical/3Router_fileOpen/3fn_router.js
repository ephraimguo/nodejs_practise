var fs = require('fs');

module.exports = {
    readFileSync:function (path) {  //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
        return data;
    },
    readFile: function (path, recall) { // 异步读取
        fs.readFile(path, function(err, data){
            if(err){
                console.log(err);
            }
            else {
                console.log(data.toString());
                recall(data);
            }
        });
    }

}