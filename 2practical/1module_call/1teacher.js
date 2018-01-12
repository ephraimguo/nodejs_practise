var User = require('./1User');

function Teacher(id, name, age) {
    User.apply(this,[id, name, age]);

    this.teach = function () {
        console.log(this.name + '正在教学');
    }

}

module.exports = Teacher;