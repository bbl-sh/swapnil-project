var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource  = "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice"+randomNumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
 }
 else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
 }
 else{
    document.querySelector("h1").innerHTML = "Draw";
 }

function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener("DOMContentLoaded", function() {
   const img1 = document.querySelector(".img1");
   const img2 = document.querySelector(".img2");

   img1.src = `dice${rollDice()}.png`;
   img2.src = `dice${rollDice()}.png`;
});