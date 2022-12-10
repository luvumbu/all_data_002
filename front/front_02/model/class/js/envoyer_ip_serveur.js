function   envoyer_ip_serveur(src,ip){

    var ok = new Information(src); // création de la classe 
    ok.add("envoyer_ip_serveur", ip); // ajout de l'information pour lenvoi 
   
    console.log(ok.info()); // demande l'information dans le tableau
    ok.push(); // envoie l'information au code pkp 
}



