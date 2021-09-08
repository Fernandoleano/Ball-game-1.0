/*
    Creator of the code is me Fernando Leano
    Developer
*/

let canvas = document.getElementById("gameCanvas"); // use getElementById not createElement
let context = canvas.getContext("2d");

context.beginPath();
// Making a square (To test it out)
context.rect(20, 40, 50, 50);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();