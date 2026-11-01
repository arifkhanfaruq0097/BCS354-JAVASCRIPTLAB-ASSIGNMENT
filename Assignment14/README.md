STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 14

1. Experiment Title: Timers and Intervals

2. Aim: Run code after delay setTimeout, cancel timer, repeat with setInterval.

3. Software: VS Code, Node and Chrome

4. Theory: setTimeout runs once after delay. clearTimeout cancels by id. setInterval repeats every ms. clearInterval stops. 0 delay still runs after Start and End due to event loop.

5. Algorithm: 1. Print Start schedule Timer done 0 delay print End note order Start End Timer done 2. Schedule Not shown 1000ms id clearTimeout print Cancelled 3. setInterval Tick count every 200ms count++ stop when 3 clearInterval 4. Screenshot

6. Program:
task1.js: console.log("Start"); setTimeout(()=>{console.log("Timer done");},0); console.log("End");
task2.js: let id=setTimeout(()=>{console.log("Not shown");},1000); clearTimeout(id); console.log("Cancelled");
task3.js: let count=0; let id2=setInterval(()=>{count++; console.log("Tick "+count); if(count==3){clearInterval(id2);}},200);

7. Input: Timer files

8. Output: Start End Timer done \n Cancelled \n Tick 1 Tick 2 Tick 3

9. Result: Success

10. Viva: 1. What is setTimeout? 
          2. What is event loop? 
          3. Difference setTimeout setInterval?