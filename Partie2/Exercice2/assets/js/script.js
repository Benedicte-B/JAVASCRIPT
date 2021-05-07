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

// Troisième option : Booléens 
let img = document.getElementById('img');
let way = 'true'

img.addEventListener ('click', function zoom (){
    // clientWidth doit être à l'intérieur de la fonction pour la récupérer à chaque fois
    let imgSize = img.clientWidth;
    if (imgSize >= 150 && imgSize <= 400 && way == 'true') {
        if (imgSize >= 400) {
            way = 'false'
        }
        img.style.width = (imgSize + 50) + 'px';
    } 
    if (imgSize <= 400 && way == 'false') {
        if (imgSize <= 200) {
            way='true'
        }
        img.style.width = (imgSize - 50) + 'px';
    } else if (imgSize >= 400) {
        way = 'fasle'
    }
    console.log(imgSize);
});

