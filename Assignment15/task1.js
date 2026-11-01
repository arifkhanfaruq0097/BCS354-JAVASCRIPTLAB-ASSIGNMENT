/*
 Name : Arif Khan
 Roll No : 2510303124
 Assignment No : 15
 Task No : 1
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

checkMarks(80).then((value) => {
  console.log(value);
});