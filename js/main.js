// Global constants
const fps = 5;
const ctx = $("#canvas")[0].getContext('2d');

// Global state
let currentPath = "/";
let balls = []

// Application start
$(document).ready(() => {
  $("#canvas").attr("width", ($(window).width()));
  $("#canvas").attr("height", ($(window).height()));

  $.getJSON("balls.json", json => {
    balls = json.map(ballData => BallFactory(ballData));
  });

});

// Application window resize
$(window).resize(() => {
  const width = $("#canvas").width();
  const height = $("#canvas").height();
  const newWidth = $(window).width();
  const newHeight = $(window).height();

  $("#canvas").attr("width", newWidth);
  $("#canvas").attr("height", newHeight);

  balls.forEach(ball => {
    transformBall(
      ball,
      ball.x * newWidth / width,
      ball.y * newHeight / height
    );
  });
});

// Application main loop
setInterval(() => {
  // Clear canvas
  ctx.clearRect(0, 0, $("#canvas").width(), $("#canvas").height());

  // Update ball state
  balls.forEach((ball, i) => {
    // Ball collision
    for (let j = 0; j < i; j++) {
      collideBall(balls[i], balls[j]);
    }

    // Update other ball state and re-render ball
    updateBall(ball);
    renderBall(ball);
  });
}, 1000 / fps);

console.log("~~~~~~ Welcome to simonchen.io! ~~~~~~\nI'm Simon Chen and this is my personal portfolio website!");