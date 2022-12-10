<?php 
        $debut="/";
        $fin="/" ; 
        $nom_du_dossier_courant = "replace_url_php";
        $nom_du_dossier_courant=  $debut.$nom_du_dossier_courant.$fin ; 
        $REQUEST_URI= str_replace($nom_du_dossier_courant.basename(__FILE__)."/","",$_SERVER['REQUEST_URI']);
        echo $REQUEST_URI ; 
        
        
        
$recherche_1 =""; 
$recherche_1_bool =false; 
$recherche_2 =""; 
$recherche_2_bool =false; 
        
       for($i=0;$i<strlen($REQUEST_URI);$i++){
          
           if($REQUEST_URI[$i]=="/"){
               $recherche_1_bool = true ;
           }
           else{
                if($recherche_1_bool){
               
               $recherche_1 = $recherche_1.$REQUEST_URI[$i] ; 
           }
           else {
                  $recherche_2 = $recherche_2.$REQUEST_URI[$i] ; 
           }
           }

           
       }
       
       
       echo "<br/>";
       echo "recherche 1 ".$recherche_1 ; 
       echo "<br/>";
       echo "recherche 2 ".$recherche_2 ; 
?>
 