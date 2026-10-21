CREATE TABLE apoyos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    causa_id INT NOT NULL,
    
    -- Datos del colaborador (agregados para que coincidan con el formulario)
    nombre_colaborador VARCHAR(150) NOT NULL,
    documento VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    direccion VARCHAR(200) DEFAULT NULL,

    -- Detalles del apoyo
    tipo_apoyo VARCHAR(100) NOT NULL,
    monto DECIMAL(10,2) DEFAULT NULL,
    fecha_estimada DATE DEFAULT NULL,
    metodo VARCHAR(100) NOT NULL,

    preferencia ENUM(
        'Email',
        'Teléfono',
        'WhatsApp',
        'Otro'
    ) NOT NULL,

    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_apoyos_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,

    CONSTRAINT fk_apoyos_causa
        FOREIGN KEY (causa_id)
        REFERENCES causas(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;