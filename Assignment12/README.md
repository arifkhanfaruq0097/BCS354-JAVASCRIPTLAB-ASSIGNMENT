STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 12

1. Experiment Title: Callbacks and Higher-Order Functions

2. Aim: Pass function as argument.

3. Software: VS Code, Node

4. Theory: Higher-order function takes function as parameter. Callback is function passed. applyTwice calls func twice.

5. Algorithm: 1. applyTwice(func,value) let r=func(value); return func(r); addTen n+10 print applyTwice(addTen,5) =25 2. formatMarks(marks,callback) return callback(marks) print 76 with "Marks: 76/100" 3. repeatAction(times,action) for i 1 to times action(i) call 3 times print Round n 4. Screenshot

6. Program:
task1.js: function applyTwice(func,value){return func(func(value));} function addTen(n){return n+10;} console.log(applyTwice(addTen,5));
task2.js: function formatMarks(m,c){return c(m);} console.log(formatMarks(76,(m)=>"Marks: "+m+"/100"));
task3.js: function repeatAction(times,action){for(let i=1;i<=times;i++){action(i);}} repeatAction(3,(n)=>{console.log("Round "+n);});

7. Input: 5, 76, 3

8. Output: 25 \n Marks: 76/100 \n Round 1 Round 2 Round 3

9. Result: Success

10. Viva: 1. What is callback? 2. What is higher-order? 3. What is applyTwice doing?