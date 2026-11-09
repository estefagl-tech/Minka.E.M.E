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

    $imagen = "";

    if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] == 0) {

        $imagen = time() . "_" . $_FILES['archivo']['name'];

        move_uploaded_file(
            $_FILES['archivo']['tmp_name'],
            "../imagenes/" . $imagen
        );
    }

    $sql = "INSERT INTO causas
    (
        usuario_id,
        titulo,
        descripcion,
        objetivo,
        tipo,
        direccion,
        fecha,
        url,
        imagen
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
        '$url',
        '$imagen'
    )";

    if ($conn->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error SQL: " . $conn->error;
    }
}

?>