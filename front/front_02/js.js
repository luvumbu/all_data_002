// ACTION n°1 header.html 
// 
//parametres 
const ip = document.getElementById("ip").title; 
var http_1 = "https://bokonzi.com/all_data/my_doc/index.php/SELECT%20*%20FROM%20%60";
var http_2 = "%60%20WHERE%201"; 
var chemin_1  = http_1+"get_result_villes_nom_array_2"+http_2 ;   
var chemin_2  = http_1+"get_club_nom_complet_array_2"+http_2 ;
var chemin_3  = http_1+"get_club_region_array_2"+http_2 ; 
var chemin_4  = http_1+"get_club_departement_array_2"+http_2 ; 
var chemin_5  = http_1+"get_epreuve_nom_complet"+http_2 ;  
/*
// Partie local
var chemin_ = "../../../all_data/data_2_0_all/";
var chemin_1  = chemin_+"id_get_result_villes_nom_array_2.json" ;   
var chemin_2  = chemin_+"id_get_club_nom_complet_array_2.json" ; ;
var chemin_3  = chemin_+"id_get_club_region_array_2.json" ; 
var chemin_4  = chemin_+"id_get_club_departement_array_2.json" ; 
var chemin_5  = chemin_+"id_get_epreuve_nom_complet.json" ;  

*/
var deplus_1 ; 
var deplus_2 ;
var deplus_3 ; 
var deplus_4 ; 
var deplus_5 ;  

var scroll_plus_info ;  
var scroll_plus_total = 1 ; 
var Information_title  ;
envoyer_ip_serveur("model/class/php/envoyer_ip_serveur.php",ip) ;

function action(){ // ligne n°2 action header.html
location.reload();
}

// ACTION AUTO N°1 Chargement des information fichier JSON 
class Deplus_information {

// ACTION AUTO N°1 

// chargement des fichier JSON
/**
 * var chemin_ = "../../../all_data/data_2_0_all/";
var chemin_1  = chemin_+"id_get_result_villes_nom_array_2.json" ;   
var chemin_2  = chemin_+"id_get_club_nom_complet_array_2.json" ; ;
var chemin_3  = chemin_+"id_get_club_region_array_2.json" ; 
var chemin_4  = chemin_+"id_get_club_departement_array_2.json" ; 
var chemin_5  = chemin_+"id_get_epreuve_nom_complet.json" ; 
 */  
constructor(name) {
this.name = name;
 




}
execution() {
var xmlhttp_1 = new XMLHttpRequest();
var xml_name = this.name ; 
//                                      
                                      xmlhttp_1.onreadystatechange = function() {                    
                                        if (this.readyState == 4 && this.status == 200) {
                                          var myObj = JSON.parse(this.responseText);                                 
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                                    switch (xml_name) {      
                                    case "deplus_1":                                                   
                                                    deplus_1 = myObj ;                                               
                                      break;
                                      case "deplus_2":
                                                   
                                                    deplus_2 = myObj ; 
                                      break;
                                      case "deplus_3":                                             
                                                    deplus_3 = myObj ; 

                                      break;
                                      case "deplus_4":                                     
                                                    deplus_4 = myObj ; 

                                      break;
                                      case "deplus_5":                                     
                                                    deplus_5 = myObj ; 

                                      break;
                                                                              }                            
                                                                                  
                                        } // Premier boucle  ok 
                                      };

                                      switch (xml_name) {      
                                    case "deplus_1":
                                    xmlhttp_1.open("GET", chemin_1, true);

                                      break;
                                      case "deplus_2":
                                    xmlhttp_1.open("GET", chemin_2, true);

                                      break;
                                      case "deplus_3":
                                    xmlhttp_1.open("GET", chemin_3, true);

                                      break;
                                      case "deplus_4":
                                    xmlhttp_1.open("GET", chemin_4, true);

                                      break;
                                      case "deplus_5":
                                    xmlhttp_1.open("GET", chemin_5, true);

                                      break;
                                  }                 
              xmlhttp_1.send();
}
}
// ACTION AUTO N°1 Chargement des information fichier JSON 
// EXECUTION DE LACTION AUTOMATIQUE N°1
let exe_deplus_1 = new Deplus_information("deplus_1");
exe_deplus_1.execution();
let exe_deplus_2 = new Deplus_information("deplus_2");
exe_deplus_2.execution();
let exe_deplus_3 = new Deplus_information("deplus_3");
exe_deplus_3.execution();
let exe_deplus_4 = new Deplus_information("deplus_4");
exe_deplus_4.execution();
let exe_deplus_5 = new Deplus_information("deplus_5");
exe_deplus_5.execution();
// deplus_1,2,3,4,5 Sont des objet en memoire pour executer apres le chargement 
// EN fonction du nom  de chemin 1,2,3,4,5


/*

info_get_emplacement
info_get_rp_array_2
info_get_vent_array_2
info_get_result_users_perf_array_2
info_get_result_users_nom_1_array_2
info_get_result_users_nom_2_array_2
info_get_result_users_nom_3_array_2
info_get_result_users_nom_4_array_2
info_get_users_nationality_array_2
info_get_club_nom_complet_array_2
info_get_club_departement_array_2
info_get_club_region_array_2
info_get_cat_array_2
info_get_users_naissance_array_2
info_get_result_date_perf_array_2
info_get_result_villes_nom_array_2
info_epreuve_sex_array_2
info_get_users_nom_complet_array
info_window_location_href
info_get_epreuve_nom_complet


*/