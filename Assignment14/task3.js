/*
 Name : Arif Khan
 Roll No : 2510303124
 Assignment No : 14
 Task No : 3
*/

let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`Tick ${count}`);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);