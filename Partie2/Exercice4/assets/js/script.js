// JAVASCRIPT Partie 2 - Exercice 4 Voyage & Co
/*let visible = document.getElementsById('paragraph').disabled = true;

window.addEventListener('scroll', function() {
        let notVisible = document.getElementsById('paragraph').disabled = false;
});*/



// Première méthode
let paragraph = document.getElementById('paragraph');
window.addEventListener('scroll', function show(){
        if(window.scrollY > 400){
                paragraph.style.visibility = 'visible';
        } else {
                paragraph.style.visibility = 'hidden';
        }
});

// Deuxième méthode 
// Attention à l'ordre des classes dans le CSS
// POssibilité d'intégrer du Bootstrap
let paragraph = document.getElementById('paragraph');
window.addEventListener('scroll', function reveal(){
        if(window.scrollY > 400){
                paragraph.classList.add('reveal-visible');
        } else {
                paragraph.classList.remove('reveal-visible');
        }
});

