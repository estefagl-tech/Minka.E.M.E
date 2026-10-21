<?php
require("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $especie = $_POST['especie'];
    $sexo = $_POST['sexo'];
    $descripcion = $_POST['descripcion'];
    $informacion = $_POST['informacion'];
    $disponible = $_POST['disponible'];

    $sql = "INSERT INTO mascotas
            (nombre, edad, especie, sexo, descripcion, informacion, disponible)
            VALUES
            ('$nombre', '$edad', '$especie', '$sexo', '$descripcion', '$informacion', '$disponible')";
