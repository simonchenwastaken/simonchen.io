const fps = 60;

let ctx = $("#canvas")[0].getContext('2d');
let currentPath = "/";
let balls = [
  {
    x: 500,
    y: 500,
    size: 1,
    currentSize: 0.5,
    currentSvg: 0,
    color: "#FFFFFF",
  },
  {
    x: 200,
    y: 200,
    size: 2,
    currentSize: 2,
    currentSvg: 0,
    color: "#FFFFFF",
  }
]

const updateBall = (ball) => {
  ball.currentSize += (ball.size - ball.currentSize) / 10;
}

const renderBall = (ball) => {
  const matrix = new DOMMatrix()
    .translate(
      tx=ball.x,
      ty=ball.y
    ).scale(
      scaleX=ball.currentSize,
      scaleY=ball.currentSize,
      originX=65,
      orignY=65
    )

  const path = new Path2D();
  path.addPath(
    ballSvgs[ball.currentSvg],
    matrix
  );

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
    updateBall(ball);
    renderBall(ball);
  })
}, 1000 / fps);