// $("#wins").text("1");

// $("#icecream").click(function() {
//   alert("Amount of coins collected");
// });

// $(".btn").click(function() {
//   alert("playing");
// });
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let targetNumber = Math.floor(Math.random() * (max - min)) + min;
  $("#target-number").text(targetNumber);

}

getRandomInt(19, 120);

let treatOne = Math.floor(Math.random() * 12 + 1);
let treatTwo = Math.floor(Math.random() * 12 + 1);
let treatThree = Math.floor(Math.random() * 12 + 1);
let treatFour = Math.floor(Math.random() * 12 + 1);
let treatFive = Math.floor(Math.random() * 12 + 1);
let points = 0;
$("#points").text(points);

let wins = 0;
let losses = 0;

$("#cupcake").click(function() {
console.log("cupcake", points += treatOne)
});
$("#donut").click(function() {
  console.log("donut", points += treatTwo)
}); 
$("#icecream").click(function() {
  console.log("icecream", points += treatThree)
}); 
$("#cookie").click(function() {
  console.log("cookie", points += treatFour)
}); 
$("#cake").click(function() {
  console.log("cake", points += treatFive)
}); 