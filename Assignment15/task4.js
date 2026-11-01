/*
 Name : Arif Khan
 Roll No : 2510303124
 Assignment No : 15
 Task No : 4
*/

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Arif" },
        { id: 2, name: "lokesh" },
        { id: 3, name: "Saras" }
      ]);
    }, 100);
  });
}

async function showUsers() {
  let users = await getUsers();
  users.forEach((user) => {
    console.log(user.name);
  });
}

showUsers();