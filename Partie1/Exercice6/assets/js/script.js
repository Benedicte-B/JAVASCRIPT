//JAVASCRIPT Partie 1 - Exercice 5
let button = document.getElementById('button');

button.addEventListener('click', function calcul(){
    let pointure = document.getElementById('pointure').value;
    let naissance = document.getElementById('naissance').value;
    let resultat = ((((pointure*2)+5)*50)-naissance)+1771;

alert(resultat);
});