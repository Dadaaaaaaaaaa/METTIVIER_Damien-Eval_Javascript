/* dark mode */
var body = document.getElementById('body');
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', function(){        /* si cliqué, alors ajouter/retirer la classe "dark" */
    body.classList.toggle('dark');

})


/* menu cliquant */
var li = document.querySelectorAll('.tab');
var div = document.querySelectorAll('.content');


li.forEach(elt => {
    elt.addEventListener('click', function(){       /* si cliqué, alors... */
        if (this.innerHTML == 'Reset'){
            li.forEach(l => {       /* rendre tous le tableau "inactif" */
                l.classList.remove('tab-active')
            })
    
            div.forEach(d => {      /* rendre toutes les infos correspondantes visibles */
                d.classList.add('active')
            })
    
        } else {
            li.forEach(l => {       /* rendre tous le tableau "inactif" */
                l.classList.remove('tab-active')
            })
            div.forEach(d => {      /* rendre toutes les infos correspondantes invisibles */
                d.classList.remove('active')
            })
            this.classList.add('tab-active')        /* activer ce qu'on vient de cliquer */

            div.forEach(d => {      /* chercher la div correspondante puis l'afficher */
                if (d.classList.contains(this.innerHTML)){
                    d.classList.add('active')
                }
            });
        }

    })

});
