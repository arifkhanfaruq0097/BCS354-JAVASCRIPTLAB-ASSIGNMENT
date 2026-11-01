/*
Name : Arif Khan
Roll No : 2510303124
Assignment No : 9
Task No : 2
*/

function validateForm(name) {
    let errors = [];

    if (name === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Arif"));
console.log(validateForm(""));