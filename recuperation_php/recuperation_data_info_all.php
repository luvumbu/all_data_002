<!DOCTYPE html>
<html>
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <link rel="icon" type="image/x-icon" href="https://pbs.twimg.com/profile_images/1244325575659061249/YjvhVutG_400x400.jpg">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>


<h1 class="h1">
	Téléchargement de données 
</h1>
 




 

<div class="progress total_t">
  <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50"
  aria-valuemin="0" aria-valuemax="100" style="width:0%" id="progress">
    50% Complete 
  </div>
  <div id="info_progress"></div>
  
</div>
<p class="h2">Temps restant  <b id="rest_time"></b></p>
<div class="total_t">
<img id="start" src="https://img.icons8.com/color/48/000000/pause-squared.png" onclick="action(this)" title="pause"  class="pointer"   />
 
<img src="https://img.icons8.com/color/48/000000/start.png"  onclick="action(this)" title="start"  class="pointer" />

 
</div>
<p class="h1">Recherche dans le fichier  info_all_array<b id="nom_dossier"></b>.json</p>
 
 


<style>
.total_t{
	width : 50%; 
	margin : auto ; 
	margin-top: 50px ; 
}
.pointer:hover{
	cursor:pointer ; 
}
.h1 {
color:#56708b ; 
text-align:center ; 
}
.display_non,.non{
	display:none ; 
}
.h2 {
	text-align:center ;
	color:#568b6a ; 
}
</style>


<script>


var progression_programme = false ; 
var pause =document.getElementById("pause") ;
var start =document.getElementById("start") ;
var nom_dossier = document.getElementById("nom_dossier");

function action(_this){
 

if(_this.title=="start"){
	progression_programme = true  ;
 
 
}
else {

	progression_programme = false  ;
 


}
}
class Information {
	constructor(link) {
		this.link = link;
		this.identite = new FormData();
		this.req = new XMLHttpRequest();
		this.identite_tab = [
		];
	}
	info() {
		return this.identite_tab; 
	}
	add(info, text){
		this.identite_tab.push([info, text]); 
	}
	push(){
		for(var i = 0 ; i < this.identite_tab.length ; i++){
			console.log(this.identite_tab[i][1]);
			this.identite.append(this.identite_tab[i][0], this.identite_tab[i][1]);		 
		}		
		this.req.open("POST",this.link);
		this.req.send(this.identite);
		console.log(this.req);	 
	}
}





	var taille  ; 
	var y = 0 ; 
	var n_plus = 1000 ; 
	var info_all_array_json = 1 ; 
	nom_dossier.innerText=info_all_array_json ;

	var epreuve_sex_array_2 = [];
	var get_cat_array_2 = [];
	var get_club_departement_array_2 = [];
	var get_club_nom_complet_array_2 = [];
	var get_club_region_array_2 = [];

	var get_emplacement = [];
	var get_epreuve_nom_complet = [];
	var get_result_date_perf_array_2 = [];
	var get_result_users_nom_1_array_2 = [];
	var get_result_users_nom_2_array_2 = [];

	var get_result_users_nom_3_array_2 = [];
	var get_result_users_nom_4_array_2 = [];
	var get_result_users_perf_array_2 = [];
	var get_result_villes_nom_array_2 = [];
	var get_rp_array_2 = [];

	var get_users_naissance_array_2 = [];
	var get_users_nationality_array_2 = [];
	var get_vent_array_2 = [];
	var id_info_all_array = [];
	var info_all_array_click = [];

	var window_location_href = [];
     
	var info_progress = document.getElementById("progress") ;
	var progress = document.getElementById("progress") ;

	var rest_time = document.getElementById("rest_time") ;
   var  src_array_all = "../src_info_all_array/info_all_array_n";


	


 













 









 const myTimeout = setInterval(myGreeting, 10000);

function myGreeting() {
	nom_dossier.innerText=info_all_array_json ;

	if(progression_programme){

	
 

	 


	var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
 
   taille = myObj[2].data.length; 
 


document.getElementById("rest_time").innerText=((taille-y)*(60/360000))+" min" ;

   info_progress.innerText =y+" / "+taille+" :  "+(y/taille)*100 ; 
   var pourcentage = (y/taille)*100  ; 

   progress.setAttribute("style","width:"+pourcentage+"%") ; 


if(y>taille){
	info_all_array_json ++ ; 
	y = 0 ; 
	if(info_all_array_json==16){
		document.location.href="http://google.com"; 
	}
}
 
   for(var i = y ; i<y+n_plus; i++) {
	 
	 
	console.log(myObj[2].data[i].get_result_users_nom_4_array_2) ; 

	epreuve_sex_array_2.push(myObj[2].data[i].epreuve_sex_array_2);
	get_cat_array_2.push(myObj[2].data[i].get_cat_array_2);
	get_club_departement_array_2.push(myObj[2].data[i].get_club_departement_array_2);
	get_club_nom_complet_array_2.push(myObj[2].data[i].get_club_nom_complet_array_2);
	get_club_region_array_2.push(myObj[2].data[i].get_club_region_array_2);

	get_emplacement.push(myObj[2].data[i].get_emplacement);
	get_epreuve_nom_complet.push(myObj[2].data[i].get_epreuve_nom_complet);
	get_result_date_perf_array_2.push(myObj[2].data[i].get_result_date_perf_array_2);
	get_result_users_nom_1_array_2.push(myObj[2].data[i].get_result_users_nom_1_array_2);
	get_result_users_nom_2_array_2.push(myObj[2].data[i].get_result_users_nom_2_array_2);

	get_result_users_nom_3_array_2.push(myObj[2].data[i].get_result_users_nom_3_array_2);
	get_result_users_nom_4_array_2.push(myObj[2].data[i].get_result_users_nom_4_array_2);
	get_result_users_perf_array_2.push(myObj[2].data[i].get_result_users_perf_array_2);
	get_result_villes_nom_array_2.push(myObj[2].data[i].get_result_villes_nom_array_2);
	get_rp_array_2.push(myObj[2].data[i].get_rp_array_2);

	get_users_naissance_array_2.push(myObj[2].data[i].get_users_naissance_array_2);
	get_users_nationality_array_2.push(myObj[2].data[i].get_users_nationality_array_2);
	get_vent_array_2.push(myObj[2].data[i].get_vent_array_2);
	id_info_all_array.push(myObj[2].data[i].id_info_all_array);
	info_all_array_click.push(myObj[2].data[i].info_all_array_click);

	window_location_href.push(myObj[2].data[i].window_location_href);

 


   }
   console.log("Fin du chargement") ; 
   console.log(get_users_nationality_array_2[0]) ; 










 
console.log("Envoyé") ; 
	
	var ok = new Information("https://bokonzi.fr/recuperation_php.php"); // création de la classe 


ok.add("epreuve_sex_array_2", epreuve_sex_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_cat_array_2", get_cat_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_club_departement_array_2", get_club_departement_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_club_nom_complet_array_2", get_club_nom_complet_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_club_region_array_2", get_club_region_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_emplacement", get_emplacement); // ajout de l'information pour lenvoi 
	
ok.add("get_epreuve_nom_complet", get_epreuve_nom_complet); // ajout de l'information pour lenvoi 
	
ok.add("get_result_date_perf_array_2", get_result_date_perf_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_result_users_nom_1_array_2", get_result_users_nom_1_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_result_users_nom_2_array_2", get_result_users_nom_2_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_result_users_nom_3_array_2", get_result_users_nom_3_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_result_users_nom_4_array_2", get_result_users_nom_4_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_result_users_perf_array_2", get_result_users_perf_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_result_villes_nom_array_2", get_result_villes_nom_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_rp_array_2", get_rp_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_users_naissance_array_2", get_users_naissance_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_users_nationality_array_2", get_users_nationality_array_2); // ajout de l'information pour lenvoi 
	
ok.add("get_vent_array_2", get_vent_array_2); // ajout de l'information pour lenvoi 
	
ok.add("id_info_all_array", id_info_all_array); // ajout de l'information pour lenvoi 
	
ok.add("info_all_array_click", info_all_array_click); // ajout de l'information pour lenvoi 
	
ok.add("window_location_href", window_location_href); // ajout de l'information pour lenvoi 
	
			 
 
console.log(ok.info()); // demande l'information dans le tableau
ok.push(); // envoie l'information au code pkp 











     epreuve_sex_array_2 = [];
	 get_cat_array_2 = [];
	 get_club_departement_array_2 = [];
	 get_club_nom_complet_array_2 = [];
	 get_club_region_array_2 = [];

	 get_emplacement = [];
	 get_epreuve_nom_complet = [];
	 get_result_date_perf_array_2 = [];
	 get_result_users_nom_1_array_2 = [];
	 get_result_users_nom_2_array_2 = [];

	 get_result_users_nom_3_array_2 = [];
	 get_result_users_nom_4_array_2 = [];
	 get_result_users_perf_array_2 = [];
	 get_result_villes_nom_array_2 = [];
	 get_rp_array_2 = [];

	 get_users_naissance_array_2 = [];
	 get_users_nationality_array_2 = [];
	 get_vent_array_2 = [];
	 id_info_all_array = [];
	 info_all_array_click = [];

	 window_location_href = [];




console.log("informations id "+y);




 
  }
};
xmlhttp.open("GET", src_array_all+"/info_all_array"+info_all_array_json+".json", true);
xmlhttp.send();





y = y+n_plus ; 

}
else {
	console.log("Programme en pause ") ; 
}
var pause =document.getElementById("pause") ;


}



 
</script>











 

 
</body>
</html>
