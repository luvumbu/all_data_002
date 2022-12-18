function style_change(_this){
 
    document.getElementById("style6").className="display_none" ; 
   var ok = new Information("style_change_6.php"); // création de la classe 
   ok.add("style_change", _this.title); // ajout de l'information pour lenvoi 
   ok.add("style_change_value", _this.value); // ajout de l'information pour lenvoi 
  
   console.log(ok.info()); // demande l'information dans le tableau
   ok.push(); // envoie l'information au code pkp 
     // couleur par defaut 



              const myTimeout = setTimeout(myStopFunction, 300);

          function myStopFunction() {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
              document.getElementById("style_change").innerHTML =
              this.responseText;
            }
            xhttp.open("GET", "style_all.php");
            xhttp.send();

          }






     }
// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
