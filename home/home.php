<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Minka - Comunidad</title>
    <link rel="stylesheet" href="home.css">
</head>

<body>
    <header>
        <div class="logo">
            <a href="../HTML/datos_personales.html" class="logo-circle">M</a>
            <span class="logo-text">MINKA</span>
        </div>
        <div>
            <nav>
                <span id="usuario" class="usuario"></span>
            </nav>
        </div>
    </header>

    <main>
        <span class="tag">🌿 Red comunitaria activa en Colombia</span>
        <h1>La comunidad que cuida a <span class="highlight">su gente</span> y a sus <span class="highlight">animales</span>.</h1>
        <p>Minka conecta causas vecinales, proyectos sociales, animales en adopción y necesidades de emergencia con personas y empresas que quieren ayudar cerca de casa.</p>

        <div class="buttons">
            <button class="primary">EXPLORAR CAUSAS</button>
            <a href="../HTML/Mi_proyecto.html" class="primary">PUBLICAR MI CAUSA</a>
        </div>

        <section class="stats">
            <div>PERSONAS AYUDADAS</div>
            <div>8 PROYECTOS ACTIVOS</div>
        </section>

        <div class="decor"></div>
    </main>

    <section class="counters">
        <div>0 Personas ayudadas</div>
        <div>8 Proyectos activos</div>
        <div>0 Animales adoptados</div>
        <div>0 Pesos movilizados</div>
    </section>

    <section class="explorar" id="causas">
        <h2>Explorar causas</h2>
        <div class="filters">
            <button class="filter active" data-category="all">Todo</button>
            <button class="filter" data-category="social">Proyectos sociales</button>
            <button class="filter" data-category="vecinal">Causas vecinales</button>
            <button class="filter" data-category="animales">Animales</button>
            <button class="filter" data-category="patrocinio">Patrocinio local</button>
            <button class="filter" data-category="emergencia">Ayuda de emergencia</button>
        </div>

        <div class="cards">
            <?php
            require("../PHP/conexion.php");

            $sql = "SELECT * FROM causas WHERE estado='Activa'";
            $resultado = $conn->query($sql);

            while ($fila = $resultado->fetch_assoc()) {
                // Normalizamos el tipo de causa para que coincida perfectamente con los filtros de la interfaz
                $tipoCausa = strtolower(trim($fila['tipo']));
                $categoriaCausa = 'social'; // Valor por defecto

                if (strpos($tipoCausa, 'social') !== false) {
                    $categoriaCausa = 'social';
                } elseif (strpos($tipoCausa, 'vecinal') !== false) {
                    $categoriaCausa = 'vecinal';
                } elseif (strpos($tipoCausa, 'animal') !== false) {
                    $categoriaCausa = 'animales';
                } elseif (strpos($tipoCausa, 'patrocinio') !== false) {
                    $categoriaCausa = 'patrocinio';
                } elseif (strpos($tipoCausa, 'emergencia') !== false) {
                    $categoriaCausa = 'emergencia';
                }
            ?>

            <div class="card" data-category="<?php echo $categoriaCausa; ?>">
                <?php
                $imagen = $fila['imagen'];

                if (strpos($imagen, 'http') === 0) {
                    $rutaImagen = $imagen;
                } else {
                    $rutaImagen = "../imagenes/" . $imagen;
                }
                ?>

                <img src="<?php echo $rutaImagen; ?>" alt="<?php echo $fila['titulo']; ?>">

                <h3><?php echo $fila['titulo']; ?></h3>

                <p>
                    <?php echo substr($fila['descripcion'], 0, 100); ?>...
                </p>

                <span>0 personas apoyando</span>

                <a href="../HTML/voy_apoyar.html?causa=<?php echo urlencode($fila['titulo']); ?>" class="support">
                    Apoyar
                </a>
            </div>

            <?php
            }
            ?>
        </div>
    </section>

    <section class="adopcion">
        <h2>Adopción responsable</h2>
        <p>Estos animales esperan una segunda oportunidad. Quizás tú eres su hogar.</p>
        <div class="filters">
            <button class="filter active" data-category="all">Todos</button>
            <button class="filter" data-category="perros">Perros</button>
            <button class="filter" data-category="gatos">Gatos</button>
        </div>

        <div class="cards">
            <?php
            $sqlMascotas = "SELECT * FROM mascotas WHERE disponible = 1";
            $resultadoMascotas = $conn->query($sqlMascotas);

            while ($mascota = $resultadoMascotas->fetch_assoc()) {
                if (strtolower($mascota['especie']) == 'perro') {
                    $categoria = 'perros';
                } else {
                    $categoria = 'gatos';
                }
            ?>

            <div class="card" data-category="<?php echo $categoria; ?>">
                <?php
                $foto = $mascota['foto'];

                if (strpos($foto, 'http') === 0) {
                    $rutaFoto = $foto;
                } else {
                    $rutaFoto = "../imagenes/" . $foto;
                }
                ?>

                <img src="<?php echo $rutaFoto; ?>" alt="<?php echo $mascota['nombre']; ?>">

                <h3><?php echo $mascota['nombre']; ?></h3>

                <p>Edad: <?php echo $mascota['edad']; ?></p>

                <p><?php echo $mascota['descripcion']; ?></p>

                <a href="../HTML/detalle_mascotas.php?id=<?php echo $mascota['id']; ?>" class="support">
                    Ver más
                </a>
            </div>

            <?php
            }
            ?>
        </div>

        <div class="ofrecer">
            <a href="../HTML/Mascota_para_adoptar.html" class="primary">
                Ofrecer mascota para adopción
            </a>
        </div>
    </section>

    <section class="funciona">
        <h2 style="text-align: center;">¿Cómo funciona Minka?</h2>
        <p style="text-align: center;">Minka viene del quechua: trabajo colaborativo por el bien común. Así funciona nuestra plataforma.</p>
        <div class="steps">
            <div class="step">
                <h3>01</h3>
                <p>Publicás tu causa. Cuentas qué necesitás: recursos económicos, materiales, voluntarios o patrocinio empresarial. Verificamos tu causa en 48hs.</p>
            </div>
            <div class="step">
                <h3>02</h3>
                <p>La comunidad lo ve. Tu causa llega a personas y empresas de tu barrio o ciudad que quieren ayudar. Filtramos por proximidad y tipo de ayuda.</p>
            </div>
            <div class="step">
                <h3>03</h3>
                <p>Se conectan y actúan. El apoyo llega directo a tu causa. Rendís cuentas con actualizaciones y la comunidad ve el impacto real.</p>
            </div>
        </div>
    </section>

    <section class="empresas">
        <div class="empresas-dark">
            <h2>Para empresas y comercios</h2>
            <h3 class="h3_inverti">Invertí en tu comunidad.</h3>
            <h3 class="h3_barrio">Y que lo sepa el barrio.</h3>
            <p>Las empresas que patrocinan causas en Minka ganan visibilidad local real, mejoran su reputación y contribuyen al tejido social.</p>
            <ul>
                <li>Visibilidad en tu barrio</li>
                <li>Certificado de impacto social</li>
                <li>Presencia en eventos comunitarios</li>
                <li>Reportes de alcance real</li>
            </ul>
        </div>
        <div class="empresas-purple">
            <h3>Tu barrio te necesita.</h3>
            <p>Publicá tu causa, sumate como voluntario, adoptá un animal o apadriná un proyecto. Cada acción importa.</p>
            <a href="#causas" class="secondary">Ver causas activas</a>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <h2>MINKA</h2>
            <p>Red comunitaria • Colombia</p>
            <nav>
                <a href="#">Sobre Minka</a> |
                <a href="#">Términos</a> |
                <a href="#">Privacidad</a> |
                <a href="#">Contacto</a>
            </nav>
            <p>© 2026 Minka - Hecho con ❤️ para la comunidad</p>
        </div>
    </footer>

    <script src="home.js"></script>
</body>

</html>