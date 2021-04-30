//JAVASCRIPT Partie 1 - Exercice 5
function controle(){
    let pointure = document.getElementById('pointure').value;
    let naissance = document.getElementById('naissance').value;
    let calcul = ((((pointure*2)+5)*50)-naissance)+1769;
    
    alert(calcul);
}