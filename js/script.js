$(document).ready(function(){
  let attemptLabel = document.getElementById("attempt");
  let inputText = document.getElementById("inText");
  let buttonText = document.getElementById("buttonText");
  let goodPoints = document.getElementById("good");
  let badPoints = document.getElementById("bad");

  $("#random").click(function(){
    let randNum = Math.floor(Math.random() * 4) + 1;
    window.location.assign("games/"+ randNum + "/index.html");
  });
});