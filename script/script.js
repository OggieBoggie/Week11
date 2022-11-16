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


function calcArea(radius) {
    let result = Math.PI * radius * radius;
    return result;
}

let r = prompt("Enter the radius of circle");
let calculatedArea = calcArea(r).toFixed(2);
alert(`The area of a circle with radius ${r} is ${calculatedArea}`);

let radiusParagraph = document.querySelector('#radius');
radiusParagraph.textContent += r;
let areaParagraph = document.querySelector('#result');
areaParagraph.textContent += calculatedArea;