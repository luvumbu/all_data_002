 // 
function styles_(src){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("style_change").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", src);
  xhttp.send();

}
styles_("style_all.php") ; // couleur par defaut 

// changement de couleur donne par defaut 6 model
 function styles_n(_this){

 
  var ok = new Information("style_change.php"); // création de la classe 
ok.add("style_change", _this.title); // ajout de l'information pour lenvoi 
 
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

 