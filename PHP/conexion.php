<?php
$servername = "localhost"; //servidor
$username = "root";  //usuario de MYSQL
$password = "";   //contraseña
$dbname  = "minka";  //nombre de la bases de datos

// crear conexion
$conn = new mysqli($servername, $username, $dbname);

// verificar conexion
if ($conn->connect_error) {
    die("conexion faliida: " . $conn->connect_error);
}
?>