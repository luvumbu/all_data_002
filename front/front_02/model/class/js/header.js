//ACTION POSSIBLE APRES EXECUTION DE LA CLASSE CHARGEMENT  
// Deplus_information 
// Action manuelle n°1


 var total_length ; 
 var total_length_2 ; 
function action_information(_this){
  document.getElementById("model_1").className="display_none";


 
        information_1.innerText="" ; 
        document.getElementById("model1").className="display_none" ; 
        // ACTION MANUELLE BOUTTON N°1
   
     Information_title = _this.title ; 
     information_1.scrollTop="0" ; 
     document.getElementById("colors_block").className="colors0" ; 
     
    // document.getElementById("information_1").innerText="" ; 
  
 

 
     
     for(var ii = 1 ; ii<scroll_plus;ii++){  
     
     var para = document.createElement("div");
     scroll_plus_total = deplus_1.length ;
     switch (_this.title) {
     case "get_result_villes_nom_array_2": 
         
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
    
    
   
    for(var i_2 = 1 ; i_2<50; i_2++){
      switch (Information_title) {
        case "get_result_villes_nom_array_2":
        
         // console.log(ii_plus) ; 
        
        
     
        
        if(deplus_1[ii_plus].get_result_villes_nom_array_2!=undefined){
        var para = document.createElement("div");
        para.innerHTML = deplus_1[ii_plus].get_result_villes_nom_array_2;  
        
        para.setAttribute("title",deplus_1[ii_plus].get_result_villes_nom_array_2); 
        para.setAttribute("onclick","action_get_information(this)");   
        para.setAttribute("class","bgcolors") ; 
        document.getElementById("information_1").appendChild(para); 
        ii_plus ++;
       
        
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
    
    
    }     
// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
// ACTION MANUELLE INDEPENDANTE  N°1
// L'utilisateur a la possibilite de changer la couleur de la page a tout moment et enregistrer 
// a l'aide de session les modification

 
// Couleurs par defaut donne a l'utilsateur 6 couleur possible avec les petit carre sur le code




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
                                                      
                  //model_incrementation("get_club_region_array_2__zero",x,this.total_n[x].get_club_region_array_2) ; 
                  
             
 
                  /*
                      get_cat_array_2__zero
                      get_club_departement_array_2__zero
                      get_club_nom_complet_array_2__zero
                      get_club_region_array_2__zero
                      epreuve_sex_array_2__zero
                      totalzero
                  */
                    
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

                                    
                    //model_incrementation("get_club_nom_complet_array_2__zero",x,this.total_n[x].get_club_nom_complet_array_2) ;    
 
                    /*
                        get_cat_array_2__zero
                        get_club_departement_array_2__zero
                        get_club_nom_complet_array_2__zero
                        get_club_region_array_2__zero
                        epreuve_sex_array_2__zero
                        totalzero
                    */
                  
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
                 //model_incrementation("epreuve_sex_array_2__zero",x,this.total_n[x].epreuve_sex_array_2) ;    

              //  alert(this.total_n[x].epreuve_sex_array_2) ; 
                     //   //model_incrementation("epreuve_sex_array_2__zero",x,this.total_n[x].epreuve_sex_array_2__zero) ;    
 
                        /*
                            get_cat_array_2__zero
                            get_club_departement_array_2__zero
                            get_club_nom_complet_array_2__zero
                            get_club_region_array_2__zero
                            epreuve_sex_array_2__zero
                            totalzero
                        */

                      
                        
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

                        
                         //   apres(get_cat_array_2_array.length,"epreuve_sex_array_2__zero") ; 

                  //model_incrementation("get_cat_array_2__zero",x,this.total_n[x].get_cat_array_2) ;    
                  
                  /*
                      get_cat_array_2__zero
                      get_club_departement_array_2__zero
                      get_club_nom_complet_array_2__zero
                      get_club_region_array_2__zero
                      totalzero
                  */








                         
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
     
                       

                       //model_incrementation("get_club_departement_array_2__zero",x,this.total_n[x].get_club_departement_array_2) ;    
                  
                       /*
                           get_cat_array_2__zero
                           get_club_departement_array_2__zero
                           get_club_nom_complet_array_2__zero
                           get_club_region_array_2__zero
                           totalzero
                       */
     
     
                            
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
  document.getElementById("get_club_region_array_2__zero").innerHTML="";
  document.getElementById("get_cat_array_2__zero").innerHTML="" ; 
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
       total_length = myObj ;
 
     //  document.getElementById("model1").className="" ;
   
     const myTimeout = setTimeout(action_final_sort,100);

 
       document.getElementById("total").innerText=myObj.length -2;


       document.getElementById("img_chargement").className="display_none";



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


  var src_negatif="https://img.icons8.com/ios/25/null/checked-2--v1.png";
  var src_positif="https://img.icons8.com/ios/25/null/unchecked-checkbox.png";
 

function val_(_this){


epreuve_sex_array_2_array_valisation = [] ; 
get_cat_array_2_array_valisation = [] ; 
get_club_departement_array_2_array_valisation = [] ; 
get_club_nom_complet_array_2_array_valisation = [] ; 
get_result_villes_nom_array_2_array_valisation = [] ; 
  //alert(_this.className+_this.title) ; 

  /*
console.log(get_result_villes_nom_array_2_array) ; 

console.log(get_club_region_array_2_array) ; 
console.log(get_club_nom_complet_array_2_array) ; 
console.log(epreuve_sex_array_2_array) ; 
console.log(get_cat_array_2_array) ; 
console.log(get_club_departement_array_2_array) ;  

*/

 
 var ok = _this.className+_this.title+"x";
 
 
 
 epreuve_sex_array_2_array_valisation =[] ; 
 get_cat_array_2_array_valisation =[] ; 
 get_club_departement_array_2_array_valisation =[] ; 
 get_club_nom_complet_array_2_array_valisation =[] ; 
 get_result_villes_nom_array_2_array_valisation =[] ; 

  get_result_villes_nom_array_2_array_valisation =[] ; 

  

var i_valeur_bool  ; 


if(document.getElementById(ok).src==src_negatif){
 
  
  document.getElementById(ok).src=src_positif ; 
  i_valeur_bool = true; 
}
else {
  document.getElementById(ok).src=src_negatif ; 
  i_valeur_bool = false ; 
}



 


 
switch (_this.className) {
  case "epreuve_sex_array_2__zero":
 
//  console.log(epreuve_sex_array_2_array[_this.title-1][0]); 
  

    break;

    case "get_cat_array_2__zero":
  //     console.log(get_cat_array_2_array[_this.title-1][0]); 
       

 
    break;
    case "get_club_departement_array_2__zero":
    //   console.log(get_club_departement_array_2_array[_this.title-1][0]); 
   
    break;
    case "get_club_nom_complet_array_2__zero":
      // console.log(get_club_nom_complet_array_2_array[_this.title-1][0]); 
 
    break;
    case "get_club_region_array_2__zero":
       //console.log(get_club_region_array_2_array[_this.title-1][0]); 
 
    break;
 
 
}

 
/*

 console.log(epreuve_sex_array_2_array) ; 
console.log(get_cat_array_2_array) ; 
console.log(get_club_departement_array_2_array) ;  
console.log(get_club_nom_complet_array_2_array) ; 
console.log(get_result_villes_nom_array_2_array) ; 

console.log(get_club_region_array_2_array) ; 
*/


 

 



 



var  epreuve_sex_array_2__zero = document.getElementById("epreuve_sex_array_2__zero") ; 


//console.log(get_cat_array_2__zero_select.childElementCount) ; 
var  get_cat_array_2__zero1_select = document.getElementById("get_cat_array_2__zero") ; 
//console.log(get_cat_array_2__zero1_select.childElementCount) ; 
var  get_club_departement_array_2__zero = document.getElementById("get_club_departement_array_2__zero") ; 
//console.log(get_club_departement_array_2__zero.childElementCount) ; 
var  get_club_nom_complet_array_2__zero = document.getElementById("get_club_nom_complet_array_2__zero") ; 
//console.log(get_club_nom_complet_array_2__zero.childElementCount) ; 
var  get_club_region_array_2__zero = document.getElementById("get_club_region_array_2__zero") ;
 


/*
 // text 
 get_club_region_array_2__zero.children[0].children[0].innerHTML
//  image 
get_club_region_array_2__zero.children[0].children[1].children[0].src



var  get_club_region_array_2__zero = document.getElementById("get_club_region_array_2__zero") ; 
console.log(get_club_region_array_2__zero.childElementCount) ; 
*/
 


 

//console.log(epreuve_sex_array_2__zero.childElementCount) ; 

 


epreuve_sex_array_2_array_valisation = [] ;
get_cat_array_2_array_valisation = [] ;
get_club_nom_complet_array_2_array_valisation = [] ;
get_club_departement_array_2_array_valisation = [] ;
get_club_region_array_2_array_valisation = [] ;


 
for(var i = 0 ; i<epreuve_sex_array_2__zero.childElementCount ; i++){
/*
  console.log(epreuve_sex_array_2__zero.children[i].children[0].innerHTML) ; 

 console.log(epreuve_sex_array_2__zero.children[i].children[1].children[0].src) ; 
 */
 if(epreuve_sex_array_2__zero.children[i].children[1].children[0].src==src_negatif){
  epreuve_sex_array_2_array_valisation.push(epreuve_sex_array_2__zero.children[i].children[0].innerHTML) ;  
 }

 
 
}







 
for(var i = 0 ; i<get_cat_array_2__zero1_select.childElementCount ; i++){
/*
  console.log(get_cat_array_2__zero1_select.children[i].children[0].innerHTML) ; 

 console.log(get_cat_array_2__zero1_select.children[i].children[1].children[0].src) ; 
 */
 if(get_cat_array_2__zero1_select.children[i].children[1].children[0].src==src_negatif){
  get_cat_array_2_array_valisation.push(get_cat_array_2__zero1_select.children[i].children[0].innerHTML) ; 
 
  

 }
 
}




 
for(var i = 0 ; i<get_club_nom_complet_array_2__zero.childElementCount ; i++){
  /*
    console.log(get_club_nom_complet_array_2__zero.children[i].children[0].innerHTML) ; 
  
   console.log(get_club_nom_complet_array_2__zero.children[i].children[1].children[0].src) ; 
   */
   if(get_club_nom_complet_array_2__zero.children[i].children[1].children[0].src==src_negatif){
    get_club_nom_complet_array_2_array_valisation.push(get_club_nom_complet_array_2__zero.children[i].children[0].innerHTML) ; 
    
   }
   
  }








  for(var i = 0 ; i<get_club_departement_array_2__zero.childElementCount ; i++){
    /*
      console.log(get_club_departement_array_2__zero.children[i].children[0].innerHTML) ; 
    
     console.log(get_club_departement_array_2__zero.children[i].children[1].children[0].src) ; 
     */
     if(get_club_departement_array_2__zero.children[i].children[1].children[0].src==src_negatif){
      get_club_departement_array_2_array_valisation.push(get_club_departement_array_2__zero.children[i].children[0].innerHTML) ; 
      
     }
    
     
     
    }




    for(var i = 0 ; i<get_club_region_array_2__zero.childElementCount ; i++){
      /*
        console.log(get_club_region_array_2__zero.children[i].children[0].innerHTML) ; 
      
       console.log(get_club_region_array_2__zero.children[i].children[1].children[0].src) ; 
       */
       if(get_club_region_array_2__zero.children[i].children[1].children[0].src==src_negatif){
        get_club_region_array_2_array_valisation.push(get_club_region_array_2__zero.children[i].children[0].innerHTML) ; 
        
       }
      
       
       
      }
       
 /*
console.log(epreuve_sex_array_2_array_valisation) ; 
console.log(get_cat_array_2_array_valisation) ; 
console.log(get_club_nom_complet_array_2_array_valisation) ; 
console.log(get_club_departement_array_2_array_valisation) ; 
console.log(get_club_region_array_2_array_valisation) ; 
*/ 


/*

epreuve_sex_array_2_array_valisation
get_cat_array_2_array_valisation
get_club_nom_complet_array_2_array_valisation
get_club_departement_array_2_array_valisation
get_club_region_array_2_array_valisation

*/


epreuve_sex_array_2_array_valisation = epreuve_sex_array_2_array_valisation.sort();
get_cat_array_2_array_valisation = get_cat_array_2_array_valisation.sort();
get_club_nom_complet_array_2_array_valisation = get_club_nom_complet_array_2_array_valisation.sort();
get_club_departement_array_2_array_valisation = get_club_departement_array_2_array_valisation.sort();
get_club_region_array_2_array_valisation = get_club_region_array_2_array_valisation.sort();
 


 
document.getElementById("epreuve_sex_array_2__").innerHTML =epreuve_sex_array_2_array_valisation.length ; 
document.getElementById("get_cat_array_2__").innerHTML =get_cat_array_2_array_valisation.length ; 

document.getElementById("get_club_nom_complet_array_2__").innerHTML =get_club_nom_complet_array_2_array_valisation.length ; 
document.getElementById("get_club_departement_array_2__").innerHTML =get_club_departement_array_2_array_valisation.length ; 
document.getElementById("get_club_region_array_2__").innerHTML =get_club_region_array_2_array_valisation.length ; 

/*


console.log(epreuve_sex_array_2_array_valisation) ; 
console.log(get_cat_array_2_array_valisation) ; 

console.log(get_club_nom_complet_array_2_array_valisation) ; 
console.log(get_club_departement_array_2_array_valisation) ; 
console.log(get_club_region_array_2_array_valisation) ; 
*/ 



 

console.log(epreuve_sex_array_2_array_valisation.includes("M")) ; 
 


 

var total_length_2 =[]; 
 
 
console.log("xxxXXxxxxXXX") ; 
console.log(total_length) ; 
console.log("xxxXXxxxxXXX") ; 
 console.log(total_length[1].epreuve_sex_array_2) ; 
console.log(total_length.length) ; 
var test = [] ; 


for(var u = 1 ; u<total_length.length -1;u++){
 



 

 if(epreuve_sex_array_2_array_valisation.includes(total_length[u].epreuve_sex_array_2)){
      //  total_length_2.push(total_length[u]) ; 
          if(get_cat_array_2_array_valisation.includes(total_length[u].get_cat_array_2)){
            //  total_length_2.push(total_length[u]) ; 
            if(get_club_departement_array_2_array_valisation.includes(total_length[u].get_club_departement_array_2)){
            //   total_length_2.push(total_length[u]) ; 
            if(get_club_nom_complet_array_2_array_valisation.includes(total_length[u].get_club_nom_complet_array_2)){
             // total_length_2.push(total_length[u]) ; 
             if(get_club_region_array_2_array_valisation.includes(total_length[u].get_club_region_array_2)){
              total_length_2.push(total_length[u]) ; 
       }
       }
        }
      }
 }

}


document.getElementById("total").innerHTML=total_length_2.length ; 

  
//console.log(total_length[2]) ; 


 

}
 