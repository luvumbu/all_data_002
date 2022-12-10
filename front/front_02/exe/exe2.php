<?php
 

 session_start(); 

if(isset($_SESSION['nombre_plus'])){

  $_SESSION['nombre_plus'] ++;
  echo $_SESSION['nombre_plus'] ;

  $nombre_plus = $_SESSION['nombre_plus']  ; 
  ?>
<head>
<meta http-equiv="refresh" content="0;URL=">

</head>
  <?php 
}
else {
  $_SESSION['nombre_plus'] = 0 ; 
  $nombre_plus = $_SESSION['nombre_plus'] ;

  ?>
<head>
<meta http-equiv="refresh" content="0;URL=">

</head>
  <?php 
}




$servername = "localhost";
$username = "u489596434_ffa";
$password = "v3p9r3e@59A";
$dbname = $username;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


/*
get_cat_array_2
get_club_departement_array_2
get_club_nom_complet_array_2


get_result_date_perf_array_2






*/
$execution_ = "get_result_users_nom_1_array_2"; 
/*
get_epreuve_nom_complet
get_result_villes_nom_array_2
get_users_naissance_array_2

get_users_nationality_array_2
get_result_users_nom_1_array_2
get_result_users_nom_2_array_2
get_result_users_nom_3_array_2
get_result_users_nom_4_array_2
epreuve_sex_array_2
get_users_nom_complet_array




*/
 

 
$sql = 'SELECT * FROM '.$execution_.' WHERE 1  LIMIT '.$nombre_plus.',1';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {


          $info= $row[$execution_] ;
         $id_info = $row["id_".$execution_] ;
    
    echo $info.'<br/>' ;
    echo $id_info.'<br/>' ; 
 




 
    
    
    
 // Create connection
$conn_2 = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn_2->connect_error) {
  die("Connection failed: " . $conn_2->connect_error);
}

$sql_2 = 'UPDATE info_all_array SET id_'.$execution_.'="'.$id_info.'" WHERE '.$execution_.'="'.$info.'"';

if ($conn_2->query($sql_2) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn_2->error;
}

$conn_2->close();
 
    
 
    
    
    
    
    
    
    
    
    
    
 

  }
} else {
  echo "0 results";
}
$conn->close();

 


 

?>