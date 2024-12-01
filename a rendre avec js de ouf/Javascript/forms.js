let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    /* Recupère toutes les entrées de l'utilisateur et la question posée */
    let erreur = false
    let nom = document.querySelector('#pseudo')    
    let dnom = document.querySelector('.pseudo')
    let mail = document.querySelector('#mail')
    let dmail = document.querySelector('.mail')
    let mdp = document.querySelector('#mdp')    
    let dmdp = document.querySelector('.mdp')
    let mdp2 = document.querySelector('#mdp2')    
    let dmdp2 = document.querySelector('.mdp2')

    let err = document.querySelector('#err')
    let err_pse = document.querySelector('.pse')
    let err_ema = document.querySelector('.ema')
    let err_maj = document.querySelector('.maj')
    let err_car = document.querySelector('.car')
    let err_ide = document.querySelector('.ide')

    /* vérifie les conditions pour chaque entrées et questions */
    if (nom.value.length < 6){
        erreur = erreur || true;
        dnom.classList.add('erreur');
        err_pse.classList.add('act');
        dnom.classList.remove('ok');

    } else {
        dnom.classList.remove('erreur');
        dnom.classList.add('ok');
        err_pse.classList.remove('act');
        erreur = erreur || false ;
    }

    if (mail.value.length < 7){
        erreur = erreur || true;
        dmail.classList.add('erreur');
        err_ema.classList.add('act');
        dmail.classList.remove('ok');


    }else {
        dmail.classList.remove('erreur');
        dmail.classList.add('ok');
        err_ema.classList.remove('act');
        erreur = erreur || false ;

    }

    let password = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])'
    )
    if (password.test(mdp.value) == false){
        erreur = erreur || true;
        dmdp.classList.add('erreur');
        err_maj.classList.add('act');
        dmdp.classList.remove('ok');

    } 
    else {
        err_maj.classList.remove('act');
        dmdp.classList.add('ok');
        dmdp.classList.remove('erreur');
        erreur = erreur || false ;

    }
    if (mdp.value.length < 10){
        erreur = erreur || true;
        dmdp.classList.add('erreur');
        dmdp.classList.remove('ok');
        err_car.classList.add('act');
    }
    else {
        dmdp.classList.remove('erreur');
        dmdp.classList.add('ok');
        err_car.classList.remove('act');
        erreur = erreur || false ;
    }

    if (mdp.value !== mdp2.value || mdp2.value == ''){
        erreur = erreur || true;
        dmdp.classList.add('erreur');
        dmdp2.classList.add('erreur');
        err_ide.classList.add('act');
        dmdp.classList.remove('ok');
        dmdp2.classList.remove('ok');


    } else {
        dmdp2.classList.remove('erreur');
        dmdp2.classList.add('ok');
        err_ide.classList.remove('act');
        erreur = erreur || false ;
    } 
    
    console.log("Envoyé !");
    /* si pas d'erreur, alors pas de message d'erreur */
    if (erreur == true){
        err.classList.add('act');
    } else {
        err.classList.remove('act');
    }


})

/* dark mode */
var body = document.getElementById('body');
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', function(){
    body.classList.toggle('dark');

})
