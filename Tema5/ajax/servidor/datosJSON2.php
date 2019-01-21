<?php

sleep(2);

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$listaLibros = array();

$libro1 = [
    "titulo" => "La wea 1",
    "autor"  => [
        "nombre" = "Adrian",
        "apellidp" = "SF"
    ],
    "fecha"  => "2055",
    "genero" => "Sencia"
];

$libro2 = [
    "titulo" => "La wea 2: la vuelta",
    "autor"  => [
        "nombre" = "Adrian",
        "apellidp" = "SF"
    ],
    "fecha"  => "2056",
    "genero" => "Sencia"
];
$libro3 = [
    "titulo" => "La wea 3: scp",
    "autor"  => [
        "nombre" = "Adrian",
        "apellidp" = "SF"
    ],
    "fecha"  => "2057",
    "genero" => "Sencia"
];
$libro4 = [
    "titulo" => "La wea 4: revoltoso",
    "autor"  => [
        "nombre" = "Adrian",
        "apellidp" = "SF"
    ],
    "fecha"  => "2090",
    "genero" => "Sencia"
];
$libro5 = [
    "titulo" => "La wea 5: y voló",
    "autor"  => [
        "nombre" = "Adrian",
        "apellidp" = "SF"
    ],
    "fecha"  => "2099",
    "genero" => "Sencia"
];

$listaLibros[] = $libro1;
$listaLibros[] = $libro2;
$listaLibros[] = $libro3;
$listaLibros[] = $libro4;
$listaLibros[] = $libro5;

echo json_encode($listaLibros);