/*
    Creator of the code is me Fernando Leano
    This is a ball game and it was fun to make and pretty easy, but a little hard
*/

// developer button
function button() {
    document.getElementById("dev").innerHTML = "Fernando Leano made with: HTML, CSS, JAVASCRIPT! :D"
}

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
let paddleWidth = 115;
let paddleSpeed = (canvas.width - paddleWidth) / 2;

// Checking user input left arrow and right arrow keys
let rightPressed = false;
let leftPressed = false;

// Making the bricks
let brickRow = 3;
let brickColumn = 18;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffTop = 30;
let brickOffLeft = 30;

// Making a empty brick array
let bricks = [];

// Making score
let score = 0;

// Making a score function
function drawScore() {
    context.font = "21 Arial";
    context.fillStyle = "rebeccapurple";
    context.fillText("Score: " + score, 8, 20);
}

// making the loop for the bricks
for(let i = 0; i < brickColumn; i++) {
    bricks[i] = [];
    for(let j = 0; j < brickRow; j++) {
        bricks[i][j] = { width: 0, height: 0, status: 1};
    }
}

// Checking collisions detection
function drawCollisionDetection() {
    for (let i = 0; i < brickColumn; i++) {
        for (let j = 0; j < brickRow; j++) {
            let k = bricks[i][j];
            if (k.status === 1){
                if (width > k.width && width < k.width + brickWidth && height > k.height && height < k.height + brickHeight) {
                    directiony = -directiony;
                    k.status = 0;
                    score++;
                    if (score == brickRow * brickColumn) {
                        console.log("Wow I know you won, but you did not need to be here in 'inspect element' bro come on")
                        alert("You win, here is a cookie now play again");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }
        }
    }
}

// Making the fubction for the bricks
function drawBricks() {
    // making the loop for the bricks
    for (let i = 0; i < brickColumn; i++) {
        for (let j = 0; j < brickRow; j++) {
            if (bricks[i][j].status == 1) {
                let brickX = (i * (brickWidth + brickPadding)) + brickOffLeft;
                let brickY = (j * (brickHeight + brickPadding)) + brickOffTop;
                bricks[i][j].width = brickX;
                bricks[i][j].height = brickY;
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                context.fillStyle = "rgb(0, 191, 255)";
                context.fill();
                context.closePath();
            }
        }
    }
}

// Adding a event listener for the arrow keys and player movement
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

// creating the function for the right and left arrow key
function keyDown(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

// creating the function for the right and left arrow key
function keyUp(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

// Making the drawBall function for the game
function drawBall() {
    context.beginPath();
    context.arc(width, height, ballRadius, 0, Math.PI * 2); // When duing Math.pi and multiplying by 2 it will create a full circle 
    context.fillStyle = "rgb(0, 191, 255)   ";
    context.fill();
    context.closePath();
}

// Making a function to draw the paddle
function drawPaddle() {
    context.beginPath();
    context.rect(paddleSpeed, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = "rgb(0, 191, 255)";
    context.fill();
    context.closePath();
}

// Making the draw function for the game
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // calling the drawBall() function
    drawBall();

    // Calling the drawPaddle() function
    drawPaddle();

    // Calling the drawBricks() function
    drawBricks();

    // Calling the drawCollisionDetection() function
    drawCollisionDetection();

    // Calling the drawscore() function
    drawScore();
    
    // What this if statement does make the ball bounce around the walls and the paddle

    if (width + directionx > canvas.width - ballRadius || width + directionx < ballRadius) {
        directionx = -directionx;
    }

    if (height + directiony < ballRadius) {
        directiony = -directiony;
    }

    // Making a game over
    else if (height + directiony > canvas.height - ballRadius) {
        if (width > paddleSpeed && width < paddleSpeed + paddleWidth) {
            directiony = -directiony;
        } else {
            console.warn("Wow trying to cheat the system I see trust me your not that guy pal your not leave and play again like a true winner");
            alert("Game is over");
            document.location.reload();
            clearInterval(interval);
        }
    }

    if (rightPressed) {
        paddleSpeed += 8;
        if (paddleSpeed + paddleWidth > canvas.width) {
            paddleSpeed = canvas.width - paddleWidth;
        }
    }
    
    else if (leftPressed) {
        paddleSpeed -= 8;
        if (paddleSpeed < 0) {
            paddleSpeed = 0;
        }
    }

    width += directionx;
    height += directiony;
}
let interval = setInterval(draw, 10);
