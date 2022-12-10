<script>
  //let lettre = prompt("Please enter your name");

    var a="https://bokonzi.com/my_doc/index2.php/";
    var b='SELECT * FROM `info_all_array` WHERE 1 LIMIT 75000,25000';
     var src_ =a+b;
     src_= src_.replace("%", "!");
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
     console.log(myObj) ; 

     tab_test = myObj ; 
   

   
  }
};
xmlhttp.open("GET", src_, true);
xmlhttp.send();

 

</script>