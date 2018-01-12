function User(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function () {
        console.log(this.name + '进入图书馆, 他已经' + this.age + '岁了, 编号是'+this.id);
    }
}

module.exports = User;
