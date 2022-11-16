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


// function calcArea(radius) {
//     let result = Math.PI * radius * radius;
//     return result;
// }

// let r = prompt("Enter the radius of circle");
// let calculatedArea = calcArea(r).toFixed(2);
// alert(`The area of a circle with radius ${r} is ${calculatedArea}`);

// let radiusParagraph = document.querySelector('#radius');
// radiusParagraph.textContent += r;
// let areaParagraph = document.querySelector('#result');
// areaParagraph.textContent += calculatedArea;

let shoppingItems = ["cheese" , "green chicken" , "chair" , "lawn mower"];

const shoppingListElement = document.querySelector(".shopping")
function populateList(arr)
{
    for (let item of arr) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingListElement.appendChild(listItem);
    }
}

populateList(shoppingItems);

function changeListStyle()
{
    shoppingListElement.classList.remove("circleList");
    shoppingListElement.classList.add("squareList");
}

changeListStyle()

function makeGreen()
{
    const allListItems = document.querySelectorAll(".shopping li")
    for (let i = 0; i < allListItems.length; i++)
    if (allListItems[i].textContent.includes("green")) {
        allListItems[i].classList.add("green");
    }
}

makeGreen()