function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.type='human';

const Alice = new Person();
const Bob = new Person();

console.log(Alice.type, Bob.type);