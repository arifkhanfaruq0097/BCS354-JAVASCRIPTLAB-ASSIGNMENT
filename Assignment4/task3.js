/*
Name : Arif Khan
Roll No : 2510303124
Assignment No : 4
Task No : 3
*/

function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));