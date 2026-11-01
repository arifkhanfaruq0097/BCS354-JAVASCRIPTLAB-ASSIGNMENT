STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 8

1. Experiment Title: Inheritance, Methods and Composition

2. Aim: Use extends child class, check value method, object inside object.

3. Software: VS Code, Node

4. Theory: extends creates child class Teacher extends Person. super() calls parent. Composition means Engine object inside Car object. checkPin checks pin equality.

5. Algorithm: 1. Class Person greet() "Hi, I am "+name 2. Teacher extends Person adds subject Anita Maths print greet 3. Locker pin 1234 checkPin returns true if equals print 1111 false 1234 true 4. Engine power, Car holds Engine start() returns "Car starts with 150 HP" power 150 5. Screenshot

6. Program:
task1.js: class Person{constructor(name){this.name=name;} greet(){return "Hi, I am "+this.name;}} class Teacher extends Person{constructor(name,sub){super(name); this.subject=sub;}} let t=new Teacher("Anita","Maths"); console.log(t.greet());
task2.js: class Locker{constructor(){this.pin=1234;} checkPin(n){return n==this.pin;}} let l=new Locker(); console.log(l.checkPin(1111)); console.log(l.checkPin(1234));
task3.js: class Engine{constructor(p){this.power=p;}} class Car{constructor(p){this.engine=new Engine(p);} start(){return "Car starts with "+this.engine.power+" HP";}} console.log(new Car(150).start());

7. Input: Anita, 1111 1234, 150

8. Output: Hi, I am Anita \n false true \n Car starts with 150 HP

9. Result: Success

10. Viva: 1. What is extends? 2. What is super? 3. What is composition?