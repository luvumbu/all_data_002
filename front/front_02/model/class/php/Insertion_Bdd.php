<?php
class Insertion_Bdd {

    public $servername ; 
    public $username ; 
    public $password ; 
    public $dbname ; 

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

  function set_sql($sql){
    $this->sql = $sql ; 
  }
  function set_msg_valudation($msg_valudation){
    $this->msg_valudation = $msg_valudation ; 
  }

  function execution(){
                            // Create connection
                $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
                // Check connection
                if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
                }
  
                $this->sql  ;

                if ($conn->query($this->sql) === TRUE) {
                echo  $this->msg_valudation ; 
                } else {
                echo "Error: " . $this->sql . "<br>" . $conn->error;
                }

                $conn->close();
                }
}



// exemple d'otulisation 


// etape n°1 



// donner le nom de la BDD 
/*

$dbname="root";
$username="root";
$password="root";
$servername="localhost";
*/

//etape n°2 

/*

donner le champ de la bdd la vous souhaité envoyer les donne
vous pouvez envoyer egalement un message dans set messafe

*/
/*

$apple = new Insertion_Bdd(

  $servername,
  $username,
  $password,
  $dbname
  
  );
  
  $apple->set_msg_valudation("Enregistrement ok") ;  
  $apple->set_sql("INSERT INTO showcoords (adresse_ip)     VALUES ('sopreano.168.0.1')") ; 
  $apple->execution() ; 
 
  
*/



?>