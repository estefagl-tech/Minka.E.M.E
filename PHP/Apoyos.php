<?php

session_start();
require("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'];
    $documento = $_POST['documento'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $direccion = $_POST['direccion'];
    $apoyo = $_POST['apoyo'];
    $monto = $_POST['monto'];
    $fecha = $_POST['fecha'];
    $metodo = $_POST['metodo'];
    $preferencia = $_POST['preferencia'];

    $usuario_id = $_SESSION['id'] ?? 1;

$causa = $_POST['causa'] ?? '';

$sqlCausa = "SELECT id FROM causas WHERE titulo='$causa'";
$resultadoCausa = $conn->query($sqlCausa);

if ($resultadoCausa->num_rows > 0) {

    $filaCausa = $resultadoCausa->fetch_assoc();
    $causa_id = $filaCausa['id'];

} else {

    die("Causa no encontrada");

}

    $sql = "INSERT INTO apoyos
    (
        usuario_id,
        causa_id,
        nombre_colaborador,
        documento,
        telefono,
        correo,
        direccion,
        tipo_apoyo,
        monto,
        fecha_estimada,
        metodo,
        preferencia
    )
    VALUES
    (
        '$usuario_id',
        '$causa_id',
        '$nombre',
        '$documento',
        '$telefono',
        '$correo',
        '$direccion',
        '$apoyo',
        '$monto',
        '$fecha',
        '$metodo',
        '$preferencia'
    )";

    if ($conn->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error SQL: " . $conn->error;
    }
}

?>