STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 7

1. Experiment Title: Constructor Functions and Classes

2. Aim: Create objects with constructor and ES6 class, add method through prototype.

3. Software: VS Code, Node

4. Theory: Constructor function uses this and new keyword. Class is new syntax with constructor method. prototype adds method to all objects. result() returns Pass if >=40 else Fail.

5. Algorithm: 1. Student constructor name marks new Asha 88 print 2. Class Book title pages summary() return title has pages print Algorithms 320 3. Add Student.prototype.result 4. Screenshot

6. Program:
task1.js: function Student(name,marks){this.name=name; this.marks=marks;} let s=new Student("Asha",88); console.log(s.name); console.log(s.marks);
task2.js: class Book{constructor(title,pages){this.title=title; this.pages=pages;} summary(){return this.title+" has "+this.pages+" pages";}} let b=new Book("Algorithms",320); console.log(b.summary());
task3.js: function Student(n,m){this.name=n; this.marks=m;} Student.prototype.result=function(){return this.marks>=40?"Pass":"Fail";}; let a=new Student("Asha",88); console.log(a.result());

7. Input: Asha 88, Algorithms 320

8. Output: Asha 88 | Algorithms has 320 pages | Pass

9. Result: Success

10. Viva: 1. What is constructor? 2. What is class? 3. What is prototype?