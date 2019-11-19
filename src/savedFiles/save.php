<?php 

$data2 = file_get_contents('php://input');


$file = fopen('configuration.json','w+');
     fwrite($file, $data2);
     fclose($file);

   // print_r($data2);

?>