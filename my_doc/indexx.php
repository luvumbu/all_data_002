<?php 
  
header("Access-Control-Allow-Origin: *");
session_start();

  
        $debut="/";
        $fin="/" ; 
        $nom_du_dossier_courant = "all_data/my_doc";
        $nom_du_dossier_courant=  $debut.$nom_du_dossier_courant.$fin ; 
        $REQUEST_URI= str_replace($nom_du_dossier_courant.basename(__FILE__)."/","",$_SERVER['REQUEST_URI']);
     
        
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
       
       /*
       echo "<br/>";
       echo "recherche 1 ".$recherche_1 ; 
       echo "<br/>";
       echo "recherche 2 ".$recherche_2 ; 
       */
       
       
       $recherche_1 = str_replace("%20"," ",$recherche_1);
       $recherche_1 = str_replace("%22",'"',$recherche_1);
       $recherche_1 = str_replace("%7C",'|',$recherche_1);
       
       $recherche_2 = str_replace("%20"," ",$recherche_2);
       $recherche_2 = str_replace("%22",'"',$recherche_2);
       $recherche_2 = str_replace("%7C",'|',$recherche_2);
       
       
       
       
       
       
       $recherche_1 = str_replace("%60","`",$recherche_1);
       $recherche_2 = str_replace("%60","`",$recherche_2);
       
      
 
  
       // exemple de data 

       /**
        * $recherche_1 =SELECT * FROM `info_all_array` WHERE 1 LIMIT 100
        */
      //echo  $recherche_1 ;
      
 
       
     echo "[";  
       
       
 echo "{},";




//echo str_replace("world","Peter","Hello world!"); 
//echo "<br/>" ; 
//echo  $_SERVER['REQUEST_URI'] ; 
//echo "<br/>" ; 
$cars = array(
    "a",
    "b",
    "c",
    "d",
    "e",
    "g",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "w",
    "x",
    "y",
    "z",
);
 


 



 
 
 


  $name =$cars[$_SESSION['start']] ;  
 
 
// création du fichier



class Information {
 
  public $servername ; 
  public $username ; 
  public $password ; 
  public $dbname ; 
  public $sql ; 

  public $row =array();

  function __construct(
  $servername,
  $username,
  $password,
  $dbname
  ) {
    $this->servername = $servername;
    $this->username = $username;
    $this->password = $password;
    $this->dbname = $dbname;
  }
  function get_servername() {
    return $this->servername;
  }
  function get_username() {
    return $this->username;
  }
  function get_password() {
    return $this->password;
  }
  function get_dbname() {
    return $this->dbname;
  }

  function get_sql() {
    return $this->sql;
  }
  function get_row($number) {
    return $this->row[$number];
  }


  function set_servername($servername) {
    $this->servername = $servername ; 
  }
  function set_username($username) {
    $this->username = $username ; 
  }
  function set_password($password) {
    $this->password = $password ; 
  }
  function set_dbname($dbname) {
    $this->dbname = $dbname ; 
  }
  function set_sql($sql) {
    $this->sql=  $sql;
  }
  function set_row($row){
    array_push($this->row,$row);
  }

  function execution(){
    $nom_file = $cars[$_SESSION['start']].".php";
$n="\n" ; 
  
$texte ="<?php"; 
$texte = $texte;
$texte = $texte.'header("Access-Control-Allow-Origin: *");';
$texte = $texte."?>";

 
 


 
   //// echo '[' ; 
    // Create connection
    $conn = mysqli_connect($this->servername, $this->username, $this->password, $this->dbname);
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    
    $sql = $this->sql;
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {

       ////  echo '{' ;
      echo "{" ; 

        foreach ($this->row as $value) {
      //// echo   '"'.$value.'":"'.$row[$value].'",'; 
 


     echo '"'.$value.'":"'.$row[$value].'",';
 
    
          }
      
          //// echo '"":""';
         // $texte = $texte.'"":""'.$n;
       ////  echo '},' ; 
       // $texte = $texte.'},'.$n;

       echo '"":""},' ; 
          
      }

      //echo  '}' ; 
    }     
    mysqli_close($conn);

    //// echo  '{ }';
    
    


   

 
   

    //// echo ']';
   //  $texte = $texte.']'.$n;

$get ="all";

 //   $f = fopen('../src_info_all_array/src_'.$get.'/get_result_villes_nom_array_2.php' , "a+");
// écriture
//fputs($f, $texte );
// fermeture
//fclose($f);

  }



}



$apple = new Information(
"localhost",
"u489596434_ffa",
"v3p9r3e@59A",
"u489596434_ffa");
$apple->set_sql($recherche_2) ;

 /*
$apple->set_row("id_info_all_array"); 
$apple->set_row("get_emplacement"); 
$apple->set_row("get_rp_array_2"); 
$apple->set_row("get_vent_array_2"); 
$apple->set_row("get_result_users_perf_array_2"); 
*/
$apple->set_row("get_result_users_nom_1_array_2"); 
/*
$apple->set_row("get_result_users_nom_2_array_2"); 
$apple->set_row("get_result_users_nom_3_array_2"); 
$apple->set_row("get_result_users_nom_4_array_2"); 
$apple->set_row("get_users_nationality_array_2"); 
$apple->set_row("get_club_nom_complet_array_2"); 
$apple->set_row("get_club_departement_array_2"); 

$apple->set_row("get_club_region_array_2"); 
$apple->set_row("get_cat_array_2"); 
$apple->set_row("get_users_naissance_array_2"); 
$apple->set_row("get_result_date_perf_array_2"); 
$apple->set_row("get_result_villes_nom_array_2"); 
$apple->set_row("epreuve_sex_array_2"); 

$apple->set_row("get_users_nom_complet_array"); 
$apple->set_row("info_all_array_src_name"); 
$apple->set_row("window_location_href"); 
$apple->set_row("get_epreuve_nom_complet"); 
*/

 
 


$apple->execution(); 

echo '{ }' ;
echo ']' ;

 
?>



  