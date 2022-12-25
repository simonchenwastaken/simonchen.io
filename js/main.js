const fps = 60;

let currentPath = "/";

$(document).ready(() => {
  $("#canvas").width($(window).width());
  $("#canvas").height($(window).height());
});

$(window).resize(() => {
  $("#canvas").width($(window).width());
  $("#canvas").height($(window).height());
});

setInterval(() => {

}, 1000 / fps);