<!DOCTYPE html>
<html>
<body>
<!-- PAge dexemple pour la recuperation --> 
<h2>Use the XMLHttpRequest to get the content of a file.</h2>
<p>The content is written in JSON format, and can easily be converted into a JavaScript object.</p>

<p id="demo"></p>

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
  console.log(myObj) ; 
  }
};
xmlhttp.open("GET", "https://bokonzi.com/all_data/my_doc/index.php/SELECT DISTINCT `get_result_users_nom_1_array_2`,`get_result_users_nom_2_array_2`,`get_result_users_nom_3_array_2`,`get_result_users_nom_4_array_2` FROM `info_all_array` WHERE 1 ORDER BY `get_result_users_nom_1_array_2`;", true);
xmlhttp.send();
</script>

<p>Take a look at <a href="../js/json.json" target="_blank">json.json</a></p>

</body>
</html>
