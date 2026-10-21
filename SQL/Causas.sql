CREATE TABLE causas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,

    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    objetivo VARCHAR(255) NOT NULL,
    tipo VARCHAR(100) NOT NULL,

    direccion VARCHAR(255),
    fecha DATE,
    url VARCHAR(255),

    estado ENUM('Activa','Finalizada','Suspendida')
    DEFAULT 'Activa',

    fecha_publicacion TIMESTAMP
    DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id)
);