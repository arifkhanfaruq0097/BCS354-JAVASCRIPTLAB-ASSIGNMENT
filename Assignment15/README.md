STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 15

1. Experiment Title: Promises and async/await with Local Data

2. Aim: Promise resolve/reject, async/await try catch, local data Promise.

3. Software: VS Code, Node

4. Theory: Promise pending->resolved or rejected. .then catches resolve .catch catches reject. async await waits. try catch handles error. Local data Promise resolves after 100ms with users.

5. Program:
task1.js: function checkMarks(m){return new Promise((res,rej)=>{if(m>=0&&m<=100){res(m);} else{rej(new Error("Marks out of range"));}});} checkMarks(80).then(v=>console.log(v));
task2.js: function checkMarks(m){return new Promise((res,rej)=>{if(m>=0&&m<=100){res(m);} else{rej(new Error("Marks out of range"));}});} checkMarks(120).catch(e=>console.log(e.message));
task3.js: function checkMarks(m){return new Promise((res,rej)=>{if(m>=0&&m<=100){res(m);} else{rej(new Error("Marks out of range"));}});} async function run(){try{console.log(await checkMarks(65)); console.log(await checkMarks(-5));}catch(e){console.log("Caught: "+e.message);}} run();
task4.js: function getUsers(){return new Promise(res=>{setTimeout(()=>{res([{id:1,name:"Asha"},{id:2,name:"Rohan"},{id:3,name:"Meera"}]);},100);});} async function show(){let users=await getUsers(); users.forEach(u=>console.log(u.name));} show();

6. Input: 80,120,65 -5, getUsers

7. Output: 80 \n Marks out of range \n 65 Caught: Marks out of range \n Asha Rohan Meera

8. Result: Success

9. Viva: 1. What is Promise? 
          2. What is async await?
          3. What is then catch? 
          4. What is try catch?