/*
    Creator of the code is me Fernando Leano
    This is a ball game and it was fun to make and pretty easy, but a little hard
*/

let canvas = document.getElementById("gameCanvas"); // use getElementById not createElement
let context = canvas.getContext("2d"); // Use context then ctx don't be lazy make your code more readable
let width = canvas.width / 2; // divinding the width of the canvas by 2 (my x)
let height = canvas.height - 30; // subtracting the height of the canvas by 30 (my y)

// Setting the direction for x and y a bit of math needed for this
let directionx = 2;
let directiony = -2;

// Making the draw function for the game
function draw() {
    context.beginPath();
    context.arc(width, height, 10, 0, Math.PI * 2); // When duing Math.pi and multiplying by 2 it will create a full circle 
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
    width += directionx;
    height += directiony;
}
setInterval(draw, 10);

context.beginPath();
// Making a square (To test it out)
context.rect(20, 40, 50, 50);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();

// Making a ball (A circle)
context.beginPath();
context.arc(240, 160, 20, 0, Math.PI * 2, false);
context.fillStyle = "blue";
context.fill();
context.closePath();

// Making a rectange (To test it out)
context.beginPath();
context.rect(160, 10, 100, 40);
context.fillStyle = "green";
context.fill();
context.closePath();