<?php


header("Access-Control-Allow-Origin: *");

session_start();

echo 'Bienvenue à la page numéro 1';



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
 
 
echo "NAME AZ".$cars[$_SESSION['start']];
 



 
 


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
    $nom_file = $_SESSION['start'].".php";
$n="\n" ; 
  
 
 
echo "[" ;  


 
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
        
            echo "{".$n;

        foreach ($this->row as $value) {
      //// echo   '"'.$value.'":"'.$row[$value].'",'; 
      echo $texte.' "'.$value.'":"'.$row[$value].'",'.$n; 


      echo $texte.$n;

          }
          //// echo '"":""';
          echo $texte.'"":""'.$n;
       ////  echo '},' ; 
        echo $texte.'},'.$n;
          
      }
    }     
    mysqli_close($conn);

    //// echo  '{ }';
    echo  $texte.'{ }'.$n;


    echo  $texte."]" ;

 
   

    //// echo ']';
   //  $texte = $texte.']'.$n;

$get ="all";

    $f = fopen('../src_info_all_array/src_'.$get.'/get_result_villes_nom_array_2.php' , "a+");
// écriture
fputs($f, $texte );
// fermeture
fclose($f);

  }



}



$apple = new Information(
"localhost",
"u481158665_ffa",
"v3p9r3e@59A",
"u481158665_ffa");
$apple->set_sql('SELECT DISTINCT(`get_result_villes_nom_array_2`) FROM `info_all_array` WHERE 1 ORDER BY `get_result_villes_nom_array_2`') ;

 
$apple->set_row("get_club_region_array_2"); 
 



$apple->execution(); 


 
?>



 