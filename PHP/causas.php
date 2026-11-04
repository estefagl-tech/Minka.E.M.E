<?php

session_start();
require("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $objetivo = $_POST['objetivo'];
    $tipo = $_POST['tipo'];
    $direccion = $_POST['direccion'];
    $fecha = $_POST['fecha'];
    $url = $_POST['url'];

    $usuario_id = $_SESSION['id'] ?? 1;

    $sql = "INSERT INTO causas
    (
        usuario_id,
        titulo,
        descripcion,
        objetivo,
        tipo,
        direccion,
        fecha,
        url
    )
    VALUES
    (
        '$usuario_id',
        '$titulo',
        '$descripcion',
        '$objetivo',
        '$tipo',
        '$direccion',
        '$fecha',
        '$url'
    )";

    if ($conn->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error SQL: " . $conn->error;
    }
}

?>