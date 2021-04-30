//JAVASCRIPT Partie 1 - Exercice 7
function controle(){
    let age = document.getElementById('age').value;
    let majeur = (age >= 18);

    if(majeur){
    alert('Vous êtes majeur');
    }
    else{
        alert('Vous êtes mineur')
    }
}

