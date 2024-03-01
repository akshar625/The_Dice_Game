var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomImageSource="./images/"+randomImage;
document.querySelector(".img1").setAttribute("src",randomImageSource);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber2+".png";
var randomImageSource="./images/"+randomImage;
document.querySelector(".img2").setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player1 wins!🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Playver2 wins!🚩";
}
else {document.querySelector(("h1")).textContent="Draw!!"
}

