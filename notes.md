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