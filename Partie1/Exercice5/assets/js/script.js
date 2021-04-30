//JAVASCRIPT Partie 1 - Exercice 5
/*function controle(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    alert(number1%number2);
}*/



let button = document.getElementById('button');

button.addEventListener('click', function reste() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let reste = number1 % number2

    alert('Le reste de ' + number1 + ' divisé par ' + number2 + ' = ' + reste);
});  