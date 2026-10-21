<?php
require("conexion.php")
id INT AUTO_INCREMENT PRIMARY KEY,
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

$sql = "INSERT INTO Apoyos (usuario_id , causa_id, nombre , documento , telefono , correo , tipo_apoyo , monto , fecha , metodo , preferencia , acepto)
        VALUES ('$nombre' , '$documento' , '$telefono' , '$correo' , '$apoyo' , '$monto' , '$fecha' , '$metodo' , '$preferencia' , '$acepto')";

if ($conn->query($sql) === TRUE){
    $mensaje = "Registro guardado correctamente.";
    $clase = "msg";
}else {
    $mensaje = "Error: " , $conn->error;
    $clase = "msg err";
}