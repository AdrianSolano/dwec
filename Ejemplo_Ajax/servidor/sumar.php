<?php

header('Content-Type: application/json');
sleep(2);


echo json_encode($_POST["numero1"]+$_POST["numero2"]);


?>