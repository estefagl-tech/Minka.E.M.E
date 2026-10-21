<?php
require("conexion.php");

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
?>