<?php

$num = $_POST["num"];
echo json_encode(preg_match("/[0-9]+/",$num));

?>