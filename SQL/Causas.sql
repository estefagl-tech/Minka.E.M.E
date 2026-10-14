CREATE TABLE causas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT,
    estado ENUM('Activa','Finalizada','Suspendida') DEFAULT 'Activa',
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_causas_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
);
