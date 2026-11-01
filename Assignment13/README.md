STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 13

1. Experiment Title: Reduce, Some, Every and Map

2. Aim: Use reduce, some, every and map, keep original unchanged.

3. Software: VS Code, Node

4. Theory: reduce sums to one value. some true if any matches. every true if all match. map creates new array adding 5, original stays same.

5. Algorithm: 1. prices [120,45,300] reduce starting 0 total 2. marks [72,85,30,90] some <40 and every >=35 3. marks [72,85,64,90] map +5 new array print new and original 4. Screenshot

6. Program:
task1.js: let prices=[120,45,300]; let total=prices.reduce((a,b)=>a+b,0); console.log(total);
task2.js: let marks=[72,85,30,90]; console.log(marks.some(m=>m<40)); console.log(marks.every(m=>m>=35));
task3.js: let m=[72,85,64,90]; let newM=m.map(x=>x+5); console.log(newM); console.log(m);

7. Input: [120,45,300] [72,85,30,90]

8. Output: 465 \n true false? Actually some true, every false? Wait marks [72,85,30,90] 
some <40 true, every >=35 false because 30<35 so false. \n [77,90,69,95] [72,85,64,90]

9. Result: Success

10. Viva: 1. What is reduce? 2. some vs every? 3. Does map change original?