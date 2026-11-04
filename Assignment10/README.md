STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 10

1. Experiment Title: Objects and Destructuring

2. Aim: Create object, read and change property, array and object destructuring.

3. Software: VS Code, Node

4. Theory: Object {key:value}. student.name reads property. student.marks=81 changes. Destructuring let [first,second]=array and let {name,roll}=object.

5. Program:
task1.js: let student={name:"Rohan",roll:12,marks:78}; console.log(student.name); student.marks=81; console.log(student.marks);
task2.js: let sub=["Maths","Science","English"]; let [first,second]=sub; console.log(first); console.log(second);
task3.js: let student2={name:"Rohan",roll:12,marks:81}; let {name,roll}=student2; console.log(name); console.log(roll);

6. Input: Object Rohan 12 78

7. Output: Rohan 81 \n Maths Science \n Rohan 12

8. Result: Success

9. Viva: 
        1. What is destructuring?
         2. How to change property? 
         3. Object vs array?