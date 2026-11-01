STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 5

1. Experiment Title: Arrays, Array Methods and Nested Arrays

2. Aim: Create array, read items, use forEach and filter, read nested array.

3. Software: VS Code, Node

4. Theory: Array stores multiple values index 0. length gives count. forEach loops each item. filter creates new array with condition. Nested array is array inside array grid[1][2].

5. Algorithm: 1. marks [72,85,64,90] print length and marks[0] 2. subjects [Maths,Science,English] forEach print 3. marks filter >=60 4. grid [[1,2,3],[4,5,6]] print grid[1][2] which is 6 5. Screenshot

6. Program:
task1.js: let marks=[72,85,64,90]; console.log(marks.length); console.log(marks[0]);
task2.js: let sub=["Maths","Science","English"]; sub.forEach(s=>console.log(s));
task3.js: let m=[72,85,45,90]; let pass=m.filter(x=>x>=60); console.log(pass);
task4.js: let grid=[[1,2,3],[4,5,6]]; console.log(grid[1][2]);

7. Input: Arrays as above

8. Output: 4,72 | Maths Science English | [72,85,90] | 6

9. Result: Success

10. Viva: 1. What is forEach? 2. What is filter? 3. What is nested array?