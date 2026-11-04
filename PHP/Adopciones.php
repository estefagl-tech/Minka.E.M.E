<?php

session_start();
require("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'] ?? '';
    $documento = $_POST['documento'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $direccion = $_POST['direccion'] ?? '';
    $acepto = $_POST['acepto'] ?? 0;

    $mascota = $_POST['mascota'] ?? '';

    $usuario_id = $_SESSION['id'] ?? 1;

    $sqlMascota = "SELECT id FROM mascotas WHERE nombre = '$mascota'";
    $resultadoMascota = $conn->query($sqlMascota);

    if ($resultadoMascota->num_rows > 0) {

        $filaMascota = $resultadoMascota->fetch_assoc();
        $mascota_id = $filaMascota['id'];

        $sql = "INSERT INTO adopciones
        (
            usuario_id,
            mascota_id,
            nombre_solicitante,
            documento,
            telefono,
            correo,
            direccion,
            acepto
        )
        VALUES
        (
            '$usuario_id',
            '$mascota_id',
            '$nombre',
            '$documento',
            '$telefono',
            '$correo',
            '$direccion',
            '$acepto'
        )";

        if ($conn->query($sql) === TRUE) {

            echo "OK";

        } else {

            echo "Error SQL: " . $conn->error;

        }

    } else {

        echo "Mascota no encontrada";

    }

} else {

    echo "Método no permitido";

}

$conn->close();

?>