//ACTION POSSIBLE APRES EXECUTION DE LA CLASSE CHARGEMENT  
// Deplus_information 
// Action manuelle n°1

var get_result_villes_nom_array_2_array =[] ; 
var get_epreuve_nom_complet_array =[] ; 
var get_club_region_array_2_array =[] ; 
var get_club_nom_complet_array_2_array =[] ; 
var epreuve_sex_array_2_array =[] ; 
var get_cat_array_2_array =[] ; 
var get_club_departement_array_2_array =[] ; 

function action_information(_this){
  document.getElementById("information_1").innerText="" ; 
  document.getElementById("model1").className="display_none" ; 
    // ACTION MANUELLE BOUTTON N°1  
   
     Information_title = _this.title ; 
     document.getElementById("information_1").scrollTop="0" ; 
     document.getElementById("colors_block").className="colors0" ; 
     
    // document.getElementById("information_1").innerText="" ; 
     var information_1 = document.getElementById("information_1");
 
     var scroll_plus =25 ;      
     ii_plus =  scroll_plus;
     
     
     
     
     for(var ii = 1 ; ii<scroll_plus;ii++){  
     
     var para = document.createElement("div");
     
     switch (_this.title) {
     case "get_result_villes_nom_array_2": 
     // Create element:    
     
     
     scroll_plus_total = deplus_1.length ;
      para.innerHTML = deplus_1[ii].get_result_villes_nom_array_2;  
      para.setAttribute("title",deplus_1[ii].get_result_villes_nom_array_2);   
     break;
     case "get_club_nom_complet_array_2": 
    
     // Create element:    
     para.innerHTML = deplus_2[ii].get_club_nom_complet_array_2; 
      scroll_plus_total = deplus_2.length ;
      para.setAttribute("title",deplus_2[ii].get_club_nom_complet_array_2);    
     break;
     case "get_club_region_array_2": 
     // Create element:    
     para.innerHTML = deplus_3[ii].get_club_region_array_2;   
      scroll_plus_total = deplus_3.length ;
      para.setAttribute("title",deplus_3[ii].get_club_region_array_2);  
     break;
     case "get_club_departement_array_2": 
     // Create element:    
     para.innerHTML = deplus_4[ii].get_club_departement_array_2;  
      scroll_plus_total = deplus_4.length ;
      para.setAttribute("title",deplus_4[ii].get_club_departement_array_2);   
     break;
     case "get_epreuve_nom_complet": 
     // Create element:    
     para.innerHTML = deplus_5[ii].get_epreuve_nom_complet;  
      scroll_plus_total = deplus_5.length ;  
      para.setAttribute("title",deplus_5[ii].get_epreuve_nom_complet); 
       
      break;  
     case "Accueil": 
     // Create element:    
     information_1.innerHTML="" ; 
     
     break;    
     
     }
     
      //para.setAttribute("onclick","action_get_information(this)"); 
      para.setAttribute("onclick","action_get_information(this)"); 
      
      // action_information
      para.setAttribute("class","bgcolors") ;      
     // Append to another element:
     document.getElementById("information_1").appendChild(para); 
     document.getElementById("information_1").className="" ; 
     } 
     
    
     }
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx

// apres l'action n°1 automatique 
// Apres l'action manuelle de l'utilisateur qui affiche les element 
// L'orsque l'utilisateur scroll la page les element aparaisse  pour eviter un grand nombre de chargement
// Action manuelle n°2 
function onscroll_function(_this){
    // FONCTION AUTOMATIQUE n°2 
    // Permet de charger les element lors que l'utilisateur scroll pour eviter un grand chargement au depart 
    //console.log(_this.scrollTop) ; 
    /*
    console.log(scroll_plus_total) ; 
    console.log(Information_title) ; 
    */
   //console.log(scroll_plus_total) ; 
    
    if(scroll_plus_total>ii_plus+1){
    
    
    
    switch (Information_title) {
    case "get_result_villes_nom_array_2":
    
     // console.log(ii_plus) ; 
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_1[ii_plus].get_result_villes_nom_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_1[ii_plus].get_result_villes_nom_array_2;  
    
    para.setAttribute("title",deplus_1[ii_plus].get_result_villes_nom_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
    
    break;
    
    case "get_club_nom_complet_array_2":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_2[ii_plus].get_club_nom_complet_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_2[ii_plus].get_club_nom_complet_array_2;  
    
    para.setAttribute("title",deplus_2[ii_plus].get_club_nom_complet_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
      break;
    case "get_club_region_array_2":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_3[ii_plus].get_club_region_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_3[ii_plus].get_club_region_array_2;  
    
    para.setAttribute("title",deplus_3[ii_plus].get_club_region_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
    
    
      break;
    case "get_club_departement_array_2":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_4[ii_plus].get_club_departement_array_2!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_4[ii_plus].get_club_departement_array_2;  
    
    para.setAttribute("title",deplus_4[ii_plus].get_club_departement_array_2); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
      break;
    case "get_epreuve_nom_complet":
    
    
    for(var i_2 = 1 ; i_2<50; i_2++){
    
    if(deplus_5[ii_plus].get_epreuve_nom_complet!=undefined){
    var para = document.createElement("div");
    para.innerHTML = deplus_5[ii_plus].get_epreuve_nom_complet;  
    
    para.setAttribute("title",deplus_5[ii_plus].get_epreuve_nom_complet); 
    para.setAttribute("onclick","action_get_information(this)");   
    para.setAttribute("class","bgcolors") ; 
    document.getElementById("information_1").appendChild(para); 
    ii_plus ++;
    }
    
    }
      break;
    
    
    
    }
    
    
    }
    
    
    }     
// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
// ACTION MANUELLE INDEPENDANTE  N°1
// L'utilisateur a la possibilite de changer la couleur de la page a tout moment et enregistrer 
// a l'aide de session les modification
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

 
// Couleurs par defaut donne a l'utilsateur 6 couleur possible avec les petit carre sur le code
function style_change_plus(_this){  
 

    document.getElementById("style6").className="style6" ;    
   
      }
var nombre =[1];
var nombre_x =[1,3,4,5,6,7,8,9];


var xx =[] ;
 



class Array_style {
  constructor(nombre,total_n,recherche) {  
    this.nombre =[]; 
    this.total_n =total_n ; 
    this.recherche =recherche ; 
    //console.log(nombre) ; 
  }
  total_length() {
 


    for(var x =0 ;x<this.total_n.length;x++){
    




      switch(this.recherche) {
        case "get_result_villes_nom_array_2":
         
          if(this.total_n[x].get_result_villes_nom_array_2!=undefined){
            console.log(this.total_n[x].get_result_villes_nom_array_2);
            if(  this.nombre.includes(this.total_n[x].get_result_villes_nom_array_2)){         
                   
            }
            else {
                this.nombre.push(this.total_n[x].get_result_villes_nom_array_2);
                get_result_villes_nom_array_2_array.push(this.total_n[x].get_result_villes_nom_array_2);
            }
          }      
          console.log("XXXXXXXXXXXXXXXXXXXXXXXXxxxx") ; 
          break;
          case "get_epreuve_nom_complet":
            
            if(this.total_n[x].get_epreuve_nom_complet!=undefined){
             // console.log(this.total_n[x].get_epreuve_nom_complet);
              if(  this.nombre.includes(this.total_n[x].get_epreuve_nom_complet)){         
  
              }
              else {
                  this.nombre.push(this.total_n[x].get_epreuve_nom_complet);
                       get_epreuve_nom_complet_array.push(this.total_n[x].get_epreuve_nom_complet);
                  
              }
            }      
          //  console.log("XXXXXXXXXXXXXXXXXXXXXXXXxxxx") ; 
            break;
            case "get_club_region_array_2":
              if(this.total_n[x].get_club_region_array_2!=undefined){
              //  console.log(this.total_n[x].get_club_region_array_2);
                if(  this.nombre.includes(this.total_n[x].get_club_region_array_2)){         
    
                }
                else {
                    this.nombre.push(this.total_n[x].get_club_region_array_2);
                  get_club_region_array_2_array.push(this.total_n[x].get_club_region_array_2);
                    
                }
              }      
              //console.log("XXXXXXXXXXXXXXXXXXXXXXXXxxxx") ; 
              break;
              case "get_club_nom_complet_array_2":
                if(this.total_n[x].get_club_nom_complet_array_2!=undefined){
//                  console.log(this.total_n[x].get_club_nom_complet_array_2);
                  if(  this.nombre.includes(this.total_n[x].get_club_nom_complet_array_2)){         
      
                  }
                  else {
                      this.nombre.push(this.total_n[x].get_club_nom_complet_array_2);
                    get_club_nom_complet_array_2_array.push(this.total_n[x].get_club_nom_complet_array_2);
                  
                    }
                }      
             
                break;


                case "epreuve_sex_array_2":

            
                  if(this.total_n[x].epreuve_sex_array_2!=undefined){
  //                  console.log(this.total_n[x].epreuve_sex_array_2);
                    if(  this.nombre.includes(this.total_n[x].epreuve_sex_array_2)){         
        
                    }
                    else {
                        this.nombre.push(this.total_n[x].epreuve_sex_array_2);
                        epreuve_sex_array_2_array.push(this.total_n[x].epreuve_sex_array_2);

                      
                        
                    }
                  }      
               
                  break;

                  case "get_cat_array_2":
                    if(this.total_n[x].get_cat_array_2!=undefined){
    //                  console.log(this.total_n[x].get_cat_array_2);
                      if(  this.nombre.includes(this.total_n[x].get_cat_array_2)){         
          
                      }
                      else {
                          this.nombre.push(this.total_n[x].get_cat_array_2);
                         get_cat_array_2_array.push(this.total_n[x].get_cat_array_2);

                          
                      }
                    }      
                 
                    break;


                    case "get_club_departement_array_2":
                      if(this.total_n[x].get_club_departement_array_2!=undefined){
      //                  console.log(this.total_n[x].get_club_departement_array_2);
                        if(  this.nombre.includes(this.total_n[x].get_club_departement_array_2)){         
            
                        }
                        else {
                            this.nombre.push(this.total_n[x].get_club_departement_array_2);
                       get_club_departement_array_2_array.push(this.total_n[x].get_club_departement_array_2);
                           
                            
                        }
                      }      
                   
                      break;                
   
        default:
          // code block
      }

     
    }

   
  }



  total_length_nombre(){
    return this.nombre.length;
  }
}







function action_get_information(_this)
{ 




  document.getElementById("epreuve_sex_array_2__zero").innerHTML="";
  document.getElementById("get_club_departement_array_2__zero").innerHTML="";
  document.getElementById("get_club_nom_complet_array_2__zero").innerHTML="";
  document.getElementById("get_club_region_array_2__zero").innerHTML="";


  









  get_result_villes_nom_array_2_array =[] ; 
  get_epreuve_nom_complet_array =[] ; 
  get_club_region_array_2_array =[] ; 
  get_club_nom_complet_array_2_array =[] ; 
  epreuve_sex_array_2_array =[] ; 
  get_cat_array_2_array =[] ; 
  get_club_departement_array_2_array =[] ; 
 

  document.getElementById("img_chargement").className="chargement";
  console.log(Information_title) ; 
  document.getElementById("information_1").innerHTML="" ; 
  document.getElementById("information_1").className="display_none" ; 

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
       info_action_get_information_1  =myObj ; 
 
     //  document.getElementById("model1").className="" ;

       document.getElementById("total").innerText=myObj.length ;
       document.getElementById("img_chargement").className="display_none";


       console.log() ; 

// DEBUT 01 

let epreuve_sex_array_2__ = new Array_style(xx,myObj,"epreuve_sex_array_2");
let get_cat_array_2__ = new Array_style(xx,myObj,"get_cat_array_2");
let get_club_departement_array_2__ = new Array_style(xx,myObj,"get_club_departement_array_2");
let get_result_villes_nom_array_2__ = new Array_style(xx,myObj,"get_result_villes_nom_array_2");
let get_epreuve_nom_complet__ = new Array_style(xx,myObj,"get_epreuve_nom_complet");
let get_club_region_array_2__ = new Array_style(xx,myObj,"get_club_region_array_2");
let get_club_nom_complet_array_2__ = new Array_style(xx,myObj,"get_club_nom_complet_array_2");

epreuve_sex_array_2__.total_length() ; 


get_cat_array_2__.total_length() ; 


get_club_departement_array_2__.total_length() ; 




get_result_villes_nom_array_2__.total_length() ; 



get_epreuve_nom_complet__.total_length() ; 


get_club_region_array_2__.total_length() ; 


get_club_nom_complet_array_2__.total_length() ; 

document.getElementById("epreuve_sex_array_2__").innerText=epreuve_sex_array_2__.total_length_nombre();
document.getElementById("get_cat_array_2__").innerText=get_cat_array_2__.total_length_nombre();
document.getElementById("get_club_departement_array_2__").innerText=get_club_departement_array_2__.total_length_nombre();
document.getElementById("get_club_nom_complet_array_2__").innerText=get_club_nom_complet_array_2__.total_length_nombre();
document.getElementById("get_club_region_array_2__").innerText=get_club_region_array_2__.total_length_nombre();
document.getElementById("name_tag").innerText=_this.title ; 
document.getElementById("model_1").className="" ; 


    
    }
  };
  xmlhttp.open("GET", 'https://bokonzi.com/all_data/my_doc/index.php/SELECT * FROM `info_all_array` WHERE `'+Information_title+'`="'+_this.title+'"', true);
  xmlhttp.send();
 
}

 