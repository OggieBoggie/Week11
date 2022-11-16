// function greet(person_name) {
//     // console.log ("Hello, " + person_name + "!");
//     console.log (`Hello, ${person_name}!`);
// }


// const greet = function(user, time = "day") {
//     console.log (`Good ${time} ${user}!`);
// }

// let time = prompt("What time is it")
// let user = prompt("Who are you?");
// greet(user, time);



const calcArea = function(radius) {
    let result = Math.pi * radius * radius;
    return result;
}

let r = prompt("Enter the radius of circle");
let calculatedArea = calcArea(r).toFixed(2);
alert(`The area of a circle with radius ${r} is ${calculatedArea}`);