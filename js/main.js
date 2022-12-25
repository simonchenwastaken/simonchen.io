const fps = 60;

let ctx = $("#canvas")[0].getContext('2d');
let currentPath = "/";
let balls = [
  {
    x: 10,
    y: 10,
    size: 1,
    currentSvg: 0,
    color: "#FFFFFF",
  },
  {
    x: 200,
    y: 200,
    size: 2,
    currentSvg: 0,
    color: "#FFFFFF",
  }
]

const renderBall = (ball) => {
  const matrix = new DOMMatrix()
    .scale(ball.size)
    .translate(
      tx=ball.x,
      ty=ball.y
    )

  const path = new Path2D();
  path.addPath(ballSvgs[ball.currentSvg], matrix);

  ctx.fillStyle = ball.color;
  ctx.fill(path)
};

$(document).ready(() => {
  $("#canvas").attr("width", ($(window).width()));
  $("#canvas").attr("height", ($(window).height()));
});

$(window).resize(() => {
  $("#canvas").attr("width", ($(window).width()));
  $("#canvas").attr("height", ($(window).height()));
});

setInterval(() => {
  ctx.clearRect(0, 0, $("#canvas").width(), $("#canvas").height());
  balls.forEach(ball => {
    renderBall(ball);
  })
  
}, 1000 / fps);