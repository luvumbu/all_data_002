<?php 
session_start() ; 
header("Access-Control-Allow-Origin: *");

$_SESSION['style_change'] =$_POST["style_change"] ;
echo $_SESSION['style_change'] ; 
?>