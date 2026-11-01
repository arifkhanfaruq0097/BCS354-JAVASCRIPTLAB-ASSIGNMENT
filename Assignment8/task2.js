/*
Name : Arif Khan
Roll No : 2510303124
Assignment No : 8
Task No : 2
*/

class Locker {
    constructor() {
        this.pin = 1234;
    }

    checkPin(number) {
        return number === this.pin;
    }
}

let locker = new Locker();

console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));