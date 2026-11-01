/*
 Name : Arif Khan
 Roll No : 2510303124
 Assignment No : 15
 Task No : 3
*/

function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

async function run() {
  try {
    console.log(await checkMarks(65));
    console.log(await checkMarks(-5));
  } catch (err) {
    console.log(`Caught: ${err.message}`);
  }
}

run();