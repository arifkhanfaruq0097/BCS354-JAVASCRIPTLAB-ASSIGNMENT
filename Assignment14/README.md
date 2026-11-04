STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 14

1. Experiment Title: Timers and Intervals

2. Aim: Run code after delay setTimeout, cancel timer, repeat with setInterval.

3. Software: VS Code, Node and Chrome

4. Theory: setTimeout runs once after delay. clearTimeout cancels by id. setInterval repeats every ms. clearInterval stops. 0 delay still runs after Start and End due to event loop.

5. Program:
task1.js: console.log("Start"); setTimeout(()=>{console.log("Timer done");},0); console.log("End");
task2.js: let id=setTimeout(()=>{console.log("Not shown");},1000); clearTimeout(id); console.log("Cancelled");
task3.js: let count=0; let id2=setInterval(()=>{count++; console.log("Tick "+count); if(count==3){clearInterval(id2);}},200);

6. Input: Timer files

7. Output: Start End Timer done \n Cancelled \n Tick 1 Tick 2 Tick 3

8. Result: Success

9. Viva: 1. What is setTimeout? 
          2. What is event loop? 
          3. Difference setTimeout setInterval?