const $blanco = document.querySelector(".blanco");
const  $body = document.querySelector("header");


setInterval(function(){

    $body.style.backgroundColor ="white";


},1000);


const $logo = document.querySelector(".logo i");

$logo.onmouseover = function(){

    $logo.style.color = "pink";
}

$logo.onmouseout = function(){

    $logo.style.color = "red";
}

