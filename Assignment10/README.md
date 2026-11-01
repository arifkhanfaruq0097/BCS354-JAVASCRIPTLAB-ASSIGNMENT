STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 10

1. Experiment Title: Objects and Destructuring

2. Aim: Create object, read and change property, array and object destructuring.

3. Software: VS Code, Node

4. Theory: Object {key:value}. student.name reads property. student.marks=81 changes. Destructuring let [first,second]=array and let {name,roll}=object.

5. Algorithm: 1. student {name:Rohan,roll:12,marks:78} print name change marks to 81 print marks 2. subjects [Maths,Science,English] let [first,second]=subjects print first second 3. student {name:Rohan,roll:12,marks:81} let {name,roll}=student print 4. Screenshot

6. Program:
task1.js: let student={name:"Rohan",roll:12,marks:78}; console.log(student.name); student.marks=81; console.log(student.marks);
task2.js: let sub=["Maths","Science","English"]; let [first,second]=sub; console.log(first); console.log(second);
task3.js: let student2={name:"Rohan",roll:12,marks:81}; let {name,roll}=student2; console.log(name); console.log(roll);

7. Input: Object Rohan 12 78

8. Output: Rohan 81 \n Maths Science \n Rohan 12

9. Result: Success

10. Viva: 1. What is destructuring? 2. How to change property? 3. Object vs array?