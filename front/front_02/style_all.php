<?php
// paramettre de changement style en fonction du cookie
session_start() ; 
if(isset($_SESSION['style_change'])){
          
    //  $_SESSION['style_1_html']
 
 
    $style_1_1= "#565f8b";
    $style_1_2= "#c8ceef";
    $style_1_3= "#ffffff";

    $style_2_1=  "#8b6856";
    $style_2_2= "#bb9684"; 
    $style_2_3= "#ffffff";

    $style_3_1= "#568b60";
    $style_3_2= "#90ae96";
    $style_3_3= "#ffffff";

    $style_4_1= "#8b565b";
    $style_4_2= "#cda7ab";
    $style_4_3= "#ffffff";

    $style_5_1= "#788b56";
    $style_5_2= "#deeec2";
    $style_5_3= "#ffffff";



    if(isset($_SESSION['style_change_value'])){
        $style_6_1= $_SESSION['style_change_value'];

    }
    else{
        $style_6_1= "#788b56";

    }
    $style_6_2= "#".rand(5, 9).rand(5, 9).rand(5, 9).rand(5, 9).rand(5, 9).rand(5, 9);
    $style_6_3= "red";


switch ($_SESSION['style_change']) {
  case "1":
?>
<style>
    :root {
  --style_1_1: <?php echo $style_1_1 ?>;
  --style_1_2: <?php echo $style_1_2 ?>;
  --style_1_3: <?php echo $style_1_3 ?>;
}
</style>

<?php 
    break;
    case "2":
    ?>
 <style>
    :root {
  --style_1_1: <?php echo $style_2_1 ?>;
  --style_1_2: <?php echo $style_2_2 ?>;
  --style_1_3: <?php echo $style_2_3 ?>;
}
</style>

    <?php 
        break;
        case "3":
        ?>
  <style>
    :root {
  --style_1_1: <?php echo $style_3_1 ?>;
  --style_1_2: <?php echo $style_3_2 ?>;
  --style_1_3: <?php echo $style_3_3 ?>;
}
</style>

        <?php 
            break;
            case "4":
            ?>
                    <style>
                        :root {
                    --style_1_1: <?php echo $style_4_1 ?>;
                    --style_1_2: <?php echo $style_4_2 ?>;
                    --style_1_3: <?php echo $style_4_3 ?>;
                    }
                    </style>

            <?php 
                break;
                case "5":
                ?>
                    <style>
                        :root {
                    --style_1_1: <?php echo $style_5_1 ?>;
                    --style_1_2: <?php echo $style_5_2 ?>;
                    --style_1_3: <?php echo $style_5_3 ?>;
                    }
                    </style>


                <?php 
                    break;
                    case "6":
                        ?>
                            <style>
                                :root {
                            --style_1_1: <?php echo $style_6_1 ?>;
                            --style_1_2: <?php echo $style_6_2 ?>;
                            --style_1_3: <?php echo $style_6_3 ?>;
                            }
                            </style>
        
        
                        <?php 
                            break;
         
 
}

    
       
}
else {
 echo  $_SESSION['style_change']  ; 
  

  ?>
 
 

<?php 
  
}
?>


<link rel="stylesheet" href="style_1.css">
