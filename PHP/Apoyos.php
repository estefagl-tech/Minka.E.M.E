<?php
require("conexion.php")

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST['nombre'];
    $documento = $_POST['documento'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $apoyo = $_POST['apoyo'];
    $monto = $_POST['monto'];
    $fecha = $_POST['fecha'];
    $metodo = $_POST['metodo'];
    $preferencia = $_POST['preferencia'];
    $acepto = $_POST['acepto'];
}

$sql = "INSERT INTO Apoyos (nombre , documento , telefono , correo , apoyo , monto , fecha , metodo , preferencia , acepto)
        VALUES ('$nombre' , '$documento' , '$telefono' , '$correo' , '$apoyo' , '$monto' , '$fecha' , '$metodo' , '$preferencia' , '$acepto')";