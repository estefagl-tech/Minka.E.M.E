<?php
session_start();
require("conexion.php");

if (isset($_POST['registrar'])) {

    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $tipo_documento = $_POST['tipo_documento'];
    $numero_documento = $_POST['numero_documento'];
    $departamento = $_POST['departamento'];
    $municipio = $_POST['municipio'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $password = $_POST['password'];
    $user = $_POST['user'];

    $sql = "INSERT INTO usuarios
    (nombre, apellidos, tipo_documento, numero_documento,
    departamento, municipio, telefono, correo, password, user)
    VALUES
    ('$nombre', '$apellidos', '$tipo_documento', '$numero_documento',
    '$departamento', '$municipio', '$telefono', '$correo',
    '$password', '$user')";

    if(mysqli_query($conexion, $sql)){
        echo "Usuario registrado correctamente";
    } else {
        echo "Error al registrar usuario";
    }
}

if (isset($_POST['login'])) {

    $user = $_POST['user'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios
            WHERE user='$user'
            AND password='$password'";

    $resultado = mysqli_query($conexion, $sql);

    if(mysqli_num_rows($resultado) > 0){

        $datos = mysqli_fetch_assoc($resultado);

        $_SESSION['id'] = $datos['id'];
        $_SESSION['user'] = $datos['user'];
        $_SESSION['nombre'] = $datos['nombre'];

        echo "Bienvenido " . $datos['nombre'];

    } else {
        echo "Usuario o contraseña incorrectos";
    }
}
?>