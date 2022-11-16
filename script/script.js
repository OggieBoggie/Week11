// function greet(person_name) {
//     // console.log ("Hello, " + person_name + "!");
//     console.log (`Hello, ${person_name}!`);
// }


const greet = function(user, time = "day") {
    console.log (`Good ${time} ${user}!`);
}
let time = prompt("What time is it")
let user = prompt("Who are you?");
greet(user, time);

