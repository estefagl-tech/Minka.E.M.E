<?php
require("conexion.php");
id INT AUTO_INCREMENT PRIMARY KEY,
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $especie = $_POST['especie'];
    $sexo = $_POST['sexo'];
    $descripcion = $_POST['descripcion'];
    $informacion = $_POST['informacion'];
    $disponible = $_POST['disponible'];

    $sql = "INSERT INTO mascotas
            (nombre, edad, especie, sexo, descripcion, foto, informacion, disponible,fecha_registro)
            VALUES
            ('$nombre', '$edad', '$especie', '$sexo', '$descripcion', '$informacion', '$disponible')";

if ($conn->query($sql) === TRUE){
    $mensaje = "Registro guardado correctamente.";
    $clase = "msg";
}else {
    $mensaje = "Error: " , $conn->error;
    $clase = "msg err";
}
