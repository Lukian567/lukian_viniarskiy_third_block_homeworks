let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
}
person.showData = function () {
    console.log(`${this.firstName} ${this.secondName}`);
}
let newPerson = Object.assign({}, person);
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
person.showData();
newPerson.showData();

let myMath = {}
myMath.a = 5;
myMath.b = 2;
myMath.sum = function () {

    console.log(this.a + this.b);
}
myMath.multiplication = function () {
    console.log(this.a * this.b);
}
myMath.division = function () {
    console.log(this.a / this.b);
}
myMath.subtraction = function () {
    console.log(this.a - this.b);
}
myMath.sum()
myMath.multiplication()
myMath.division()
myMath.subtraction()