STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 6

1. Experiment Title: JSON Text

2. Aim: Convert object to JSON text, JSON text to object, catch invalid JSON.

3. Software: VS Code, Node

4. Theory: JSON.stringify converts object to string. JSON.parse converts string to object. Invalid JSON throws error caught by try catch.

5. Algorithm: 1. Create obj {name:"Rohan",marks:[70,80]} stringify print 2. Text {"city":"Pune","pin":411001} parse print city 3. Text {name: Rohan} invalid try parse catch print Invalid JSON 4. Screenshot

6. Program:
task1.js: let obj={name:"Rohan",marks:[70,80]}; console.log(JSON.stringify(obj));
task2.js: let txt='{"city":"Pune","pin":411001}'; let o=JSON.parse(txt); console.log(o.city);
task3.js: let bad='{name: Rohan}'; try{JSON.parse(bad);}catch(e){console.log("Invalid JSON");}

7. Input: Objects and JSON texts

8. Output: {"name":"Rohan"...} | Pune | Invalid JSON

9. Result: Success

10. Viva: 1. What is JSON? 2. stringify vs parse? 3. What is try catch?