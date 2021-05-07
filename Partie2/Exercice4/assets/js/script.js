// JAVASCRIPT Partie 2 - Exercice 4 Voyage & Co
/*let visible = document.getElementsById('paragraph').disabled = true;

window.addEventListener('scroll', function() {
        let notVisible = document.getElementsById('paragraph').disabled = false;
});*/



/*// Première méthode
let paragraph = document.getElementById('paragraph');
window.addEventListener('scroll', function show(){
        if(window.scrollY > 400){
                paragraph.style.visibility = 'visible';
        } else {
                paragraph.style.visibility = 'hidden';
        }
});*/

/*// Deuxième méthode 
// Attention à l'ordre des classes dans le CSS
// POssibilité d'intégrer du Bootstrap
let paragraph = document.getElementById('paragraph');
window.addEventListener('scroll', function reveal(){
        if(window.scrollY > 400){
                paragraph.classList.add('reveal-visible');
        } else {
                paragraph.classList.remove('reveal-visible');
        }
});*/


// Troisi§me méthode : Cindy
// % au scroll
const paragraph = document.getElementById('paragraph');

window.addEventListener('scroll', function(){

/*console.log(window.innerHeight);
console.log(window.scrollY);
console.log(document.body.offsetHeight);*/

//calculer la valeur du sroll en %
scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);
//vérifier la valeur % du scroll
console.log(scrollValue)

if (scrollValue > 0.8){
paragraph.style.visibility = 'visible';
paragraph.style.transform = 'none';
} else{
paragraph.style.visibility = 'hidden';
}
});
