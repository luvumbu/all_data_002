<?php
header("Access-Control-Allow-Origin: *");
include("Insertion_Bdd.php") ; 
include("connexion.php") ; 

$apple = new Insertion_Bdd(
$servername,
$username,
$password,
$dbname

);

$apple->set_msg_valudation("Enregistrement ok") ;  
$apple->set_sql("INSERT INTO showcoords (adresse_ip)     VALUES ('sopreano.168.0.1')") ; 
$apple->execution() ; 
?>