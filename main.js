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
if(targetNumber < points) {
  console.log("you lost")
} else {
  console.log("maybe you won")
}
let treatOne = Math.floor(Math.random() * 12 + 1);
let treatTwo = Math.floor(Math.random() * 12 + 1);
let treatThree = Math.floor(Math.random() * 12 + 1);
let treatFour = Math.floor(Math.random() * 12 + 1);
let treatFive = Math.floor(Math.random() * 12 + 1);
let wins = 0;
let losses = 0;

$("#cupcake").click(function() {
  points += treatOne;
  $("#points").text(points);
});
$("#donut").click(function() {
  points += treatTwo;
  $("#points").text(points);
});
$("#icecream").click(function() {
  points += treatThree;
  $("#points").text(points);
});
$("#cookie").click(function() {
  points += treatFour;
  $("#points").text(points);
});
$("#cake").click(function() {
  points += treatFive;
  $("#points").text(points);
});
