//JAVASCRIPT Partie 1 - Exercice 7
let button = document.getElementById('button');

/* button.addEventListener('click', function controle (){
    let age = document.getElementById('age').value;
    let majeur = (age >= 18);

    if(majeur){
        alert('Vous êtes majeur');
    } else{
        alert('Vous êtes mineur')
    }

}); */
// Le else n'a jamais de (), car c'est dans tous les autres cas.. il n'a pas de condition d'exécution

// Pour aller plus loin dans l'exercice : 
button.addEventListener('click', function controle (){
    let age = document.getElementById('age').value;

    if( age >= 18 && age <= 150){
        alert('Vous êtes majeur');
    } else if(age >= 0 && age < 18) {
        alert('Vous êtes mineur');
    } else {
        alert ('Arrête tes conneries !')
    }
}); 
