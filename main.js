$("#wins").text("1");

$("#icecream").click(function() {
  alert("Amount of coins collected");
});

$(".btn").click(function() {
  alert(";pLaying");
});
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let targetNumber = Math.floor(Math.random() * (max - min)) + min;
  $("#target-number").text(targetNumber);

}

getRandomInt(19, 120);
