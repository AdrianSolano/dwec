<?php

// function validarNumero($num){
//    return preg_match("/[0-9]+/",$num);
// }

sleep(2);

$errores = [];
if (isset($_POST["num1"]) ){
    if(preg_match("/[0-9]+/",$num)){
        $errores["num1"]["numerico"] = "Error esto no es un numero";
    }
}
if (isset($_POST["num2"]) ){
    if(preg_match("/[0-9]+/",$num)){
        $errores["num2"]["numerico"] = "Error esto no es un numero";
    }
}

echo json_encode($errores);

?>