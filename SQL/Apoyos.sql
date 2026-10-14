CREATE TABLE apoyos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    causa_id INT NOT NULL,

    tipo_apoyo VARCHAR(100) NOT NULL,

    monto DECIMAL(10,2),

    metodo VARCHAR(100),

    preferencia ENUM(
        'Email',
        'Teléfono',
        'WhatsApp',
        'Otro'
    ),

    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_apoyos_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id),

    CONSTRAINT fk_apoyos_causa
        FOREIGN KEY (causa_id)
        REFERENCES causas(id)
);