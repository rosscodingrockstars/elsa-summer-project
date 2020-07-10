// $("#wins").text("1");

// $("#icecream").click(function() {
//   alert("Amount of coins collected");
// });

// $(".btn").click(function() {
//   alert("playing");
// });
let targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
$("#target-number").text(targetNumber);
let points = 0;
$("#points").text(points);
function checkPoints() {
  if (targetNumber < points) {
    losses++;
  } else if (points === targetNumber) {
    wins++;
  } else {
    console.log("keep going");
  }
}
let treatOne = Math.floor(Math.random() * 12 + 2);
let treatTwo = Math.floor(Math.random() * 12 + 2);
let treatThree = Math.floor(Math.random() * 12 + 2);
let treatFour = Math.floor(Math.random() * 12 + 2);
let treatFive = Math.floor(Math.random() * 12 + 2);
let wins = 0;
let losses = 0;

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
