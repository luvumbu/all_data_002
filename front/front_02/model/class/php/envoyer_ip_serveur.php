<?php
header("Access-Control-Allow-Origin: *");
include("Insertion_Bdd.php") ; 
include("connexion.php") ; 
$envoyer_ip_serveur = $_SERVER['REMOTE_ADDR'] ; 
$apple = new Insertion_Bdd(
$servername,
$username,
$password,
$dbname
);

$apple->set_msg_valudation("!!!!!!!!!!!!!!!!!!!! ok ") ;  
$apple->set_sql('INSERT INTO showCoords (adresse_ip) VALUES ("'.$envoyer_ip_serveur.'")') ; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//$sql = 'SELECT * FROM `showCoords` WHERE `adresse_ip`="80.215.210.193"';
 $sql = 'SELECT * FROM `showCoords` WHERE `adresse_ip`="'.$envoyer_ip_serveur.'"';

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
 
  }
} else {
  $apple->execution() ; 
}
$conn->close();
 
 

 
 
?>