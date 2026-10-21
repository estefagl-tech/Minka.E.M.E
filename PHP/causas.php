<?php
require("conexion.php");
id INT AUTO_INCREMENT PRIMARY KEY,
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $objetivo = $_POST['objetivo'];
    $tipo = $_POST['tipo'];
    $fecha = $_POST['fecha'];
    $direccion = $_POST['direccion'];
    $url = $_POST['url'];
    $acepto = $_POST['acepto'];
}


$sql = "INSERT INTO Causas (usuario_id , titulo, descripcion , objetivo , tipo , direccion , fecha , estado , fecha_publicacion )
        VALUES ('$titulo' , '$descripcion' , '$objetivo' , '$tipo' , '$fecha' , '$direccion' , '$url' , '$acepto' )";

if ($conn->query($sql) === TRUE){
    $mensaje = "Registro guardado correctamente.";
    $clase = "msg";
}else {
    $mensaje = "Error: " , $conn->error;
    $clase = "msg err";
}