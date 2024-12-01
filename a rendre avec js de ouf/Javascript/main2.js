class Guerrier {        /* classe Guerrier */
    constructor(prenom, attaque, pv){
        this.attaque = attaque;
        this.pv = pv;
        this.prenom = prenom
    }

    getAttaque() {
        return this.attaque
    }
    
    getPrecision(){
        return Math.random()
    }
}

let John = new Guerrier("John",3, 11);
let Sabrina = new Guerrier("Sabrina",3, 11);

while (Sabrina.pv > 0 && John.pv >0) {
    /* John attaque */
    if (John.getPrecision() > Sabrina.getPrecision()){
        Sabrina.pv = Sabrina.pv - John.getAttaque()
        console.log(John.prenom + " attaque "+ Sabrina.prenom + " !")
        console.log("Il reste " + Sabrina.pv + " pv à " + Sabrina.prenom)
    }else {
        console.log(John.prenom + " n'a pas réussi à attaquer !")
    }
    if (Sabrina.pv <= 0) {      /* condition de victoire */
        console.log(John.prenom + " a gagné !")
        break 
    }    

    /* Sabrina attque */
    if (Sabrina.getPrecision() > John.getPrecision()){
        John.pv = John.pv - Sabrina.getAttaque()
        console.log(Sabrina.prenom + " attaque " + John.prenom + " !")
        console.log("Il reste " + John.pv + " pv à " + John.prenom)

    }else {
        console.log(Sabrina.prenom + " n'a pas réussi à attaquer !")
    }
    if (John.pv < 0){       /* condition de victoire */
        console.log(Sabrina.prenom + " a gagné !")
        break
    }


}
