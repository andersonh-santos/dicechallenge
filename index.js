var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var imageSelected = document.querySelectorAll("img")[0];

imageSelected.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var imageSelected2 = document.querySelectorAll("img")[1];

imageSelected2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "1 venceu!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "2 venceu!";
} else {
  document.querySelector("h1").innerHTML = "Empatou!";
}
