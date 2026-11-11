<?php
require("../PHP/conexion.php");

$id = $_GET['id'] ?? 0;
$sql = "SELECT * FROM mascotas WHERE id = '$id'";
$resultado = $conn->query($sql);
$mascota = $resultado->fetch_assoc();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalle Mascota</title>

    <link rel="stylesheet" href="../CSS/detalle.css">
</head>

<body>

    <header>
        <div class="logo">
            <a href="../home/home.php" class="logo-circle">M</a>
            <span class="logo-text">MINKA</span>
        </div>
    </header>

    <main>
        <section class="detalle-mascota">
            <div class="card">
                <?php
                $foto = $mascota['foto'];

                if (strpos($foto, 'http') === 0) {
                    $rutaFoto = $foto;
                } else {
                    $rutaFoto = "../imagenes/" . $foto;
                }
                ?>

                <img src="<?php echo $rutaFoto; ?>" alt="<?php echo $mascota['nombre']; ?>">

                <h2><?php echo $mascota['nombre']; ?></h2>

                <p>
                    <strong>Edad:</strong>
                    <?php echo $mascota['edad']; ?>
                </p>

                <p>
                    <strong>Especie:</strong>
                    <?php echo $mascota['especie']; ?>
                </p>

                <p>
                    <strong>Sexo:</strong>
                    <?php echo $mascota['sexo']; ?>
                </p>

                <p>
                    <strong>Descripción:</strong>
                    <?php echo $mascota['descripcion']; ?>
                </p>

                <p>
                    <strong>Información adicional:</strong>
                    <?php echo $mascota['informacion']; ?>
                </p>

                <div class="acciones">
                    <a href="../HTML/Adopcion.html?id=<?php echo $mascota['id']; ?>" class="support">
                        Quiero adoptar
                    </a>

                    <a href="../home/home.php#adopcion" class="secondary">
                        Volver
                    </a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <h2>MINKA</h2>
            <p>Red comunitaria • Colombia</p>
            <p>© 2026 Minka - Hecho con ❤️ para la comunidad</p>
        </div>
    </footer>

</body>

</html>