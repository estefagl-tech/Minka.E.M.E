<?php
session_start();
require("conexion.php");

if (isset($_POST['registrar'])) {

    $nombre = $_POST['nombre'] ?? '';
    $apellidos = $_POST['apellidos'] ?? '';
    $tipo_documento = $_POST['tipo_documento'] ?? '';
    $numero_documento = $_POST['numero_documento'] ?? '';
    $departamento = $_POST['departamento'] ?? '';
    $municipio = $_POST['municipio'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $password = $_POST['password'] ?? '';
    $user = $_POST['user'] ?? '';

    $sql = "INSERT INTO usuarios 
            (
                nombre, 
                apellidos, 
                tipo_documento, 
                numero_documento, 
                departamento, 
                municipio, 
                telefono, 
                correo, 
                password, 
                user
            ) 
            VALUES 
            (
                '$nombre', 
                '$apellidos', 
                '$tipo_documento', 
                '$numero_documento', 
                '$departamento', 
                '$municipio', 
                '$telefono', 
                '$correo', 
                '$password', 
                '$user'
            )";

    if ($conn->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error al registrar: " . $conn->error;
    }
}

if (isset($_POST['login'])) {

    $user = $_POST['user'] ?? '';
    $password = $_POST['password'] ?? '';

    $sql = "SELECT * FROM usuarios 
            WHERE user = '$user' 
            AND password = '$password'";

    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        $datos = $resultado->fetch_assoc();

        $_SESSION['id'] = $datos['id'];
        $_SESSION['user'] = $datos['user'];
        $_SESSION['nombre'] = $datos['nombre'];

        echo "OK";
    } else {
        echo "Usuario o contraseña incorrectos";
    }
}

$conn->close();
?>