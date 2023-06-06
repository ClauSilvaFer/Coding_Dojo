var numeroLike = document.querySelector("#numeroLike");

function like(){
    var valorLikes = numeroLike.innerText;
    valorLikes = parseInt(valorLikes) + 1;

    numeroLike.innerText = valorLikes;
}
