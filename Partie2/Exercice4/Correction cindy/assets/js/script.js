/* au chargement de la page v&co les 3 blocs ne doivent pas apparaitre
les faire apparaitre au scroll de la page */
const animScroll = document.getElementById('animScroll');

window.addEventListener('scroll', function(){

    /*console.log(window.innerHeight);
    console.log(window.scrollY);
    console.log(document.body.offsetHeight);*/

        //calculer la valeur du sroll en %
    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);
        //vérifier la valeur % du scroll
    console.log(scrollValue)

    if (scrollValue > 0.8){
        animScroll.style.visibility = 'visible';
        animScroll.style.transform = 'none';
    } else{
        animScroll.style.visibility = 'hidden';
    }
});