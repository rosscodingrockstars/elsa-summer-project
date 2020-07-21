$("#restart").hide();

let targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
$("#target-number").text(targetNumber);
let points = 0;
$("#points").text(points);
let treatOne = Math.floor(Math.random() * 12 + 2);
let treatTwo = Math.floor(Math.random() * 12 + 2);
let treatThree = Math.floor(Math.random() * 12 + 2);
let treatFour = Math.floor(Math.random() * 12 + 2);
let treatFive = Math.floor(Math.random() * 12 + 2);
$("#restart").click(function() {
  $("#restart").hide();

  $(".treats").show();
  points = 0;
  $("#points").text(points);
  targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#target-number").text(targetNumber);
  treatOne = Math.floor(Math.random() * 12 + 2);
  treatTwo = Math.floor(Math.random() * 12 + 2);
  treatThree = Math.floor(Math.random() * 12 + 2);
  treatFour = Math.floor(Math.random() * 12 + 2);
  treatFive = Math.floor(Math.random() * 12 + 2);
});
function checkPoints() {
  if (targetNumber < points) {
    losses++;
    $("#losses").text(losses);
    $(".treats").hide();
    $("#restart").show();
  } else if (points === targetNumber) {
    wins++;
    $("#wins").text(wins);
    $(".treats").hide();
    $("#restart").show();
  }
}
let wins = 0;
$("#wins").text(wins);
let losses = 0;
$("#losses").text(losses);
$("#cupcake").click(function() {
  points += treatOne;
  $("#points").text(points);
  checkPoints();
});
$("#donut").click(function() {
  points += treatTwo;
  $("#points").text(points);
  checkPoints();
});
$("#icecream").click(function() {
  points += treatThree;
  $("#points").text(points);
  checkPoints();
});
$("#cookie").click(function() {
  points += treatFour;
  $("#points").text(points);
  checkPoints();
});
$("#cake").click(function() {
  points += treatFive;
  $("#points").text(points);
  checkPoints();
});
