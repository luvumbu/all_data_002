<?php 
session_start() ; 

// Prend en colpte le changement avec le cookie que l'utilisateur a demande avec le form couleur
header("Access-Control-Allow-Origin: *");

$_SESSION['style_change'] =$_POST["style_change"] ;
$_SESSION['style_change_value'] =$_POST["style_change_value"] ;
echo $_SESSION['style_change'] ; 
echo $_SESSION['style_change_value']  ; 
 

?>