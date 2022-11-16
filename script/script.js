// function greet(person_name) {
//     // console.log ("Hello, " + person_name + "!");
//     console.log (`Hello, ${person_name}!`);
// }

const greet = function(user) {
    console.log (`Hello, ${user}!`);
}

let user = prompt("Who are you?");
greet(user);

