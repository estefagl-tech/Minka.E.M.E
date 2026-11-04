<?php

require("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombreMascota'];
    $edad = $_POST['edadMascota'];
    $especie = $_POST['especie'];
    $sexo = $_POST['sexo'];
    $descripcion = $_POST['descripcion'];
    $informacion = $_POST['informacion'];

    $disponible = 1;

    $foto = $_FILES['fotoMascota']['name'];
    $rutaTemporal = $_FILES['fotoMascota']['tmp_name'];

    $carpetaDestino = "../imagenes/";

    move_uploaded_file(
        $rutaTemporal,
        $carpetaDestino . $foto
    );

    $sql = "INSERT INTO mascotas
    (
        nombre,
        edad,
        especie,
        sexo,
        descripcion,
        foto,
        informacion,
        disponible
    )
    VALUES
    (
        '$nombre',
        '$edad',
        '$especie',
        '$sexo',
        '$descripcion',
        '$foto',
        '$informacion',
        '$disponible'
    )";

    if ($conn->query($sql) === TRUE) {

        echo "OK";

    } else {

        echo "Error SQL: " . $conn->error;

    }

}

$conn->close();

?>