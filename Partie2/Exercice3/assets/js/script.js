// JAVASCRIPT Partie 2 - Exercice 3
/*const champ = document.getElementsByName('userName');
champ.addEventListener('compositionstart' function verification(){
        champ.classList.add('ins-invalid')
})
)

let inputElement = document.getElementsByName('userName').value;
inputElement.addEventListener('compositionstart', function verification(){
        let user = 'Benedicte';
        let userName = document.getElementById('userName').value;
        let ok = document.getElementsByClassName('is-invalid').disabled = true;
        let notOk = document.getElementsByClassName('is-valid').disabled = true;
        let result;
        if (user = userName) {
        result = ok;
        } else {
        result = notOk;
        }
        alert(result);
});*/

// Première étape avec button au clic alerte OK Pas OK 

let button = document.getElementById('button');

button.addEventListener('click', function verif (){
        let user = 'benedicte'
        let userName = document.getElementById('userName').value;

        if(userName == user){
                alert('Ok')
        } else {
                alert('Pas Ok')
        } 
});

// Deuxième étape à la composition alerte OK pas OK 
let userForm = document.getElementById('userForm');
userForm.addEventListener('keydown', function tape(){
        let user = 'benedicte'
        let userForm = document.getElementById('userForm').value;
        
        if(userForm == user){
                alert('Vrai');
        } else {
                alert('Faux');
        } 
})

//Troisième étape : la totale
let user = 'benedicte';
let userChamp = document.getElementById('userChamp');

userChamp.addEventListener('keyup', function compose (){
        let user = 'benedicte'
        let userChamp = document.getElementById('userChamp').value;
        let classForm = document.getElementsByClassName('form-control');
        let message = document.getElementById('message');
        
        if(user == userChamp){
                message.innerHTML = "<div class=\"alert alert-success\" role=\"alert\"> Ok ! </div>";
                userChamp.classList.add("is-valid");
                
        } else {
                userChamp.className = "form-control is-valid";
                message.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"> Faux !</div>";
                userChamp.classList.add("is-invalid"); 
        }

});

//créer la variable pour vérifier
// Addeventlistener sur l'input formulaire
// Evenement : keyup
// créer une variable et créer la valeur du champ
// Ajout de class
// Ajout inner HTML div message 
