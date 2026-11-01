/*
Name : Arif Khan
Roll No : 2510303124
Assignment No : 12
Task No : 1
*/

function applyTwice(fn, value) {
    return fn(fn(value));
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));