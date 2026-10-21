CREATE TABLE adopciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    mascota_id INT NOT NULL,
    nombre_solicitante VARCHAR(150) NOT NULL,
    documento VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    direccion VARCHAR(200) DEFAULT NULL, -- Ajustado a NULL por si no es obligatoria en el HTML

    estado ENUM(
        'Pendiente',
        'Aprobada',
        'Rechazada'
    ) DEFAULT 'Pendiente',

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_adopciones_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,

    CONSTRAINT fk_adopciones_mascota
        FOREIGN KEY (mascota_id)
        REFERENCES mascotas(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;