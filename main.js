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
let wins = 0;
let losses = 0;

$("#cupcake").click(function() {
  alert("Cupcake");
});
$("#cupcake").click(function() {
  alert("Cupcake");
}); 