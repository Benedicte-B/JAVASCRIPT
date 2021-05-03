//JAVASCRIPT Partie 2 - Exercice 1
// Première option : boutton
let buttonAfficher = document.getElementById('buttonAfficher');
let buttonMasquer = document.getElementById('buttonMasquer')

buttonAfficher.addEventListener('click', function afficher() {
    document.getElementById('image').src='assets/img/2-300-hover.jpg';
});

buttonMasquer.addEventListener ('click', function masquer() {
    document.getElementById('image').src='assets/img/2-300.jpg';
});

// Deuxième option : rien dans le JS 

// Troisième option : GetElementById
let tableau = document.getElementById('tableau');

tableau.addEventListener('mouseenter', function show (){
    tableau.src='assets/img/2-300-hover.jpg';
});
tableau.addEventListener('mouseleave', function mask (){
    tableau.src='assets/img/2-300.jpg';
});

//  Quatrième option : onmouseover/onmouseout
let portfolio = document.getElementById('portfolio');

portfolio.onmouseover = function changeImage(){
    portfolio.src='assets/img/1-300-hover.jpg';
    portfolio.alt='hover';
};

portfolio.onmouseout = function resetImage (){
    portfolio.src='assets/img/1-300.jpg';
    portfolio.alt='normal';
}