//JAVASCRIPT Partie 2 - Exercice 2
// Première option
/*
function agrandir() {
    let myImg = document.getElementById("myImg");
    let width = myImg.clientWidth;
    let height = myImg.clientHeight;
        myImg.style.width = (width + 20) + "px";
        myImg.style.height = (height + 20) + "px";
}*/

// Deuxième option
let agrandir = document.getElementById('myImg');

agrandir.addEventListener ('click', function zoom (){
    let myImg = document.getElementById("myImg");
    let width = myImg.clientWidth;
    let height = myImg.clientHeight;
        myImg.style.width = (width + 20) + "px";
        myImg.style.height = (height + 20) + "px";
});


