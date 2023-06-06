var numeroLike = document.querySelector("#numeroLike1");
var numeroLike = document.querySelector("#numeroLike2");
var numeroLike = document.querySelector("#numeroLike3");

function like1(){
    var valorLikes = numeroLike1.innerText;
    valorLikes = parseInt(valorLikes) + 1;

    numeroLike1.innerText = valorLikes;
}

function like2(){
    var valorLikes = numeroLike2.innerText;
    valorLikes = parseInt(valorLikes) + 1;

    numeroLike2.innerText = valorLikes;
}

function like3(){
    var valorLikes = numeroLike3.innerText;
    valorLikes = parseInt(valorLikes) + 1;

    numeroLike3.innerText = valorLikes;
}