const position = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#00A8FF",
  "#00C9FF",
  "#00E6FF",
  "#00FFFE",
  "#00FFDD",
  "#00FFBD",
  "#00FF9B",
  "#00FF78",
  "#00FF54",
  "#0BFF2E",
  "#2EFF0B",
  "#54FF00",
  "#78FF00",
  "#9BFF00",
  "#BDFF00",
  "#DDFF00",
  "#FEFF00",
  "#FFDD00",
  "#FFC900",
  "#FFA800",
  "#FF8700",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  position.x = e.clientX;
  position.y = e.clientY;
});

function animateCircles() {
  let x = position.x;
  let y = position.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// Remove default cursor from the entire HTML page
document.documentElement.style.cursor = "none";
