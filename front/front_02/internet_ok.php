<?php
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$REQUEST_URI = str_replace("/internet_ok.php/","",$_SERVER['REQUEST_URI']);
$REQUEST_URI2 = str_replace("%20"," ",$REQUEST_URI);
$REQUEST_URI2 = str_replace("%7C","|",$REQUEST_URI2); 

for($a = 0 ; $a<strlen($REQUEST_URI2);$a++){
 

    if($REQUEST_URI2[$a]=="/"){
        $verif_1 = true; 
    }
    if($verif_1==false){
        $information_2 = $information_2.$REQUEST_URI2[$a] ;
    }
    else{
        if($REQUEST_URI2[$a]!="/"){
        $information_1 = $information_1.$REQUEST_URI2[$a] ;

        }
    }
 
}


 
 
 echo '[' ; 
 
        echo '{},';
     
       
 

$servername = "localhost";
$username = "u481158665_ffa";
$password = "v3p9r3e@59A";
$dbname = $username;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = 'SELECT * FROM `info_all_array` WHERE '.$information_1.' ="'.$information_2.'" LIMIT 5;';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
      
      
 
    
    
    
    echo    '{
            
             "get_emplacement":"'.$row["get_emplacement"].'",
             "get_rp_array_2":"'.$row["get_rp_array_2"].'",
             "get_vent_array_2":"'.$row["get_vent_array_2"].'",
             "get_result_users_perf_array_2":"'.$row["get_result_users_perf_array_2"].'",
             "get_result_users_nom_1_array_2":"'.$row["get_result_users_nom_1_array_2"].'",
             
             "get_result_users_nom_2_array_2":"'.$row["get_result_users_nom_2_array_2"].'",
             "get_result_users_nom_4_array_2":"'.$row["get_result_users_nom_4_array_2"].'",
             "get_users_nationality_array_2":"'.$row["get_users_nationality_array_2"].'",
             "get_club_nom_complet_array_2":"'.$row["get_club_nom_complet_array_2"].'",
             "get_club_departement_array_2":"'.$row["get_club_departement_array_2"].'",
             
             "get_club_region_array_2":"'.$row["get_club_region_array_2"].'",
             "get_cat_array_2":"'.$row["get_cat_array_2"].'",
             "get_users_naissance_array_2":"'.$row["get_users_naissance_array_2"].'",
             "get_result_date_perf_array_2":"'.$row["get_result_date_perf_array_2"].'",
             "get_result_villes_nom_array_2":"'.$row["get_result_villes_nom_array_2"].'",
             
             
             "epreuve_sex_array_2":"'.$row["epreuve_sex_array_2"].'",
             "get_users_nom_complet_array":"'.$row["get_users_nom_complet_array"].'",
             "info_all_array_click":"'.$row["info_all_array_click"].'",
             "info_all_array_ip":"'.$row["info_all_array_ip"].'",
             "info_all_array_src_name":"'.$row["info_all_array_src_name"].'",
             
             "window_location_href":"'.$row["window_location_href"].'",
             "get_epreuve_nom_complet":"'.$row["get_epreuve_nom_complet"].'",
             "reg_date":"'.$row["reg_date"].'"
        
    },'; 
   
    
    
    
  }
} else {
    echo    '{"'.$information_1.'":"'.$information_2.'"},'; 
}
$conn->close();

  echo '{}';
 echo ' ]' ; 
 
 
?>