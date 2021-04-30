//JAVASCRIPT Partie 1 - Exercice 4
/* valeur stockée dans une variable pour l'appeler plus facilement après - NON OBLIGATOIRE*/

/*function controle(){
    let lastName = document.getElementById('lastName').value;
    let firstName = document.getElementById('firstName').value;
    let city = document.getElementById('city').value;

    alert('Nom : ' + lastName +
    '\nPrénom : ' + firstName +
    '\nVille : ' + city);
}*/


// Autre option (plus propre)
let button = document.getElementById('button');

button.addEventListener('click', function toto() {
    let lastName = document.getElementById('lastName').value;
    let firstName = document.getElementById('firstName').value;
    let city = document.getElementById('city').value;
    
    alert('Nom : ' + lastName +
    '\nPrénom : ' + firstName +
    '\nVille : ' + city);
});           
