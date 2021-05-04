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
let myImg = document.getElementById('myImg');

myImg.addEventListener ('click', function zoom (){
    // clientWidth doit être à l'intérieur de la fonction pour la récupérer à chaque fois
    let width = myImg.clientWidth;
    if (width >= 500){
        myImg.style.width = 150 + 'px';
    } else {
        myImg.style.width = (width + 20) + 'px';
    }
    console.log(width);
});


