STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 11

1. Experiment Title: Scope and Closures

2. Aim: Block scope and global scope, function returning function.

3. Software: VS Code, Node

4. Theory: let inside {} is block scope. Variable outside any function is global scope. Closure: inner function remembers outer count even after outer finished.

5. Program:
task1.js: let level="outer"; {let level="inner"; console.log(level);} console.log(level);
task2.js: function makeCounter(){let count=0; return function(){count++; return count;};} let c=makeCounter(); console.log(c()); console.log(c());
task3.js: let school="Sample College"; function showSchool(){console.log("Welcome to "+school);} showSchool();

6. Input: outer inner

7. Output: inner outer \n 1 2 \n Welcome to Sample College

8. Result: Success

9. Viva: 
        1. What is block scope?
        2. What is closure? 
        3. What is global?