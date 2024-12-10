const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let dx = 2;
let dy = 2;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "#007bff";
    ctx.fill();
    ctx.closePath();

    if (x + dx > canvas.width - 20 || x + dx < 20) dx = -dx;
    if (y + dy > canvas.height - 20 || y + dy < 20) dy = -dy;

    x += dx;
    y += dy;
}

setInterval(drawCircle, 20);
