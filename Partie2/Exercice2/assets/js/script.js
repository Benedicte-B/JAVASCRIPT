//JAVASCRIPT Partie 2 - Exercice 2
function agrandir() {
    let myImg = document.getElementById("myImg");
    let width = myImg.clientWidth;
    let height = myImg.clientHeight;
        myImg.style.width = (width + 20) + "px";
        myImg.style.height = (height + 20) + "px";
}



