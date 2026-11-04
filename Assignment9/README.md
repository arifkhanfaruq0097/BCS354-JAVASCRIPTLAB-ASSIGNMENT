STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 9

1. Experiment Title: DOM, Validation, Storage and Quiz

2. Aim: Change page with click, check form values, save in localStorage, build quiz.

3. Software: VS Code, Chrome Browser

4. Theory: DOM getElementById changes innerText. Validation checks empty .value=="". localStorage setItem getItem saves permanent. Radio button checked checks answer.

5. Program:
task1.html: <!-- Name: Arif Khan | Roll No: 2510303124 | Ass:9 T1 --><h1 id="head">Welcome</h1><button id="btn">Change text</button><script>document.getElementById("btn").onclick=()=>{document.getElementById("head").innerText="Button clicked";};</script>
task2.js: function validateForm(name){let e=[]; if(name==""){e.push("Name is required");} return e;} console.log(validateForm("Asha")); console.log(validateForm(""));
task3.html: <input id="note"><button id="save">Save</button><script>document.getElementById("save").onclick=()=>{localStorage.setItem("note",document.getElementById("note").value);}; document.getElementById("note").value=localStorage.getItem("note")||"";</script>
task4.html: <p>What is 2+3?</p><input type="radio" name="q" value="4">4<input type="radio" name="q" value="5">5<input type="radio" name="q" value="6">6<button id="check">Check</button><p id="res"></p><script>document.getElementById("check").onclick=()=>{let v=document.querySelector('input[name="q"]:checked'); document.getElementById("res").innerText=(v&&v.value=="5")?"Correct":"Try again";};</script>

6. Input: Click buttons, name inputs

7. Output: Heading changes to Button clicked. Validation [] and ["Name is required"]. Quiz Correct/Try again.

8. Result: Success

9. Viva: 1. What is DOM? 
         2. What is localStorage? 
         3. What is innerText? 
         4. How to get radio value?