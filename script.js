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

// Checking the ball radius
let ballRadius = 10;

// Doing the paddle
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

// Checking user input left arrow and right arrow keys
let rightPressed = false;
let leftPressed = false;

// Adding a event listener for the arrow keys and player movement
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

// creating the function for the right and left arrow key
function keyDown(e) {
    // code
}

// creating the function for the right and left arrow key
function keyUp(e) {
    // code
}


// Making a function to draw the paddle
function drawPaddle() {
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

// Making the drawBall function for the game
function drawBall() {
    context.beginPath();
    context.arc(width, height, 10, 0, Math.PI * 2); // When duing Math.pi and multiplying by 2 it will create a full circle 
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

// Making the draw function for the game
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.arc(width, height, ballRadius, 0, Math.PI * 2);
    width += directionx;
    height += directiony;

    // calling the function drawBall()
    drawBall();

    // What this if statement does make the ball bounce around the walls
    if (height + directiony < 0) {
        directiony = -directiony;
    }
    
    if (height + directiony > canvas.height) {
        directiony = -directiony;
    }

    if (height + directiony > canvas.height || height + directiony < 0) {
        directiony = -directiony;
    }

    if (width + directionx > canvas.width || width + directionx < 0) {
        directionx = -directionx;
    }

    if (height + directiony > canvas.height || height + directiony < 0) {
        directiony = -directiony;
    }

    drawPaddle();
}
setInterval(draw, 10);