<?php
require("conexion.php")
id INT AUTO_INCREMENT PRIMARY KEY,
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST['nombre'];
    $documento = $_POST['documento'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $acepto = $_POST['acepto'];
}

$sql = "INSERT INTO Adopciones (usuario_id , mascota_id ,nombre_solicitante , documento , telefono , correo , acepto , direccion)
        VALUES ('$nombre' , '$documento' , '$telefono' , '$correo' , '$acepto')";

if ($conn->query($sql) === TRUE){
    $mensaje = "Registro guardado correctamente.";
    $clase = "msg";
}else {
    $mensaje = "Error: " , $conn->error;
    $clase = "msg err";
}